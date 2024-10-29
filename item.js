const express = require('express')
const controller = require('../../Backend/Controller/item')
const router = express.Router()

router.post('/add', controller.add)

router.get('/get/:id/', controller.get)

router.put('/update/:id/', controller.update)

router.delete('/delete/:id/', controller.delete)

module.exports = router