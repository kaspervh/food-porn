import {combineReducers} from 'redux';
import CurrentUserReducer from './CurrentUserReducer';
import RecipesReducer from './RecipesReducer';
import AllRecipesReducer from './AllRecipesReducer';

const allReducers = combineReducers({
  CurrentUserReducer,
  RecipesReducer,
  AllRecipesReducer,
})

export default allReducers;