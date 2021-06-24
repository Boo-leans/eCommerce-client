import axios from 'axios'
import apiUrl from '../apiConfig'

export const createCart = () => {
  return axios({
    method: 'POST',
    url: apiUrl + '/shoppingCart'
  })
}

export const productCreate = (user, item) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/purchases',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { products: item }
  })
}
