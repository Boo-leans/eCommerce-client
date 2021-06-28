import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import store from './../../store'
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
    name: 'rice',
    price: '1'
  },
  {
    id: 1,
    name: 'potato',
    price: '2'
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
      <Card style={{ width: '18rem' }} key={product.id}>
        {/* <Card.Img variant='top' src={product.backgroundUrl} /> */}
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
    <React.Fragment>
      {productCards}
    </React.Fragment>
  )
}

export default ProductListCards
