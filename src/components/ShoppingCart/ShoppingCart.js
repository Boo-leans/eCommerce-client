import React, { Fragment, useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import { createCart } from './../../api/shoppingCart'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Stripe from './../Stripe/stripe'

// import img from './ProductListCards/img/img.png'
// import img1 from './ProductListCards/img/img1.png'
// import img2 from './ProductListCards/img/img2.png'
// import img3 from './ProductListCards/img/img3.png'
// import img4 from './ProductListCards/img/img4.png'
// import img5 from './ProductListCards/img/img5.png'

import store from './../../store'
// import { productCreate } from './../../api/shoppingCart'

const ShoppingCart = () => {
  const cartList = store.cart
  console.log('Current shoping cart list', cartList)
  console.log('value of Store', store)
  const [cart, setCart] = useState(cartList)
  const [message, setMessage] = useState('Please buy something')

  useEffect(() => {}, [cart, message])

  const purchaseSuccess = () => {
    setCart(null)
    setMessage('Thank you for your purchase')
  }

  // const checkoutItems = () => {
  //   productCreate(store.user, cartList)
  //     // sets cart to [] upon checkout
  //     .then(setCart(store.cart = []))
  // }

  // display items in store.cart
  // delete line 40-44, remove accompanying braces
  // {cartList.length === 0 ? message : cartCards}
  // use an alert instead of an onscreen message
  // take cartCards and remove it from the else statement. Completely remove else statement. Get rid of message so we're not replacing the Stripe component
  const cartCards = cartList.map((product) => {
    const removeItem = (event) => {
      // event.preventDefault()
      store.product.index = cartList.indexOf(product)
      // console.log('you clicked remove item')
      // console.log('index of item, ', store.product.index)
      // console.log('before splice of cart', cart)
      // // Splice cart to remove specific item
      setCart(cartList.splice(store.product.index, 1))
      // console.log('after splice of cart', cart)
    }

    return (
      <Card style={{ width: '18rem', margin: '8px' }} key={cartList.indexOf(product)}>
        <Card.Img variant='top' src={product.img} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>${product.price}</Card.Text>

          <Button className="button"
            name="removeItem"
            onClick={removeItem}
            variant="secondary">Remove
          </Button>

        </Card.Body>
      </Card>
    )
  })

  return (
    <Fragment>
      <Container className="container-fluid no-padding" style={{ margin: 'auto' }} fluid>
        <Row className="justify-content-start center" xs={2} md={4} lg={6}>
          {cartList.length === 0 ? message : cartCards}
        </Row>
        <Row className="justify-content-end mb-5 mt-5" xs={2} md={4} lg={6}>
          <Stripe
            purchaseSuccess = {purchaseSuccess}
          />
        </Row>
      </Container>
    </Fragment>
  )
}

export default ShoppingCart
