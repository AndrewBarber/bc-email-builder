import {writeFileSync} from 'node:fs'
import {resolve} from 'node:path'

import {log} from '../messages.js'

interface EnvironmentInterface {
  accessToken: string
  channelId: number
  clientId: string
  storeHash: string
}

const generateConfig = ({accessToken, channelId, clientId, storeHash}: EnvironmentInterface) => {
  const dir = resolve('.')
  const channelIdSelected = channelId || 0
  const configuration = `BC_CLIENT_ID=${clientId}
BC_ACCESS_TOKEN=${accessToken}
BC_CHANNEL_ID=${channelIdSelected}
BC_STORE_HASH=${storeHash}
`

  try {
    writeFileSync(`${dir}/.env`, configuration)
    log.success("Successfully created your configuration, you're all set!")
  } catch {
    log.error('There seemed to be an error creating the file.')
  }
}

export default {
  configurations: generateConfig,
}
