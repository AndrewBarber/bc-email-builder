// eslint-disable-next-line import/default
import dotenv from 'dotenv'
// eslint-disable-next-line import/no-named-as-default-member
dotenv.config()

export interface AuthConfig {
  accessToken: string
  clientId: string
  storeHash: string
}

export const AUTH_CONFIG: AuthConfig = {
  accessToken: process.env.BC_ACCESS_TOKEN || '',
  clientId: process.env.BC_CLIENT_ID || '',
  storeHash: process.env.BC_STORE_HASH || '',
}

export const CHANNEL_ID = process.env.BC_CHANNEL_ID ? Number.parseInt(process.env.BC_CHANNEL_ID, 10) : 1
