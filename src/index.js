import React from 'react';
import ReactDOM from 'react-dom';
import HomeComponent from './components/Home/Home';
import { AboutComponent } from './components/About/About';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import history from 'history/createBrowserHistory';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer);

const RootComponent = () => 
<Provider store={store}>
  <Router history={history()}>
    <Switch>
      <Route path="/" exact component={HomeComponent}></Route>
      <Route path="/about" component={AboutComponent}></Route>
    </Switch>
  </Router>
</Provider>

ReactDOM.render(<RootComponent />, document.getElementById('root'));
