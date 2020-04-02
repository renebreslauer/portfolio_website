import React from 'react'
import styles from './Form.module.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    return (
      <form
        id={styles.contact_form}
        onSubmit={this.handleSubmit.bind(this)}
        method="POST"
      >
        <div className={styles.input_group}>
          <div className={styles.form_group}>
            <input
              type="text"
              placeholder="Name"
              className={styles.name_control}
              autoComplete="off"
            />
          </div>
        </div>
        <div className={styles.form_group}>
          <input
            type="email"
            placeholder="Email"
            className={styles.message_control}
            aria-describedby="emailHelp"
            autoComplete="off"
          />
        </div>

        <div className={styles.form_group}>
          <textarea
            className={styles.form_control}
            placeholder="Message"
            rows="5"
          ></textarea>
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.blob_btn}>
            Submit{' '}
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
    )
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }
  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
  handleSubmit(event) {}
}

export default Form
