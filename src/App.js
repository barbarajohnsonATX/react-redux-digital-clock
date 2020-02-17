import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import {advanceHr, advanceMin } from './actions'

function App({hour, minute, advanceHr, advanceMin}) {

  let min = minute < 10 ? '0' +  minute.toString() : minute

   return (
    <div className="App">
      <div>{hour} : {min}</div>

      <button onClick={advanceHr}>Hour +</button> <button onClick={advanceMin}>Minute +</button>
    </div>
  );
}

const mapStateToProps = state => {
  return { 
    minute: state.minute,
    hour: state.hour }
};


export default connect(mapStateToProps, {advanceHr, advanceMin})(App);
