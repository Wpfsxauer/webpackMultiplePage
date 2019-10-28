import axios from 'axios'
import postUrl from './webconfig'
import {state} from '@/vuex/state'
var qs = require('qs');
//获取基本信息页
export function getEvalBasicInfo(data) {
  const url = postUrl.eval_getEvalBasicInfo;
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
//微信自助接口
export function updateWechatSelfHelpSign(data) {
  const url = postUrl.evaluation_updateWechatSelfHelpSign;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//微信自助接口取消
export function updateWechatSelfHelpCancelSign(data) {
  const url = postUrl.evaluation_updateWechatSelfHelpCancelSign;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//暂存前校验车牌 vin码
export function checkVinPlateNum(data) {
  const url = postUrl.evaluation_checkVinPlateNum;
  let res=axios.post(url, qs.stringify(data))
  return res
}

//暂存
export function temporaryStorage(data) {
  const url = postUrl.saveEval_basic;
  return axios.post(url, qs.stringify(data))
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

//获取碰撞模型
export function getPzbwList() {
  const url = postUrl.dict_getPzbwList;
  return axios.post(url, qs.stringify({}))
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

//获取碰撞程度
export function getPzcdList(id) {
  const url = postUrl.dict_getPzcdList;
  let data = {
    evalId: id
  }
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

//选择碰撞程度
export function setPzcdList(car, categoryCode) {
  let data = {
    evalId: car.id,
    bwbm:categoryCode,
    carTypeCode:car.carTypeCode
  }
  data = qs.stringify(data);
  const url = postUrl.eval_getEvalCollisionRelation;
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

//获取外修单位集合
export function getOuterRepairFactoryList(data){
  const url = postUrl.factory_getOutsideFactoryList;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

/*暂存*/
export function saveEvalbasic(data){
  const url = postUrl.saveEval_basic;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}


//整单和配件金额变化率
export function getEvalChangeRate(data) {
  const url = postUrl.eval_getEvalChangeRate+data.evalId;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//整单和配件金额变化率新加接口
export function getEvalChangeRateByFlowId(data) {
  const url = `${postUrl.eval_getEvalChangeRateByFlowId}?flowId=${data}`
  return axios.get(url)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//选初登日期自动计算出险实际价值
export function getActualPrice(data) {
  const url = postUrl.vehicleIdentify_getActualPrice;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}


//保存碰撞部位信息
export function saveEvalCollision(data) {
  const url = postUrl.saveEval_saveEvalCollision;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//获取点选率
export function getRiskCheckRatioInfo(data) {
  const url = postUrl.risk_getRiskCheckRatioInfo;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//获取车辆历史出险
export function getRiskAccidentInfo(data) {
  const url = postUrl.risk_getRiskAccidentInfo;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//外部链接
export function getExternalLinkList(data) {
  const url = postUrl.comms_getExternalLinkList+data;
  return axios.post(url)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//车牌号校验验证码
export function getImageSrc(data) {
  const url = postUrl.MobileTrafficVehicle_checkPC;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//车牌号校验验证码查询
export function upDateInfo(data) {
  const url = postUrl.MobileTrafficVehicle_confirmPC;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//车牌号校验验证码保存
export function saveDateInfo(data) {
  const url = postUrl.MobileTrafficVehicle_saveTraffic;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

// 一键零结
export function getZeroLoss(data) {
  const url = postUrl.evaluation_getZeroLoss;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

// 安盟验证查勘是否已完成
export function getSurveyOverFlag(data) {
  const url = postUrl.evaluation_getSurveyOverFlag;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//永成复制三者车信息两个接口
export function getOtherSubCarList(lossNo,reportCode) {
  const url = postUrl.saveEval_getOtherCarListBySubsidiaryReport+lossNo+'/'+reportCode;
  return axios.post(url,qs.stringify({}))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//选中一个回传 （永成复制三者车信息）
export function copyOtherCarInfo(data,lossNo,insCode) {
  const url = postUrl.saveEval_copyOtherCarInfo+lossNo+'/'+insCode;
  return axios.post(url,qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//安盟
export function getAppendHistory(data) {
  const url=postUrl.evaluation_getAppendHistoryEvalInfo;
  return axios.post(url,qs.stringify(data))
    .then(res=>{
      return Promise.resolve(res.data)
    })
}
//获取定损单信息
export function getEvalReport(data) {
  const url = postUrl.getEvalReport;
  return axios.post(url,qs.stringify(data)).then(res => {
    return Promise.resolve(res.data)
  })
}

//发起重案接口
export function postMajorCase(data) {
  const url = `${postUrl.evaluation_isCanSubmit}?insCode=INSAIC&requestType=INSAIC02`
  return axios.post(url,qs.stringify(data)).then(res => {
    return Promise.resolve(res.data)
  })
}

export function isCanSubmit(data) {
  const url = postUrl.isCanSubmit
  return axios.post(url,qs.stringify(data)).then(res => {
    return Promise.resolve(res.data)
  })
}
export function bigCaseQuery(data) {
  const url = postUrl.bigCaseQuery
  return axios.post(url,qs.stringify(data)).then(res => {
    return Promise.resolve(res.data)
  })
}

// 文件上传
export function importExcel (data) {
  const url = postUrl.upload
  return axios.post(url, data).then(res => {
    return Promise.resolve(res.data)
  })
}

// 查看excel简报
export function getImportResult (data) {
  const url = postUrl.getImportResult
  return axios.post(url, qs.stringify(data)).then(res => {
    return Promise.resolve(res.data)
  })
}
//excelm模板导出
export function importDownload () {
  const url = postUrl.importDownload
  return axios.get(url).then(res => {
    return Promise.resolve(res)
  })
}
