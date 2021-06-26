import React, { useEffect, useState } from 'react'
import store from './../../store'
import { productIndex } from './../../api/shoppingCart'

const ShoppingHistory = () => {
  const [name, setName] = useState('')

  useEffect(() => {
    productIndex(store.user)
      .then(res => {
        store.data = res.data
        setName(store.data[0].name)
        console.log(store.data)
      })
  }, [])
  return (
    <React.Fragment>
      <h3>{name}</h3>
    </React.Fragment>
  )
}

export default ShoppingHistory
