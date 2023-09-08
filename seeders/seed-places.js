require('dotenv').config()
const mongoose = require('mongoose')

const placeModel = require('../models/places')

mongoose.connect(process.env.MONGO_URI)
placeModel.deleteMany({})
.then(()=>{
    return placeModel.create([{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/h-thai-ml-tables.jpg',
        founded: 1989
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-cat.jpg',
        founded: 2020
    }])
})

.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
