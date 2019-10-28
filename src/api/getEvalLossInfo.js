import axios from 'axios'
import postUrl from './webconfig'
var qs = require('qs');
export function getEvalLossInfo(lossNo) {

  const url = postUrl.eval_getEvalLossInfo;
  let data = {
    lossNo
  }
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
// 询价相关信息
export function getInquiryInfo(handlerCode) {
  const url = postUrl.inquiry_getInquiryInfo;
  let data = {
    handlerCode
  }
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
// 发起询价
export function initiateInquiry(data) {
  const url = postUrl.inquiry_initiateInquiry;
  // let data = {
  //   handlerCode
  // }
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
//批量获取品质
export function getBatchInquiry(data) {
  const url = postUrl.inquiry_batchInquiry;
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
// 批量获取品质
export function saveBatchInquiry(data) {
  const url = postUrl.inquiry_saveBatchInquiry;
  // let data = {
  //   handlerCode
  // }
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
// 获取配件报价信息
export function getPartInquiry(data) {
  const url = postUrl.inquiry_getPartInquiry;
  // let data = {
  //   handlerCode
  // }
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
// 选择直供
export function updatePartInquiryInfo(data) {
  const url = postUrl.inquiry_updatePartInquiryInfo;
  // let data = {
  //   handlerCode
  // }
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
// 刷新报价
export function sendInquiry(data) {
  const url = postUrl.inquiry_sendInquiry;
  // let data = {
  //   handlerCode
  // }
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
// 打开直供页
export function inquiryGetToken(data) {
  const url = postUrl.inquiry_getToken;
  // let data = {
  //   handlerCode
  // }
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}



export function updatePart(data, handlerCode) {

  const url = postUrl.saveEval_updatePart + handlerCode;
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

export function updateRepair(data, handlerCode) {

  const url = postUrl.saveEval_updateRepair + handlerCode;

  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function updateOuterRepair(data, handlerCode) {

  const url = postUrl.evalRepair_updateOuterRepair + handlerCode;

  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}


export function updateMate(data, handlerCode) {

  const url = postUrl.saveEval_updateMate + handlerCode;

  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function saveEvalLoss(data) {

  const url = postUrl.saveEval_loss;

  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
export function sendOutRepairInquir(data) {

  const url = postUrl.eval_sendOutRepairInquir;

  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
export function getEvalAddress(data) {
  const url = postUrl.inquiry_getEvalAddress;

  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function setEvalAddress(data) {
  const url = postUrl.inquiry_setEvalAddress;

  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
export function getProvince(data) {

  const url = postUrl.inquiry_getProvince;

  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
export function getCity(data) {

  const url = postUrl.inquiry_getCity;

  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
export function getCounty(data) {

  const url = postUrl.inquiry_getCounty;

  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
export function getTown(data) {

  const url = postUrl.inquiry_getTown;

  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

// 直供退货
export function rejectSupplyPart(data) {
  const url = postUrl.inquiry_rejectParts;
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

// 确认直供
export function saveDirectSupplyParts(data) {
  const url = postUrl.save_directSupplyParts;
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

//询价时历史照片获取
export function getpictureHistory(data) {
  const url=postUrl.inquiry_getpictureHistory;
  return axios.post(url,qs.stringify(data)).then(res=>{
    return Promise.resolve(res.data)
  })
}
//定损取消接口
export function cancelEvalLoss(data) {
  const url=postUrl.cancelEvalLoss;
  return axios.post(url,qs.stringify(data)).then(res=>{
    return Promise.resolve(res.data)
  })
}
//表头优化获取接口
export function getPartContent(data) {
  const url=postUrl.getPartContent;
  return axios.post(url,qs.stringify(data)).then(res=>{
    return Promise.resolve(res.data)
  })
}
//表头优化修改接口
export function updateEvalHabit(data) {
  const url=postUrl.updateEvalHabit;
  return axios.post(url,qs.stringify(data)).then(res=>{
    return Promise.resolve(res.data)
  })
}

// 退回接口
export function returnTask(data) {
  const url=postUrl.returnTask;
  return axios.post(url,qs.stringify(data))
    .then(res=>{
      return Promise.resolve(res.data)
    })
}

export function updateSalv(data, handlerCode) {

  const url = postUrl.saveEval_updateSalv + handlerCode;

  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function updateSalvRemark(data) {//保存单条施救费
  const url=postUrl.salv_updateSalvRemark;
  return axios.post(url,qs.stringify(data))
    .then(res=>{
      return Promise.resolve(res.data)
    })
}

//获取VIN码校验结果信息
export function getVinPartCheckResult(data) {
  const url=postUrl.saveEval_checkVinPart;
  return axios.post(url,qs.stringify(data))
    .then(res=>{
      return Promise.resolve(res.data)
    })
}

//保存精准定件选择的结果信息
export function saveCheckPartInfo(data) {
  const url=postUrl.saveEval_saveCheckPartInfo;
  return axios.post(url,qs.stringify(data))
    .then(res=>{
      return Promise.resolve(res.data)
    })
}

//浙商的查询价格接口
export function getZSPartPriceList(data) {
  const url = postUrl.getZSPartPriceList
  return axios.post(url,data).then(res => {
    return Promise.resolve(res.data)
  })
}
//浙商的价格方案选用接口
export function setZSPartPriceType(data) {
  const url = postUrl.setZSPartPriceType
  return axios.post(url,data).then(res => {
    return Promise.resolve(res.data)
  })
}

//核价环节，配件询价单导入
export function estimateImportPartEsti (data) {
  const url = postUrl.estimateImportPartEsti
  return axios.post(url, data).then(res => {
    return Promise.resolve(res.data)
  })
}

//询价单导入错误查询
export function estimateGetExcelPartWrong (data) {
  const url = postUrl.estimateGetExcelPartWrong
  return axios.post(url, qs.stringify(data)).then(res => {
    return Promise.resolve(res.data)
  })
}

//获取定损工具全车喷漆费用
export function getAllPaintFee(data) {
  const url = postUrl.repairQuery_getAllPaintItemFee;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//匹配未匹配项目列表
export function getImportItemList (data) {
  const url = postUrl.getImportItemList
  return axios.post(url, qs.stringify(data)).then(res => {
    return Promise.resolve(res.data)
  })
}
// 删除匹配项目类表
export function delImportLoss (data) {
  const url = postUrl.delImportLoss
  return axios.post(url, qs.stringify(data)).then(res => {
    return Promise.resolve(res.data)
  })
}
// 取消匹配
export function updateImportRelation (data) {
  const url = postUrl.updateImportRelation
  return axios.post(url, qs.stringify(data)).then(res => {
    return Promise.resolve(res.data)
  })
}
