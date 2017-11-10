export const types = {
  UPD_PWD_REQUEST: "CPWD/UPD_PWD_REQUEST",
  CHK_TOKEN_REQUEST: "CPWD/CHK_TOKEN_REQUEST",
  ITEMS: "CPWD/ITEMS",
  MESSAGE: "CPWD/MESSAGE",
  USERID: "CPWD/USERID",
  TOKEN: "CPWD/TOKEN"
};

export const initialState = {
  isLoading: false,
  hasErrored: false,
  userID: "",
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

    case types.USERID:
      return { ...state, userID: action.userID };

    case types.MESSAGE:
      return { ...state, message: action.message };

    case types.TOKEN:
      return { ...state, token: action.token };

    default:
      return state;
  }
};

export const actions = {
  changePWD: payload => ({
    type: payload.type,
    userID: payload.userID,
    currPWD: payload.currPWD,
    newPWD: payload.newPWD,
    emailReset : payload.emailReset
  }),
  checkToken: payload => ({ type: payload.type, token: payload.token }),
  resetMessage: payload => ({
    type: payload.type,
    message: payload.message
  })
};

/*
    export const getProduct = (state) => state.product.products
    export const getProductById = (state, id) => find(state.product.products, id)
    export const getProductSortedByName = (state) => sortBy(state.product.products, 'name')
    export const getExpiredProducts = (state) => filter(state.product.products, { isExpired: true })
    */
