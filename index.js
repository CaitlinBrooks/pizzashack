let express = require('express')
let server = express()
let bp = require('body-parser')
let port = 3000


//Connect to db
require('./server-assets/db/mlab-config')

//Register Middleware
server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

//Routes
let pizzaRoutes = require('./server-assets/routes/pizza-routes')
// let drinkRoutes = require('./server-assets/models/drinks')


server.use('api/pizza', pizzaRoutes)
// server.use('api/drinks', drinkRoutes)



//starts server
server.listen(port, () => {
  console.log('Running on Port:', port)
})