import { combineReducers } from 'redux';

import pokemons from './pokemons';
import users from './users';

const appReducer = combineReducers({
  pokemons,
  users
});

export default appReducer;