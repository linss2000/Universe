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
import { types as aeroleTypes } from "../reducers/aerolereducer";
import * as download from "downloadjs";

//import { push } from 'react-router-redux';

const attribApi = {
  exportToExcel(payload) {
    debugger;
    console.log(payload);
    //console.log(userData.password);
    //alert(payload.spName)
    //new Promise((resolve, reject) => {
    //return fetch("http://hvs.selfip.net:4003/ExportToExcel/", {
    return fetch("http://localhost:4003/ExportToExcel/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
        //responseType: 'blob'
      },
      body: JSON.stringify({
        spName:
          "select role_id,role_cat_id,role_name,role_desc,role_active from troledefinition",
        cols: [
          {
            caption: "Role ID",
            type: "number",
            width: 5
          },
          {
            caption: "Role Cat ID",
            type: "string",
            width: 15
          },
          {
            caption: "Role Name",
            type: "string",
            width: 50
          },
          {
            caption: "Role Desc",
            type: "string",
            width: 50
          },
          {
            caption: "Role Active",
            type: "string",
            width: 5
          }
        ]
      })
    })
      .then(statusHelper)
      .then(response => response.blob())
      .catch(error => error);
  },

  getRoleTable(roleID) {
    debugger;
    //console.log(userData.user);
    //console.log(userData.password);

    //new Promise((resolve, reject) => {
    return fetch("http://hvs.selfip.net:4003/ExecSP/", {
      //return fetch("http://localhost:4003/GetRoleTable/", {

      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        spName: "sps_getRoleScreenFunctions",
        token: sessionStorage.getItem("token"),
        parms: {
          roleID: roleID
        }
      })
    })
      .then(statusHelper)
      .then(response => response.json())
      .catch(error => error);
  },

  insRoleTable(userData) {
    debugger;
    //console.log(userData.user);
    //console.log(userData.password);

    //new Promise((resolve, reject) => {
    return fetch("http://hvs.selfip.net:4003/insRoleTable/", {
      //return fetch("http://hvs.selfip.net:4000/reactlogin/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        hv_table_i: userData.tableID,
        hv_universal_name: userData.value
      })
    })
      .then(statusHelper)
      .then(response => response.json())
      .catch(error => error);
  },

  chkRoleTable(role_id) {
    debugger;
    //console.log(userData.user);
    //console.log(userData.password);

    //new Promise((resolve, reject) => {
    return fetch("http://hvs.selfip.net:4003/ExecSP/", {
      //return fetch("http://hvs.selfip.net:4000/reactlogin/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        spName: "sps_checkRoleForUser",
        parms: {
          role_id: role_id
        }
      })
    })
      .then(statusHelper)
      .then(response => response.json())
      .catch(error => error);
  },

  delRoleTable(roleID) {
    debugger;
    //console.log(userData.user);
    //console.log(userData.password);

    //new Promise((resolve, reject) => {
    return fetch("http://hvs.selfip.net:4003/ExecSP/", {
      //return fetch("http://hvs.selfip.net:4000/reactlogin/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        spName: "spd_Role",
        parms: {
          roleID: roleID
        }
      })
    })
      .then(statusHelper)
      .then(response => response.json())
      .catch(error => error);
  },

  updRoleTable(userData) {
    debugger;
    //console.log(userData.user);
    //console.log(userData.password);

    //new Promise((resolve, reject) => {
    return fetch("http://hvs.selfip.net:4003/ExecSP/", {
      //return fetch("http://hvs.selfip.net:4000/reactlogin/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        spName: "spu_getRoleScreenFunctions",
        token: sessionStorage.getItem("token"),
        parms: {
          role_id: userData.role_id,
          role_name: userData.role_name,
          role_desc: userData.role_desc,
          userId: "sv",
          funcData: userData.functions
        }
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

function isJSON(str) {
  try {
    return (JSON.parse(str) && !!str);
  } catch (e) {
    return false;
  }
}

function* insertRoleTable(userData) {
  try {
    yield put({
      type: aeroleTypes.ITEMS,
      items: []
    });

    yield put({
      type: aeroleTypes.SELECTED_ROWID,
      rowID: -1
    });

    const resultObj = yield call(attribApi.insRoleTable, userData.payload);
    //debugger;
    if (resultObj.response && !resultObj.response.ok) {
      debugger;
      yield put({
        type: aeroleTypes.MESSAGE,
        message: { val: -1, msg: resultObj.response.statusText }
      });
    } else {
      //debugger;
      console.log(JSON.parse(resultObj).result);
      //const state = yield select();
      //debugger;
      const fetchTask = yield call(getRoleTable, {
        payload: { hv_table_i: userData.payload.tableID }
      });

      //debugger;
    }
  } catch (e) {
  } finally {
  }
}

function* updateRoleTable(userData) {
  try {
    /*
      yield put({
        type: aeroleTypes.ITEMS,
        items: []
      });
 
      yield put({
        type: aeroleTypes.SELECTED_ROWID,
        rowID: -1
      });
      */

    let resultObj = yield call(attribApi.updRoleTable, userData.payload);

    if (isJSON(resultObj)) {
      resultObj = JSON.parse(resultObj);
      if (resultObj.message != "ok") {
        //debugger;
        yield put({
          type: aeroleTypes.MESSAGE,
          message: { val: -1, msg: resultObj.result }
        });
      } else {
        //debugger;
        //console.log(JSON.parse(resultObj).result);
        sessionStorage.setItem("token", resultObj.token);
        if (userData.payload.mode == "A") {
          yield put({
            type: aeroleTypes.MESSAGE,
            message: { val: 1, msg: "Permissions were added." }
          });
        } else {
          yield put({
            type: aeroleTypes.MESSAGE,
            message: { val: 1, msg: "Permissions were updated." }
          });
        }
      }
    } else {
      yield put({
        type: aeroleTypes.MESSAGE,
        message: { val: -1, msg: resultObj }
      });
    }

  } catch (e) {
  } finally {
  }
}

function* deleteRoleTable(roleID) {
  try {
    /*
      yield put({
        type: aeroleTypes.ITEMS,
        items: []
      });
 
      yield put({
        type: aeroleTypes.SELECTED_ROWID,
        rowID: -1
      });
      */

    const resultObj = yield call(attribApi.delRoleTable, roleID);

    debugger;
    if (resultObj.response && !resultObj.response.ok) {
      debugger;
      yield put({
        type: aeroleTypes.MESSAGE,
        message: resultObj.response.statusText
      });
    } else {
      debugger;
      yield put({
        type: aeroleTypes.ITEMS,
        items: []
      });

      yield put({
        type: aeroleTypes.SELECTED_ROWID,
        rowID: -1
      });

      const resultObj = yield call(attribApi.getRoleTable, "");
      debugger;
      if (resultObj.response && !resultObj.response.ok) {
        debugger;
        yield put({
          type: aeroleTypes.MESSAGE,
          message: resultObj.response.statusText
        });
      } else {
        debugger;
        console.log(JSON.parse(resultObj).result);
        //sessionStorage.setItem("token", JSON.parse(resultObj).token);
        yield put({
          type: aeroleTypes.ITEMS,
          items: JSON.parse(resultObj).result
        });
      }
      /*
        console.log(JSON.parse(resultObj).result)
        const state = yield select();
        const newitems = state.roleleState.items.filter((itm) => _.trim(itm.hv_universal_i) !== _.trim(userData.payload.rowID));
 
        yield put({
          type: aeroleTypes.ITEMS,
          items: newitems
        });
        */
    }
  } catch (e) {
  } finally {
  }
}

function* exportToExcel(payload) {
  debugger;
  try {
    //yield call(delay, 5000)
    //yield put({ type: aeroleTypes.LOGIN_REQUEST, isLoading: false })

    const resultObj = yield call(attribApi.exportToExcel, payload);

    debugger;
    if (resultObj.response && !resultObj.response.ok) {
      debugger;
      yield put({
        type: aeroleTypes.MESSAGE,
        message: resultObj.response.statusText
      });
    } else {
      debugger;
      //console.log(resultObj);
      download(resultObj, "Role.xlsx");
      /*
        console.log(JSON.parse(resultObj).result)
        //sessionStorage.setItem("token", JSON.parse(resultObj).token);
        yield put({
          type: aeroleTypes.ITEMS,
          items: JSON.parse(resultObj).result
        });
        */
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
    yield put({ type: aeroleTypes.MESSAGE, message: e });
  } finally {
    debugger;
    if (yield cancelled())
      yield put({ type: aeroleTypes.MESSAGE, message: "Task Cancelled" });
  }
}

function* getRoleTable(userData) {
  debugger;
  try {
    //yield call(delay, 5000)
    //yield put({ type: aeroleTypes.LOGIN_REQUEST, isLoading: false })

    yield put({
      type: aeroleTypes.ITEMS,
      items: []
    });

    let resultObj = yield call(attribApi.getRoleTable, userData);

    if (isJSON(resultObj)) {
      resultObj = JSON.parse(resultObj);
      if (resultObj.message != "ok") {
        //debugger;
        yield put({
          type: aeroleTypes.MESSAGE,
          message: { val: -1, msg: resultObj.result }
        });
      } else {
        debugger;
        //console.log(JSON.parse(resultObj).result);
        sessionStorage.setItem("token", resultObj.token);
        yield put({
          type: aeroleTypes.ITEMS,
          items: resultObj.result
        });
      }
    } else {
      yield put({
        type: aeroleTypes.MESSAGE,
        message: { val: -1, msg: resultObj }
      });
    }
    //yield put({ type: "LOGIN_STATUS", message: JSON.parse(resultObj).token })
  } catch (e) {   
    debugger;
    yield put({ type: aeroleTypes.MESSAGE, message: { val: -1, msg: e } });
  } finally {
    debugger;
    if (yield cancelled())
      yield put({ type: aeroleTypes.MESSAGE, message: { val: -1, msg: "Task Cancelled" } });
  }
}

export function* handleRequest(action) {
  debugger;

  console.log("RoleSaga request", action);
  //console.log(action.payload);
  //yield put({ type: "ITEMS_IS_LOADING", isLoading: true });
  //yield call(updateStatus);
  try {
    switch (action.type) {
      case aeroleTypes.FETCH_TABLE_REQUEST: {
        //yield all([put({ type: "LOGIN_STATUS", message: '' }), put({ type: "ITEMS_IS_LOADING", isLoading: true })])
        debugger;
        const fetchTask = yield fork(getRoleTable, action.cname);
        debugger;
        break;
      }

      case aeroleTypes.EXCEL_REQUEST: {
        //yield all([put({ type: "LOGIN_STATUS", message: '' }), put({ type: "ITEMS_IS_LOADING", isLoading: true })])
        debugger;
        const fetchTask = yield fork(exportToExcel, action.payload);
        debugger;
        break;
      }

      case aeroleTypes.INSERT_REQUEST: {
        //yield all([put({ type: "LOGIN_STATUS", message: '' }), put({ type: "ITEMS_IS_LOADING", isLoading: true })])
        debugger;
        const fetchTask = yield fork(insertRoleTable, action.payload);
        debugger;
        break;
      }

      case aeroleTypes.UPDATE_REQUEST: {
        //yield all([put({ type: "LOGIN_STATUS", message: '' }), put({ type: "ITEMS_IS_LOADING", isLoading: true })])
        debugger;
        const fetchTask = yield fork(updateRoleTable, action.payload);
        debugger;
        break;
      }

      case aeroleTypes.MAKE_ROW_EDITABLE: {
        //yield all([put({ type: "LOGIN_STATUS", message: '' }), put({ type: "ITEMS_IS_LOADING", isLoading: true })])
        debugger;
        yield put({
          type: aeroleTypes.SELECTED_ROWID,
          rowID: action.payload.payload.rowID
        });
        break;
      }

      case aeroleTypes.DELETE_REQUEST: {
        //yield all([put({ type: "LOGIN_STATUS", message: '' }), put({ type: "ITEMS_IS_LOADING", isLoading: true })])
        debugger;
        const fetchTask = yield fork(deleteRoleTable, action.roleID);
        debugger;
        break;
      }

      case aeroleTypes.CANCEL_REQUEST: {
        //yield all([put({ type: "LOGIN_STATUS", message: '' }), put({ type: "ITEMS_IS_LOADING", isLoading: true })])
        debugger;

        //const { items } = yield select();
        const state = yield select();
        debugger;

        const newitems = state.roleleState.items.map((itm, index) => {
          if (
            _.trim(itm.hv_universal_i) !== _.trim(action.payload.payload.rowID)
          ) {
            return itm;
          } else {
            debugger;
            var newItem = {
              ...itm,
              hv_universal_name: action.payload.payload.value
              //...action.item
            };
            return newItem;
          }
        });

        debugger;
        yield put({
          type: aeroleTypes.SELECTED_ROWID,
          rowID: -1
        });

        yield put({
          type: aeroleTypes.ITEMS,
          items: newitems
        });
        break;
      }

      default: {
        return null;
        break;
      }
    }
  } catch (e) {
    yield put({ type: aeroleTypes.LOGIN_FAILURE, error: e });
  }
}