import React, {Component} from 'react';
import { Provider } from "react-redux"
import store from "./store"
import Main from "./components/main"
import "./base.css"

export default()=> {
  return (
    <Provider store={store}>
      <div className='app'>
      <Main />
      </div>
    </Provider>
  );
  }