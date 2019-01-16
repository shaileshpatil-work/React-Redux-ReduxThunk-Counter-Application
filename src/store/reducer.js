import * as actionTypes from "./actions/actionTypes"; //Imported all constants and save in object and access that object

let initialState = {
  count: 0,
  information: "no data"
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case actionTypes.INCREMENT_BY_FIVE:
      return {
        ...state,
        count: state.count + action.value
      };
    case actionTypes.DECREMENT_BY_FIVE:
      return {
        ...state,
        count: state.count - action.value
      };
    case actionTypes.CALL_API:
      return {
        ...state,
        information: action.info
      };
    default:
      return state;
  }
};

export default counter;
