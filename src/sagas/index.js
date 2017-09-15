
import { all, actionChannel, call, put, take, takeEvery, takeLatest, select, cancel, cancelled, fork, race, apply } from 'redux-saga/effects'
import { delay, buffers, eventChannel, END } from 'redux-saga'
import * as _ from 'lodash'
import { types as authTypes } from '../reducers/auth'
//import { types as productTypes } from 'reducers/product'
import  * as authSagas  from './auth'
//import  * as productSagas  from './product'

export default function* rootSaga () {
  try {
    //yield watchOnPings()
    yield [
        takeLatest([authTypes.SIGNUP_REQUEST,authTypes.LOGIN_REQUEST,authTypes.PASSWORD_RESET_REQUEST,authTypes.LOGOUT], authSagas.handleRequest)
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
    throw e;
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