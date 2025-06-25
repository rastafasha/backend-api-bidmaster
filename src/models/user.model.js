import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        trim:true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    role: { type: String, require: true, default: 'viewer' },
    socialLogin: { type: String, require: false },
    firstname: { type: String, require: false },
    lastname: { type: String, require: false },
    phone: { type: String, require: false },
    verified: { type: String, require: false },
    skills: { type: String, require: false },
    partnerCompany: { type: String, require: false },
    isAsociado: { type: Boolean, require: false, default: false },
},{
    timestamps:true
})

export default mongoose.model('User', userSchema);