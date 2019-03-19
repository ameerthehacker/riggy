import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import history from 'history/createBrowserHistory';
import loadable from '@loadable/component';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer);

const RootComponent = () => 
<Provider store={store}>
  <React.Suspense fallback={<div>Loading...</div>}>
    <Router history={history()}>
      <Switch>
        <Route path="/" exact component={loadable(() => import('./components/Home/Home'))}></Route>
        <Route path="/about" component={loadable(() => import('./components/About/About'))}></Route>
      </Switch>
    </Router>
  </React.Suspense>
</Provider>

ReactDOM.render(<RootComponent />, document.getElementById('root'));
