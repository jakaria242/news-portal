const router = require('express').Router()
const loginControllers = require('../controllers/loginControllers')
const addWriterControllers = require('../controllers/addWriterControllers')
const secuareApiMiddlewares = require('../middlewares/secureApiMiddlewares')
const roleCheckMiddlewares = require('../middlewares/roleCheckMiddlewares')

router.post('/api/login', loginControllers)
router.post('/api/news/add/writer', secuareApiMiddlewares, roleCheckMiddlewares, addWriterControllers)

module.exports = router