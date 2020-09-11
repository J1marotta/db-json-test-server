const jsonServer  = require('json-server')
const server      = jsonServer.create()
const router      = jsonServer.router(require('./db.js'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, function () {
  console.log('JSON Server is running at local host 3000')
  console.log('use /google/PageNumber for google Results')
  console.log('And /bing/PageNumber for bing Results')

})