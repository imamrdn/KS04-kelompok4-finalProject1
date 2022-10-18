const router = require("express").Router()
const {verify} = require('../midleware/authentication')
const controllerReflections = require('../controller/controllerReflections')
//contoh penggunaan route 
router.use(verify)
router.post('/reflections', controllerReflections.createReflections)
router.get('/reflections', controllerReflections.selectAllReflections)
router.get('/refelections/:id', controllerReflections.selectByIdReflections)
router.put('/reflections/:id', controllerReflections.updateReflections)
router.delete('/reflections/:id', controllerReflections.deleteReflections)

module.exports = router
