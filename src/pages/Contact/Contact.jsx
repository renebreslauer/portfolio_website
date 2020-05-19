import React from 'react'
import Form from '../../components/Form/Form'
import styles from './Contact.module.scss'

function Contact() {
  return (
    <>
      <div className={styles.contact_wrapper}>
        <div className={styles.header_field}>
          <div className={styles.typewriter}>
            <h2>Let's Chat</h2>
          </div>
        </div>
        <Form />
      </div>
    </>
  )
}
export default Contact
