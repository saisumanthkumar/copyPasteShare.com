const mongoose = require('mongoose')

const codeschema = mongoose.Schema({
    code: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('code', codeschema)