import React from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionCreator from "./store/actions/actions";

const App = props => {
  return (
    <>
      <div>
        <span>Counter Value {props.ctr}</span>
      </div>
      <div>
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.decrement}>Decrement</button>
        <button onClick={props.incrementByFive}>Increment By 5</button>
        <button onClick={props.decrementByFive}>Decrement By 5</button>
      </div>
      <div>
        <button onClick={props.callApi}>API Call</button>
        {props.apidata !== "no data" ? (
          props.apidata.map((item, index) => {
            return (
              <div key={index}>
                <span>{item.title}</span>
              </div>
            );
          })
        ) : (
          <span />
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    ctr: state.count,
    apidata: state.information
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(actionCreator.increment()),
    decrement: () => dispatch(actionCreator.decrement()),
    incrementByFive: () => dispatch(actionCreator.incrementByFive(5)),
    decrementByFive: () => dispatch(actionCreator.decrementByFive(5)),
    callApi: () => dispatch(actionCreator.callApi())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
