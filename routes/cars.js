const       express       = require('express')
const       router        = express.Router()
const       Cars           = require('../models/cars')
router.get('/', (req, res) => {
    res.send(Cars)
})


module.exports = router