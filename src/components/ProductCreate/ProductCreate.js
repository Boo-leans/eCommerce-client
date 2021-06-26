import React, { useState } from 'react'
import store from './../../store'
import { productCreate } from './../../api/shoppingCart'
// import products from './../products/products'

const ProductCreate = (props) => {
  const [item, setItem] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    setItem('banana')
    productCreate(store.user, item)
      .then(() => console.log('response: ', item))
      .catch(console.error)
  }

  return (
    <React.Fragment>
      <h1>in product create</h1>
      <button onClick={handleSubmit}>Create</button>
    </React.Fragment>
  )
}

export default ProductCreate
