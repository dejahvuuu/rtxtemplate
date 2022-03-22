import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';

import SignInView from '../views/User/SignInView';
import SignUpView from '../views/User/SignUpView';
import Dashboard from '../components/dashboard/Dashboard';
import DashboardMainView from '../views/Dashboard/DashboardMainView';
import Error404View from '../views/Error/Error404View';

export const MainRouter = () => {
  return (
    <Router>
      <main className='content'>
        <Switch>
          <PublicRouter exact path='/' component={SignInView} logged={false} />
          <PublicRouter
            exact
            path='/signin'
            component={SignInView}
            logged={false}
          />
          <PublicRouter
            exact
            path='/signup'
            component={SignUpView}
            logged={false}
          />
          <PrivateRouter
            exact
            path='/dashboard'
            component={() => (
              <Dashboard headerTitle='Inicio'>
                <DashboardMainView />
              </Dashboard>
            )}
            logged={true}
          />
          <Route path='*' component={Error404View} />
        </Switch>
      </main>
    </Router>
  );
};
