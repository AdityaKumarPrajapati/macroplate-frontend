import { string } from 'yup'
import { ID, Response } from '../../../../../../_metronic/helpers'
// export type User = {
//   id?: ID
//   name?: string
//   avatar?: string
//   email?: string
//   position?: string
//   role?: string
//   last_login?: string
//   two_steps?: boolean
//   joined_day?: string
//   online?: boolean
//   initials?: {
//     label: string
//     state: string
//   }
// }

export type User = {
  id?: ID
  first_name?: string
  last_name?: string
  email?: string
  user_type?: string
  ends_at?: any
  created_at?: string
  referral_code?: string
  stripe_id?: string
  stripe_plan?: string
  is_complimentary_user?: any
  customized_meals?: any
  status?: string
  metas?: any
  meta_data?: any
  avatar?: string
}

// export type User = {
//   data?: Data
// }

export type UsersQueryResponse = Response<Array<User>>

export const initialUser: User = {
  // avatar: 'avatars/300-6.jpg',
  // position: 'Art Director',
  // role: 'Administrator',
  // name: '',
  // email: '',
}
