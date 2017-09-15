import { combineReducers } from 'redux';
import authSate,{ items, itemsHasErrored, itemsIsLoading, message, ping } from './auth';
//import { reducer as routerReducer } from 'redux-tower';

export default combineReducers({
   // routerReducer,
   authSate,items, itemsHasErrored, itemsIsLoading, message, ping 
});

