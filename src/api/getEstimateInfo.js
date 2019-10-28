import axios from 'axios'
import postUrl from './webconfig'
var qs = require('qs');

//获取核价基本信息
export function getEstimateInfo(data) {
  const url = postUrl.estimate_getEstimateInfo;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//保存核价配件信息
export function SaveEstimatePart(link, data) {
  const url = postUrl.estimate_part + link;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//获取本地价格
export function getEstimatePartLocalPriceList(data) {
  const url = postUrl.estimate_getEstimatePartLocalPriceList;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//获取核价历史
export function getEstimateHistoryPartList(data) {
  const url = postUrl.estimate_getEstimateHistoryPartList;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//保存核价信息
export function saveEstiMateLoss(data) {
  const url = postUrl.estimate_saveEstiMateLoss;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//核价外修备注
export function saveOuterRepair(data) {
  const url = postUrl.estimate_saveOuterRepair;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//核价直供查看
export function showInquiryDetail(data) {
  const url=postUrl.inquiry_showInquiryDetail;
  return axios.post(url,qs.stringify(data))
    .then(res=>Promise.resolve(res.data))
}
//电商价查看
export function showPartAuxiliaryDetail(data) {
  const url=postUrl.inquiry_showPartAuxiliaryDetail;
  return axios.post(url,qs.stringify(data))
    .then(res=>Promise.resolve(res.data))
}

//侧边栏工时核价信息保存
export function estiUpdateRepair(data, handlerCode) {
  const url=postUrl.estimate_updateRepair+handlerCode;
  return axios.post(url,qs.stringify(data))
    .then(res=>Promise.resolve(res.data))
}
//更新打包工时
export function estiUpdateRepairExtend(data, handlerCode) {
  const url = postUrl.estimate_updateRepairExtend + handlerCode;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

