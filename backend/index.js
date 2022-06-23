import express from "express";
import cors from 'cors';
import router from "./Route/route.js";
import Connection from "./DB.js";
import dotenv from "dotenv";
import morgan from 'morgan'

const app=express();
dotenv.config()
app.use(cors());

const PORT=process.env.PORT
const username=process.env.USERNAME
const password=process.env.PASSWORD

// Middlewares
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

Connection(username,password);

// Router
app.use('/', router)
app.listen(PORT, ()=>console.log(`Server is running at PORT: ${PORT}`) )