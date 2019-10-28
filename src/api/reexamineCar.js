import axios from 'axios'
import postUrl from './webconfig'
var qs = require('qs');
//che 审核获取信息
export function getRecheckApprCarInfo(data) {
  const url=postUrl.recheckAppr_getRecheckCarInfo;
  return axios.post(url,qs.stringify(data))
    .then(res=>{
      return Promise.resolve(res.data)
    })
}

//che 审核保存信息
export function saveCarRecheck(data) {
  const url=postUrl.recheckAppr_saveCarRecheck;
  return axios.post(url,qs.stringify(data))
    .then(res=>{
      return Promise.resolve(res.data)
    })
}
