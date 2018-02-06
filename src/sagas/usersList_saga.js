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
  import { types as usersListTypes } from "reducers/usersList_reducer";



   function getUserListFunction()
  { 
    //debugger;
    //console.log(userData.user);
    //console.log(userData.password);

    //new Promise((resolve, reject) => {
    return fetch("http://hvs.selfip.net:3003/ExecSPM/", {
      //return fetch("http://localhost:3003/GetRoleTable/", {

      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        spName: "sps_getUsers",
        token: sessionStorage.getItem("token"),
        parms: {
            "cname" : ""
        }
      })
    })
     // .then(statusHelper)
      .then(response => response.json())
      .catch(error => error);
  }


  //.then(data => data)
  function statusHelper(response) {
    debugger;
   
    return response;
  }





  function* getUsersList() {
    //debugger;
    try {
      //debugger
      let resultObj = yield call(getUserListFunction);
debugger;
    if (isJSON(resultObj)) {
      resultObj = JSON.parse(resultObj);
      //debugger;
      if (resultObj.message != "ok") {
      debugger;
        yield put({
          type: usersListTypes.MESSAGE,
          message: {val: resultObj.val,msg:resultObj.result}
        });
      } else {
      debugger;
       sessionStorage.setItem("token", resultObj.token);
        yield put({
          type: usersListTypes.ITEMS,
          items:resultObj.result
        });
      }
    }
    } catch (e) {
      //debugger;
      yield put({ type: usersListTypes.MESSAGE, message: e });
    } finally {
      //debugger;
      if (yield cancelled())
        yield put({ type: usersListTypes.MESSAGE, message: "Task Cancelled" });
    }
  }
  function deleteUserFunction(selectedUserData)
 {
  // debugger;
   //alert("getApprovalTables")
   //alert(cname)
   //console.log(userData.user);
   //console.log(userData.password);
 //alert("in Cadets")
   //new Promise((resolve, reject) => {
   return fetch("http://hvs.selfip.net:3003/execMP/", {
     //return fetch("http://hvs.selfip.net:3003/getCadets/", {
     //return fetch("http://localhost:3003/getCadets/", {

     method: "POST",
     headers: {
       Accept: "application/json",
       "Content-Type": "application/json"
     },
     body: JSON.stringify({
         spName: 'spd_deleteUser',
          token: sessionStorage.getItem("token"),
         parms:{"hv_user_id":selectedUserData.hv_user_id}

     })
   })
     .then(statusHelper)
     .then(response => response.json())
     .catch(error => error);
 }

 function* deleteUser(selectedUserData) {
   try {

     const resultObj = yield call(deleteUserFunction,selectedUserData.payload);
     if (resultObj.response && !resultObj.response.ok) {
       //debugger;
       yield put({
         type: usersListTypes.MESSAGE,
         message: {val:-1,msg:resultObj.response.statusText}
       });
     } else {
       const state=yield select()
       let items=state.usersListState.items.filter(del=>del.hv_user_id!==selectedUserData.payload.hv_user_id)
       yield put({
         type: usersListTypes.ITEMS,
         items:items
       });
       debugger
       yield put({
         type: usersListTypes.MESSAGE,
         message: {val: 1, msg: JSON.parse(resultObj).result[0].RESULT_MESSAGE}
       });
     }
   } catch (e) {
     debugger;
     yield put({ type: usersListTypes.MESSAGE,
       message: {val:-1,msg:e}

      });
   } finally {

   }
 }

  export function* handleRequest(action) {
    //debugger;
    console.log("UsersList Saga request", action);
    try {
      switch (action.type) {
        case usersListTypes.FETCH_REQUEST: {
          const fetchTask = yield fork(getUsersList,action.payload);
          break;
        }
        case usersListTypes.DELETE_REQUEST: {
          //debugger;
          const fetchTask = yield fork(deleteUser,action.payload);
          break;
        }
        default: {
          return null;
          break;
        }
      }
    } catch (e) {
      yield put({ type: usersListTypes.MESSAGE, error: e });
    }
  }

  function isJSON(str) {
    try {
      debugger
      return (JSON.parse(str) && !!str);
    } catch (e) {
      return false;
    }
  }
