import React, { useEffect, useState } from 'react'
import store from './../../store'
import { productIndex } from './../../api/shoppingCart'

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
        <li>
          {item.item.map(purchase =>
            <ul key={item.item.indexOf(purchase)}>
              <li>{purchase.name}</li>
              <li>{purchase.price}</li>
            </ul>
          )}
        </li>
      </ul>
    )
  })
  return (
    <React.Fragment>
      <h3>{purchaseList}</h3>
    </React.Fragment>
  )
}

export default ShoppingHistory
