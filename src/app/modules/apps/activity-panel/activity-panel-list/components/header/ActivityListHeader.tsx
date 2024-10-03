// import {useListView} from '../../core/ListViewProvider'
// import {UsersListToolbar} from './UserListToolbar'
// import {UsersListGrouping} from './UsersListGrouping'
import { UsersListSearchComponent } from "../../../../user-management/users-list/components/header/UsersListSearchComponent"
import { ActivityListToolbar } from "./ActivityListToolbar"

const ActivityListHeader = () => {
//   const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <UsersListSearchComponent placeholder='Search Activity' />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {/* {selected.length > 0 ? <UsersListGrouping /> : <UsersListToolbar />} */}
        <ActivityListToolbar />
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {ActivityListHeader}
