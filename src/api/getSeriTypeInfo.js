import axios from 'axios'
import postUrl from './webconfig'
var qs = require('qs');

//根据车型ID查询是否可使用精细化定损标志  1 可使用   0 非
export function getSeriType(modelId) {
  const url = postUrl.vehicleIdentify_getSeriType;
  let data = {
    modelId: modelId
  }
  data = qs.stringify(data);
  return axios.post(url, data).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function saveSetLossInfo(data) {
  const url = postUrl.saveEval_saveSetLossFlags + data;
  return axios.post(url, '').then((res) => {
    return Promise.resolve(res.data)
  })
}

//进入精细化定损
export function toVisitSetLoss(data={flowCode:''}) {
  const url = postUrl.setLossInfo_visitSetLossInfo;
  data = qs.stringify(data);
  return axios.post(url, data).then((res) => {
    return Promise.resolve(res.data)
  })
}
