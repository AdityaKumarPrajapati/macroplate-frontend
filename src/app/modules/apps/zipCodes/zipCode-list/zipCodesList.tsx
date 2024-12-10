// import {ListViewProvider, useListView} from './core/ListViewProvider'
import { QueryRequestProvider } from '../../user-management/users-list/core/QueryRequestProvider'
import {QueryResponseProvider} from './core/QueryResponseProvider'
// import {UsersListHeader} from './components/header/UsersListHeader'
// import {UsersTable} from './table/UsersTable'
// import {UserEditModal} from './user-edit-modal/UserEditModal'
import {KTCard} from '../../../../../_metronic/helpers'
import { ZipCodeListHeader } from './components/header/ZipCodeListHeader'
import { ZipCodeListTable } from './table/ZipCodeListTable'

const ZipCodeList = () => {
//   const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <ZipCodeListHeader />
        <ZipCodeListTable />
      </KTCard>
      {/* {itemIdForUpdate !== undefined && <UserEditModal />} */}
    </>
  )
}

const ZipCodeListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      {/* <ListViewProvider> */}
        <ZipCodeList />
      {/* </ListViewProvider> */}
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export {ZipCodeListWrapper}
