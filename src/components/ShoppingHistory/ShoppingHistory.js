import React, { useEffect, useState, useRef } from 'react'
import store from './../../store'
import { productIndex, productRefund, itemRefund } from './../../api/shoppingCart'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ShoppingHistory = () => {
  const [item, setItem] = useState([])
  let newArr = null

  // useEffect only once
  const calledOnce = useRef(false)
  const createIndex = () => {
    productIndex(store.user)
      .then(res => {
        setItem(res.data)
        store.data = res.data
        calledOnce.current = false
      })
  }

  useEffect(() => {
    if (calledOnce.current) {
      return
    }
    createIndex()
  }, [item])

  if (item.length === 0) {
    return (
      <h3>Sorry nothing purchased yet. Hurry up spend some cash!</h3>
    )
  } else {
    const purchaseList = item.map(item => {
      const removeItem = (event) => {
        store.data[store.data.indexOf(item)].item.splice(event.target.value, 1)
        newArr = store.data[store.data.indexOf(item)].item
        itemRefund(store.user, item._id, newArr)
          .then(res => console.log('This is the res data: ', res))
      }

      const orderRefund = () => {
        productRefund(store.user, item._id)
          .then(setItem(store.data))
      }

      return (
        // maybe put in date/time of purchase
        <Card style={{ width: '18rem' }} key={item._id}>
          {/* <Card.Img variant='top' src={product.backgroundUrl} /> */}
          {item.item.map(purchase =>
            <Card.Body key={item.item.indexOf(purchase)}>
              <Card.Title>Product: {purchase.name}</Card.Title>
              <Card.Text>${purchase.price}</Card.Text>
              <Button
                name="removeSingleItem"
                onClick={removeItem}
                value={item.item.indexOf(purchase)}
                variant="secondary">Return</Button>
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
}

export default ShoppingHistory
