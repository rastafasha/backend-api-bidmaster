import mongoose from "mongoose";

const projectTypeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
}, {
    timestamps:true
});

export default mongoose.model("ProjectType", projectTypeSchema);  