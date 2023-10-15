// Dependencies ////////////////////////////////////////////
import express from 'express'

// Configuration ///////////////////////////////////////////
const PORT = process.env.PORT || 5163

// Web server setup ////////////////////////////////////////
const app = express()
//app.use(express.static('./public'))
  app.use(express.static('public'))
  app.set('views', 'pages')
  app.set('view engine', 'ejs')
  
  // Routes //////////////////////////////////////////////////
  app.get('/', function (req, res) {
    res.render('pages/index')
  })
  
  app.get('/about', function (req, res) {
    res.render('pages/about', { title: 'About' })
  })
  
  app.get('/test', function (req, res) {
    res.render('test')
  })
 
// Ready for browsers to connect ///////////////////////////
const displayPort = function () {
  console.log('Listening on ' + PORT)
}

app.listen(PORT, displayPort)
