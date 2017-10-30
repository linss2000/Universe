import {
    all,
    actionChannel,
    call,
    put,
    take,
    takeEvery,
    takeLatest,
    select,
    cancel,
    cancelled,
    fork,
    race,
    apply
  } from "redux-saga/effects";
  import { delay, buffers, eventChannel, END } from "redux-saga";
  import * as _ from "lodash";
  import * as io from "socket.io-client";
  import { types as changePWDTypes } from "reducers/changepwdreducer";
  
  //import { push } from 'react-router-redux';
  
  const attribApi = {
    
    changePWD(userID,currPWD,newPWD) {
      debugger;
      //console.log(userData.user);
      //console.log(userData.password);
  
      //new Promise((resolve, reject) => {
      //return fetch("http://localhost:3003/changePWD/", {
        return fetch("http://hvs.selfip.net:3003/changePWD/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userID: userID,
            currPWD: currPWD,
            newPWD: newPWD
        })
      })
        .then(statusHelper)
        .then(response => response.json())
        .catch(error => error);
    }
    //.then(data => data)
  };
  
  function statusHelper(response) {
    debugger;
    if (!response.ok) {
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
      //throw Error(response);
    }
    return response;
  }
  
  function* changePWD(userID,currPWD,newPWD) {
    debugger;
    try {
      //yield call(delay, 5000)
      //yield put({ type: changePWDTypes.LOGIN_REQUEST, isLoading: false })
      const resultObj = yield call(attribApi.changePWD, userID,currPWD,newPWD);
  
      debugger;
      if (resultObj.response && !resultObj.response.ok) {
        debugger;
        yield put({
          type: changePWDTypes.MESSAGE,
          message: {val:-1,msg:resultObj.response.statusText}
        });
      } else {
        debugger;
        //sessionStorage.setItem("token", JSON.parse(resultObj).token);
        yield put({
          type: changePWDTypes.MESSAGE,
          message: JSON.parse(resultObj).result
        });
      }
      //yield put({ type: "LOGIN_STATUS", message: JSON.parse(resultObj).token })
    } catch (e) {
      /*
      debugger;
      let message;
      switch (error.status) {
        case 500:
          message = "Internal Server Error";
          break;
        case 401:
          message = "Invalid credentials";
          break;
        default:
          message = "Something went wrong! " + error.statusText;
      }
      */
      debugger;
      yield put({ type: changePWDTypes.MESSAGE, message: e });
    } finally {
      debugger;
      if (yield cancelled())
        yield put({ type: changePWDTypes.MESSAGE, message: "Task Cancelled" });
    }
  }
  
  
  export function* handleRequest(action) {
    debugger;
    console.log("changePwdSaga request", action);
    //console.log(action.payload);
    //yield put({ type: "ITEMS_IS_LOADING", isLoading: true });
    //yield call(updateStatus);
    try {
      switch (action.type) {
      
        case changePWDTypes.UPD_PWD_REQUEST: {
          //yield all([put({ type: "LOGIN_STATUS", message: '' }), put({ type: "ITEMS_IS_LOADING", isLoading: true })])
          debugger;
          const fetchTask = yield fork(changePWD, action.userID, action.currPWD, action.newPWD);
          debugger;
          break;
        }
  
        default: {
          return null;
          break;
        }
      }
    } catch (e) {
      yield put({ type: changePWDTypes.MESSAGE, error: e });
    }
  }
  