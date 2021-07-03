import React, { useEffect, useState } from 'react'
import store from './../../store'
import { productIndex } from './../../api/shoppingCart'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const ShoppingHistory = () => {
  const [item, setItem] = useState([])

  useEffect(() => {
    productIndex(store.user)
      .then(res => {
        setItem(res.data)
        console.log(item)
      })
  }, [])
  // productIndex(store.user)
  //   .then(res => {
  //     store.data = res.data
  //     console.log('this is data ', store.data)
  //   })

  const purchaseList = item.map(item => {
    return (
      <ul key={item._id}>
        {item.item.map(purchase =>
          <ul key={item.item.indexOf(purchase)}>
            <li>{purchase.name}</li>
            <li>{purchase.price}</li>
          </ul>
        )}
      </ul>
    )
  })
  return (
    <React.Fragment>
      <Container className="container-fluid no-padding" style={{ margin: 'auto' }} fluid>
        <Row className="justify-content-center mt-5 mb-5" xs={2} md={4} lg={6}>
          <h3>{purchaseList}</h3>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default ShoppingHistory
