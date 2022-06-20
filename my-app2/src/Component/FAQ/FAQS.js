import React, {useState} from 'react'
import {faqsData} from "./Data"
import FAQ from "./FAQ"
import styles from './faqs.module.css'

const FAQS = () => {
    const [faqs , setFaqs] = useState(faqsData)
  return (
    <main className={styles.container}>
        <section className={styles.faqs}>
            <h1>FAQS</h1>
            {faqs.map(faq => <FAQ key = {faq.id} {... faq}/>) }
        </section>
    </main>
  )
}

export default FAQS
