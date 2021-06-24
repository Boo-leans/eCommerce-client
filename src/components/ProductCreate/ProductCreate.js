import React, { useState } from 'react'

import products from './../products/products'

const ProductCreate = (props) => {
  const [item, setItem] = useState({ name: '', price: '' })

  const handleSubmit = event => {
    event.preventDefault()

    productCreate(user, item)
      .then(console.log)
      .then(res => setItem(res.data.purchase.id))
      .catch(console.error)
  }

  return (
    <Fragment>
    <h1>in product create</h1>
    </Fragment>
  )
}

export default ProductCreate
