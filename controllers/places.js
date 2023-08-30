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
  res.redirect('/places')
})

module.exports = router