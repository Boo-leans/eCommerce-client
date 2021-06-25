import React, { useEffect, useState } from 'react'
import store from './../../store'
import { productIndex } from './../../api/shoppingCart'

const ShoppingHistory = () => {
  const [name, setName] = useState('')
  // const [price, setPrice] = useState('')
  useEffect(() => {
    // productCreate(store.user, item)
    //   .then(res => res.data.user)
    //   .then(setItem({ name: 'potato', price: 7 }))
    productIndex(store.user)
      .then(res => {
        store.data = res.data
        setName(store.data[0].name)
        // productPrice = store.data[0].price
      })
    // .then(res => res.data.map(purchase => {
    //   // if (store.user.id === purchase.owner) {
    //   }
    // }))
  }, [])
  return (
    <React.Fragment>
      <h3>{name}</h3>
    </React.Fragment>
  )
}

export default ShoppingHistory
