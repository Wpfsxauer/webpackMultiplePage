import axios from 'axios'
import postUrl from './webconfig'
var qs = require('qs');


//获取历史信息
export function getNotionList(data) {
  const url = postUrl.eval_getEvalHistory + data.evalId+'/'+data.lossNo;
  return axios.post(url)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//获取图表数据
export function getRecordLineList(evalId,lossNo) {
  const url = postUrl.eval_getRecordLineList;
  let data = {
    evalId: evalId,
    lossNo
  }
  return axios.post(url, qs.stringify(data))
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
//获取单个环节数据
export function getRecordInfo(data) {
  const url = postUrl.eval_getRecordInfo;
  return axios.post(url, qs.stringify(data))
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
//获取审核历史记录
export function getEvalHistory(evalId,lossNo) {
  const url = postUrl.eval_getEvalHistory + evalId+'/'+lossNo;
  return axios.post(url, qs.stringify({}))
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
//获取定型历史记录
export function getModeSettingHistoryByEvalID(id) {
  const url = postUrl.vehicleIdentify_getModeSettingHistoryByEvalID + id;
  return axios.post(url, qs.stringify({}))
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

//获取修理厂变更记录
export function getfactorychangelist(id) {
  const url = postUrl.factory_getfactorychangelist + id;
  return axios.post(url, qs.stringify({}))
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

//获取风险
export function getRisk(id) {
  const url = postUrl.risk_getRisk;
  let data = {
    evalId: id
  }
  return axios.post(url, qs.stringify(data))
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
//风险自查
export function getSelfRisk(evalId,lossNo,riskRuleSwitch) {
  const url = postUrl.risk_getSelfRisk;
  let data = {
    evalId,
    lossNo: lossNo,
    riskRuleSwitch:riskRuleSwitch
  }
  return axios.post(url, qs.stringify(data))
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

export function setHaveRiskFlag(data) {
  const url = postUrl.risk_setHaveRiskFlag;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//�����ݴ�/�ύ
export function saveEval(data) {
  const url = postUrl.saveEval_overall;
  return axios.post(url, qs.stringify(data))
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
export function getRiskDetail(ruleCode,No,RiskMainId,evalComCode) {
  const url = postUrl.risk_getRiskDetailed;
  let data = {
    ruleCode: ruleCode,
    value: No,
    riskId: RiskMainId,
    orgCode: evalComCode
  }
  return axios.post(url, qs.stringify(data)).then((res) => {
      return Promise.resolve(res.data)
    })
}

//配件  风险
export function getRiskPartHistory(data) {
  const url = postUrl.risk_getRiskPartHistory;
  return axios.post(url, qs.stringify(data)).then((res) => {
    return Promise.resolve(res.data)
  })
}


//同  不同修理厂的配件 情况
export function getRiskPartFactory(data) {
  const url = postUrl.risk_getRiskPartFactory;
  return axios.post(url, qs.stringify(data)).then((res) => {
    return Promise.resolve(res.data)
  })
}


//获取风险
export function selectRuleResult(data) {
  const url = postUrl.selectResult;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//调度风险
export function selectDispatch(data) {
  const url = postUrl.selectDispatch;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
