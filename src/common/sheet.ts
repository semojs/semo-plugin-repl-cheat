import got from 'got'

import { Utils } from '@semo/core'

export const getSheet = async (input, opts) => {
  try {
    const url = `https://cheat.sh/${input}`
    const response: any = await got(url, {
      headers: {
        'User-Agent': 'curl'
      }
    })

    Utils.consoleReader(response.body, {
      identifier: input,
      plugin: 'semo-plugin-repl-sheet'
    })

  } catch (e) {
    console.error(e.message)
  }
}