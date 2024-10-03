// import {ListViewProvider, useListView} from './core/ListViewProvider'
import { QueryRequestProvider } from '../../user-management/users-list/core/QueryRequestProvider'
import { QueryResponseProvider } from './core/QueryResponseProvider'
// import {UsersListHeader} from './components/header/UsersListHeader'
// import {UsersTable} from './table/UsersTable'
// import {UserEditModal} from './user-edit-modal/UserEditModal'
import { KTCard } from '../../../../../_metronic/helpers'
import { ActivityListHeader } from './components/header/ActivityListHeader'
import { ActivityListTable } from './table/ActivityListTable'

const ActivityPanelList = () => {
  //   const {itemIdForUpdate} = useListView()
  return (
    <>
      <KTCard>
        <ActivityListHeader />
        <ActivityListTable />
      </KTCard>
      {/* {itemIdForUpdate !== undefined && <UserEditModal />} */}
    </>
  )
}

const ActitivityPanelListWrapper = () => (
  <QueryRequestProvider>
    <QueryResponseProvider>
      {/* <ListViewProvider> */}
      <ActivityPanelList />
      {/* </ListViewProvider> */}
    </QueryResponseProvider>
  </QueryRequestProvider>
)

export { ActitivityPanelListWrapper }
