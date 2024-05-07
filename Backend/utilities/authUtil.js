import bcrypt from "bcrypt"

export const hashPassword= async(password)=>{
try {
    const saltrounds=10;
    const hashedPassword= await bcrypt.hash(password,saltrounds);
    return  hashedPassword;
}
catch(err){
  console.log('Password encrypt Error');
}
}

export const comparePassword= async(password,hashedPassword)=>{
      return bcrypt.compare(password,hashedPassword);
    }