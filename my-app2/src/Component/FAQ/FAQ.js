import React, {useState} from 'react'
import styles from './faq.module.css'

const FAQ = ({id, title, description}) => {
    const [toggle, setToggle] = useState(false);
  return (
    <article className={styles.faq}>
        <div>
            <h4>{title}</h4>
            <button onClick={()=>{setToggle(!toggle);}}>{toggle ? "-" : "+"}</button>
        </div>
        {toggle && <p>{description}</p>}
    </article>
  )
}

export default FAQ
