import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class Menu extends Component{
  render(){
    return(
      <Navbar inverse fixedTop className='nav'>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Salud/Os</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/about" >About</NavItem>

            </Nav>

            <Nav pullRight>
              <NavItem eventKey={1} href="/register" > Register</NavItem>
              <NavItem eventKey={2} href="/contact" >Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}
  export default Menu
