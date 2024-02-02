import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        min: 18,
        max: 65,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    
},
{
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

export default User;