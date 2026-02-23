const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"], 
        unique: true,   // Prevents duplicate usernames
        trim: true,     // REMOVES MESS: " Dave " becomes "Dave" automatically
        minlength: 5    // Prevents "a" or "ab" as usernames
    },
    roles: {
        User: {
            type: Number,
            default: 2001
        },
        Editor: Number,
        Admin: Number
    },
    password: {
        type: String,
        required: true
        // select: false  <-- COMMENTED OUT FOR NOW (To avoid confusion in Login)
    },
    refreshToken: String // Keeping it simple (One device per user for now)
}, {
    timestamps: true // ADDS VALUE: Auto-adds 'createdAt' and 'updatedAt'
});

module.exports = mongoose.model('User', userSchema);