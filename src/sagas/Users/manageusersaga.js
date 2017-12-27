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
  import { types as UserTypes } from "reducers/Users/manageusersreducer.js";

  function insertUser(userData) {
    debugger;
    // return "Inserted successfully";
    var data = JSON.stringify({
        spName : "spi_UserDetails",
        parms : userData
      })
    return fetch("http://localhost:3003/ExecSP/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          spName : 'spi_UserDetails',
          parms : userData
      })
    })
      .then(statusHelper)
      .then(response => response.json())
      .catch(error => error);
  }

  function statusHelper(response) {
    debugger;
    if (!response.ok) {
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
    return response;
  }


  function* insertUserDetails(userData){
    try{
     debugger
      const resultMessage = yield call(insertUser, userData.user);
      if (resultMessage.response && !resultMessage.response.ok) {
        debugger;
        yield put({
          type: UserTypes.MESSAGE,
          message: resultMessage.response.statusText
        });
      } else {
        debugger;
        yield put({
            type: UserTypes.MESSAGE,
            message: {val :2, statusMsg :JSON.parse(resultMessage).result}
          });
   } }catch (e) {
    yield put({ type: UserTypes.MESSAGE, message: {val:-1, statusMsg:e} });
    }
    finally{
    }
  }

  export function* handleRequest(action) {
    debugger;
    try {
      switch (action.type) {
        case UserTypes.INSERT_REQUEST: {
          debugger;
          const fetchTask = yield fork(insertUserDetails, action.user);
          break;
        }    
        
        default: {
          return null;
          break;
        }
      }
    } catch (e) {
     console.log(e.message);
    }
  }
