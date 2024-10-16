import { Column } from 'react-table'
import { UserInfoCell } from './UserInfoCell'
import { UserLastLoginCell } from './UserLastLoginCell'
import { UserTwoStepsCell } from './UserTwoStepsCell'
import { UserActionsCell } from './UserActionsCell'
import { UserSelectionCell } from './UserSelectionCell'
import { UserCustomHeader } from './UserCustomHeader'
import { UserSelectionHeader } from './UserSelectionHeader'
import { User } from '../../core/_models'
import { capitalizeInitial } from '../../../../../../../_metronic/helpers'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({ ...props }) => <UserSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
    id: 'name',
    Cell: ({ ...props }) => <UserInfoCell user={props.data[props.row.index]} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Type' className='min-w-125px' />,
    accessor: 'user_type',
    Cell: ({ value }) => {
      return capitalizeInitial(value);
    }
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Status' className='min-w-125px' />,
    accessor: 'status',
    Cell: ({ value }) => {
      const getColor = (value: string | undefined) => {
        switch (value?.toLowerCase()) {
          case 'active':
            return 'green';
          case 'inactive':
            return 'red';
          default:
            return 'black';
        }
      };
      return <span style={{ color: getColor(value) }}>{capitalizeInitial(value)}</span>;
    }
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Subscription' className='min-w-125px' />,
    accessor: 'stripe_plan'
  },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <UserLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <UserTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
  //   ),
  //   accessor: 'email',
  // },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({ ...props }) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
]

export { usersColumns }
