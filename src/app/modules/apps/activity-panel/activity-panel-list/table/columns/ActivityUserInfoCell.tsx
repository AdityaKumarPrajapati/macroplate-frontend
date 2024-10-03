
import clsx from 'clsx'
import { FC } from 'react'
import { toAbsoluteUrl } from '../../../../../../../_metronic/helpers'
import { ActivityList } from '../../core/_models'

type Props = {
    activityList: ActivityList
}

const ActivityUserInfoCell: FC<Props> = ({ activityList }) => {
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
                    {activityList.avatar ? (
                        <div className='symbol-label'>
                            <img src={toAbsoluteUrl(`media/${activityList.avatar}`)} alt={activityList.first_name} className='w-100' />
                        </div>
                    ) : (
                        <div
                            className={clsx(
                                'symbol-label fs-3',
                                // `bg-light-${activityList?.status === 'active' ? 'success' : 'danger'}`,
                                // `text-${activityList?.status === 'active' ? 'success' : 'danger'}`
                            )}
                        >
                            {getNameInitials(activityList.first_name, activityList.last_name)}
                        </div>
                    )}
                </a>
            </div>
            <div className='d-flex flex-column'>
                <a href='#' className='text-gray-800 text-hover-primary mb-1'>
                    {capitalizeName(activityList.first_name, activityList.last_name)}
                </a>
                <span>{activityList.email}</span>
            </div>
        </div>
    );
}

export { ActivityUserInfoCell }
