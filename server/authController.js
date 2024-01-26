const { User }  = require('./models/models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { secret } = require('./config')

const { validationResult } = require('express-validator')

const generateJwt = (id, username, role) => {
    const payload = {
       id,
       username,
       role
    }
   return jwt.sign(
        payload, secret, {expiresIn: '24h'}
    )
}


class authController {
    async registration(req, res){
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({message: 'Ошибка при регистрации', errors})
            }
            const {username, password, role} = req.body;
            const candidate = await User.findOne({
                where: { username }
            })
            if (candidate) {
                return res.status(400).json({message: "Пользователь с таким именем уже существует"})
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const user = await User.create({username, role: 'technician', password: hashPassword})
            const token = generateJwt(user.id, user.username, user.role)
            return res.json({token})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
    }

    async login(req, res){
        try {
            const { username, password } = req.body
            const user = await User.findOne({where: {username}})
            if(!user){
                return res.status(400).json({message: `Пользователь ${username} не найден`})
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if(!validPassword){
                return res.status(400).json({message: `Указан неверный пароль`})
            }
            const token = generateJwt(user.id, user.username, user.role)
            return res.json({token})
        } catch (e){
            console.error("Ошибка во время входа:", e);
            res.status(400).json({message: 'login err'})
        }
    }

    async getUsers(req, res){
        try {
            const users = await User.findAll()
            res.json(users)
            res.json('server work')
        } catch (e){

        }
    }
}

module.exports = new authController()