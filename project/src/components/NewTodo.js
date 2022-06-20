import React, {useState} from 'react'
import styles from './NewTodo.module.css'

const NewTodo = (props) => {

  const [todo, setTodo] = useState({title:"", desc: ""})
  
  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return {...oldTodo,[name]: event.target.value}
    })
  }
  const {title, desc} = todo
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAdd(todo);
    setTodo({title: "", desc: ""})
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["form-field"]}>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" value={title} onChange={handleChange}/>
      </div>
      <div className={styles["form-field"]}>
          <label htmlFor="desc">Desc: </label>
          <textarea type="text" name="desc" id="desc" value={desc} onChange={handleChange}/>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo
