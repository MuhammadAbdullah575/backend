import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './Routes/router.js';
const app=express()
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/',router);


//connect database with mongoose 
/* mongodb+srv://Baqir:NB8Cwp4JAdXERMHl@cluster0.f4rcm.mongodb.net/hotelBooking */
/*mongodb+srv://Baqir:NB8Cwp4JAdXERMHl@cluster0.f4rcm.mongodb.net/?retryWrites=true&w=majority  */
mongoose.connect('mongodb+srv://Baqir:NB8Cwp4JAdXERMHl@cluster0.f4rcm.mongodb.net/hotelBooking',
{useNewUrlParser:true,useUnifiedTopology:true})

const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>{
    console.log('Connected to MongoDB...');
})


const port= process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
