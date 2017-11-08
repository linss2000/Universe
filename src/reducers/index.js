import { combineReducers } from 'redux';
import authState from './authreducer';
import attribState from './attribreducer';
import attribTableState from './attribtablereducer';
import showDataState from './showdatareducer';
import forgotPWDState from './forgotpwdreducer';
import changePWDState from './changepwdreducer';
import headerState from './cdheaderreducer';
import cadetSearchState from './cadetsearchreducer';
import cadetDetailsState from './cadetdetailsreducer';
import notificationState from './notificationsreducer';

export default combineReducers({
   authState,
   attribState,
   attribTableState,
   showDataState,
   forgotPWDState,
   changePWDState,
   headerState,
   cadetSearchState,
   cadetDetailsState,
   notificationState
});

