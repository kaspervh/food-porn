import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
import '../../styles/NavigationMenu.css';

const NavigationMenu = () => {
  const currentUser:any = useSelector((state:any) => state.CurrentUserReducer);

  return(
    <div className='navigation_body'>
      <div className="navigation_menu_left">
        <Link to='/' className='link'><h1>Food porn</h1></Link>
      </div>
      <div className="navigation_menu_right">
        {currentUser.length !== 0 ?
          <div style={{display: 'flex', height: '99px'}}>
            <Link to='/' className="link">Log ud</Link>
            <Link to='/opskrifter/ny' className="link">Opret opskrift</Link>
          </div>
          : ''
        }
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