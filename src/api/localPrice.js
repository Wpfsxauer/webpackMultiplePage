import axios from 'axios'
import postUrl from './webconfig'
var qs = require('qs');

export function getEstimatePartLocalPriceList(data) {
  const url = postUrl.estimate_getEstimatePartLocalPriceListByParts;
  data = qs.stringify(data);
  return axios.post(url, data).then((res) => {
      return Promise.resolve(res.data)
    })
}

export function changePartLocalPriceList(data) {
  const url = postUrl.estimate_saveLocalPartPrice;
  data = qs.stringify(data);
  return axios.post(url, data).then((res) => {
      return Promise.resolve(res.data)
    })
}
