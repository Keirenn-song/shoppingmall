import {request} from './request'

export const getCategoryData = () => {
  return request({
    url: '/category'
  })
}
export const getCategoryGoods = (maitKey) => {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}