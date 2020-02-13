import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form'

class LoginForm extends Component {
    
    render() {
        return (
           
              <form onSubmit={this.props.onSubmit}>
              <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
              </form>
         
        )
    }
}

LoginForm = reduxForm({
    form : 'contact'
})(LoginForm)

export default LoginForm