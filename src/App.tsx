import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationMenu from './components/shared/NavigationMenu';
import Home from './components/Home';
import Footer from './components/shared/Footer';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <NavigationMenu/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/login' exact component={Login}/>
          </Switch>
        </div>
      </Router>
      
      <Footer/>
    </div>
   
  );
}

export default App;
