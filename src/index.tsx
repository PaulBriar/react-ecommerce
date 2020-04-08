import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import ErrorBoundary from 'react-error-boundary';

import persistReducer from "./redux/reducers";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

LogRocket.init('phkamo/react-ecommerce-demo-dev');
setupLogRocketReact(LogRocket);

const createStoreWithMiddleware = applyMiddleware(logger, LogRocket.reduxMiddleware())(createStore);
const store = createStoreWithMiddleware(persistReducer);
const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
