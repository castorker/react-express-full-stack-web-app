var mongoose = require('mongoose');

var QuibbleEntitySchema = {
    id: Number,
    text: String,
    category: String,
    favorite: Boolean
};

var QuibbleEntity = mongoose.model('QuibbleEntity', QuibbleEntitySchema, "quibbleEntities");

module.exports = QuibbleEntity;