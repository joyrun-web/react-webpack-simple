require('normalize.css/normalize.css');
require('@/styles/app.less');

import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import axios from 'axios';
import { Toast } from 'antd-mobile';

// pages
import Index from '@/pages/index/index'

window.imgBaseUrl = '';

class App extends Component {
  constructor(props) {
    super(props);

    if (process.env.NODE_ENV === 'production') {
      axios.defaults.baseURL = '//' + document.domain + '/' + 'replace_your_api';
    } else {
      axios.defaults.baseURL = 'http://localhost:7001/' + 'replace_your_api';
    }

    // 请求拦截器
    axios.interceptors.request.use(function (config) {
      // 0 -> infinitely
      Toast.loading('加载中...', 0, () => {}, true);
      return config
    }, function (error) {
      return Promise.reject(error)
    })

    axios.interceptors.response.use(res => {
      Toast.hide()
      return res.data
    }, (err) => {
      Toast.hide()
      return Promise.reject(err)
    })

  }

  render() {
    return (
      <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Switch location={location}>
                <Route exact path="/" render={props => <Index {...props} status={status} />} />
                <Redirect to="/" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    )
  }
}

App.defaultProps = {
};

export default withRouter(App);
