import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { searchRobots, requestRobots } from './Redux/reducer';
import thunkMiddleware from "redux-thunk";
import App from './Components/App';
import 'tachyons';
import './index.css';
import reportWebVitals from './reportWebVitals';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

const root = createRoot(
  document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <App />
  </Provider>
);

reportWebVitals();
