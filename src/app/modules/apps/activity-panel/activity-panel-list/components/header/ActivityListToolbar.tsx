import {KTIcon} from '../../../../../../../_metronic/helpers'
import { ActivityListFilter } from './ActivityListFilter'
// import {useListView} from '../../core/ListViewProvider'
// import {UsersListFilter} from './UsersListFilter'

const ActivityListToolbar = () => {
//   const {setItemIdForUpdate} = useListView()
//   const openAddUserModal = () => {
//     setItemIdForUpdate(null)
//   }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      {/* <UsersListFilter /> */}
      <ActivityListFilter />
    </div>
  )
}

export {ActivityListToolbar}
