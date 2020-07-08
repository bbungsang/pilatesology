import { SERVER_ENV } from '../enum/common.enum'

const { env: ENV } = process

export const config = {
  env: ENV.NODE_ENV || SERVER_ENV.LOCAL,
  db: {
    connection_string: 'postgres://pilatesology:gmlwls1234@localhost/pilatesology',
    pool_size: 1,
  },
}
