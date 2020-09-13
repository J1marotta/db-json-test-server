const axios = require('axios')
const cheerio = require('cheerio')

const engine = 'Google'
let page = 'Page01'

const url = `https://infotrack-tests.infotrack.com.au/${engine}/${page}.html`

function main() {
  axios
    .get(url)
    .then(res => {
      const $ = cheerio.load(res.data)
      const selectors = $('.r a', '.g').get()
      const results = []

      const href = 'https://www.infotrack.com.au'

      const targets = selectors.flatMap((x, i) =>
        $(x).attr('href').startsWith(href) ? [i] : []
      )

      console.log({
        targets
      })
    })
    .catch(e => {
      console.error('FAILED', { status: e.status, msg: e.message })
    })
}

main()

// var href = 'https://www.infotrack.com.au'
// ('.g .r a').flatMap((x,i) => x.href.startsWith(href) ? [i] : [])

//$$('#b_results .b_algo h2 a').flatMap( (x,i) =>  x.href.includes('infotrack') ? [i] : [])
