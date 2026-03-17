import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    favoriteSongs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
    chatHistory: [{
        question: String,
        answer: String,
        timestamp: { type: Date, default: Date.now }
    }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
