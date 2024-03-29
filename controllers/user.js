import User from "../models/User.js";

export const updateUser = async (req,res,next)=> { 
    try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        next(err);
      }
    }


export const deleteUser = async (req,res,next)=> {
    try {
        await User.findByIdAndDelete(req.params.id);
       res.status(200).json("User has been deleted");
   }catch(err) {
       next(err);
   }
}

export const getUser = async (req,res,next)=> {
    console.log(req.params.id); // add this console log to check the user id
    try {
        const user = await User.findById(req.params.id);
        console.log(user); // add this console log to check the user object
        res.status(200).json(user);
    }catch(err) {
        next(err);
    }
}

export const checkAdmin = async (req,res,next) => {
    try {
        const user = await User.findById(req.params.id);
        const isadmin = user.isAdmin;
        console.log(isadmin);
        res.json(isadmin);
        
    }
    catch(err) {
        return "User";
    }
}

export const getUsers = async (req,res,next)=> {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }catch(err) {
        next(err);
    }
    }

   