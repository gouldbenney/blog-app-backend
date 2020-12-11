// modules
require('dotenv').config();
const express = require ('express');
const mongoose = require ('mongoose');
const path = require('path')

const userRoute = require('./src/routes/User')
const blogRoute = require('./src/routes/blog')


const gould = express();

// variable
const DBLink = process.env.dbLink;
const port = process.env.port;

mongoose.connect(DBLink, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true}, () => {
    gould.listen(port, () => {
        console.info('Gould is Listening')

    })
})

//middleware
gould.use(express.json())

//routes
app.use(userRoute)
app.use(blogRoute)

app.use(express.static(path.join(__dirname,'build')))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


