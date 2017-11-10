export const types = {
    CHECK_EMAIL_REQUEST: "FPWD/EMAIL_REQUEST",
    ITEMS: "FPWD/ITEMS",
    MESSAGE: "FPWD/MESSAGE",
    TOKEN: "FPWD/TOKEN"
  };
  
  export const initialState = {
    isLoading: false,
    hasErrored: false,
    items: [],
    message: {val: 0, msg: ""},
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
  
      case types.TOKEN:
        return { ...state, message: action.token };
     
      case types.FETCH_DATA_SUCCESS:
      case types.DATA_SUCCESS:
        return { ...state, isLoading: false, hasErrored:false};
  
      case types.FETCH_DATA_FAILURE:
      case types.DATA_FAILURE:
        return { ...state, isLoading: false, hasErrored:true};
  
      default:
        return state;
    }
  };
  
  export const actions = {
    checkEmail: (payload) => ({ type: payload.type, email: payload.email }),
    resetMessage: (payload) => ({
        type: payload.type,
        message : payload.message
      })
  };
  
  /*
    export const getProduct = (state) => state.product.products
    export const getProductById = (state, id) => find(state.product.products, id)
    export const getProductSortedByName = (state) => sortBy(state.product.products, 'name')
    export const getExpiredProducts = (state) => filter(state.product.products, { isExpired: true })
    */
  
  