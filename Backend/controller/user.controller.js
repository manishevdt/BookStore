import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"
 
export const signup= async (req,res)=>{
    try{
        const {fullname,email,password} = req.body;  //We need fullname,email aur password from body
        const user = await User.findOne({email});  //In this we are finding user by email
        if(user){
            return res.status(400).json({message:"Email already exists"}) // if User email is availabe in db then return this
        }

        //password ko has krna hai
        const hashPassword = bcryptjs.hash(password,10)
        // IF user is email is not present then we create it and store all values
        const createdUser = new User({
      fullname:  fullname,
        email: email,
       password: password
       })

       //Data wi be aved in DB
      await  createdUser.save()
       res.status(200).json({messsage:"User created successfully"})
    }catch(error){
             console.log("Error:" + error.message)
             res.status(500).json({message:"Internal Server Error"})
    }
}

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body; //we are gettimg emailand password form body
        const  user = await User.findOne({email}) // we are finding email in db
        // const isMatch = password.compare(password,user.password) //Comparing password 
        if(!user ){                           // if user details are not matched
              return res.status(400).json({message:"Invalid credinals"})
        }
        else{
            res.status(200).json({message:"Login successfull",user:{ // id ,fullname,email values are store in db in user 
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("error"+error.message)
        res.status(500).json({message:"Internal server error"})
    }
}
