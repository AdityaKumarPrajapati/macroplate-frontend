import { Column } from 'react-table'
import { ActivityUserInfoCell } from './ActivityUserInfoCell'
// import {UserLastLoginCell} from './UserLastLoginCell'
// import {UserTwoStepsCell} from './UserTwoStepsCell'
// import {UserActionsCell} from './UserActionsCell'
// import {UserSelectionCell} from './UserSelectionCell'
import { ActivityListCustomHeader } from './ActivityListCustomHeader'
// import {UserSelectionHeader} from './UserSelectionHeader'
import { ActivityList } from '../../core/_models'
import { ACTIVITIES, capitalizeInitial } from '../../../../../../../_metronic/helpers'
import { ActivityListTypeInfoCell } from './ActivityListTypeInfoCell'

const activityListColumns: ReadonlyArray<Column<ActivityList>> = [
  //   {
  //     Header: (props) => <UserSelectionHeader tableProps={props} />,
  //     id: 'selection',
  //     Cell: ({...props}) => <UserSelectionCell id={props.data[props.row.index].id} />,
  //   },
  {
    Header: (props) => <ActivityListCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({ ...props }) => <ActivityUserInfoCell activityList={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <ActivityListCustomHeader tableProps={props} title='Email' className='min-w-125px' />,
    accessor: 'email',
  },
  {
    Header: (props) => <ActivityListCustomHeader tableProps={props} title='Type' className='min-w-125px' />,
    accessor: 'type',
    Cell: ({ value, row }) => {
      if (!value) return '';

      const { first_name, last_name } = row.original;
      const capitalizedFirstName = first_name ? capitalizeInitial(first_name) : '';
      const capitalizedLastName = last_name ? capitalizeInitial(last_name) : '';
      const fullName = `${capitalizedFirstName} ${capitalizedLastName}`.trim();
      const activityMessage = (ACTIVITIES as Record<string, string>)[value] || value;
      const updatedMessage = activityMessage.replace(':name', fullName);

      return updatedMessage;
    }
  },
  {
    Header: (props) => <ActivityListCustomHeader tableProps={props} title='Updated Details' className='min-w-125px' />,
    id: 'params',
    // Cell: ({ ...props }) => <ActivityListTypeInfoCell activityList={props.data[props.row.index]} />,
  },
]

export { activityListColumns }
