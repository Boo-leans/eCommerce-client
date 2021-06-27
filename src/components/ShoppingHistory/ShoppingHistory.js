import React, { useState } from 'react'
import store from './../../store'
import { productIndex } from './../../api/shoppingCart'

const ShoppingHistory = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  // useEffect(() => {
  //   productIndex(store.user)
  //     .then(res => {
  //       store.data = res.data
  //       store.data.map(purchase => console.log('store.data.map.purchase.item', purchase.item.map(item => {
  //         console.log('item.name:\n', item.name, '\nitem.price:\n', item.price)
  //         setName(item.name)
  //         console.log('setName:\n', name)
  //         setPrice(item.price)
  //         console.log('\nset price:\n', price)
  //       })))
  //     })
  // }, [])
  //
  // console.log(store.data)

  const purchaseHistory = () => {
    productIndex(store.user)
      .then(res => {
        store.data = res.data
        store.data.map(purchase => {
          purchase.item.map(item => {
            console.log('item.name:\n', item.name, '\nitem.price:\n', item.price)
            setName(item.name)
            setPrice(item.price)
            return (
              <React.Fragment key={store.data.indexOf(purchase)}>
                <h3>{name}</h3>
                <h5>{price}</h5>
              </React.Fragment>
            )
          })
        })
      })
  }

  return (
    <React.Fragment>
      {purchaseHistory()}
    </React.Fragment>
  )
}

export default ShoppingHistory
