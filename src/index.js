import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import history from 'history/createBrowserHistory';
import DefaultLayout from './layouts/default/default';
import LoadingComponent from './components/Loading/loading';
import ErrorBoundaryComponent from './components/Error/error';

import productsReducer from './reducers/productsReducer';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

const rootReducer = combineReducers({ 
  products: productsReducer
});

const store = createStore(rootReducer);

const RootComponent = () => 
    <Provider store={store}>
        <Router history={history()}>
          <Switch>
            <ErrorBoundaryComponent>
              <DefaultLayout>
                <React.Suspense fallback={<LoadingComponent />}>
                  <Route path="/" exact component={React.lazy(() => import('./pages/Home/Home'))}></Route>
                  <Route path="/about" component={React.lazy(() => import('./pages/About/About'))}></Route>
                </React.Suspense>
              </DefaultLayout>
            </ErrorBoundaryComponent>
          </Switch>
        </Router>
    </Provider>

ReactDOM.render(<RootComponent />, document.getElementById('root'));
