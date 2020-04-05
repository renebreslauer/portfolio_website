import React, { Component } from 'react';
import styles from './Form.module.css'
import axios from 'axios';

class Form extends Component {

    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }

    formSubmit = (e) => {
      e.preventDefault()
    
      this.setState({
          buttonText: '...Sending'
      })
    
      let data = {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
      }
      
      axios.post('http://localhost:4444/api/v1', data)
      .then( res => {
          this.setState({ sent: true }, this.resetForm())
      })
      .catch( () => {
        console.log('Message not sent')
      })
    }
    resetForm = () => {
      this.setState({
          name: '',
          message: '',
          email: '',
          buttonText: 'Message Sent'
      })
  }
  
    render() {
        return(
          <form
          id={styles.contact_form}
          className="contact_form"
          onSubmit={ (e) => this.formSubmit(e)}
          method="POST"
        >
          <div className={styles.input_group}>
            <div className={styles.form_group}>
              <input
              id="name"
                type="text"
                placeholder="Name"
                className={styles.name_control}
                autoComplete="off"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value})} name="name"  type="text"  />
              
            </div>
          </div>
          <div className={styles.form_group}>
            <input
            id="email"
              type="email"
              placeholder="Email"
              className={styles.message_control}
              aria-describedby="emailHelp"
              autoComplete="off"
              value={this.state.email}
                 onChange={(e) => this.setState({ email: e.target.value})} name="email" type="email" required value={this.state.email} />
  
            
          </div>
  
          <div className={styles.form_group}>
            <textarea
              id="message"
              className={styles.message_input}
              type="text"
              placeholder="Message"
              rows="5"
                onChange={e => this.setState({ message: e.target.value})} name="message" value={this.state.message} required/>
            
          </div>
          <div className={styles.buttons}>
            <button type="submit" className={styles.blob_btn}>{this.state.buttonText}
            
              <span className={styles.blob_btn__inner}>
                <span className={styles.blob_btn__blobs}>
                  <span className={styles.blob_btn__blob}></span>
                  <span className={styles.blob_btn__blob}></span>
                  <span className={styles.blob_btn__blob}></span>
                  <span className={styles.blob_btn__blob}></span>
                </span>
              </span>
            </button>
          </div>
  
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  result="blur"
                  stdDeviation="10"
                ></feGaussianBlur>
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                  result="goo"
                ></feColorMatrix>
                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
              </filter>
            </defs>
          </svg>
        </form>
        );
    }
}

export default Form;













