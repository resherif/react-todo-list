import  Todos  from './model/todosDB.js'
import dotenv from 'dotenv'
dotenv.config();
import { connectDB } from './connect.js'
const todoList = [
{
   
"todoName":"pagination ",
" TodoStatus":"notDone"

},
{
"todoName":"filtering ",
" TodoStatus":"notDone"
},
{
   
    "todoName":"sorting ",
" TodoStatus":"notDone"

},
{
    
    "todoName":"Error handling ",
" TodoStatus":"notDone"
},
{
    
    "todoName":"integration ",
" TodoStatus":"notDone"
}
]
export const populate = async ()=>{ 
    try {
        await connectDB(process.env.MONGO_URL);
        await Todos.create(todoList);
        console.log('todos added!');
        process.exit(0);
    } catch (err) { 
        console.log(err)
          process.exit(1);
    }
}
populate()