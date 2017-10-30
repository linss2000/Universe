export const types = {
  FETCH_TABLE_REQUEST: "ATTRIBTAB/FETCH_REQUEST",
  ITEMS: "ATTRIBTAB/ITEMS",
  DELETE_REQUEST: "ATTRIBTAB/DELETE_REQUEST",
  INSERT_REQUEST: "ATTRIBTAB/INSERT_REQUEST",
  UPDATE_REQUEST: "ATTRIBTAB/UPDATE_REQUEST",
  //UPDATE_STORE_REQUEST: "ATTRIBTAB/UPDATE_STORE_REQUEST",
  CANCEL_REQUEST: "ATTRIBTAB/CANCEL_REQUEST",
  MESSAGE: "ATTRIBTAB/MESSAGE",
  TOKEN: "ATTRIBTAB/TOKEN",
  SELECTED_ROWID: "ATTRIBTAB/ROW_ID",
  MAKE_ROW_EDITABLE: "ATTRIBTAB/ROW_EDITABLE",
};

export const initialState = {
  isLoading: false,
  hasErrored: false,
  items: [],
  message: "",
  token: "",
  rowID : -1
};

//export function authState (state = initialState, action) {
export default (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case types.ITEMS:
      return { ...state, items: action.items };

    case types.SELECTED_ROWID:
      return { ...state, rowID: action.rowID};

    case types.MESSAGE:

      return { ...state, message: action.message };

    case types.TOKEN:
      return { ...state, message: action.token };

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
  getAttribTable: payload => ({ type: types.FETCH_TABLE_REQUEST, payload }),
  makeRowEditable : payload => ({ type: types.MAKE_ROW_EDITABLE, payload }),
  insertAttribTable: payload => ({ type: types.INSERT_REQUEST, payload }),
  updateAttribTable: payload => ({ type: types.UPDATE_REQUEST, payload }),
  //updateStoreAttribTable: payload => ({ type: types.UPDATE_STORE_REQUEST, payload }),
  deleteAttribTable: payload => ({ type: types.DELETE_REQUEST, payload }),
  cancelAttribTable: payload => ({ type: types.CANCEL_REQUEST, payload })
};

/*
    export const getProduct = (state) => state.product.products
    export const getProductById = (state, id) => find(state.product.products, id)
    export const getProductSortedByName = (state) => sortBy(state.product.products, 'name')
    export const getExpiredProducts = (state) => filter(state.product.products, { isExpired: true })
    */
