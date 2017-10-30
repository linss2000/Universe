import { combineReducers } from 'redux';
import authState from './authreducer';
import attribState from './attribreducer';
import attribTableState from './attribtablereducer';
import showDataState from './showdatareducer';
import forgotPWDState from './forgotpwdreducer';
import changePWDState from './changepwdreducer';

export default combineReducers({
   authState,
   attribState,
   attribTableState,
   showDataState,
   forgotPWDState,
   changePWDState
});

