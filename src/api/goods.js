import axios from 'axios'
import postUrl from './webconfig'
import qs from 'qs'
export function getEvalCargoInfoControll(data) {
  const url = postUrl.icEvalCargoControll_getEvalCargoInfoControll;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
// 物损定损信息添加
export function getEvalCargoInfoAdd(data, flag) {
  const url = flag === 1 ? postUrl.evalCargo_getEvalCargoInfoAdd : postUrl.evalCargo_getEvalCargoInfoUpdate;//添加和更新
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })

}

// 物损定损信息删除
export function getEvalCargoInfoDel(data) {
  const url = postUrl.evalCargo_getEvalCargoInfoDel;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
// 物损定损信息修改
export function getEvalCargoInfoUpdate(data) {
  const url = postUrl.evalCargo_getEvalCargoInfoUpdate;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//物损定损信息 zhangran
export function getEvalCargoInfo(data) {
  const url = postUrl.evalCargo_getEvalCargoInfo;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//物损定损信息保存 zhangran
export function saveEvalCargoInfo(data) {
  const url = postUrl.evalCargo_saveEvalCargoInfo;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//获取物损核损信息
export function getApprCargoInfo(data) {
  const url = postUrl.apprcargo_getApprCargoInfo;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//物损核损信息保存 cargoDTO
export function saveApprCargoInfo(data) {
  const url = postUrl.apprcargo_saveApprCargoInfo;
  return axios.post(url,qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}


//物损信息提交弹框按钮
export function getCtrlFlowList(data) {
  const url = postUrl.flowCtrl_getCtrlFlowList;
  return axios.post(url,qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//物损核损解锁
export function unlockApprCargo(data) {
  const url = postUrl.apprcargo_unlockApprCargo;
  return axios.post(url,qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//物损核损转交
export function deliverApprCargo(data) {
  const url = postUrl.apprcargo_deliverApprCargo;
  return axios.post(url,qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}


//复勘物损获取主信息
export function getRecheckCargoInfo(data) {
  const url = postUrl.recheckCargo_getRecheckCargoInfo
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data);
    })
}
//复勘物损保存
export function saveCargoRecheck(data) {
  const url = postUrl.recheckCargo_saveCargoRecheck
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data);
    })
}
// 物损复勘审核 返回物损核损信息
export function getRecheckApprCargoInfo(data) {
  const url = postUrl.recheckCargo_getRecheckApprCargoInfo;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//复勘物损审保存/提交/回退
export function saveRecheckApprCargoInfo(data) {
  const url = postUrl. recheckCargo_saveRecheckApprCargoInfo;
  return axios.post(url,qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

// 复勘物损审核解锁
export function unlockCargoRecheck(data) {
  const url = postUrl.recheckCargo_unlockRecheckApprCargo;
  return axios.post(url,qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//物损获取历史意见
export function getRecordHistory(data) {
  const url=postUrl.comms_getRecordHistory
  return axios.post(url,qs.stringify(data))
    .then(res=>{
      return Promise.resolve(res.data)
    })
}


//获取图表数据
export function getCargoRecordLineList(evalId) {
  const url = postUrl.eval_getCargoRecordLineList;
  let data = {
    evalId: evalId
  }
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//物损轨迹对比
export function getRecordCargoInfo(data) {
  const url = postUrl.record_getRecordCargoInfo;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//物损查看页面获取信息
export function viewCargoInfo(data) {
  const url=postUrl.recheckapprcargo_viewCargoInfo;
  return axios.post(url,qs.stringify(data))
    .then(res=>{
      return Promise.resolve(res.data)
    })
}


//物损lishi所有查看页面获取信息
export function getAppendHistoryLossCargoInfo(data) {
  const url=postUrl.evalCargo_getAppendHistoryLossCargoInfo;
  return axios.post(url,qs.stringify(data))
    .then(res=>{
      return Promise.resolve(res.data)
    })
}

// 审核周期开始对比
export function recordGetComparInfo (data) {
  const url = postUrl.recordGetComparInfo
  return axios.post(url, qs.stringify(data)).then(res => {
    return Promise.resolve(res.data)
  })
}

//对比结果查看详情
export function getComparLossItem (data) {
  const url = postUrl.getComparLossItem
  return axios.post(url, qs.stringify(data)).then(res => {
    return Promise.resolve(res.data)
  })
}

// 获取历史处理意见
export function getHistoryOpinion (data) {
  const url = postUrl.getHistoryOpinion
  return axios.post(url, qs.stringify(data)).then(res => {
    return Promise.resolve(res.data)
  })
}

// 查看价格走势
export function getItemPriceTrend (data) {
  const url = postUrl.getItemPriceTrend
  return axios.post(url, qs.stringify(data)).then(res => {
    return Promise.resolve(res.data)
  })
}
