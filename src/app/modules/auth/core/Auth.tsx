/* eslint-disable react-refresh/only-export-components */
import { FC, useState, useEffect, createContext, useContext, Dispatch, SetStateAction } from 'react'
import { LayoutSplashScreen } from '../../../../_metronic/layout/core'
import { AuthModel, UserModel } from './_models'
import * as authHelper from './AuthHelpers'
import { getUserByToken } from './_requests'
import { WithChildren } from '../../../../_metronic/helpers'

type AuthContextProps = {
  auth: AuthModel | undefined
  saveAuth: (auth: AuthModel | undefined) => void
  currentUser: UserModel | undefined
  setCurrentUser: Dispatch<SetStateAction<UserModel | undefined>>
  logout: () => void
}

const initAuthContextPropsState = {
  auth: authHelper.getAuth(),
  saveAuth: () => { },
  currentUser: undefined,
  setCurrentUser: () => { },
  logout: () => { },
}

const AuthContext = createContext<AuthContextProps>(initAuthContextPropsState)

const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider: FC<WithChildren> = ({ children }) => {
  const [auth, setAuth] = useState<AuthModel | undefined>(authHelper.getAuth())
  const [currentUser, setCurrentUser] = useState<UserModel | undefined>()

  const saveAuth = (auth: AuthModel | undefined) => {
    setAuth(auth)
    if (auth) {
      authHelper.setAuth(auth)
      localStorage.setItem('auth', JSON.stringify(auth)) // Persist token
    } else {
      authHelper.removeAuth()
      localStorage.removeItem('auth') // Remove token on logout
    }
  }

  const logout = () => {
    saveAuth(undefined)
    setCurrentUser(undefined)
    localStorage.removeItem('user') // Remove user on logout
    localStorage.removeItem('auth')
    localStorage.removeItem('checkoutData')
  }

  return (
    <AuthContext.Provider value={{ auth, saveAuth, currentUser, setCurrentUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Update AuthInit to retrieve user from token when needed
const AuthInit: FC<WithChildren> = ({ children }) => {
  const { auth, setCurrentUser } = useAuth()
  const [showSplashScreen, setShowSplashScreen] = useState(true)

  useEffect(() => {
    const requestUser = async (apiToken: string) => {
      try {
        const { data } = await getUserByToken(apiToken)
        if (data) {
          setCurrentUser(data.user)
        }
      } catch (error) {
        // logout()
      } finally {
        setShowSplashScreen(false)
      }
    }

    let storedAuth = localStorage.getItem('auth')
    if (storedAuth) {
      const auth = JSON.parse(storedAuth)
      requestUser(auth.token)
    } else {
      setShowSplashScreen(false)
    }
  }, [])

  return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>
}


export { AuthProvider, AuthInit, useAuth }
