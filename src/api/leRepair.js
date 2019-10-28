/**
 * Created by Administrator on 2017/9/8 0008.
 */
import axios from 'axios'
import postUrl from './webconfig'
var qs = require('qs');

/*乐修推修*/
export function sendLeRepair(data) {

  const url = postUrl.icEval_sendLeRepair;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

/*校验修理厂是否接车*/
export function checkReceived(data) {

  const url = postUrl.leRepair_checkReceived;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}


/*乐修推修查看*/
export function viewRepairState(data) {

  const url = postUrl.leRepair_viewRepairState;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
