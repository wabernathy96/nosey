import React from 'react';
import {Navbar, NavItem} from 'react-materialize';

const Nav = (props) => (
  <Navbar brand='Nose Picker' className='deep-purple lighten-3' right>
    <NavItem className='Title'>
      {props.children}
    </NavItem>
    <NavItem className='score'> 
      Score: {props.score}
    </NavItem>
    <NavItem>
      Highscore: {props.highscore}
    </NavItem>
  </Navbar>
);

export default Nav;

