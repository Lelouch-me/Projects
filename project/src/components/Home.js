import React,{useState} from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'
import {v4 as uuidv4} from "uuid"
import style from './home.module.css'


const Home = () => {

  const [todos, setTodos] = useState([])
const handleTodo = (todo) => {
  setTodos((prevTodo) => {
    return [...prevTodo, {id: uuidv4(), todo}]
  })
}

const handleRemove=(id) =>{
 
  setTodos((prevTodos) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id)
    return filteredTodo
  })
  
}

  return (
    <div className={style.container}>
        <h1 style={{color : 'white'}}>Todos</h1>
        <NewTodo onAdd={handleTodo} />
      <Todos todos={todos} onRemove={handleRemove}/>
    </div>
  )
}

export default Home
