const mongoose = require('mongoose')

var CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    issue: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Course', CourseSchema);