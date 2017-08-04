import React, {Component} from 'react'
import {Link} from 'react-router'

class Header extends Component{
  render(){
    return (
      <header>
        {/* Link is JSX for HREF */}
        <h1><Link to={'/todos'}>ALL THEM TO-DO'S</Link></h1>
      </header>
    )
  }
}
export default Header
