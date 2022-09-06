const router = require("express").Router();
const controller = require('../controller/index')

router.post('/getAllProducts',controller.getAllProduct)
router.post('/createProduct',controller.createProduct)
module.exports = router