import {Args, Command, Flags} from '@oclif/core'
import {existsSync} from 'node:fs'

import {AUTH_CONFIG} from '../services/auth/authConfig.js'
import checkCredentials from '../services/auth/checkAuth.js'
import downloadEmailTemplate from '../services/emailTemplate/downloadEmailTemplate.js'
import {EMAIL_TEMPLATE_TYPE_IDS} from '../services/emailTemplate/emailTemplateTypes.js'
import {log, messages} from '../services/messages.js'

export default class Download extends Command {
  static override args = {
    'email-template': Args.string({default: 'all', description: 'Email template to download from store'}),
  }

  static override description = 'Download the email templates from the storefront'

  static override examples = [
    {
      command: '<%= config.bin %> <%= command.id %> abandoned_cart_email --path ./email',
      description: 'Download the abandoned cart email template to the email directory',
    },
    {
      command: '<%= config.bin %> <%= command.id %> all --path ./email -o',
      description: 'Download all email templates to the email directory and overwrite existing templates',
    },
  ]

  static override flags = {
    overwrite: Flags.boolean({char: 'o', default: false, description: 'Overwrite existing email templates'}),
    path: Flags.string({char: 'p', default: '.', description: 'Path to save the email template', required: true}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Download)
    if (!(await checkCredentials(AUTH_CONFIG))) {
      throw new Error('Invalid credentials - please run init command to set the credentials')
    }

    const {overwrite, path} = flags

    if (!path) {
      log.error(messages.invalidPath(path || 'undefined'))
      return
    }

    const emailTemplate = args['email-template']

    // if emailTemplate is not all, check if it is a valid email template type
    if (emailTemplate !== 'all' && !EMAIL_TEMPLATE_TYPE_IDS.includes(emailTemplate)) {
      log.error(messages.invalidEmailTemplateType(emailTemplate))
      return
    }

    // if the email template is defined and the directory exists
    if (emailTemplate !== 'all' && existsSync(emailTemplate) && !overwrite) {
      log.error(messages.emailTemplateExists(emailTemplate))
      return
    }

    downloadEmailTemplate(emailTemplate, path, overwrite)
  }
}
