require('dotenv').config()
const mongoose = require('mongoose')

const placeModel = require('../models/places')

mongoose.connect(process.env.MONGO_URI)
placeModel.deleteMany({})
    .then(() => {
        return placeModel.create([{
            name: 'H-Thai-ML',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Thai, Pan-Asian',
            pic: '/images/taylor-kiser-N7buN8Lv7uQ-unsplash.jpg',
            founded: 1989
        }, {
            name: 'Coding Cat Cafe',
            city: 'Phoenix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: '/images/taylor-kiser-zJR-P9dIGu8-unsplash.jpg',
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
