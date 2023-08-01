const { Schema, model} = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = Schema({
    name: {
        type:String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    }
})

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 10)
    next()
})




const UserModel = model('User', userSchema)
module.exports = UserModel