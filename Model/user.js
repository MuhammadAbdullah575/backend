import mongoose from "mongoose";
import Joi from 'joi';
var userSchema =mongoose.Schema({
    name: String,
    email:String,
    password:String,
    role:{
        type:String,
        default:"user"
    },
});
var User=mongoose.model("User",userSchema);

function  validateUserforSignUp(data){  //for sign up
    const schema=Joi.object({
        name: Joi.string().min(3).max(10).required(),
        email: Joi.string().email().min(3).max(10).required(),
        password: Joi.string().min(3).max(10).required(),
    });
    return schema.validate(data, {abortEarly:false});
}
function  validateUserforLogin(data){ ///for login
    const schema=Joi.object({
        email: Joi.string().email().min(3).max(10).required(),
        password: Joi.string().min(3).max(10).required(),
    });
    return schema.validate(data, {abortEarly:false});
}

export default mongoose.model('User',userSchema);
export const validate=validateUserforSignUp;
export const validatelogin=validateUserforLogin;