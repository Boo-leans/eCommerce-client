import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import store from './../../store'
store.product = []
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
    store.product.push(item)
    console.log(store)
  }, [item])

  // const addCart = (event) => {
  //   event.preventDefault()
  //   this.setItem({ name: product.name, price: product.price })
  //
  //   // const product = { [event.target.name]: event.target.value }
  // }

  const productCards = productList.map(product => {
    return (
      <Card style={{ width: '18rem' }} key={product.id}>
        {/* <Card.Img variant='top' src={product.backgroundUrl} /> */}
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>

          <p>{item.name}</p>
          <p>{item.price}</p>
          <Button
            name="addCart"
            onClick={() =>
              setItem({ name: product.name, price: product.price })}
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
