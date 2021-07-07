import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { productCreate } from './../../api/shoppingCart'
import store from './../../store.js'

export default class Stripe extends React.Component {
  onToken = (token) => {
    console.log('In TakeMoney stripe component')
    console.log('This is the value of token: ', token)
    productCreate(store.user, store.cart)
      .then(store.cart = [])
      .then(this.props.purchaseSuccess)
    // fetch('/save-stripe-token', {
    //   method: 'POST',
    //   body: JSON.stringify(token)
    // }).then(response => {
    //   response.json().then(data => {
    //     alert(`We are in business, ${data.email}`)
    //     console.log('This is response data from stripe: ', response)
    //   })
    // })
    // When it fires do this (on success) API call
    // successful transaction, store it
  }

  render (props) {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey='pk_test_51J7Ir4ChKNNsYXZbkWoNULv5Tsg5ddpeebwrVRGEpe99pfKGJkLYTGhTCGh3zDUkoBErFQ7v5BWagZYDn3FLOcj800KjrsUrti'
      />
    )
  }
}
