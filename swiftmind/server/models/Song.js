import mongoose from 'mongoose';

const songSchema = mongoose.Schema({
    title: { type: String, required: true },
    album: { type: String, required: true },
    era: { type: String, required: true },
    mood: { type: [String], required: true },
    releaseYear: { type: Number, required: true },
}, { timestamps: true });

const Song = mongoose.model('Song', songSchema);
export default Song;
