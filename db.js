const gpage1 = require('./googleResults/page01')
const gpage2 = require('./googleResults/page02')
const gpage3 = require('./googleResults/page03')


module.exports = ({
 google: {
  ...gpage1,
  ...gpage2
 }
})