import React from 'react'
import Todo from './Todo'
import styles from './todos.module.css'

const Todos = (props) => {
  return <section className={styles.todos}>
      {
          props.todos.map((todo) => <Todo todo={todo.todo} key={todo.id}  id = {todo.id} onRemoveItem = {props.onRemove}/>)
      }
  </section>
}

export default Todos
