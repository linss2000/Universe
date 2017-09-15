import { all, actionChannel, call, put, take, takeEvery, takeLatest, select, cancel, cancelled, fork, race, apply } from 'redux-saga/effects'
import { delay, buffers, eventChannel, END } from 'redux-saga'
import * as _ from 'lodash'
import * as io from 'socket.io-client';
import { types as authTypes } from 'reducers/auth';

//import { push } from 'react-router-redux';

const authApi = {
    register(userData) {
        debugger;
        return fetch("http://hvs.selfip.net:4000/reactlogin/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'TTUSO',
                password: 'HNNTD2W3',
                //name      : userData.name,
                //email     : userData.email,        
            })
        })
            .then(statusHelper)
            .then(response => response.json())
            .catch(error => error)
        //.then(data => data)
    },

    login(userData) {
        debugger;
        console.log(userData.user)
        console.log(userData.password)
        return fetch("http://hvs.selfip.net:3003/loginsvc/", {
        //return fetch("http://hvs.selfip.net:4000/reactlogin/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usr: userData.user,
                pwd: userData.password
            })
        })
            .then(statusHelper)
            .then(response => response.json())
            .catch(error => error)
    },

    loadTO(userData) {
        debugger;        
        //console.log(userData.password)
        return fetch("http://hvs.selfip.net:3003/toLoadSvc/", {
        //return fetch("http://hvs.selfip.net:4000/reactlogin/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + userData.token
            },
            body: JSON.stringify({
                usr: "",
                pwd: ""
            })
        })
            .then(statusHelper)
            .then(response => response.json())
            .catch(error => {
                debugger;
                console.log(error);
                error
                /*
                console.log( JSON.parse(error.status));
                var retObj = {};
                retObj.status = JSON.parse(error.status);
                retObj.statusText =JSON.parse(error.statusText);
                return retObj
                */
            })
    }
    //.then(data => data)
};

function statusHelper(response) {
    if(!response.ok){
        throw Error(response.statusText);
    }
    return response;
}

function* login(userData) {
    debugger;
    try {
        //yield call(delay, 5000)
        console.log(userData.payload.user)
        console.log(userData.payload.password)
        //yield put({ type: authTypes.LOGIN_REQUEST, isLoading: false })
        const resultObj = yield call(authApi.login, userData.payload)
        sessionStorage.setItem('token', JSON.parse(resultObj).token);
        yield put({ type: authTypes.MESSAGE, message: JSON.parse(resultObj).message })
        //yield put({ type: "LOGIN_STATUS", message: JSON.parse(resultObj).token })
    } finally {
        debugger;
        if (yield cancelled())
            yield put({ type:authTypes.MESSAGE, message: 'Task Cancelled' })
    }
}

function* loadTO(userData) {
    debugger;
    try {
        //yield call(delay, 5000)
        console.log("saga s" + userData.token)
        //console.log(userData.password)
        //yield put({ type: "ITEMS_IS_LOADING", isLoading: false })
        const resultObj = yield call(authApi.loadTO, userData)
        debugger;
        console.log(resultObj);
        if (resultObj !== null && resultObj !== undefined) {        
            sessionStorage.setItem('token', JSON.parse(resultObj).token);
            //yield put({ type: "LOGIN_STATUS", message: JSON.parse(resultObj).message })
            yield put({ type: "LOGIN_STATUS", message: JSON.parse(resultObj).message })            
        } else {
            //yield put({ type: "LOGIN_STATUS", message: JSON.parse(resultObj).message })
            yield put({ type: "LOGIN_STATUS", message: "Unauthorized"})
        }
    } finally {
        debugger;
        if (yield cancelled())
            yield put({ type: "LOGIN_STATUS", message: 'Task Cancelled' })
    }
}


export function* handleRequest(action) {
    debugger;
    console.log('authSaga request', action)
    console.log(action.payload)
    //yield put({ type: "ITEMS_IS_LOADING", isLoading: true });
    //yield call(updateStatus);
    try {
        switch (action.type) {
            case 'FETCH_TO_DATA': {
                const fetchTO = yield fork(loadTO, action.payload)
                break;
            }
            case authTypes.LOGIN_REQUEST: {

                //yield all([put({ type: "LOGIN_STATUS", message: '' }), put({ type: "ITEMS_IS_LOADING", isLoading: true })])
                debugger;
                const fetchTask = yield fork(login, action.payload)
                debugger;
                break;
            }
            

            default: {
                return null;
                break;
            }
        }
    } catch (e) {
        yield put({ type: authTypes.LOGIN_FAILURE, error: e })
    }
}



