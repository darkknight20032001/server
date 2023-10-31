
const mongoose = require('mongoose');
const filmListsSchema = new mongoose.Schema(
    {
        'filmPreSignedUrl': {
            type: String,
            required: true
        },
        'uploadedBy': {
            type: String,
            required: true
        },
        'filmTitle': {
            type: String,
            // required: true
        },
        'filmInfo':{
            type: String,
            // required: true
        }
    }
)

const FilmLists = mongoose.model('FilmLists',filmListsSchema);
module.exports = FilmLists;
