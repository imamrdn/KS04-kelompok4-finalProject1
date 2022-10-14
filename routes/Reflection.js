const router = require("express").Router()

//contoh penggunaan route 
//router.post('/register', users.register);
router.post('/api/v1/reflections')
router.get('/api/v1/reflections')
router.put('/api/v1/reflections/:id')
router.delete('/api/v1/reflections/:id')
