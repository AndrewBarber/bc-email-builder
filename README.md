# bc-email-builder

A BigCommerce Email Builder CLI Tool for downloading and publishing email templates.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/bc-email-builder.svg)](https://npmjs.org/package/bc-email-builder)
[![Downloads/week](https://img.shields.io/npm/dw/bc-email-builder.svg)](https://npmjs.org/package/bc-email-builder)

<!-- toc -->
* [bc-email-builder](#bc-email-builder)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @andrewbarber/bc-email-builder
$ email-builder COMMAND
running command...
$ email-builder (--version)
@andrewbarber/bc-email-builder/0.2.1 linux-x64 node-v18.20.3
$ email-builder --help [COMMAND]
USAGE
  $ email-builder COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`email-builder help [COMMAND]`](#email-builder-help-command)
* [`email-builder plugins`](#email-builder-plugins)
* [`email-builder plugins add PLUGIN`](#email-builder-plugins-add-plugin)
* [`email-builder plugins:inspect PLUGIN...`](#email-builder-pluginsinspect-plugin)
* [`email-builder plugins install PLUGIN`](#email-builder-plugins-install-plugin)
* [`email-builder plugins link PATH`](#email-builder-plugins-link-path)
* [`email-builder plugins remove [PLUGIN]`](#email-builder-plugins-remove-plugin)
* [`email-builder plugins reset`](#email-builder-plugins-reset)
* [`email-builder plugins uninstall [PLUGIN]`](#email-builder-plugins-uninstall-plugin)
* [`email-builder plugins unlink [PLUGIN]`](#email-builder-plugins-unlink-plugin)
* [`email-builder plugins update`](#email-builder-plugins-update)

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

## `email-builder plugins`

List installed plugins.

```
USAGE
  $ email-builder plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ email-builder plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.4/src/commands/plugins/index.ts)_

## `email-builder plugins add PLUGIN`

Installs a plugin into email-builder.

```
USAGE
  $ email-builder plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into email-builder.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the EMAIL_BUILDER_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the EMAIL_BUILDER_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ email-builder plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ email-builder plugins add myplugin

  Install a plugin from a github url.

    $ email-builder plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ email-builder plugins add someuser/someplugin
```

## `email-builder plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ email-builder plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ email-builder plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.4/src/commands/plugins/inspect.ts)_

## `email-builder plugins install PLUGIN`

Installs a plugin into email-builder.

```
USAGE
  $ email-builder plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into email-builder.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the EMAIL_BUILDER_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the EMAIL_BUILDER_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ email-builder plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ email-builder plugins install myplugin

  Install a plugin from a github url.

    $ email-builder plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ email-builder plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.4/src/commands/plugins/install.ts)_

## `email-builder plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ email-builder plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ email-builder plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.4/src/commands/plugins/link.ts)_

## `email-builder plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ email-builder plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ email-builder plugins unlink
  $ email-builder plugins remove

EXAMPLES
  $ email-builder plugins remove myplugin
```

## `email-builder plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ email-builder plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.4/src/commands/plugins/reset.ts)_

## `email-builder plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ email-builder plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ email-builder plugins unlink
  $ email-builder plugins remove

EXAMPLES
  $ email-builder plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.4/src/commands/plugins/uninstall.ts)_

## `email-builder plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ email-builder plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ email-builder plugins unlink
  $ email-builder plugins remove

EXAMPLES
  $ email-builder plugins unlink myplugin
```

## `email-builder plugins update`

Update installed plugins.

```
USAGE
  $ email-builder plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.4/src/commands/plugins/update.ts)_
<!-- commandsstop -->
