const router = require("express").Router()
const {verify} = require('../middlewares/authentication')
const controllerReflections = require('../controllers/ReflectionController')
//contoh penggunaan route 
router.use(verify)
router.post('/reflections', ReflectionController.createReflections)
router.get('/reflections', ReflectionController.selectAllReflections)
router.put('/reflections/:id', ReflectionController.updateReflections)
router.delete('/reflections/:id', ReflectionController.deleteReflections)

module.exports = router
