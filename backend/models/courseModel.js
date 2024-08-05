const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    videoId: {
        type: String,
    }
}, {
    timestamps: true  // Adds createdAt and updatedAt fields
});


const course = mongoose.model('Course',courseSchema);
module.exports = course