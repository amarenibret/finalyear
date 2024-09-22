const express=require('express');
const app=express();
const port=8000;
const cookieParser=require('cookie-parser')
const dotenv=require('dotenv').config();
const mongoose=require('mongoose');

mongoose.connect(process.env.MONGO_URL)
         .then(()=>console.log('connected to database.'))
         .catch((err)=>console.log('does not connected to database',err))
app.use(cookieParser())
app.use(express.json());
app.use('/',require('./Routes/AuthRoutes'))

app.listen(port,()=>console.log('The server is running on ',port))