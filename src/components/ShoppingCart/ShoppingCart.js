import React, { Fragment, useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Stripe from './../Stripe/Stripe'

import store from './../../store'
// import { productCreate } from './../../api/shoppingCart'

const ShoppingCart = (props) => {
  const cartList = store.cart
  console.log('Current shoping cart list', cartList)

  const [cart, setCart] = useState(cartList)
  const [message, setMessage] = useState('Please buy something')

  useEffect(() => {
  }, [cart, message])

  const purchaseSuccess = () => {
    setCart(null)
    setMessage('Thank you for your purchase')
  }

  if (cartList.length === 0) {
    return (
      <h3>{message}</h3>
    )
  } else {
    // display items in store.cart
    const cartCards = cartList.map((product) => {
      const removeItem = (event) => {
        // event.preventDefault()
        store.product.index = cartList.indexOf(product)
        // Splice cart to remove specific item
        setCart(store.cart.splice(store.product.index, 1))
      }

      return (
        <Card style={{ width: '18rem' }} key={cartList.indexOf(product)}>
          {/* <Card.Img variant='top' src={product.backgroundUrl} /> */}
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>${product.price}</Card.Text>

            <Button
              name="removeItem"
              onClick={removeItem}
              variant="secondary">Remove Item
            </Button>
          </Card.Body>
        </Card>
      )
    })

    return (
      <Fragment>
        <h2>Welcome to Shopping Cart</h2>
        {cartCards}
        <Stripe
          purchaseSuccess={purchaseSuccess}
        />
      </Fragment>
    )
  }
}

export default ShoppingCart
