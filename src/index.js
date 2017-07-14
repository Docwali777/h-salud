import React, { Component } from 'react'
import  { render } from 'react-dom'

import { Router, Route, IndexRoute, browserHistory} from 'react-router'

import Client from './client'
import Home from './components/pages/home'
import About from './components/pages/about'
import Contact from './components/pages/contact'
import Register from './components/pages/register'

render(
<Router history={browserHistory} >
  <Route path='/' component={Client} >
      <IndexRoute component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/register' component={Register} />
  </Route>
</Router>, document.getElementById('wali'))
