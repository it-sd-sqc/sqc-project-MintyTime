// Dependencies ////////////////////////////////////////////
import express from 'express'

// Configuration ///////////////////////////////////////////
const PORT = process.env.PORT || 5163

// Web server setup ////////////////////////////////////////
const app = express()
// app.use(express.static('./public'))
app.use(express.static('public'))
app.set('views', 'pages')
app.set('view engine', 'ejs')

// Routes //////////////////////////////////////////////////
app.get('/', function (req, res) {
  const test = 'testing123'
  res.render('index', { test })
})

app.post('/', function (req, res) {
  const test = 'testing123'
  res.render('index', { test })
})

app.get('/about', function (req, res) {
  res.render('about', { title: 'About' })
})

app.get('/test', function (req, res) {
  res.render('test')
})

// Ready for browsers to connect ///////////////////////////
const displayPort = function () {
  console.log('Listening on ' + PORT)
}

app.listen(PORT, displayPort)
