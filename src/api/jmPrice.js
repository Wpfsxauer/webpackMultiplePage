/**
 * Created by Administrator on 2017/9/7 0007.
 */
import axios from 'axios'
import postUrl from './webconfig'
var qs = require('qs');

/*发起精米询价*/
export function sendOutJm(data) {
  const url = postUrl.jm_sendOutJm;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

/*接收精米报价*/
export function getJmPartPrice(data) {
  const url = postUrl.jm_getJmPartPrice;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
