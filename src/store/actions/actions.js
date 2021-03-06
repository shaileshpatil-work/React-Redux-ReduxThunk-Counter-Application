import * as actionTypes from "./actionTypes";

// Create action creaters : Action creaters are just functions which returns action
// Action creators are used for asynchronous actions. We can use them in synchronous actions as well.

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

// If you want to send payload pass it to the function
export const incrementByFive = val => {
  return {
    type: actionTypes.INCREMENT_BY_FIVE,
    value: val
  };
};

export const saveResult = val => {
  return {
    type: actionTypes.DECREMENT_BY_FIVE,
    value: val
  };
};

// Redux Thunk is a library which adds middleware to the projects which allows action creators to not return actions itself but return a function which eventually disptch an action.
export const decrementByFive = val => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(val)); //dispatched synchronous action saveResult
    }, 2000);
  };
};

// GET API call
export const saveApi = data => {
  return {
    type: actionTypes.CALL_API,
    info: data
  };
};

export const callApi = () => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        dispatch(saveApi(data));
      });
  };
};

// POST API Call
export const postData = responsedata => {
  console.log(responsedata);
  return {
    type: actionTypes.POST_API,
    postRes: responsedata
  };
};

export const postApi = () => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify({
        title: "Elon Musk",
        body: "Body Content"
      })
    })
      .then(response => response.json())
      .then(responsedata => dispatch(postData(responsedata)));
  };
};

// Whenever data sending use JSON.stringify
// Whenever data is receiving use JSON.parse or .json
