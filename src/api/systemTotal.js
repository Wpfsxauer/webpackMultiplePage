import axios from 'axios'
import postUrl from './webconfig'
var qs = require('qs');
//申请转交->获取人员列表
export function getAuditorPerson(data) {
  const url = postUrl.comms_getAuditorPerson;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

// 转交-->确认提交
export function saveTransferInfo(data) {
  const url = postUrl.comms_saveTransferInfo;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//解锁确认任务回到任务池
export function getUnlockTask(data) {
  const url = postUrl.comms_getUnlockTask;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//诚泰获取风险信息
export function getIfcRisk(data) {
  const url = postUrl.comms_getIfcRisk;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//查询获取用户损失项目习惯
export function getLossItemHabit(data) {
  const url = postUrl.evalHabit_getLossItemHabit;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//保存用户损失项目习惯
export function updateLossItemHabit(data) {
  const url = postUrl.evalHabit_updateLossItemHabit;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}