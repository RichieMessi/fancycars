const       express                = require('express'),
            Cars                   = require('../models/cars'),
            router                 = express.Router()

const       inStock                = { 'Available': 'In Dealership'},
            outOfStock             = { 'Out of Stock': 'Unavailable'}

// Check Availability
router.get('/', (req, res) => {
    let demoArray = Array.from(Cars)
      Cars.map((i) => {
      if(i.id === req.query.id){
        i.availability === true ?  res.send(inStock) : res.send(outOfStock)
        } else if(req.query.id > 10) {
            res.send('Forbidden')
          } 
        })
      })


module.exports = router