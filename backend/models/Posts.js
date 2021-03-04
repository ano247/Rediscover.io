const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    title: {
        type: String,
        required: true
    },
    insight: {
        type: String,
        required: true
    },
    tags: {
        type: [String]
    },
    thumb: {
        type: String
    },
    url: {
        type: String
    }

});

module.exports = mongoose.model('posts', postSchema);