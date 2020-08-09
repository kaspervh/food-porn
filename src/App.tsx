import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationMenu from './components/shared/NavigationMenu';
import Home from './components/Home';
import './App.css';

function App() {
  return (
   <Router>
     <Switch>
       <Route path='/' exact component={Home}/>
     </Switch>
   </Router>
  );
}

export default App;
