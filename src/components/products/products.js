import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProductListCards = () => {
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

  const addCart = (event) => {
    event.preventDefault()
  }

  const productCards = productList.map(product => {
    return (
      <Card style={{ width: '18rem' }} key={product.id}>
        {/* <Card.Img variant='top' src={product.backgroundUrl} /> */}
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button onClick={this.addCart} variant="primary">Add Cart</Button>
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
