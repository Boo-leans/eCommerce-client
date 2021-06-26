import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import { createCart } from './../../api/shoppingCart'

import store from './../../store'
import { productCreate } from './../../api/shoppingCart'

const ShoppingCart = () => {
  const cartList = store.cart
  console.log('Current shoping cart list', cartList)

  const checkoutItems = () => {
    productCreate(store.user, cartList)
  }

  // filter out blank
  const cartCards = cartList.filter(item => item.name !== '').map((product) => {
    return (
      <Card style={{ width: '18rem' }} key={cartList.indexOf(product)}>
        {/* <Card.Img variant='top' src={product.backgroundUrl} /> */}
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>

          <Button
            name="removeItem"
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
      <Button onClick={checkoutItems}>Checkout</Button>
    </Fragment>
  )
}

export default ShoppingCart
