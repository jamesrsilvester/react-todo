import React from 'react'
import {Route} from 'react-router'
import App from '../App'
import TodosContainer from '../containers/TodosContainer'


// At path "/" render component App
// At path "/todos" render component TodosContainer
export default (
  <Route path='/' component={App}>
    <Route path='/todos' component={TodosContainer}/>
  </Route>
)
