import axios from 'axios'
import postUrl from './webconfig'
var qs = require('qs');

//获取查看信息
export function viewEvalInfo(data) {
  const url = postUrl.evaluation_viewEvalInfo;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
// 安盟历史损失项目（一单获取所有历史）
export function getAppendHistoryLossInfo(data) {
  const url=postUrl.evaluation_getAppendHistoryLossInfo;
  return axios.post(url,qs.stringify(data))
    .then(res=>{
      return Promise.resolve(res.data)
    })
}

