export const types = {
    FETCH_TABLE_REQUEST: "ROLE/FETCH_REQUEST",
    ITEMS: "ROLE/ITEMS",
    DELETE_REQUEST: "ROLE/DELETE_REQUEST",
    INSERT_REQUEST: "ROLE/INSERT_REQUEST",
    UPDATE_REQUEST: "ROLE/UPDATE_REQUEST",
    //UPDATE_STORE_REQUEST: "ROLE/UPDATE_STORE_REQUEST",
    CANCEL_REQUEST: "ROLE/CANCEL_REQUEST",
    MESSAGE: "ROLE/MESSAGE",
    TOKEN: "ROLE/TOKEN",
    SELECTED_ROWID: "ROLE/ROW_ID",
    MAKE_ROW_EDITABLE: "ROLE/ROW_EDITABLE",
    CHECKROLE_REQUEST: "ROLE/CHECK_REQUEST",
    
  };
  
  export const initialState = {
    isLoading: false,
    hasErrored: false,
    items: [],
    message: {val:0,msg:""},
    token: "",
    rowID : -1,    
  };
  
  //export function authState (state = initialState, action) {
  export default (state = initialState, action) => {
    //debugger;

    switch (action.type) {
        case types.ITEMS:
          return { ...state, items: action.items };
    
        case types.SELECTED_ROWID:
          return { ...state, rowID: action.rowID};
    
        case types.MESSAGE:
    
          return { ...state, message: action.message };
    
        case types.TOKEN:
          return { ...state, token: action.token };
    
        case types.FETCH_DATA_SUCCESS:
        case types.DATA_SUCCESS:
          return { ...state, isLoading: false, hasErrored: false };
    
        case types.FETCH_DATA_FAILURE:
        case types.DATA_FAILURE:
          return { ...state, isLoading: false, hasErrored: true };
    
        default:
          return state;
      }
  };
  
  export const actions = {
    getRoles: payload => ({ type: payload.type, cname: payload.cname }),
    makeRowEditable : payload => ({ type: types.MAKE_ROW_EDITABLE, payload }),
    insertRoleTable: payload => ({ type: types.INSERT_REQUEST, payload }),
    updateRoleTable: payload => ({ type: types.UPDATE_REQUEST, payload }),
    //updateStoreRoleTable: payload => ({ type: types.UPDATE_STORE_REQUEST, payload }),
    deleteRoleTable: payload => ({ type: types.DELETE_REQUEST, roleID : payload.roleID  }),
    cancelRoleTable: payload => ({ type: types.CANCEL_REQUEST, payload })
  };
  
  /*
    export const getProduct = (state) => state.product.products
    export const getProductById = (state, id) => find(state.product.products, id)
    export const getProductSortedByName = (state) => sortBy(state.product.products, 'name')
    export const getExpiredProducts = (state) => filter(state.product.products, { isExpired: true })
    */
  
  