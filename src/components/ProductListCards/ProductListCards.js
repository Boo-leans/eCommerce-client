import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import store from './../../store'
// import productCreate from './../../api/shoppingCart'
store.product = []
store.cart = []
const ProductListCards = () => {
  const [item, setItem] = useState({ name: '', price: '' })
  const productList = [{
    id: 0,
    name: 'rice',
    price: '1'
  },
  {
    id: 1,
    name: 'potato',
    price: '2'
  }]

  useEffect(() => {
    if (item.name.length > 0) {
      store.cart.push(item)
    }
  }, [item])

  const productCards = productList.map(product => {
    return (
      <Card style={{ width: '18rem' }} key={product.id}>
        {/* <Card.Img variant='top' src={product.backgroundUrl} /> */}
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button
            name="addCart"
            onClick={() => {
              setItem({ name: product.name, price: product.price })
              console.log('cart: ', store.cart)
            }}
            variant="primary">Add Cart
          </Button>
        </Card.Body>
      </Card>
    )
  })
  return (
    <React.Fragment>
      {productCards}
    </React.Fragment>
  )
}

export default ProductListCards
