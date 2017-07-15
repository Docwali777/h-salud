import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators }from 'redux'

//actions
import {userRegistration} from '../../../actions/userAuth'

class Register extends Component{
constructor(props){
  super(props)

  this.state = {
    Username: '',
    Password: '',
    ConfirmPassword: '',
    Email: ''
  }
}

onChange =(e) =>{
  this.setState({[e.target.name]: e.target.value})
console.log(this.state);
}

submit =(e) =>{
  e.preventDefault()
  this.props.userRegistration(this.state)
}

  render(){
    return(
  <div className='container'>
    <div className='page-header'>
        <h1> Register </h1>
    </div>

    <form onSubmit={this.submit} >

<div className='form-group'>
  <label>Username</label>
  <input
      className='form-control'
      name='Username'
      type='text'
      value={this.state.Username}
      placeholder='Enter Username'
      onChange={this.onChange}
  />
</div>

{/*  */}

<div className='form-group'>
  <label>Email</label>
  <input
      className='form-control'
      name='Email'
      type='password'
      value={this.state.Email}
      placeholder='Enter Email'
      onChange={this.onChange}
  />
</div>

{/*  */}

<div className='form-group'>
  <label>Password</label>
  <input
      className='form-control'
      name='Password'
      type='password'
      value={this.state.Password}
      placeholder='Enter Password'
      onChange={this.onChange}
  />
</div>

<div className='form-group'>
  <label>ConfirmPassword</label>
  <input
      className='form-control'
      name='ConfirmPassword'
      type='password'
      value={this.state.ConfirmPassword}
      placeholder='Enter ConfirmPassword'
      onChange={this.onChange}
  />
</div>


<button  className='btn btn-primary'>Submit</button>
    </form>
  </div>
    )
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    userRegistration
  }, dispatch)
}
export default connect(null, mapDispatchToProps)(Register)
