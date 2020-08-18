import React, {useState, useEffect} from 'react';
import {CurrentUserAction} from '../actions/CurrentUserAction'
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const currentUser = useSelector((state:any) => state.CurrentUserReducer);

  useEffect(() => {
    if(currentUser.length !== 0){
      history.push('/');
    }
  })

  const signIn = (e:any) => {
    e.preventDefault();
    dispatch(CurrentUserAction(email, password))
  }

  return(
    <div className="login-container">
      <div className="login-card">
        <h1>Log Ind</h1>
        <input type="text" className="login-input" value={email} onChange={(e:any) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" className="login-input" value={password} onChange={(e:any) => setPassword(e.target.value)} placeholder="Kodeord" />
        <button className="login-button" onClick={e => signIn(e)}>Log Ind</button>
      </div>
    </div>
  )
}

export default Login;