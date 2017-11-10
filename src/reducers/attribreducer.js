export const types = {
    FETCH_TABLES_REQUEST: "ATTRIB/FETCH_REQUEST",
    ITEMS: "ATTRIB/ITEMS",
    DELETE_REQUEST: "ATTRIB/DELETE_REQUEST",
    INSERT_REQUEST: "ATTRIB/INSERT_REQUEST",
    UPDATE_REQUEST: "ATTRIB/UPDATE_REQUEST",
    MESSAGE: "ATTRIB/MESSAGE",
    TOKEN: "ATTRIB/TOKEN"
  };
  
  export const initialState = {
    isLoading: false,
    hasErrored: false,
    items: [],
    message: "",
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
    getAttribTables: (payload) => ({ type: types.FETCH_TABLES_REQUEST, payload }),
    insertAttribTables: (payload) => ({ type: types.INSERT_REQUEST, payload }),
    updateAttribTables: (payload) => ({ type: types.UPDATE_REQUEST, payload }),
    deleteAttribTables: (payload) => ({ type: types.DELETE_REQUEST, payload })
  };
  
  /*
    export const getProduct = (state) => state.product.products
    export const getProductById = (state, id) => find(state.product.products, id)
    export const getProductSortedByName = (state) => sortBy(state.product.products, 'name')
    export const getExpiredProducts = (state) => filter(state.product.products, { isExpired: true })
    */
  
  