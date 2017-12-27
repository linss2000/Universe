export const types = {
    INSERT_REQUEST: "USER/INSERT_REQUEST",
    UPDATE_REQUEST: "USER/UPDATE_REQUEST",   
    MESSAGE: "USER/MESSAGE"
  };

  export const initialState = {
    error: null,
    message: { val: 0, statusMsg: "" },
    user : {}
  };

  export default (state = initialState, action) => {
    debugger;
    switch (action.type) { 
      case types.MESSAGE:  
        return { ...state, message: action.message };
      default:
        return state;
    }
  };

  export const actions = {
    insertUserDetails: user => ({ type: types.INSERT_REQUEST, user }),
    resetMessage: (message) => ({
        type: message.type,
        message : message.message
      })
  };