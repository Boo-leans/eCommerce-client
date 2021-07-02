import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import { createCart } from './../../api/shoppingCart'

import store from './../../store'
// import { productCreate } from './../../api/shoppingCart'

const ShoppingCart = () => {
  const cartList = store.cart
  console.log('Current shoping cart list', cartList)

  const [cart, setCart] = useState(cartList)

  // const checkoutItems = () => {
  //   productCreate(store.user, cartList)
  //     // sets cart to [] upon checkout
  //     .then(setCart(store.cart = []))
  // }

  if (cartList.length === 0) {
    return (
      <h3>You did not add anything!</h3>
    )
  } else {
    // display items in store.cart
    const cartCards = cartList.map((product) => {
      const removeItem = (event) => {
        // event.preventDefault()
        store.product.index = cartList.indexOf(product)
        console.log('you clicked remove item')
        console.log('index of item, ', store.product.index)
        console.log('before splice of cart', cart)
        // Splice cart to remove specific item
        setCart(store.cart.splice(store.product.index, 1))
        console.log('after splice of cart', cart)
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
        <Link to= "/take-money" className="btn btn-primary">Check Out</Link>
      </Fragment>
    )
  }
}

export default ShoppingCart
