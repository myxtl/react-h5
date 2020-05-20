/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-06 14:15:53
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store';
import App from './App';
import './assets/css/reset.css';
import 'antd-mobile/dist/antd-mobile.css';
import './assets/icon/iconfont.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

