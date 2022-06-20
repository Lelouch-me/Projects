import React ,{ useState } from 'react'


const NewTodo = (props) => {

const [todo, setTodo] = useState("");
const handleInput =(event) => {
  setTodo(event.target.value)
}

const handleSubmit=(event) => {
  event.preventDefault()
  props.onTodo(todo)
}

  return (
  <form onSubmit={handleSubmit}>
        <label htmlFor="todo"> New Todo:</label>
        <input type="text" name="todo" id="todo" value={todo} onChange={handleInput}/>
        <button> Submit</button>
  </form>
  )
}

export default NewTodo
