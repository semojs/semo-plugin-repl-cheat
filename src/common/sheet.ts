import got from 'got'

export const getSheet = async (input, opts) => {
  try {
    const url = `https://cheat.sh/${input}`
    const response: any = await got(url, {
      headers: {
        'User-Agent': 'curl'
      }
    })
    console.log((response.body))

  } catch (e) {
    console.error(e.message)
  }
}