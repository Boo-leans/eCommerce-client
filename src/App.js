import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
// require component for the home page, a card for each product
import ProductListCards from './components/ProductListCards/ProductListCards'
// Add the shopping cart which will contain the items that the user wants
// to purchase
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
// History of items purchased by the user.
import ShoppingHistory from './components/ShoppingHistory/ShoppingHistory.js'
import TakeMoney from './components/Stripe/stripe'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map(msgAlert => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          {/* route to the homePage which adds a component that renders the product
           to the browser */}
          <Route exact path='/' component={ProductListCards} />
          <AuthenticatedRoute user={user} path='/take-money' render={() => (
            <TakeMoney user={user} />
          )} />
          {/* Route to the shopping cart page with a list of items the user
            intends to checkout. */}
          <AuthenticatedRoute user={user} path='/shopping-cart' render={() => (
            <ShoppingCart msgAlert={this.msgAlert} user={user} />
          )} />
          {/* Route to the shopping history page, which contains a list of
            the user's past purchases. */}
          <AuthenticatedRoute user={user} exact path='/shopping-history' render={() => (
            <ShoppingHistory msgAlert={this.msgAlert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
