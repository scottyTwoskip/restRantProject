const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/taylor-kiser-N7buN8Lv7uQ-unsplash.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/taylor-kiser-zJR-P9dIGu8-unsplash.jpg'
      }]
      
    res.render('places/index', {places})
})
router.get('/new', (req, res)=>{
  res.render("places/new")
})
router.get('/:id', (req, res)=>{
  res.send('hi')
  // res.render("places/new")
})

module.exports = router