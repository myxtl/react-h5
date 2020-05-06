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

const tabList = [
  {icon: 'iconfont icon-shouye', name: '首页', url: '/home'},
  {icon: 'iconfont icon-fenlei', name: '分类', url: '/category'},
  {icon: 'iconfont icon-gouwuche', name: '购物车', url: '/cart'},
  {icon: 'iconfont icon-wode', name: '我的', url: '/user'}
]

function RenderRouter({routes}) {
  return routes.map(item => {
    return <Fragment>
      <PrivateRoute
        path={item.path}
        key={item.name}
        isTab={item.isTab}
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
              <RenderRouter routes={routes}></RenderRouter>
              <Tab tabList={tabList}></Tab>
          </Fragment>
        </Router>
      </div>
    }
}

export default App;
