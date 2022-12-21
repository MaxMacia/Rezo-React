const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const rezoUserSchema = mongoose.Schema({
    identifier: { type: String, unique: true, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true }
});

rezoUserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('RezoUser', rezoUserSchema);