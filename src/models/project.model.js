import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true,
        default: Date.now
        
    },
    partners:{
        type:Array,
        required:false,
        
    },
    // user:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"User",
    //     required:true
    // },
    type: { type: String, require: false },
    hasPresentation: { type: String, require: false },
    deliveryDate: { type: String, require: false },
}, {
    timestamps:true
});

export default mongoose.model("Project", projectSchema);  