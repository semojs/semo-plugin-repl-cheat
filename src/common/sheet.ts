import got from 'got'

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import { Utils } from '@semo/core'

export const getSheet = async (input, opts) => {
  try {
    const url = `https://cheat.sh/${input}`
    const response: any = await got(url, {
      headers: {
        'User-Agent': 'curl'
      }
    })

    if (process.env.HOME) {
      const tmpPath = path.resolve(process.env.HOME, '.semo/cache/semo-plugin-repl-sheet/', Utils.md5(input))
      await Utils.fs.ensureDirSync(path.dirname(tmpPath))
      fs.writeFileSync(tmpPath, response.body)
      execSync(`cat ${tmpPath} | less -r`, {
        stdio: [0, 1, 2]
      })

      // Maybe the file already removed
      if (fs.existsSync(tmpPath)) {
        fs.unlinkSync(tmpPath)
      }

    } else {
      console.log((response.body))

    }


  } catch (e) {
    console.error(e.message)
  }
}