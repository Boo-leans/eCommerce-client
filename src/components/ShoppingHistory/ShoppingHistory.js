import React, { useEffect, useState } from 'react'
import store from './../../store'
import { productIndex, productCreate } from './../../api/shoppingCart'

const ShoppingHistory = () => {
  const [item, setItem] = useState({ name: '', price: '' })
  useEffect(() => {
    productCreate(store.user, item)
      .then(res => res.data.user)
      .then(setItem({ name: 'potato', price: 7 }))
    productIndex(store.user)
      .then(res => console.log('res:', res))
    // .then(res => res.data.map(purchase => {
    //   // if (store.user.id === purchase.owner) {
    //   }
    // }))
  }, [item])
  return (
    <React.Fragment>
      <h3>Hi</h3>
    </React.Fragment>
  )
}

export default ShoppingHistory
