import  'express-async-errors';
import express from 'express';
import taskRouter from './routes/tasksRoute.js';
import { notFound } from "./middlewares/notfound.js";
import dotenv from 'dotenv'
dotenv.config();
import {connectDB} from './connect.js'
const app = express();

app.use(express.json());
app.use('/api/tasks', taskRouter)
app.use(notFound);
const Port = process.env.port || 3012;
const start = async () => { 
    try {
        await connectDB(process.env.MONGO_URL)
        console.log('db connected');
        app.listen(Port, () => {

            console.log(`server running on port ${Port}`);
        })
    } catch (err) { 
        console.log(err)
    }
}
start();