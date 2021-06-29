import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import store from './../../store'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

import imgBanner from './img/Banner.png'
import img from './img/img.png'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import img5 from './img/img5.png'
// import productCreate from './../../api/shoppingCart'
store.product = []
// temporary storage for the list of items the user wants to purchase.
store.cart = []
// Component which will show the items for purchase and allow the user to
// select a button to add these items to the chopping cart.
const ProductListCards = () => {
  // state to set the item as an object with a name and a price.
  const [item, setItem] = useState({ name: '', price: '' })
  // These are the hardcoded products in which the user can buy an item.
  const productList = [{
    id: 0,
    name: 'Carrots',
    price: '$1',
    img: img
  },
  {
    id: 1,
    name: 'Bread',
    price: '$2',
    img: img1
  },
  {
    id: 2,
    name: 'Lettuce',
    price: '$3',
    img: img2
  },
  {
    id: 3,
    name: 'Spinach',
    price: '$4',
    img: img3
  },
  {
    id: 4,
    name: 'Onions',
    price: '$1',
    img: img4
  },
  {
    id: 5,
    name: 'Peppers',
    price: '$2',
    img: img5
  }]

  // after the item component changes this function renders.
  useEffect(() => {
    // As long as the item name is longer then 0
    if (item.name.length > 0) {
      // We will push that item into the store cart defined above.
      store.cart.push(item)
    }
    // allows the useEffect function to only work after the item state is changed.
  }, [item])

  // defining a function that will map over the list created above with the items
  // and select those items to be displayed in the browser.
  const productCards = productList.map(product => {
    // return jsx to the browser.
    return (
      // Card from bootstrap to contain the items we are mapping over. Each
      // item will have a card with a width of 18 rem. Also contains the key
      // we need to map over lists in react. The key will be the items id.
      <Card style={{ width: '18rem', margin: '8px' }} key={product.id}>
        <Card.Img variant='top' src={product.img} />
        <Card.Body>
          {/* The follwing two tags will surround the items name and price as
            defined above and print them inside the bootstrap cards. */}
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          {/* This button will contain a function which will allow the
            user to add items to their shopping cart. It's name is addCart and
            it has an onCLick function which will change the state of item
            to be whichever item the user clicked. */}
          <Button
            name="addCart"
            onClick={() => {
              setItem({ name: product.name, price: product.price })
            }}
            variant="primary">Add Cart
          </Button>
        </Card.Body>
      </Card>
    )
  })
  // The code below will be printed to the screen.
  return (
    <Container style={{ margin: 'auto' }} fluid>
      <Row className="justify-content-center">
        <Image src={imgBanner} style={{ margin: '0px 0px 75px 0px' }} fluid />
        <React.Fragment>
          {productCards}
        </React.Fragment>
      </Row>
    </Container>
  )
}

export default ProductListCards
