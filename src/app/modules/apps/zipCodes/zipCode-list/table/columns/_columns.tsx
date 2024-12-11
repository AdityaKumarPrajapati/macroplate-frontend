import { Column } from 'react-table'
// import { ActivityUserInfoCell } from './ActivityUserInfoCell'
// import {UserLastLoginCell} from './UserLastLoginCell'
// import {UserTwoStepsCell} from './UserTwoStepsCell'
// import {UserActionsCell} from './UserActionsCell'
// import {UserSelectionCell} from './UserSelectionCell'
import { ZipCodeListCustomHeader } from './ZipCodeListCustomHeader'
// import {UserSelectionHeader} from './UserSelectionHeader'
import { ZipCodeList } from '../../core/_models'
import { capitalizeInitial } from '../../../../../../../_metronic/helpers'
import { ZipCodeActionCell } from './ZipCodeActionCell'
// import { ActivityListTypeInfoCell } from './ActivityListTypeInfoCell'

const zipCodeListColumns: ReadonlyArray<Column<ZipCodeList>> = [
  //   {
  //     Header: (props) => <UserSelectionHeader tableProps={props} />,
  //     id: 'selection',
  //     Cell: ({...props}) => <UserSelectionCell id={props.data[props.row.index].id} />,
  //   },
  {
    Header: (props) => <ZipCodeListCustomHeader tableProps={props} title='Zipcode' className='min-w-125px' />,
    accessor: 'zip_code',
    // Cell: ({ ...props }) => <ActivityUserInfoCell activityList={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <ZipCodeListCustomHeader tableProps={props} title='Charge per delivery' className='min-w-125px' />,
    accessor: 'charge_per_delivery',
  },
  {
    Header: (props) => <ZipCodeListCustomHeader tableProps={props} title='Number of deliveries (in a week)' className='min-w-125px' />,
    accessor: 'number_of_deliveries',
  },
  {
    Header: (props) => <ZipCodeListCustomHeader tableProps={props} title='State' className='min-w-125px' />,
    accessor: 'state',
  },
  {
    Header: (props) => <ZipCodeListCustomHeader tableProps={props} title='Need to display break up' className='min-w-125px' />,
    accessor: 'display_breakup',
  },
  {
    Header: (props) => (
      <ZipCodeListCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <ZipCodeActionCell id={props.data[props.row.index].id} />,
  },
  // {
  //   Header: (props) => <ZipCodeListCustomHeader tableProps={props} title='Type' className='min-w-125px' />,
  //   accessor: 'type',
  //   Cell: ({ value, row }) => {
  //     if (!value) return '';

  //     const { first_name, last_name } = row.original;
  //     const capitalizedFirstName = first_name ? capitalizeInitial(first_name) : '';
  //     const capitalizedLastName = last_name ? capitalizeInitial(last_name) : '';
  //     const fullName = `${capitalizedFirstName} ${capitalizedLastName}`.trim();
  //     const activityMessage = (ACTIVITIES as Record<string, string>)[value] || value;
  //     const updatedMessage = activityMessage.replace(':name', fullName);

  //     return updatedMessage;
  //   }
  // },
  // {
  //   Header: (props) => <ZipCodeListCustomHeader tableProps={props} title='Updated Details' className='min-w-125px' />,
  //   id: 'params',
  //   // Cell: ({ ...props }) => <ActivityListTypeInfoCell activityList={props.data[props.row.index]} />,
  // },
]

export { zipCodeListColumns }
