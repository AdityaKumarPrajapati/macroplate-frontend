import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../../_metronic/layout/core'
import { ZipCodeListWrapper } from './zipCode-list/zipCodesList'
// import { ActitivityPanelListWrapper } from './activity-panel-list/ActivityPanelList'

const zipCodePanelPanelBreadcrumbs: Array<PageLink> = [
    {
        title: 'ZipCode Panel',
        path: '/apps/zipCode/zipCodeList',
        isSeparator: false,
        isActive: false,
    },
    {
        title: '',
        path: '',
        isSeparator: true,
        isActive: false,
    },
]

const ZipCodePanelPanelPage = () => {
    return (
        <Routes>
            <Route element={<Outlet />}>
                <Route
                    path='zipCodeList'
                    element={
                        <>
                            <PageTitle breadcrumbs={zipCodePanelPanelBreadcrumbs}>Zipcodes</PageTitle>
                            <ZipCodeListWrapper />
                            {/* <div>Hello</div> */}
                        </>
                    }
                />
            </Route>
            <Route index element={<Navigate to='/apps/zipCode/zipCodeList' />} />
        </Routes>
    )
}

export default ZipCodePanelPanelPage
