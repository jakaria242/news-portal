const router = require('express').Router()
const secuareApiMiddlewares = require('../middlewares/secureApiMiddlewares')
// const roleCheckMiddlewares = require('../middlewares/roleCheckMiddlewares')
const addNewsControllers = require('../controllers/addNewsControllers')



router.post('/api/add/news', secuareApiMiddlewares,  addNewsControllers)


module.exports = router