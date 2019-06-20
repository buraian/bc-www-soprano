const express = require('express')
const logger = require('winston')


// Initialize
const ENV_PRODUCTION = process.env.NODE_ENV === 'production'
const app = express()

require('./config/app')(app)
require('./config/routes')(app, ENV_PRODUCTION)


// Listen
app.listen(app.get('port'), app.get('host'), error => {
    if (error) {
        logger.error(error)
    }
    else {
        logger.info(`Server listening @ ${app.get('host')}:${app.get('port')}`)
    }
})
