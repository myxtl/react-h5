/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2020-05-06 14:15:53
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import './assets/css/reset.css';
import 'antd-mobile/dist/antd-mobile.css';
import './assets/icon/iconfont.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

