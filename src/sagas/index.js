
import { all, actionChannel, call, put, take, takeEvery, takeLatest, select, cancel, cancelled, fork, race, apply } from 'redux-saga/effects'
import { delay, buffers, eventChannel, END } from 'redux-saga'
import * as _ from 'lodash'
import { types as authTypes } from './../reducers/authreducer'
import { types as attribTypes } from './../reducers/attribreducer'
import { types as attribTabTypes } from './../reducers/attribtablereducer'
import { types as showDataTypes } from './../reducers/showdatareducer'
import { types as forgotPWDTypes } from './../reducers/forgotpwdreducer'
import { types as changePWDTypes } from './../reducers/changepwdreducer'
import { types as headerTypes } from './../reducers/cdheaderreducer'
import  * as authSagas  from './authsaga'
import  * as attribSagas  from './attribsaga'
import  * as attribTableSagas  from './attribtablesaga'
import  * as showDataSagas  from './showdatasaga'
import  * as forgotPWDSagas  from './forgotpwdsaga'
import  * as changePWDSagas  from './changepwdsaga'
import  * as headersaga  from './cdheadersaga'


export default function* rootSaga () {
  try {
    //yield watchOnPings()
    yield [
        takeLatest([authTypes.SIGNUP_REQUEST,authTypes.LOGIN_REQUEST,authTypes.PASSWORD_RESET_REQUEST,authTypes.LOGOUT], authSagas.handleRequest),
        takeLatest([attribTypes.FETCH_TABLES_REQUEST,attribTypes.INSERT_REQUEST,attribTypes.DELETE_REQUEST,attribTypes.UPDATE_REQUEST], attribSagas.handleRequest),
        takeLatest([attribTabTypes.FETCH_TABLE_REQUEST,attribTabTypes.CANCEL_REQUEST,attribTabTypes.MAKE_ROW_EDITABLE,attribTabTypes.INSERT_REQUEST,attribTabTypes.DELETE_REQUEST,attribTabTypes.UPDATE_REQUEST], attribTableSagas.handleRequest),
        takeLatest([showDataTypes.FETCH_TABLE_REQUEST], showDataSagas.handleRequest),
        takeLatest([forgotPWDTypes.CHECK_EMAIL_REQUEST], forgotPWDSagas.handleRequest),
        takeLatest([changePWDTypes.UPD_PWD_REQUEST], changePWDSagas.handleRequest),
        takeLatest([headerTypes.FETCH_REQUEST], headersaga.handleRequest)    
        ];
    /*
    const requestChan = yield actionChannel(["FETCH_DATA_REQUEST", "UPDATE_ROW", "DELETE_ROW", "FETCH_USER_DATA"])
    while (true) {
        debugger;
        // 2- take from the channel
        const  payload  = yield take(requestChan)
        // 3- Note that we're using a blocking call
        yield call(handleRequest, payload)
    }
    */
} catch (e) {
console.log(e)
    //throw e;
}
  /*
  yield [
    takeEvery(authTypes.AUTO_LOGIN, authSagas.autoLogin),
    takeEvery(authTypes.SIGNUP_REQUEST, authSagas.signup),
    takeEvery(authTypes.LOGIN_REQUEST, authSagas.login),
    takeEvery(authTypes.PASSWORD_RESET_REQUEST, authSagas.resetPassword),
    takeEvery(authTypes.LOGOUT, authSagas.logout)

    //takeEvery(productTypes.GET_PRODUCTS_REQUEST, productSagas.getTickets)
  ]
  */
}