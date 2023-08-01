const { Schema, model} = require('mongoose')

const MangaSchema = new Schema({
    mangaTitle: String,
    alternativeTitle: [],
    mangaUrl: String,
    mangaImageUrl: String,
    description: [],
    likes: Number,
    rating: Number,
    type: String,
    views: Number,
    author: [],
    artist: [],
    genre: [],
    status: String,
    chapters: [],
    createdManga: Date,
    modifiedManga: Date,
    count: Number,
    likes: {
        type: Number,
        default: 10
    }

})


const Manga = model('Mangaswipe', MangaSchema)
module.exports = Manga