import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import GlobalStyles from './styles/GlobalStyles'

import * as actions from './store/actions/auth'

//CONTAINERS
import Layout from './containers/Layout'
import LoginPage from './containers/LoginPage'
import RegisterPage from './containers/RegisterPage'

//COMPONENTS

class App extends React.Component {

  componentDidMount() {
	this.props.onTryAutoSignUp()
  }

  render() {
    return (
      <Router>
        <div className="App">
          <GlobalStyles />

          <Switch>
            <Route exact path="/" render={() => {
              return (
                <Layout props={ this.props } />
              )
            }} />
            <Route exact path="/login" component={ LoginPage } />
            <Route exact path="/register" component={ RegisterPage } />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);