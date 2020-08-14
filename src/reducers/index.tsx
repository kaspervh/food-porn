import {combineReducers} from 'redux';
import CurrentUserReducer from './CurrentUserReducer';

const allReducers = combineReducers({
  CurrentUserReducer,
})

export default allReducers;