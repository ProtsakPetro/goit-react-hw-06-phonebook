import { createStore, combineReducers } from 'redux';
import contactReducer from './contactReducer';

const rootReducer = combineReducers({
  contacts: contactReducer, 
});

const store = createStore(rootReducer);

export default store;




