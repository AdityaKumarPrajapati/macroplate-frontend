
import clsx from 'clsx'
import { FC } from 'react'
import { toAbsoluteUrl } from '../../../../../../../_metronic/helpers'
import { User } from '../../core/_models'
import { Link } from 'react-router-dom'

type Props = {
  user: User
}

const UserInfoCell: FC<Props> = ({ user }) => {
  const getNameInitials = (firstName?: string, lastName?: string) => {
    const firstInitial = firstName?.charAt(0).toUpperCase();
    const lastInitial = lastName?.charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
  }

  const capitalizeName = (firstName?: any, lastName?: any) => {
    const capitalize = (name: string) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    const capitalizedFirstName = capitalize(firstName);
    const capitalizedLastName = capitalize(lastName);

    return `${capitalizedFirstName} ${capitalizedLastName}`;
  }
  return (
    <div className='d-flex align-items-center'>
      {/* begin:: Avatar */}
      <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
        <a href='#'>
          {user.avatar ? (
            <div className='symbol-label'>
              <img src={toAbsoluteUrl(`media/${user.avatar}`)} alt={user.first_name} className='w-100' />
            </div>
          ) : (
            <div
              className={clsx(
                'symbol-label fs-3',
                `bg-light-${user?.status === 'active' ? 'success' : 'danger'}`,
                `text-${user?.status === 'active' ? 'success' : 'danger'}`
              )}
            >
              {getNameInitials(user.first_name, user.last_name)}
            </div>
          )}
        </a>
      </div>
      <div className='d-flex flex-column'>
        <Link to={`/apps/user-management/user/account-details/${user.id}/account`} className='text-gray-800 text-hover-primary mb-1'>
          {capitalizeName(user.first_name, user.last_name)}
        </Link>
        <span>{user.email}</span>
      </div>
    </div>
  );
}

export { UserInfoCell }
