import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import ErrorBoundaryComponent from './components/Error/error';
import productsReducer from './reducers/productsReducer';
import AppRoute from './routes/app.route';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

const rootReducer = combineReducers({ 
  products: productsReducer
});

const store = createStore(rootReducer);

const RootComponent = () => 
  <Provider store={store}>
    <ErrorBoundaryComponent>
      <AppRoute />
    </ErrorBoundaryComponent>
  </Provider>

ReactDOM.render(<RootComponent />, document.getElementById('root'));
