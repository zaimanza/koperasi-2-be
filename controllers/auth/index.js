var router = require('express').Router()

// split up route handling
router.use('/', require('./login.controller'))

module.exports = router