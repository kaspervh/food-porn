import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationMenu from './components/shared/NavigationMenu';
import Home from './components/Home';
import Footer from './components/shared/Footer';
import Login from './components/Login';
import NewRecipe from './components/recipes/NewRecipe';
import ShowRecipe from './components/recipes/ShowRecipe';
import EditRecipe from './components/recipes/EditRecipe';
import Breakfast from './components/Breakfast';
import Lunch from './components/Lunch';
import Dinner from './components/Dinner';
import Dessert from './components/Dessert';
import Snacks from './components/Snacks';
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
            <Route path='/opskrifter/ny' exact component={NewRecipe}/>
            <Route path='/opskrifter/:recipeId' exact component={ShowRecipe}/>
            <Route path='/opskrifter/:recipeId/rediger' exact component={EditRecipe}/>
            <Route path='/morgenmad' component={Breakfast}/>
            <Route path='/frokost' component={Lunch}/>
            <Route path='/aftensmad' component={Dinner}/>
            <Route path='/desert' component={Dessert}/>
            <Route path='/snacks' component={Snacks}/>
          </Switch>
        </div>
      </Router>
      
      <Footer/>
    </div>
   
  );
}

export default App;
