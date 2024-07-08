import {Command, Flags} from '@oclif/core'
import inquirer from 'inquirer'

import generate from '../services/auth/generate.js'

const configQuestionnaire = [
  {
    message: 'What is the Client ID?',
    name: 'clientId',
    type: 'input',
    validate(value: string) {
      if (!value) {
        return 'Please enter a valid Client ID'
      }

      return true
    },
  },
  {
    message: 'What is the Access Token?',
    name: 'accessToken',
    type: 'input',
    validate(value: string) {
      if (!value) {
        return 'Please enter a valid Access Token'
      }

      return true
    },
  },
  {
    message: 'What is the Store Hash?',
    name: 'storeHash',
    type: 'input',
    validate(value: string) {
      if (!value) {
        return 'Please enter a valid Store Hash'
      }

      return true
    },
  },
  {
    default: '0',
    message: 'What is the Channel ID? (Note: 0 applies to all storefronts)',
    name: 'channelId',
    type: 'input',
    validate(value: string) {
      if (Number.isNaN(Number(value))) {
        return 'Please enter a valid number'
      }

      return true
    },
  },
]

export default class Init extends Command {
  static override description = `Initialize the environment variables for the email builder. 
  
  Before continuing, please make sure you've created or received a Store API account.
You'll need those credentials in order to generate the appropriate configurations.
The scope you'll need is: Information & Settings (Modify). 	
You can find more information here. https://support.bigcommerce.com/s/article/Store-API-Accounts#creating
  `
  // eslint-disable-next-line no-warning-comments
  // TODO: Check scope and update above description

  static override examples = [
    {
      command: '<%= config.bin %> <%= command.id %>',
      description: 'Run the command in interactive mode',
    },
    {
      command:
        '<%= config.bin %> <%= command.id %> --channelId 1 --storeHash jk0h5oo6h0 --clientId 1234567890 --accessToken 1234567890abcdefg',
      description: 'Run the command with flags (perfect for CI/CD)',
    },
  ]

  static override flags = {
    accessToken: Flags.string({char: 't', description: 'Access Token for the API Token'}),
    channelId: Flags.integer({
      char: 'c',
      default: 0,
      description: 'Channel ID for the storefront (Default: All Channels)',
    }),
    clientId: Flags.string({char: 'i', description: 'Client ID for the API Token'}),
    storeHash: Flags.string({char: 'h', description: 'Store Hash for the storefront'}),
  }

  static override hidden = false

  public async run(): Promise<void> {
    const {flags} = await this.parse(Init)

    const {accessToken, channelId, clientId, storeHash} = flags

    if (!accessToken || !channelId || !clientId || !storeHash) {
      inquirer
        .prompt(configQuestionnaire)
        .then((answers) => {
          generate.configurations(answers)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      generate.configurations({accessToken, channelId, clientId, storeHash})
    }
  }
}
