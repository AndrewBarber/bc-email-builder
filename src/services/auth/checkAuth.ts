import {Management} from '@space48/bigcommerce-api'

import {getAllEmailTemplates} from '../emailTemplate/downloadEmailTemplate.js'
import {log, messages} from '../messages.js'
import {AuthConfig} from './authConfig.js'

const checkCredentials = async (authConfig: AuthConfig): Promise<boolean> => {
  let checkStatus = true

  for (const [key, value] of Object.entries(authConfig)) {
    if (!value) {
      log.error(messages.invalidAuth(key))
      checkStatus = false
    }
  }

  // make a request to BC API to check if the credentials are valid
  const bcClient = new Management.Client({
    accessToken: authConfig.accessToken,
    storeHash: authConfig.storeHash,
  })

  await getAllEmailTemplates(bcClient, {channel_id: 1})
    .then((response) => {
      if (!response) {
        checkStatus = false
      }
    })
    .catch((e) => {
      console.log('e', e)
      checkStatus = false
    })

  return checkStatus
}

export default checkCredentials
