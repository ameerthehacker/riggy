import React from 'react';
import history from 'history/createBrowserHistory';
import DefaultLayout from '../layouts/default/default';
import LoadingComponent from '../components/Loading/loading';
import { Route, Router, Switch } from 'react-router-dom';

export default function AppRoute() {
  return (
    <Router history={history()}>
      <DefaultLayout>
        <React.Suspense fallback={<LoadingComponent />}>
          <Switch>
            <Route path="/" 
                   exact 
                   component={React.lazy(() => import('../pages/Home/Home'))}
            />
            <Route path="/cart" 
                   exact 
                   component={React.lazy(() => import('../pages/Cart/Cart'))}
            />
            <Route path="/about" 
                   component={React.lazy(() => import('../pages/About/About'))}
             />
            <Route path="*" 
                   component={React.lazy(() => import('../pages/PageNotFound/PageNotFound'))} 
            />
          </Switch>
        </React.Suspense>
      </DefaultLayout>
    </Router>
  );
}