const express= require('express');
const router=express.router()

router.post('/register', register)
router.post('/login', login)

module.exports=router