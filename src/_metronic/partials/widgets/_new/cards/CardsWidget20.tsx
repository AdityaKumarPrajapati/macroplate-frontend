import { useEffect, useState } from "react"
import { getUserByCount } from "../../../../../app/modules/apps/user-management/users-list/core/_requests"

type Props = {
  className: string
  description: string
  color: string
  img: string
}

const CardsWidget20 = ({ className, description, color, img }: Props) => {

  const [userCountData, setUserCountData] = useState<any | null>(null);
  useEffect(() => {
    const fetchUserCountData = async () => {
      try {
        const data: any = await getUserByCount();
        if (data) {
          setUserCountData(data);
        }
      } catch (error) {
        console.error('Error fetching user count data:', error);
      }
    };
    fetchUserCountData();
  }, []);

  const {
    totalMembers = 0,
    totalActiveUsers = 0,
    totalInActiveUsers = 0,
    totalAdmin = 0,
    totalCompUsers = 0,
    totalUsers = 0,
    success = 0
  } = userCountData || {};

  return (
    <div
      className={`card card-flush bgi-no-repeat bgi-size-contain bgi-position-x-end ${className}`}
      style={{
        backgroundColor: color,
        backgroundImage: `url('${img}')`,
      }}
    >
      <div className='card-header pt-5'>
        <div className='card-title d-flex flex-column'>
          <span className='fs-2hx fw-bold text-white me-2 lh-1 ls-n2'>{totalMembers}</span>
          <span className='text-white opacity-75 pt-1 fw-semibold fs-6'>{description}</span>
        </div>
        <div className='card-title d-flex flex-column'>
          <span className='fs-2hx fw-bold text-white me-2 lh-1 ls-n2'>{totalActiveUsers}</span>
          <span className='text-white opacity-75 pt-1 fw-semibold fs-6'>Active</span>
        </div>
        <div className='card-title d-flex flex-column'>
          <span className='fs-2hx fw-bold text-white me-2 lh-1 ls-n2'>{totalInActiveUsers}</span>
          <span className='text-white opacity-75 pt-1 fw-semibold fs-6'>Inactive</span>
        </div>
      </div>
      <div className='card-header pt-5'>
        <div className='card-title d-flex flex-column'>
          <span className='fs-2hx fw-bold text-white me-2 lh-1 ls-n2'>{totalUsers}</span>
          <span className='text-white opacity-75 pt-1 fw-semibold fs-6'>Users</span>
        </div>
        <div className='card-title d-flex flex-column'>
          <span className='fs-2hx fw-bold text-white me-2 lh-1 ls-n2'>{totalCompUsers}</span>
          <span className='text-white opacity-75 pt-1 fw-semibold fs-6'>Comp Users</span>
        </div>
        <div className='card-title d-flex flex-column'>
          <span className='fs-2hx fw-bold text-white me-2 lh-1 ls-n2'>{totalAdmin}</span>
          <span className='text-white opacity-75 pt-1 fw-semibold fs-6'>Admin</span>
        </div>
      </div>
      {/* <div className='card-body d-flex align-items-end pt-0'>
        <div className='d-flex align-items-center flex-column mt-3 w-100'>
          <div className='d-flex justify-content-between fw-bold fs-6 text-white opacity-75 w-100 mt-auto mb-2'>
            <span>43 Pending</span>
            <span>72%</span>
          </div>

          <div className='h-8px mx-3 w-100 bg-white bg-opacity-50 rounded'>
            <div
              className='bg-white rounded h-8px'
              role='progressbar'
              style={{ width: '72%' }}
              aria-valuenow={50}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
export { CardsWidget20 }
