import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import reducerA from "./Contain/FrontEnd/Comments/reducer";
import reducerB from "./Contain/FrontEnd/Photos/PhotosReducer";
import reducerC from "./Contain/FrontEnd/Albums/AlbumsReducer"

import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import { createStore, applyMiddleware, combineReducers } from "redux";

const rootReducer = combineReducers({
  comments:reducerA,
  photos:reducerB,
  albums:reducerC
})

const store = createStore(rootReducer, applyMiddleware(thunk) );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
