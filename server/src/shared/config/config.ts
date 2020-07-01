import { SERVER_ENV } from '../enum/common.enum'

const { env: ENV } = process

export const config = {
  env: ENV.NODE_ENV || SERVER_ENV.LOCAL,
}
