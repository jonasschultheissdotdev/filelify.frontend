import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Layout from './hoc/Layout';
import Landing from './components/Landing';
import axios from './axios';

export default class App extends Component {
  state = {
    token: null
  };

  getTokenFromLocalStorage() {
    return localStorage.getItem('filelify:token');
  }

  saveTokenInLocalStorage(token) {
    localStorage.setItem('filelify:token', token);
  }

  tryAutoLogin() {
    const token = this.getTokenFromLocalStorage();
    if (token) {
      this.setState({ token });
    }
  }

  async signIn(username, password) {
    const token = await axios.post('/auth/sign_in', {
      body: {
        username,
        password
      }
    });
  }

  signUp() {}

  isLoggedIn() {
    return this.state.token ? true : false;
  }

  componentDidMount() {
    this.tryAutoLogin();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/sign_up" exact render={<Landing signUp={this.signUp} />} />
        <Route path="/sign_in" exact component={Landing} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.isLoggedIn) {
      routes = (
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/settings" component={Landing} />
          <Route path="/logout" component={Landing} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <Fragment>
        <Layout isLoggedIn={this.isLoggedIn()}>{routes}</Layout>
      </Fragment>
    );
  }
}
