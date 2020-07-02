import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AddOrder from './components/add-order.component';
import Order from './components/order.component';
import OrderList from './components/order-list.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className='navbar navbar-expand navbar-dark bg-dark'>
            <a href='/orders' className='navbar-brand'>
              Order Tracker
            </a>
            <div className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to={'/orders'} className='nav-link'>
                  Orders
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/add'} className='nav-link'>
                  Add
                </Link>
              </li>
            </div>
          </nav>

          <div className='container mt-3'>
            <Switch>
              <Route exact path={['/', '/orders']} component={OrderList} />
              <Route exact path='/add' component={AddOrder} />
              <Route path='/orders/:id' component={Order} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
