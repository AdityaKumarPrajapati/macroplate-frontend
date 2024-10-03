import { string } from 'yup'
import { ID, Response } from '../../../../../../_metronic/helpers'

export type ActivityList = {
  related_user_id: string
  id: ID
  type: string
  is_record_old: any
  created_at: string
  updated_at: string
  params: any
  completed: number,
  first_name: string
  last_name: string
  email: string
  stripe_id: string
  admin_name: string
  updated_by_type: string
  updated_by: string
  text: any
  avatar?: string
}

export type UsersQueryResponse = Response<Array<ActivityList>>