import userModel from "../models/usermodel.js";
import { hashPassword } from "../utilities/authUtil.js";
const registerController= async(req,res)=>{
   try{
    const{name,email,password,phone,address}=req.body;
    if(!name){
        return res.send({error:"Name is required"})
    }
     if(!email){
        return res.send({error:"Email is required"})
    }
     if(!password){
        return res.send({error:"password is required"})
    }
     if(!phone){
        return res.send({error:"phone is required"})
    }
     if(!address){
        return res.send({error:"address is required"})
    }
    
      const puser =userModel.findOne({email:email});
      if(puser){

          console.log(puser);
           return res.status(200).send({
            success:true,
            message:"Already regestered"
        })
      }
    

    const hashedPassword =await hashPassword(password);

    const user =new userModel({name,email,phone,address,password:hashedPassword}).save();
    res.status(201).send({
        sucess:true,
        message:"user registerd Sucessfully"
    })
    
   }
   catch(err){
    console.log("error in register Controller");
    res.status(500).send({
        success:false,
        message:"Error in regitration friend"
    })
   }
}


export default registerController;