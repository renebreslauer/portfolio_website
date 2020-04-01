import React from 'react'
import Form from '../components/Form'
import '../App.css'

function Contact() {
  return (
    <>
      <div className="contact_wrapper">
        <div className="header_field">
          <div className="typewriter">
            <h2>Let's Chat</h2>
          </div>
        </div>
        <Form />
      </div>
    </>
  )
}
export default Contact
