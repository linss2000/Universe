export const types = {
    FETCH_TABLES_REQUEST: "CADETINLINE/FETCH_REQUEST",
    ITEMS: "CADETINLINE/ITEMS",
    DELETE_REQUEST: "CADETINLINE/DELETE_REQUEST",
    INSERT_REQUEST: "CADETINLINE/INSERT_REQUEST",
    UPDATE_REQUEST: "CADETINLINE/UPDATE_REQUEST",
    MESSAGE: "CADETINLINE/MESSAGE",
    TOKEN: "CADETINLINE/TOKEN"
  };
  
  export const initialState = {
    isLoading: false,
    hasErrored: false,
    items: [],
    message: {val:0,msg:""},
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
        return { ...state, token: action.token };
     
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
    getCadetsInline: (payload) => ({ type: types.FETCH_TABLES_REQUEST, name:  payload.name }),
    
  };
  
  /*
    export const getProduct = (state) => state.product.products
    export const getProductById = (state, id) => find(state.product.products, id)
    export const getProductSortedByName = (state) => sortBy(state.product.products, 'name')
    export const getExpiredProducts = (state) => filter(state.product.products, { isExpired: true })
    */
  
  