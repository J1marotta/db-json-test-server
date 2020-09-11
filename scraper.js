const axios = require('axios');
const cheerio = require('cheerio');

const engine = 'Google'
let page = 'Page01'

const url = `https://infotrack-tests.infotrack.com.au/${engine}/${page}.html`


function main() {
      
    axios.get(url)
      .then((res) => {


      const $ = cheerio.load(res.data);
      const all = $(".g").map(function() {
        return this.innerHTML;
      }).get();
      console.log({all})

    })
    .catch( e => {
      console.error('FAILED', {status: e.status, msg: e.message})

    })


  }


  main()