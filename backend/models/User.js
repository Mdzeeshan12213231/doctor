const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    loginCount: { type: Number, default: 0 } // Track login count
});

module.exports = mongoose.model("User", UserSchema);
