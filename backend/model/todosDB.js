import mongoose from 'mongoose';

const todosSchema = new mongoose.Schema({
    todoName: {
        type: String,
        required: [true, 'Task name is required']
    },
    TodoStatus: {
        type: String,
        enum: ['completed', 'notDone'],
        default: 'notDone'
    }
}, { timestamps: true }); 

const Todos = mongoose.model('Todo', todosSchema);
export default Todos;