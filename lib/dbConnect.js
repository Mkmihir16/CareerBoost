import mongoose from "mongoose";

export const dbConnect=()=>{
    try{
        mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Db connected succesfully")
        ).catch((e)=>console.log("DB cannot connect"+e)
        )
    }
    catch(e){
        console.log("error at dbconnect.js"+e);
        
    }
}