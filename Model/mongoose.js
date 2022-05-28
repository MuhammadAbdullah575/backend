import mongoose from "mongoose";

const roomschema=new mongoose.Schema({
    roomdescription:String,
    roomno:Number,
    floorno:Number,
    roomtype:String,
    roomcapacity:Number,
    roomstatus:String,
    roomprice:Number,

})


export default mongoose.model('Room',roomschema);