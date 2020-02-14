import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form'

class LoginForm extends Component {
    // constructor(props){
    //   super(props)
    // }
    render() {
        return (
          // redux form은 무조건 onsubmit eventhandler를 해당 이름으로 받음.
              <form onSubmit={this.props.handleSubmit}> 
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

export default reduxForm({
    form : 'contact'
})(LoginForm)
