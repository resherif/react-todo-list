import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormUser from './Component/Form/Form'
import { Route, Routes } from 'react-router-dom'
import TodoTasks from './Component/Tasks/TodoTasks'

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<FormUser />}/>
        <Route path='/ToDo' element={ <TodoTasks/>} />
      </Routes>
      
    </>
  )
}

export default App
