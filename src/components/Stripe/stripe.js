import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
// import store from './../../store.js'

export default class TakeMoney extends React.Component {
  onToken = (token) => {
    console.log(token)
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token)
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`)
        console.log(response)
      })
    })
  }

  render () {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey='pk_test_51J7Ir4ChKNNsYXZbkWoNULv5Tsg5ddpeebwrVRGEpe99pfKGJkLYTGhTCGh3zDUkoBErFQ7v5BWagZYDn3FLOcj800KjrsUrti'
      />
    )
  }
}
