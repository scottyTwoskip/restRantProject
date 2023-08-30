const router = require('express').Router()
const places = require('../models/places')

router.get('/', (req, res) => {

      
    res.render('places/index', {places})
})
router.get('/new', (req, res)=>{
  res.render("places/new")
})
router.get('/:id', (req, res)=>{
  res.send('hi')
  // res.render("places/new")
})

router.post('/', (req, res)=>{
  places.push(req.body)
  router.post('/', (req, res) => {
    console.log(req.body)
    // if (!req.body.pic) {
    //   req.body.pic = 'http://placekitten.com/400/400'
    // }
    // if (!req.body.city) {
    //   req.body.city = 'Anytown'
    // }
    // if (!req.body.state) {
    //   req.body.state = 'USA'
    // }
    res.send('POST /places')
  })
  
  res.redirect('/places')
})

module.exports = router