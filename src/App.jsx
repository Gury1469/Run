import React from 'react'
import Title from './Components/Title'
import AddToDo from './Components/AddToDo'
import ToDoList from './Components/ToDoList'

export default function App() {
const todoList=[
  {
    Name: "Computer",
    desc: "Computer is an electronic device",
  },
  {
    Name: "Software",
    desc: "Software is a set of insructions"
  }
]

  return (
    <>
    <div className='shadow p-3 mb-5 bg-body-tertiary rounded container'>
      <center>
        <Title/>
        <AddToDo/>
        <ToDoList item={todoList}/>
      </center>
    </div>
    </>
  )
}
