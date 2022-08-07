import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    title: String,
    author: String,
})

export default mongoose.model('Book', Schema);