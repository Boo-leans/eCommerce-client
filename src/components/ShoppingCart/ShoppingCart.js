import React, { Fragment, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import { createCart } from './../../api/shoppingCart'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

// import img from './ProductListCards/img/img.png'
// import img1 from './ProductListCards/img/img1.png'
// import img2 from './ProductListCards/img/img2.png'
// import img3 from './ProductListCards/img/img3.png'
// import img4 from './ProductListCards/img/img4.png'
// import img5 from './ProductListCards/img/img5.png'

import store from './../../store'
import { productCreate } from './../../api/shoppingCart'

const ShoppingCart = () => {
  const cartList = store.cart
  console.log('Current shoping cart list', cartList)

  const [cart, setCart] = useState(cartList)

  const checkoutItems = () => {
    productCreate(store.user, cartList)
      // sets cart to [] upon checkout
      .then(setCart(store.cart = []))
  }

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
      <Card style={{ width: '18rem', margin: '8px' }} key={cartList.indexOf(product)}>
        <Card.Img variant='top' src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>

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
      <Container className="container-fluid no-padding" style={{ margin: 'auto' }} fluid>
        <Row className="justify-content-start mt-5 mb-5" xs={2} md={4} lg={6}>
          {cartCards}
        </Row>
        <Row className="justify-content-start mt-5 mb-5" xs={2} md={4} lg={6}>
          <Button style={{ width: '18rem', margin: '8px' }} onClick={checkoutItems}>Checkout</Button>
        </Row>
      </Container>
    </Fragment>
  )
}

export default ShoppingCart
