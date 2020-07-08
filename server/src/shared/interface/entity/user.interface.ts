import { USER_STATUS } from '../../enum/entity'

export interface IUser {
  user_id: number
  email: string
  password: string
  salt: string
  phone: string
  invalid_password_count: number
  status: USER_STATUS
  create_date: Date
  update_date: Date
}
