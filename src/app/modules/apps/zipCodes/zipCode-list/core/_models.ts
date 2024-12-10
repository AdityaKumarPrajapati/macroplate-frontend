import { string } from 'yup'
import { ID, Response } from '../../../../../../_metronic/helpers'

export type ZipCodeList = {
  id: ID
  zip_code: string
  city: string
  region: string
  charge_per_delivery: number
  number_of_deliveries: number
  state: number,
  short_state: string
  display_breakup: string
  radius: string
  created_at: string
  updated_at: string
}

export type UsersQueryResponse = Response<Array<ZipCodeList>>