import mongoose,{Schema} from "mongoose";

const userSchema= new Schema({
   name:{
    type :String,
   required: true,
    trim:true
   },
   email:{
    type :String,
    required: true,
    unique:true
   },
    phone:{
    type :String,
    required: true,
   },
   address:{
    type :String,
    required: true,
   },
   role:{
   type :String,
   default:0
   }
},{timestamps:true})


  const user= mongoose.model('user',userSchema);
  export default user;