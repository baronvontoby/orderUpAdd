import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import "./index.css";
import LoginPage from './pages/LoginPage';
import OrderPage from './pages/OrderPage';
import AdminPage from './pages/AdminPage';

class App extends Component {
  state = {
    loggedIn : false,
    user : []
  }



  render() {

    if ( this.state.loggedIn === true ) {
      return (
         <div className='Main'>
          <BrowserRouter>
            <Switch>
              <Route exact path='/order' component={ () => <OrderPage /> } />
              <Route exact path='/admin' component={ () => <AdminPage /> } />
              <Route exact path='/ou-login' component={ () => <LoginPage /> } />
            </Switch>
          </BrowserRouter>
         </div>
        );
      } else {
        return (
          <div className='Main'>
            <BrowserRouter>
              <Switch>
                <Route exact path='/order' component={ () => <OrderPage /> } />
                <Route exact path='/ou-login' component={ () => <LoginPage /> } />
              </Switch>
            </BrowserRouter>
          </div>
        );
      }
  }
}

export default App;
