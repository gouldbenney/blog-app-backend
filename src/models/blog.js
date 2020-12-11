const mongoose = require ('mongoose')

const blogSchema = new mongoose.Schema({
    titile: {
        type: String,
        unique: true,
        required: [true, 'Title is required']
    },
    author:{
         type: String,
         required: [true, 'Author is required']
    },
    body:{
        type: String,
        required: [true, 'Body is required']
        },
        social: {
            type: [
                {
                _id:0,
                google: {
                    type: String,
                    required: [true, 'Goggle is required']
                },
                linkedIn:{
                    type: String
                },
                website:{
                    type: String
                }
            }
            ],
            required: [true, 'Social media links is required'],
            default: undefined
        },
        like:{
            type: Number,
            default: 0
        },
        date:{
            type: Date.now
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
const Blog = mongoose.model('blog', blogSchema)
module.exports = Blog