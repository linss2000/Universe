export const types = {
  FETCH_TABLES_REQUEST: "CDETAILS/FETCH_REQUEST",
  ITEMS: "CDETAILS/ITEMS",
  DELETE_REQUEST: "CDETAILS/DELETE_REQUEST",
  INSERT_REQUEST: "CDETAILS/INSERT_REQUEST",
  UPDATE_REQUEST: "CDETAILS/UPDATE_REQUEST",
  MESSAGE: "CDETAILS/MESSAGE",
  TOKEN: "CDETAILS/TOKEN",
  ITEM: "CDETAILS/ITEM"
};

export const initialState = {
  isLoading: false,
  hasErrored: false,
  item: {},
  items: [],
  message: { val: 0, msg: "" },
  token: ""
};

//export function authState (state = initialState, action) {
export default (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case types.ITEMS:
      return { ...state, items: action.items };

    case types.ITEM:
      return { ...state, item: action.item };
    case types.MESSAGE:
      return { ...state, message: action.message };

    case types.TOKEN:
      return { ...state, token: action.token };

    default:
      return state;
  }
};

export const actions = {
  getCadets: payload => ({ type: payload.type, name: payload.name }),
  insertCadet: payload => ({ type: types.INSERT_REQUEST, payload }),
  updateCadet: payload => ({ type: types.UPDATE_REQUEST, payload }),
  deleteCadet: payload => ({ type: types.DELETE_REQUEST, payload })
};
