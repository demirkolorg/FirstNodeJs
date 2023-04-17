const express = require('express')
const { getAll, getDetail, Create, Update, Delete, Search } = require('../controllers/post')
const auth = require('../middlewares/auth')

const router = express.Router()

router.get('/getAll', getAll)
router.get('/getDetail/:id', getDetail)
router.post('/create',auth, Create)
router.patch('/update/:id',auth, Update)
router.delete('/delete/:id',auth, Delete)
router.get('/search', Search)

module.exports = router
