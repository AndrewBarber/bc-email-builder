import {Management} from '@space48/bigcommerce-api'
// eslint-disable-next-line import/default
import dotenv from 'dotenv'
import fs from 'node:fs'

import {log, messages} from '../messages.js'
import {EMAIL_TEMPLATE_TYPE_IDS} from './emailTemplateTypes.js'
dotenv.config()

const bcClient = new Management.Client({
  accessToken: process.env.BC_ACCESS_TOKEN as string,
  storeHash: process.env.BC_STORE_HASH as string,
})

const BC_CHANNEL_ID = Number(process.env.BC_CHANNEL_ID)

const publishEmailTemplate = async (templateName: string, path: string) => {
  try {
    const isFetchAll = templateName === 'all'

    const templates = isFetchAll ? EMAIL_TEMPLATE_TYPE_IDS : [templateName]

    // eslint-disable-next-line unicorn/no-array-for-each
    templates.forEach(async (emailTemplate) => {
      // Check if all email templates exist in the directory
      const emailTemplateDir = `${path}/${emailTemplate}`
      if (!fs.existsSync(emailTemplateDir)) {
        log.info(messages.noEmailTemplateFound(emailTemplate))
        return
      }

      // Read the email template from the directory - check we have a .html and .json file
      const emailTemplateFiles = fs.readdirSync(emailTemplateDir)
      const emailTemplateHtml = emailTemplateFiles.find((file) => file.endsWith('.html'))
      const emailTemplateJson = emailTemplateFiles.find((file) => file.endsWith('.json'))

      if (!emailTemplateHtml || !emailTemplateJson) {
        log.error(messages.invalidEmailTemplate(emailTemplate))
        return
      }

      // Construct the email payload
      const emailPayload = constructEmailPayload(emailTemplateDir)
      if (!emailPayload) {
        log.error(messages.invalidEmailTemplate(emailTemplate))
        return
      }

      // Upsert the email template
      const response = await upsertEmailTemplate(bcClient, emailTemplate, emailPayload)
      if (!response) {
        log.error(messages.invalidEmailTemplate(emailTemplate))
        return
      }

      log.success(messages.emailTemplatePublished(emailTemplate))
    })
  } catch (error) {
    log.error((error as Error).toString())
  }
}

const constructEmailPayload = (emailTemplateDir: string) => {
  const emailTemplateFiles = fs.readdirSync(emailTemplateDir)
  const emailTemplateHtml = emailTemplateFiles.find((file) => file.endsWith('.html'))
  const emailTemplateJson = emailTemplateFiles.find((file) => file.endsWith('.json'))

  const emailHtml = fs.readFileSync(`${emailTemplateDir}/${emailTemplateHtml}`, 'utf8')
  const emailJson = fs.readFileSync(`${emailTemplateDir}/${emailTemplateJson}`, 'utf8')

  return {
    body: emailHtml,
    ...JSON.parse(emailJson),
  }
}

const upsertEmailTemplate = async (
  bigCommerceApiClient: Management.Client,
  templateName: string,
  payload: Management.V3.Operations['PUT /marketing/email-templates/{template-name}']['parameters']['body'],
) =>
  bigCommerceApiClient.v3.put(`/marketing/email-templates/{template-name}`, {
    body: payload,
    path: {
      channel_id: BC_CHANNEL_ID,
      'template-name': templateName,
    },
  })

export default publishEmailTemplate
