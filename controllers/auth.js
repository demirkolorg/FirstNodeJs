const Auth = require('../models/auth.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authStrings = require('../tools/MagicStrings/auth.js')

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body

        if (!username || !password || !email) {
            return res.status(500).json({ message: authStrings.register.zorunluAlanlarBos })
        }
        const emailCheck = await Auth.findOne({ email })
        const usernameCheck = await Auth.findOne({ username })

        if (emailCheck) {
            return res.status(500).json({ message: authStrings.register.emailZatenVar })
        }
        if (usernameCheck) {
            return res.status(500).json({ message: authStrings.register.usernameZatenVar })
        }
        if (password.length < 6) {
            return res.status(500).json({ message: authStrings.register.parolaKisa })
        }

        const passwordHash = await bcrypt.hash(password, 12)
        const newUser = await Auth.create({ username: username, email: email, password: passwordHash })
        const userToken = await jwt.sign({ id: newUser.id }, process.env.SECRET_TOKEN, { expiresIn: '1h' })

        return res.status(201).json({
            status: 'OK',
            message: authStrings.register.registerBasarili,
            newUser,
            userToken
        })


    } catch (error) {
        return res.status(500).json({ message: authStrings.register.registerGenelHata + ": " + error.message })
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await Auth.findOne({ email })

        if (!user) {
            return res.status(500).json({ message: authStrings.login.kullaniciBulunamadi })
        }

        const comparePassword = await bcrypt.compare(password, user.password)

        if (!comparePassword) {
            return res.status(500).json({ message: authStrings.login.parolanizYanlis })
        }

        const token = await jwt.sign({ id: user.id }, process.env.SECRET_TOKEN, { expiresIn: '1h' })
        return res.status(201).json({
            status: 'OK',
            message: authStrings.login.loginBasarili,
            user,
            token
        })

    } catch (error) {
        return res.status(500).json({ message: authStrings.login.loginGenelHata + ": " + error.message })
    }
}

module.exports = { register, login }