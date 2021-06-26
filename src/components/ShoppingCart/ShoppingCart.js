import React, { Fragment, useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import store from './../../store'
// import { productCreate } from './../../api/shoppingCart'
store.product = []
const ShoppingCart = () => {
  const cartList = store.product
  console.log('Current shoping cart list', cartList)
  const [item, setItem] = useState('')

  // useEffect(() => {
  //   productCreate(store.user, item)
  //     .then(() => setItem('Potato'))
  // }, [])

  useEffect(() => {
    store.product.splice(store.product.index, 1)
    console.log('contents of store.product ', store.product)
  }, [item])

  // filter out blank
  const cartCards = cartList.filter(item => item.name !== '' || item === '').map((product) => {
    return (
      <Card style={{ width: '18rem' }} key={cartList.indexOf(product)}>
        {/* <Card.Img variant='top' src={product.backgroundUrl} /> */}
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>

          <Button
            // Set object to ''
            name="removeItem"
            onClick={() => {
              setItem({ name: '', price: '' })
              store.product.index = cartList.indexOf(product)
            }
            }
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
