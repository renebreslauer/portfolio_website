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
      <form id="contact_form" onSubmit={this.handleSubmit.bind(this)} method="POST">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email Address</label>
      <input type="email" className="form-control" aria-describedby="emailHelp" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea ClassName="form-control" rows="5"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

onNameChange(event) {
  this.setState({name: event.target.value})
}
onEmailChange(event) {
  this.setState({email: event.target.value})
}
onMessageChange(event) {
  this.setState({message: event.target.value})
}
handleSubmit(event) {
}
}

export default Form
