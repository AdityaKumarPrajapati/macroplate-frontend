// import {useListView} from '../../core/ListViewProvider'
// import {UsersListToolbar} from './UserListToolbar'
// import {UsersListGrouping} from './UsersListGrouping'
import { UsersListSearchComponent } from "../../../../user-management/users-list/components/header/UsersListSearchComponent"
import { ZipCodeListToolbar } from "./ZipCodeListToolbar"

const ZipCodeListHeader = () => {
//   const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <UsersListSearchComponent placeholder='Search Zipcode' />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {/* {selected.length > 0 ? <UsersListGrouping /> : <UsersListToolbar />} */}
        <ZipCodeListToolbar />
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {ZipCodeListHeader}
