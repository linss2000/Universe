export const types = {
    FETCH_TABLE_REQUEST: "SHOWDATA/FETCH_REQUEST",
    ITEMS: "SHOWDATA/ITEMS",
    CANCEL_REQUEST: "SHOWDATA/CANCEL_REQUEST",
    MESSAGE: "SHOWDATA/MESSAGE",
    TOKEN: "SHOWDATA/TOKEN",
  };
  
  export const initialState = {
    items: [],
    message: "",
    token: "",
  
  };
  
  //export function authState (state = initialState, action) {
  export default (state = initialState, action) => {
    debugger;
    switch (action.type) {
      case types.ITEMS:
        return { ...state, items: action.items };
  
      case types.MESSAGE:
  
        return { ...state, message: action.message };
  
      case types.TOKEN:
        return { ...state, message: action.token };
  
      default:
        return state;
    }
  };
  
  export const actions = {
    getAttribTables: payload => ({ type: types.FETCH_TABLE_REQUEST, payload }), 
  };
  
  /*
      export const getProduct = (state) => state.product.products
      export const getProductById = (state, id) => find(state.product.products, id)
      export const getProductSortedByName = (state) => sortBy(state.product.products, 'name')
      export const getExpiredProducts = (state) => filter(state.product.products, { isExpired: true })
      */
  