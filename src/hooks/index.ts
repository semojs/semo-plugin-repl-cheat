
import { getSheet } from '../common/sheet'

export = (Utils) => {
  return {
    hook_repl_command: new Utils.Hook('semo', () => {
      return {
        sheet: {
          help: 'Get commands help information from cheat.sh',
          async action(input) {
            if (!input) {
              Utils.warn('keyword is required')
            } else {
              // @ts-ignore
              this.clearBufferedCommand()
              let opts = Utils.yParser(input)
              let keyword = opts._.join(' ')

              await getSheet(keyword, opts)

               // @ts-ignore
              this.displayPrompt()
            }
          }

        }
      }
    })
  }
}