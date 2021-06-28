import React, { useEffect, useState } from 'react'
import store from './../../store'
import { productIndex, productRefund } from './../../api/shoppingCart'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ShoppingHistory = () => {
  const [item, setItem] = useState([])

  useEffect(() => {
    productIndex(store.user)
      .then(res => {
        setItem(res.data)
        store.data = res.data
        console.log('History of all purchases', res.data)
      })
  }, [item])
  // productIndex(store.user)
  //   .then(res => {
  //     store.data = res.data
  //     console.log('this is data ', store.data)
  //   })

  // const orderRefund = () => {
  //   console.log('You clicked return Order')
  //   console.log(item._id)
  //   productRefund(store.user, store.cart._id)
  //   //   .then(setItem(store.item = null))
  //     .then(res => console.log(res))
  // }

  const purchaseList = item.map(item => {
    const orderRefund = () => {
      console.log('You clicked return Order')
      console.log('This is item._id: ', item._id)
      console.log('This is store.cart: ', item)
      // store.product.index =
      productRefund(store.user, item._id)
      //   .then(setItem(store.item = null))
        .then(res => console.log('This is res data: ', res))
        .then(setItem(store.data))
    }

    // store.order.index = item.indexOf(item)
    return (
      // <ul key={item._id}>
      //   {item.item.map(purchase =>
      //     <ul key={item.item.indexOf(purchase)}>
      //       <li>{purchase.name}</li>
      //       <li>{purchase.price}</li>
      //     </ul>
      //   )}
      // </ul>
      // maybe put in date/time of purchase
      <Card style={{ width: '18rem' }} key={item._id}>
        {/* <Card.Img variant='top' src={product.backgroundUrl} /> */}
        {item.item.map(purchase =>
          <Card.Body key={item.item.indexOf(purchase)}>
            <Card.Title>{purchase.name}</Card.Title>
            <Card.Text>{purchase.price}</Card.Text>
          </Card.Body>
        )}
        <Button
          name="removeItem"
          onClick={orderRefund}
          variant="secondary">Return Order
        </Button>
      </Card>

    )
  })
  return (
    <React.Fragment>
      <h3>{purchaseList}</h3>
    </React.Fragment>
  )
}

export default ShoppingHistory
