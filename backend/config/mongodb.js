import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log("Database Connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)

}
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    loginCount: { type: Number, default: 0 } // Track login count
});
export default connectDB;
//export default mongoose.model("User", UserSchema);

// Do not use '@' symbol in your databse user's password else it will show an error.