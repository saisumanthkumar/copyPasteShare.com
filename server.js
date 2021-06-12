const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const env = require('dotenv')
const codeschema = require('./code')
const PORT = process.env.PORT || 3001
const app = express()
env.config()

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log('DATABASE Connected'); })

app.use(express.json())
app.use(cors())

app.post('/addCode', (req, res) => {
    new codeschema({ code: req.body.code }).save().then(data => res.json(data._id))

})

app.post('/getCode', (req, res) => {
    codeschema.findById(req.body.id).then(data => res.json(data))
})


app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})