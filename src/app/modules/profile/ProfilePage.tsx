import { Navigate, Routes, Route, Outlet, useParams } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
// import { Overview } from './components/Overview'
import { Projects } from './components/Projects'
import { Campaigns } from './components/Campaigns'
import { Documents } from './components/Documents'
import { Connections } from './components/Connections'
import { ProfileHeader } from './ProfileHeader'
import { useEffect, useState } from 'react'
import { getUserById } from '../apps/user-management/users-list/core/_requests'
import { User } from '../apps/user-management/users-list/core/_models'
import { Overview } from '../accounts/components/Overview'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'UserAccount',
    // path: '/crafted/pages/profile/overview',
    path: '/apps/user-management/users',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const ProfilePage = () => {

  const { userId } = useParams();
  const [userData, setUserData] = useState<User | null>(null);
  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const data: User | any = await getUserById(userId as string);
          if(data) {
            setUserData(data[0]);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };
    fetchUserData();
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route
        element={
          <>
            <ProfileHeader 
              user={userData}
            />
            <Outlet />
          </>
        }
      >
        <Route
          path='account'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Account</PageTitle>
              <Overview user={userData} />
            </>
          }
        />
        {/* <Route
        path='projects'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Projects</PageTitle>
            <Projects />
          </>
        }
      />
      <Route
        path='campaigns'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Campaigns</PageTitle>
            <Campaigns />
          </>
        }
      />
      <Route
        path='documents'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Documents</PageTitle>
            <Documents />
          </>
        }
      />
      <Route
        path='connections'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Connections</PageTitle>
            <Connections />
          </>
        }
      /> */}
        {/* <Route index element={<Navigate to='/crafted/pages/profile/overview' />} /> */}
      </Route>
    </Routes>
  )
}

export default ProfilePage
