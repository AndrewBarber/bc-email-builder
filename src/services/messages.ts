import chalk from 'chalk'

function f(message: string) {
  return `[${new Date().toISOString()}] ${message}`
}

export const log = {
  debug: (message: string) => console.debug(chalk.grey(f(message))),
  error: (message: string) => console.error(chalk.red(f(message))),
  info: (message: string) => console.log(chalk.blue(f(message))),
  notice: (message: string) => console.log(chalk.yellow(f(message))),
  success: (message: string) => console.log(chalk.green(f(message))),
}

export const messages = {
  downloadedEmailTemplate: (templateName: string, path: string) =>
    `Downloaded email template - ${templateName}. Path: ${path}`,
  emailTemplateDoesNotExists: (templateName: string) => `Email template (${templateName}) does not exist.`,
  emailTemplateExists: (templateName: string) =>
    `Email template (${templateName}) already exists. Please supply with overwrite flag if you want to overwrite it.`,
  emailTemplatePublished: (templateName: string) => `Email template published - ${templateName}`,
  invalidAuth: (configKey: string) => `${configKey} is invalid.`,
  invalidEmailTemplate: (templateName: string) =>
    `Invalid email template - ${templateName}. (Missing .html or .json file)`,
  invalidEmailTemplateType: (templateName: string) => `Invalid email template type - ${templateName}.`,
  invalidPath: (path: string) => `Invalid path - ${path}.`,
  noEmailTemplateFound: (templateName: string) => `No email template found - ${templateName}.`,
}
