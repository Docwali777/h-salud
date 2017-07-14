import React, { Component } from 'react'
import  { render } from 'react-dom'

import Menu from './components/Navigation/navigation'

class Client extends Component {
  render(){
    return(
      <div className='text-center'>
        <Menu />
      {this.props.children}
      </div>
    )
  }
}

export default Client
