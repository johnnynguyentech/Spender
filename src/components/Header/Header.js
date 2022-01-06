import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';

import './Header.css';

class Header extends Component {
  render () {
    return (
      <Aux>
        <br></br>
        <h1 className='app-title'>SPENDER</h1>
      </Aux>
    )
  }
}

export default Header;