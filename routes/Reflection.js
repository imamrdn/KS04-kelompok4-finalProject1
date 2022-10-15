const router = require("express").Router()
const midlewareUsers = require('../midleware/authentication')
//contoh penggunaan route 

router.post('/api/v1/reflections', midlewareUsers)
router.get('/api/v1/reflections', midlewareUsers)
router.put('/api/v1/reflections/:id', midlewareUsers)
router.delete('/api/v1/reflections/:id', midlewareUsers)

module.exports = router
