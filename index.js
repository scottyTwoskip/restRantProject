require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('Home')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 page</h1>')
})
app.listen(process.env.PORT)