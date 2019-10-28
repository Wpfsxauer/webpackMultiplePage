import axios from 'axios'
import postUrl from './webconfig'
var qs = require('qs');
export function updateFlowState(data) {
  const url = postUrl.flow_updateFlowState;
  data = qs.stringify(data);
  return axios.post(url, data).then((res) => {
      return Promise.resolve(res.data)
    })
}

//申请注销
export function saveApplyDispatch(data) {
  const url=postUrl.comms_saveApplyDispatch;
  return axios.post(url,qs.stringify(data))
    .then(res=>{
      return Promise.resolve(res.data)
    })
}
//恢复注销
export function saveReApplyDispatch(data) {
  const url=postUrl.comms_recoverTaskInfo;
  return axios.post(url,qs.stringify(data))
    .then(res=>{
      return Promise.resolve(res.data)
    })
}