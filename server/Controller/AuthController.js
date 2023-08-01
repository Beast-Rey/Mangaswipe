const UserModel = require("../Model/UserModel")
const bcrypt = require('bcrypt')

const CreateUser = async(req, res) => {
    const {email, ...body} = req.body
    try {
       const findUser = await UserModel.findOne({email})
       if(findUser) {
        return res.status(203).json({message: "user already exist!!"})
       }
       const user = await UserModel.create({
        email,
        ...body
       })
       const {password, ...newUser} = user._doc
       return res.status(200).json({
        message: "Success",
        data: newUser
       })
    } catch (error) {
        console.log(error)
    }
}


const LoginUser = async(req, res) => {
    const {email, password} = req.body
    try {
       const findUser = await UserModel.findOne({email})
       if(!findUser) {
        return res.status(203).json({message: "Invalid user email!!"})
       }
       const comparePassword = await bcrypt.compare(password, findUser.password)
       if(!comparePassword) {
        return res.status(203).json({message: "Something went wrong!!"})
       }

       return res.status(200).json({
        message: "Success",
        data: findUser
       })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    CreateUser,
    LoginUser
}