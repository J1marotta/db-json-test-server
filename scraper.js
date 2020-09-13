const axios = require('axios')
const cheerio = require('cheerio')

async function main(mode) {
  const pages = ['Page01', 'Page02', 'Page03', 'Page04', 'Page05']

  const engine = {
    google: 'Google',
    bing: 'Bing'
  }

  const selectors = {
    google: ['.r a', '.g'],
    bing: ['.b_algo h2 a', '#b_results']
  }

  const results = []

  const currentEngine = engine[mode]

  await pages.map(async page => {
    const url = `https://infotrack-tests.infotrack.com.au/${currentEngine}/${page}.html`
    const currentSelector = selectors[mode]

    try {
      const res = await axios.get(url)
      const $ = cheerio.load(res.data)
      const selectors = $(currentSelector[0], currentSelector[1]).get()

      const href = 'https://www.infotrack.com.au'

      const targets = selectors.flatMap((x, i) =>
        $(x).attr('href').startsWith(href) ? [i] : []
      )
      results.push({ [page]: targets })
      console.log(results)
    } catch (e) {
      console.error('FAILED', { status: e.status, msg: e.message })
    }
  })
  return results
}

const fn = async () => await main('google')

fn()

// var href = 'https://www.infotrack.com.au'
// ('.g .r a').flatMap((x,i) => x.href.startsWith(href) ? [i] : [])

//$$('#b_results .b_algo h2 a').flatMap( (x,i) =>  x.href.includes('infotrack') ? [i] : [])
