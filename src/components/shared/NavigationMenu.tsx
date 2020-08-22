import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {LogoutUserAction} from '../../actions/CurrentUserAction';
import '../../styles/NavigationMenu.css';

const NavigationMenu = () => {
  const dispatch = useDispatch();
  const currentUser:any = useSelector((state:any) => state.CurrentUserReducer);

  const signOut = () => {
    dispatch(LogoutUserAction());
  }

  return(
    <div className='navigation_body'>
      <div className="navigation_menu_left">
        <Link to='/' className='link'><h1>Food porn</h1></Link>
      </div>
      <div className="navigation_menu_right">
        {currentUser.length !== 0 ?
          <div style={{display: 'flex', height: '99px'}}>
            <Link to='/' className="link" onClick={(e:any) => signOut()}><div>Log ud</div></Link>
            <Link to='/opskrifter/ny' className="link">Opret opskrift</Link>
          </div>
          : ''
        }
        <Link to='/morgenmad' className="link">Morgemad</Link>
        <Link to='/frokost' className="link">Frokost</Link>
        <Link to='/aftensmad' className="link">Aftensmad</Link>
        <Link to='/desert' className="link">Desert</Link>
        <Link to='/snacks' className="link">Snacks</Link>
      </div>
    </div>
  )
}

export default NavigationMenu;