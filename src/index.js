import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore,applyMiddleware,combineReducers } from "redux";
import { createLogger }  from "redux-logger";
import { searchRobots,requestRobots } from './Redux/reducer';
import thunkMiddleware  from "redux-thunk";
import App from './Components/App';
import 'tachyons';
import './index.css';
import reportWebVitals from './reportWebVitals';


const logger= createLogger();
const rootReducer = combineReducers({searchRobots,requestRobots})
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger))

ReactDOM.render(
                    <Provider store={store}>
                      <App />
                    </Provider>,
                  document.getElementById('root')
                );

reportWebVitals();
