import axios from 'axios'
import postUrl from './webconfig'
var qs = require('qs');

export function getFeedbackTypeList(parentId) {
  const url = postUrl.dict_getFeedbackCateDictList;
  let data = {
    parentId: parentId
  }
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function getFeedbackInfoList(handleCode) {
  const url = postUrl.feedback_getFeedbackInfoList;
  let data = {
    feedbackBy: handleCode
  }
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function submitFeedback(callbackData) {
  const url = postUrl.feedback_submitFeedback;
  return axios.post(url, qs.stringify(callbackData))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function feedbackCreate( lossNo,platform,partCode,partName,userCode,typeCode,insCode){
  const url = postUrl.jyCustService_poseQuestion;
  let data = {
    lossCode: lossNo,
    platform: platform,
    partCode: partCode,
    partName: partName,
    userCode: userCode,
    typeCode: typeCode,
    companyCode: insCode
  }
  data = qs.stringify(data);
  return axios.post(url, data).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function feedbackView(lossNo,insCode){
  const url = postUrl.jyCustService_veiwFeedBack;
  let data = {
    lossCode: lossNo,
    companyCode:insCode
  }
  data = qs.stringify(data);
  return axios.post(url, data).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function selectUnreadTask(data,me){
  me.fullscreenLoading = false;
  const url = postUrl.callCenter_selectUnreadTask;
  data = qs.stringify(data);
  return axios.post(url, data).then((res) => {
    if (res && res.data && res.data.result > 0) {
      me.setFeedBackMsg(res.data.result);
    }
  })
}

export function updateReadFlag(data){
  const url = postUrl.updateReadFlag;
  data = qs.stringify(data);
  return axios.post(url, data).then((res) => {
    return Promise.resolve(res.data)
  })
}
// 扫码反馈 二维码获取
export function getQrCode(lossNo){
  const url = postUrl.feedback_getQrCode+lossNo;
  return axios.get(url,qs.stringify({})).then((res) => {
    return Promise.resolve(res.data)
  })
}
