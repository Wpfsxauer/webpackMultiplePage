import axios from 'axios'
import postUrl from './webconfig'
var qs = require('qs');

//获取核损基本信息
export function getApproveInfo(data) {
  const url = postUrl.approve_getApproveInfo;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//暂存,{headers:{'Content-Type':'application/json;charset=UTF-8'}}
export function saveApproveLoss(data) {
  const url = postUrl.approve_saveApproveLoss;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//更新辅料
export function updateMate(data, handlerCode) {
  const url = postUrl.approve_updateMate + handlerCode;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//更新外修
export function updateOuterRepair(data, handlerCode) {
  const url = postUrl.approve_updateOuterRepair + handlerCode;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//更新工时
export function updateRepair(data, handlerCode) {
  const url = postUrl.approve_updateRepair + handlerCode;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//更新打包工时
export function approve_updateRepairExtend(data, handlerCode) {
  const url = postUrl.approve_updateRepairExtend + handlerCode;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//更新配件
export function updatePart(data, handlerCode) {
  const url = postUrl.approve_updatePart + handlerCode;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//获取辅料核损历史
export function getApproveHistoryMaterialList(data) {
  const url = postUrl.approve_getApproveHistoryMaterialList;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}



//获取工时核损历史
export function getApprvoeHistoryRepairList(data) {
  const url = postUrl.approve_getApprvoeHistoryRepairList;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//获取配件核损历史
export function getApproveHistoryPartList(data) {
  const url = postUrl.approve_getApproveHistoryPartList;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//更新施救费
export function updateSalv(data, handlerCode) {
  const url = postUrl.approve_updateSalv + handlerCode;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}


