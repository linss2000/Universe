export const types = {
  FETCH_TABLE_REQUEST: "AEROLE/FETCH_REQUEST",
  ITEMS: "AEROLE/ITEMS",
  DELETE_REQUEST: "AEROLE/DELETE_REQUEST",
  INSERT_REQUEST: "AEROLE/INSERT_REQUEST",
  UPDATE_REQUEST: "AEROLE/UPDATE_REQUEST",
  //UPDATE_STORE_REQUEST: "AEROLE/UPDATE_STORE_REQUEST",
  CANCEL_REQUEST: "AEROLE/CANCEL_REQUEST",
  MESSAGE: "AEROLE/MESSAGE",
  TOKEN: "AEROLE/TOKEN",
  SELECTED_ROWID: "AEROLE/ROW_ID",
  MAKE_ROW_EDITABLE: "AEROLE/ROW_EDITABLE",
  CHECKROLE_REQUEST: "AEROLE/CHECK_REQUEST",
  EXCEL_REQUEST: "AEROLE/EXCEL_REQUEST"
};

export const initialState = {
  isLoading: false,
  hasErrored: false,
  items: [],
  message: { val: 0, msg: "" },
  token: "",
  rowID: -1
};

//export function authState (state = initialState, action) {
export default (state = initialState, action) => {
  debugger;

  switch (action.type) {
    case types.ITEMS:
      return { ...state, items: action.items };

    case types.SELECTED_ROWID:
      return { ...state, rowID: action.rowID };

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
  getScreens: payload => ({ type: types.FETCH_TABLE_REQUEST, cname: payload.cname }),
  makeRowEditable: payload => ({ type: types.MAKE_ROW_EDITABLE, payload }),
  insertScreenTable: payload => ({ type: types.INSERT_REQUEST, payload }),
  updateScreenTable: payload => ({ type: types.UPDATE_REQUEST, payload }),  
  //updateStoreScreenTable: payload => ({ type: types.UPDATE_STORE_REQUEST, payload }),
  deleteScreenTable: payload => ({
    type: types.DELETE_REQUEST,
    roleID: payload.roleID
  }),
  cancelScreenTable: payload => ({ type: types.CANCEL_REQUEST, payload }),
  exportToExcel: payload => ({ type: types.EXCEL_REQUEST, payload }),
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
