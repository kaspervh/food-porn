import {combineReducers} from 'redux';
import CurrentUserReducer from './CurrentUserReducer';
import RecipesReducer from './RecipesReducer';

const allReducers = combineReducers({
  CurrentUserReducer,
  RecipesReducer,
})

export default allReducers;