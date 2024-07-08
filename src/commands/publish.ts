import {Args, Command, Flags} from '@oclif/core'

import {AUTH_CONFIG} from '../services/auth/authConfig.js'
import checkCredentials from '../services/auth/checkAuth.js'
import {EMAIL_TEMPLATE_TYPE_IDS} from '../services/emailTemplate/emailTemplateTypes.js'
import publishEmailTemplate from '../services/emailTemplate/publishEmailTemplate.js'
import {log, messages} from '../services/messages.js'

export default class Publish extends Command {
  static override args = {
    'email-template': Args.string({default: 'all', description: 'Email template to publish to the store'}),
  }

  static override description = 'describe the command here'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    path: Flags.string({char: 'p', default: '.', description: 'Path to save the email template', required: true}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Publish)
    if (!(await checkCredentials(AUTH_CONFIG))) {
      throw new Error('Invalid credentials - please run init command to set the credentials')
    }

    const {path} = flags
    if (!path) {
      log.error(messages.invalidPath(path || 'undefined'))
      return
    }

    const emailTemplate = args['email-template']
    if (emailTemplate !== 'all' && !EMAIL_TEMPLATE_TYPE_IDS.includes(emailTemplate)) {
      log.error(messages.invalidEmailTemplateType(emailTemplate))
      return
    }

    publishEmailTemplate(emailTemplate, path)
  }
}
