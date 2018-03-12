
const     express                 = require('express'),
          mongoose                = require('mongoose'),
          cors                    = require('cors'),
          app                     = express(),
          bodyParser              = require('body-parser'),
          path                    = require('path'),
          carRoute                = require('./routes/cars'),
          availabilityRoute       = require('./routes/availability'),
          port                    = process.env.PORT || 3000

// Middleware
app.use(bodyParser.json())
app.use(cors())

// Routes
app.use('/cars', carRoute)
app.use('/availability', availabilityRoute)

// Listen at port
app.listen(port, () => console.log(`Listening at port ${port}`))