import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())

async function database() {
    console.log(process.env.PASSWORD)
     return await mongoose.connect('mongodb+srv://admin:'+process.env.PASSWORD+'@cluster0.i5dwy.mongodb.net/myDB?retryWrites=true&w=majority')
    .then(()=>console.log('Connected to database'))
    .catch(()=>console.log('Error connecting to DB'))
}

export default database