import { Route, Routes, Outlet, Navigate } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../../_metronic/layout/core'
import { ActitivityPanelListWrapper } from './activity-panel-list/ActivityPanelList'

const activityPanelBreadcrumbs: Array<PageLink> = [
    {
        title: 'Activity Panel',
        path: '/apps/activity-panel/activityList',
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

const ActivityPanelPage = () => {
    return (
        <Routes>
            <Route element={<Outlet />}>
                <Route
                    path='activityList'
                    element={
                        <>
                            <PageTitle breadcrumbs={activityPanelBreadcrumbs}>Activity list</PageTitle>
                            <ActitivityPanelListWrapper />
                        </>
                    }
                />
            </Route>
            <Route index element={<Navigate to='/apps/activity-panel/activityList' />} />
        </Routes>
    )
}

export default ActivityPanelPage
