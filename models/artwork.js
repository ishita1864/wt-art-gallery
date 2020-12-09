const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtworkSchema = new Schema({
    "objectID": Number,
    "accessionYear": String,
    "primaryImageSmall": String,
    "constituentULAN_URL": String,
    "constituentWikidata_URL": String,
    "department": String,
    "title": String,
    "artistDisplayName": String
});

module.exports = mongoose.model('Artwork', ArtworkSchema);
