export const types = {
FETCH_REQUEST: "HEADER/FETCH_REQUEST",
ITEMS: "HEADER/ITEMS"
};

export const initialState = {
  error: null,
  items: [],
  MESSAGE:''
};

//export function authState (state = initialState, action) {
export default (state = initialState, action) => {
 // debugger;
  switch (action.type) {
    case types.ITEMS:
      return { ...state, items: action.items };
    case types.FETCH_REQUEST:
    {
      debugger
      return { ...state,  error: null };
      
    }
    default:
      return state;
  }
};
  

export const actions = {
   renderHeader: loadheader => ({ type: types.FETCH_REQUEST, loadheader })
};

