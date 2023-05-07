const express = require('express')

const router = express.Router()

const castController = require('../controllers/castController')

router.get('/all', castController.getCasts)




module.exports = router