export const types = {
    AUTO_LOGIN: "TIMEOUT/AUTO_LOGIN",
    SIGNUP_REQUEST: "TIMEOUT/SIGNUP_REQUEST",
    SIGNUP_SUCCESS: "TIMEOUT/SIGNUP_SUCCESS",
    SIGNUP_FAILURE: "TIMEOUT/SIGNUP_FAILURE",
    LOGIN_REQUEST: "TIMEOUT/LOGIN_REQUEST",
    LOGIN_SUCCESS: "TIMEOUT/LOGIN_SUCCESS",
    LOGIN_FAILURE: "TIMEOUT/LOGIN_FAILURE",
    LOGOUT: "TIMEOUT/LOGOUT",
    ITEMS: "TIMEOUT/ITEMS",
    MESSAGE: "TIMEOUT/MESSAGE",
    NAME: "TIMEOUT/NAME",
    TOKEN: "TIMEOUT/TOKEN"
  };
  
  export const initialState = {
    name: "",
    isLoading: false,
    error: null,
    items: [],
    message: { val: 0, msg: "" },
    token: ""
  };
  
  //export function authState (state = initialState, action) {
  export default (state = initialState, action) => {
    //debugger;
    switch (action.type) {
      case types.ITEMS:
        return { ...state, items: action.items };
  
      case types.MESSAGE:
        return { ...state, message: action.message };
  
      case types.NAME:
        return { ...state, name: action.name };
  
      case types.TOKEN:
        return { ...state, token: action.token };
  
      case types.SIGNUP_REQUEST:
      case types.LOGIN_REQUEST:
        return { ...state, isLoading: true, error: null };
  
      case types.SIGNUP_SUCCESS:
      case types.LOGIN_SUCCESS:
        return { ...state, isLoading: false, user: action.user };
  
      case types.SIGNUP_FAILURE:
      case types.LOGIN_FAILURE:
        return { ...state, isLoading: false, error: action.error };
  
      case types.LOGOUT:
        return { ...state, user: null };
  
      default:
        return state;
    }
  };
  
  export const actions = {
    signup: (email, password) => ({
      type: types.SIGNUP_REQUEST,
      email,
      password
    }),
    login: payload => ({ type: types.LOGIN_REQUEST, payload }),
    logout: () => ({ type: types.LOGOUT }),
    resetMessage: payload => ({
      type: payload.type,
      message: payload.message
    })
  };
  
 