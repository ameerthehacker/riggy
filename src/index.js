import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import ErrorBoundaryComponent from './components/Error/error';
import productsReducer from './reducers/productsReducer';
import cartReducer from './reducers/cartReducer';
import AppRoute from './routes/app.route';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

const rootReducer = combineReducers({ 
  products: productsReducer,
  cart: cartReducer
});

const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const RootComponent = () => 
  <Provider store={store}>
    <ErrorBoundaryComponent>
      <AppRoute />
    </ErrorBoundaryComponent>
  </Provider>

ReactDOM.render(<RootComponent />, document.getElementById('root'));
