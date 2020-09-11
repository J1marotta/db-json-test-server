const axios = require('axios');
const cheerio = require('cheerio');

const engine = 'Google'
let page = 'Page01'

const url = `https://infotrack-tests.infotrack.com.au/${engine}/${page}.html`


function main() {
      
    axios.get(url)
      .then((res) => {


    const $ = cheerio.load(res.data)
      const all = $(".g")      
      const results = []
      const r2 = new Set()
      $("g").each((index, element) => {
        r2.add($(element).text());
      })


        console.log(
        results
        ,r2    
        )

    })
    .catch( e => {
      console.error('FAILED', {status: e.status, msg: e.message})

    })


  }


  main()