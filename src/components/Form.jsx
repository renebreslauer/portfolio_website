import React from 'react'
import '../App.css'



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
        id="contact_form"
        onSubmit={this.handleSubmit.bind(this)}
        method="POST"
      >
        <div className="input_group">
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              className="name-control"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            className="message-control"
            aria-describedby="emailHelp"
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <textarea
            ClassName="form-control"
            placeholder="Message"
            rows="5"
          ></textarea>
        </div>
        <div class="buttons">
          <button type="submit" class="blob-btn">
            Submit{' '}
            <span class="blob-btn__inner">
              <span class="blob-btn__blobs">
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
                <span class="blob-btn__blob"></span>
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

