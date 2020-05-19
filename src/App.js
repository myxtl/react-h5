/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-06 14:15:53
 */
import React, { Component, Fragment } from 'react';
import {Router} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import routes from './router';
import history from './utils/history';
import Tab from './components/Tab';
import config from './utils/config';


function RenderRoutes({routes}) {
  return routes.map(item => {
    return <Fragment>
      <PrivateRoute
        path={item.path}
        key={item.name}
        hasTab={item.hasTab}
        exact
        component={item.component}
      />
    </Fragment>
  })
}

class App extends Component {
    render() {
      return <div className="App">
        <Router history={history}>
          <Fragment>
              <RenderRoutes routes={routes}></RenderRoutes>
              <Tab tabList={config.tabList}></Tab>
          </Fragment>
        </Router>
      </div>
    }
}

export default App;
