import { combineReducers } from 'redux';
import authState from './auth';
import attribState from './attrib';
import attribTableState from './attribtable';

export default combineReducers({
   authState,
   attribState,
   attribTableState
});

