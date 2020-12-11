const mongoose = require('mongoose');
const bcrypt = require(bcrypt)
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        minLength: [10, 'minimum length should be 10'],
        maxLength: [14, 'minimum length should be 14'],
        unique: true,
        required: [true, 'Phone number is ewquired']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        minLength: 8,
        required: [true, 'Password is required']
    }
    },
    {
        timestamps: true,
        writeConcern: {
            w: 'majority',
            j: true,
            wtimeout: 1000
        }
    })

    //mongoose.model(nameOfCollection, nameOfSchema)
    const User = mongoose.model('user', userSchema)

    userSchema.pre('save', async function(next){

        const salt = bcrypt.genSalt()
        this.password = await bcrypt.hash(this.password, salt)

        next()
    })

   module.expoerts = User




