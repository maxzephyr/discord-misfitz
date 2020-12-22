# discord-misfitz

<img src="https://misfitzgrid.com/members/images/logo5.png" />

## Description

Discord bot for [MisFitz Grid](https://misfitzgrid.com)'s Discord server. Based on [discord.js](https://discordjs.guide/#before-you-begin).


## Development

See the discord.js guide for [Installing Node.js and discord.js](https://discordjs.guide/preparations/). I recommend using [Visual Studio Code](https://code.visualstudio.com/) with the [ESLint](https://www.npmjs.com/package/eslint) linter.

To run locally, create a file `config.json` that contains a token for your test bot:

```json
{
  "prefix": "!",
  "token": "<token>",
  "onlineURL": "<optional url>"
}
```

then in the `discord-misfitz` directory run:

```bash
$ node index.js
```

### Important

Do not check in `config.json` into Git! We don't want to leak the bot's token :) There is an entry in `.gitignore` to ignore this file.
