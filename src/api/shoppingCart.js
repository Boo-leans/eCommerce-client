import axios from 'axios'
import apiUrl from '../apiConfig'

export const createCart = (user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/shoppingCart',
    header: { 'Authorization': `Bearer ${user.token}` },
    data: ''
  })
}

// add/Update purchase history
export const productCreate = (user, item) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/purchases',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { item }
  })
}

// delete (refund) purchased product
export const productRefund = (user, itemId) => {
  return axios({
    url: apiUrl + '/purchases/' + itemId,
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${user.token}` }
  })
}

// index purchase history
export const productIndex = (user) => {
  return axios({
    url: apiUrl + '/purchases',
    headers: { 'Authorization': `Bearer ${user.token}` }
  })
}
