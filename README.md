# bc-email-builder

A BigCommerce Email Builder CLI Tool for downloading and publishing email templates.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/bc-email-builder.svg)](https://npmjs.org/package/bc-email-builder)
[![Downloads/week](https://img.shields.io/npm/dw/bc-email-builder.svg)](https://npmjs.org/package/bc-email-builder)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g bc-email-builder
$ email-builder COMMAND
running command...
$ email-builder (--version)
bc-email-builder/5.0.0 darwin-arm64 node-v21.6.2
$ email-builder --help [COMMAND]
USAGE
  $ email-builder COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [bc-email-builder](#bc-email-builder)
- [Usage](#usage)
- [Commands](#commands)
  - [`email-builder init`](#email-builder-init)
  - [`email-builder help [COMMAND]`](#email-builder-help-command)
  - [`email-builder download [EMAIL-TEMPLATE]`](#email-builder-download-email-template)
  - [`email-builder publish [EMAIL-TEMPLATE]`](#email-builder-publish-email-template)

## `email-builder init`

Initialize the environment variables for the email builder.

```
USAGE
  $ email-builder init [-t <value>] [-c <value>] [-i <value>] [-h <value>]

FLAGS
  -c, --channelId=<value>    Channel ID for the storefront (Default: All Channels)
  -h, --storeHash=<value>    Store Hash for the storefront
  -i, --clientId=<value>     Client ID for the API Token
  -t, --accessToken=<value>  Access Token for the API Token

DESCRIPTION
  Initialize the environment variables for the email builder.

  Before continuing, please make sure you've created or received a Store API account.
  You'll need those credentials in order to generate the appropriate configurations.
  The scope you'll need is: Information & Settings (Modify).
  You can find more information here. https://support.bigcommerce.com/s/article/Store-API-Accounts#creating


EXAMPLES
  Run the command in interactive mode

    $ email-builder init

  Run the command with flags (perfect for CI/CD)

    $ email-builder init --channelId 1 --storeHash jk0h5oo6h0 --clientId 1234567890 --accessToken 1234567890abcdefg
```

_See code: [src/commands/init.ts](https://github.com/AndrewBarber/bc-email-builder/blob/v5.0.0/src/commands/init.ts)_

## `email-builder help [COMMAND]`

Display help for email-builder.

```
USAGE
  $ email-builder help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for email-builder.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.5/src/commands/help.ts)_

## `email-builder download [EMAIL-TEMPLATE]`

Download the email templates from the storefront

```
USAGE
  $ email-builder download [EMAIL-TEMPLATE] -p <value> [-o]

ARGUMENTS
  EMAIL-TEMPLATE  [default: all] Email template to download from store

FLAGS
  -o, --overwrite     Overwrite existing email templates
  -p, --path=<value>  (required) [default: .] Path to save the email template

DESCRIPTION
  Download the email templates from the storefront

EXAMPLES
  Download the abandoned cart email template to the email directory

    $ email-builder download abandoned_cart_email --path ./email

  Download all email templates to the email directory and overwrite existing templates

    $ email-builder download all --path ./email -o
```

_See code: [src/commands/download.ts](https://github.com/AndrewBarber/bc-email-builder/blob/v5.0.0/src/commands/download.ts)_

## `email-builder publish [EMAIL-TEMPLATE]`

describe the command here

```
USAGE
  $ email-builder publish [EMAIL-TEMPLATE] -p <value>

ARGUMENTS
  EMAIL-TEMPLATE  [default: all] Email template to publish to the store

FLAGS
  -p, --path=<value>  (required) [default: .] Path to save the email template

DESCRIPTION
  describe the command here

EXAMPLES
  $ email-builder publish
```

_See code: [src/commands/publish.ts](https://github.com/AndrewBarber/bc-email-builder/blob/v5.0.0/src/commands/publish.ts)_

<!-- commandsstop -->
