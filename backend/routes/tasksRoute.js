import express from 'express';
const router = express.Router();

import { getAlltasks, getTaskById, editTasks, deleteTodo,AddTask } from '../controllers/tasksController.js';
router.route('/')
    .get(getAlltasks)
    .post(AddTask )
router.route('/:taskId')
.get(getTaskById)
    .put(editTasks)
    .delete(deleteTodo)

export default router; 
