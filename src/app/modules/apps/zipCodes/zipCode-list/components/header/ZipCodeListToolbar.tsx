import {KTIcon} from '../../../../../../../_metronic/helpers'
import { ZipCodeListFilter } from './ZipCodeListFilter'
// import {useListView} from '../../core/ListViewProvider'
// import {UsersListFilter} from './UsersListFilter'

const ZipCodeListToolbar = () => {
//   const {setItemIdForUpdate} = useListView()
//   const openAddUserModal = () => {
//     setItemIdForUpdate(null)
//   }

  return (
    <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
      {/* <UsersListFilter /> */}
      <ZipCodeListFilter />
    </div>
  )
}

export {ZipCodeListToolbar}
