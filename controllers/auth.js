const Auth = require('../models/auth')
const bcrypt=require('bcryptjs')
const jwt=require('jasonwebtoken')


const register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const user = await Auth.findOne({ email })

        if (user) {
            return res.status(500).json({ message: emailZatenVar })
        }
        if(passwords.length<6){
            return res.status(500).json({ message: parolaKisa })
        }

        const passwordHash=await bcrypt.hash(passwords,12)
        const newUser=await Auth.create(username,email,passwordHash)
        const userToken=await jwt.sign({id:newUser.id},process.env.SECRET_TOKEN,{expiresIn:'1h'})

        response.status(201).json({
            status:'OK',
            newUser,
            userToken
        })
        

    } catch (error) {
        return res.status(500).json({ message: registerGenelHata+": "+error.message })
    }
}


const login=async (req,res) => {
    try {
        const { email, password } = req.body
        const user = await Auth.findOne({ email })

        if(!user) {
            return res.status(500).json({ message: kullaniciBulunamadi })
        }

        const comparePassword =await bcrypt.compare(password,user.password)
        
        if(!comparePassword){
            return res.status(500).json({ message: parolanizYanlis })

        }

    } catch (error) {
        
    }
}