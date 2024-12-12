import { FC, useEffect } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { ErrorsPage } from '../modules/errors/ErrorsPage'
import { Logout, AuthPage, useAuth } from '../modules/auth'
import { App } from '../App'
import { HomePageRoutes } from './HomeRoutes'
import { UserRoutes } from './UserRoutes'
import ThankYou from '../pages/thankYou/ThankYou'

const { BASE_URL } = import.meta.env

const AppRoutes: FC = () => {
  const { currentUser } = useAuth()

  useEffect(() => {}, [currentUser]);

  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='/user/*' element={<HomePageRoutes />} />
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
          {/* <Route path='/thank-you' element={<ThankYou />} /> */}

          {currentUser && currentUser?.user_type === 'admin' ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to='/user' />} />
            </>
          ) : currentUser && currentUser?.user_type === 'user' ? (
            <>
              <Route path='/subscription/*' element={<UserRoutes />} />
              <Route path='*' element={<Navigate to='/subscription' />} />
            </>
          ) : (
            <>
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />
            </>
          )}
          <Route path='/thank-you' element={<ThankYou />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { AppRoutes }
