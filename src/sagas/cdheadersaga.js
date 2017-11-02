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
import { types as headertypes } from "reducers/cdheaderreducer";

//import { push } from 'react-router-redux';

const headerSaga = {
  
  renderHeader(loginUserData) {
    debugger;
    console.log(loginUserData.user);
  
      return fetch("http://hvs.selfip.net:3003/loginsvc/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        usr: loginUserData.user,
        pwd: loginUserData.password
      })
    })
      .then(statusHelper)
      .then(response => response.json())
      .catch(error => error);
  },

  
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

function* renderHeader(userData) {
  debugger;
 
    
 
}

  
  export function* handleRequest(action) {
    debugger;
    try {
      switch (action.type) {
      
        case headertypes.FETCH_REQUEST: {
          //yield all([put({ type: "LOGIN_STATUS", message: '' }), put({ type: "ITEMS_IS_LOADING", isLoading: true })])
          debugger;
          const imageBase64 = "base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25z";
           yield put({
            type: headertypes.ITEMS,
            items: [
                {
                user:'Sri',
                img:imageBase64
                }
            ]
        });
          
          break;
        }
  
        default: {
          return null;
          break;
        }
      }
    } catch (e) {
      yield put({ type: headertypes.MESSAGE, error: e });
    }
  }

