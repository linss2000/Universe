export const types = {
    FETCH_TABLES_REQUEST: "APPROVAL/FETCH_REQUEST",
    ITEMS: "APPROVAL/ITEMS",
    DELETE_REQUEST: "APPROVAL/DELETE_REQUEST",
    INSERT_REQUEST: "APPROVAL/INSERT_REQUEST",
    UPDATE_REQUEST: "APPROVAL/UPDATE_REQUEST",
    MESSAGE: "APPROVAL/MESSAGE",
    TOKEN: "APPROVAL/TOKEN"
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
     
      default:
        return state;
    }
  };
  
  export const actions = {
    getApprovals: (payload) => ({ type: payload.type, cname: payload.cname }),
    insertCadet: (payload) => ({ type: types.INSERT_REQUEST, payload }),
    updateCadet: (payload) => ({ type: types.UPDATE_REQUEST, payload }),
    deleteCadet: (payload) => ({ type: types.DELETE_REQUEST, payload })
  };
  
  /*
    export const getProduct = (state) => state.product.products
    export const getProductById = (state, id) => find(state.product.products, id)
    export const getProductSortedByName = (state) => sortBy(state.product.products, 'name')
    export const getExpiredProducts = (state) => filter(state.product.products, { isExpired: true })
    */
  
  