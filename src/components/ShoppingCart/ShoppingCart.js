import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import { createCart } from './../../api/shoppingCart'

import store from './../../store'
store.product = []
const ShoppingCart = () => {
  const cartList = store.product
  console.log('Current shoping cart list', cartList)

  // useEffect(() => {
  //   createCart()
  //   store.product.push(item)
  //   console.log(store)
  // }, [item])

  // filter out blank
  const cartCards = cartList.filter(item => item.name !== '').map((product) => {
    return (
      <Card style={{ width: '18rem' }} key={cartList.indexOf(product)}>
        {/* <Card.Img variant='top' src={product.backgroundUrl} /> */}
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>

          <Button
            // Set object to ''
            name="removeItem"
            // onClick={() =>
            //   setItem({ name: product.name, price: product.price })}
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
      <Button>Checkout</Button>
    </Fragment>
  )
}

export default ShoppingCart
