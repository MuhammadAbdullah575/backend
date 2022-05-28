import express from 'express';
import mongoose from 'mongoose'
import User1 from '../Model/user.js';
import bcrypt from 'bcryptjs';
import _ from 'lodash';
import jwt from 'jsonwebtoken';

export const signup = async(req,res)=>{
    let user=await User1.findOne({email:req.body.email});
    if (user) return res.status(400).send("Email Already Exit");
   user =new User1();
  user.name=req.body.name;
  user.email=req.body.email;
  user.password=req.body.password;
  let salt=await bcrypt.genSalt(10);
  user.password=await bcrypt.hash(user.password,salt);
  await user.save();
  return res.send(_.pick(user,["name","email"]));

}

export const login=async(req,res)=>{
    let user=await User1.findOne({email:req.body.email});
    if (!user) return res.status(400).send("User Not Found");
    let isvalid=await bcrypt.compare(req.body.password,user.password);
    if(!isvalid) return res.status (401).send("Invalid Passsword");
    let token=jwt.sign({ _id: user._id, name: user.name},"someprivatekey");
    res.send(token);
}