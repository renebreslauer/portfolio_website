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
      <div className="contact_container">
        {' '}
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
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                aria-describedby="emailHelp"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form-group">
            <textarea
              ClassName="form-control"
              placeholder="Message"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary"></button>
        </form>
      </div>
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
