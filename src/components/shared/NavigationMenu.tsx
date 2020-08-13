import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/NavigationMenu.css';

const NavigationMenu = () => {
  return(
    <div className='navigation_body'>
      <div className="navigation_menu_left"></div>
      <div className="navigation_menu_right">
        <Link to='/' className="link">Morgemad</Link>
        <Link to='/' className="link">Frokost</Link>
        <Link to='/' className="link">Aftensmad</Link>
        <Link to='/' className="link">Desert</Link>
        <Link to='/' className="link">Snacks</Link>
      </div>
    </div>
  )
}

export default NavigationMenu;