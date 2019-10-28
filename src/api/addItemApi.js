import axios from 'axios'
import postUrl from './webconfig'
var qs = require('qs');

export function getPartGroupTree(car, groupId) {
  const url = postUrl.partQuery_getPartGroupTree;
  let data = {
    modelId: car.modelId,
    partGroupId: groupId,
    carTypeCode: car.carTypeCode,
    fzgx: groupId ? '0' : '1',
    evalId:car.id,
    brandCode: car.brandCode,
    evalComCode: car.evalComCode,
    customerFlag:car.customerFlag
  }
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getPartListForCollision(car, pzbwid,pzbwCodes,pzcdid,pzcdCodes,customerFlag) {
  const url = postUrl.partQuery_getPartListForCollision;
  let data = {
    evalId:car.id,
    modelId: car.modelId,
    pzbwid: pzbwid,
    pzbwCodes:pzbwCodes,
    pzcdid: pzcdid,
    pzcdCodes:pzcdCodes,
    brandCode: car.brandCode,
    evalComCode: car.evalComCode,
    carTypeCode: car.carTypeCode,
    customerFlag: customerFlag,
    standPartSearch:'0'
  }
  if(customerFlag!=car.customerFlag){
    data.standPartSearch='1'
  }
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getPartListForName(car, partName,customerFlag) {
  const url = postUrl.partQuery_getPartListForName;
  let data = {
    evalId:car.id,
    modelId: car.modelId,
    brandCode: car.brandCode,
    evalComCode: car.evalComCode,
    carTypeCode: car.carTypeCode,
    customerFlag: customerFlag,
    partName: partName,
    standPartSearch:'0'
  }
  if(customerFlag!=car.customerFlag){
    data.standPartSearch='1'
  }
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getRepairListForName(car, repairName,customerFlag,workTypeCode) {
  const url = postUrl.repairQuery_getRepairListForName;
  let data = {
    evalId:car.id,
    repairName: repairName,
    modelId:car.modelId,
    customerFlag:customerFlag,
    carTypeCode:car.carTypeCode,
    workTypeCodes:workTypeCode
  }

  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
//根据名称查询外修
export function getOuterRepairList(car, repairName = '') {
  const url = postUrl.repairQuery_getOuterRepairList;
  let data = {
    evalId:car.id,
    repairName: repairName
  }

  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
//查询辅料列表
export function getMaterialList(car, mateName = '') {
  const url = postUrl.materialQuery_getMaterialList;
  let data = {
    modelId:car.modelId,
    mateName: mateName,
    evalId: car.id
  }
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getPartListForGroup(car, partGroupId,customerFlag) {
  const url = postUrl.partQuery_getPartListForGroup;
  let data = {
    evalId:car.id,
    modelId: car.modelId,
    brandCode: car.brandCode,
    evalComCode: car.evalComCode,
    carTypeCode: car.carTypeCode,
    customerFlag: customerFlag,
    partGroupId: partGroupId,
    standPartSearch:'0'
  }
  if(customerFlag!=car.customerFlag){
    data.standPartSearch='1'
  }

  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

export function serarchRecord(data) {
  const url = postUrl.saveEval_serarchRecord;
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

export function delPart(data) { //删除配件
  //console.log(data);
  const url = postUrl.evalPart_delPart;
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

//删除工时
export function delRepair(data) {
  const url = postUrl.evalRepair_delRepair;
  data = qs.stringify(data);
  return axios.post(url, data)
  .then((res) => {
    return Promise.resolve(res.data)
  })
}



//添加配件 //险别code写在接口里了
export function addPart(data,userCode) {
  const url = postUrl.evalPart_add;
  data.partItemName=insuranceObj.insureTerm
  data.partItemCode=insuranceObj.insureTermCode
  data.userCode = userCode
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//恢复配件
export function restorePart(data) {
  const url = postUrl.evalPart_recoveryPart;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//恢复工时
export function recoveryRepair(data, handlerCode) {
  const url = postUrl.evalRepair_recoveryRepair + handlerCode;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//恢复辅料
export function recoveryMaterial(data, handlerCode) {
  const url = postUrl.evalMaterial_recoveryMaterial + handlerCode;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//恢复外修
export function recoveryOuterRepair(data, handlerCode) {
  const url = postUrl.evalRepair_recoveryOuterRepair + handlerCode;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//碰撞部位取消时获取碰撞部位关联的配件
export function getEvalCollisionRelation(data) {
  const url = postUrl.eval_getEvalCollisionRelation;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//添加辅料项目
export function addSelfMate(mateData) {
  const url = postUrl.evalMaterial_add;
  mateData.mateItemName=insuranceObj.insureTerm
  mateData.mateItemCode=insuranceObj.insureTermCode
  return axios.post(url, qs.stringify(mateData))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function addExclusionMate(mateData) {
  const url = postUrl.saveEval_exclusionItem;
  return axios.post(url, qs.stringify(mateData))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//删除辅料项目
export function delMate(mateData) {
  const url = postUrl.evalMaterial_delMaterial;

  return axios.post(url, qs.stringify(mateData))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//保存碰撞部位信息
export function saveCollisionInfo(data) {
  const url = postUrl.eval_saveCollisionInfo;
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//添加外修项目
export function addOuterRepair(data) {
  const url = postUrl.evalRepair_addOuterRepair;
  data.repairItemName=insuranceObj.insureTerm
  data.repairItemCode=insuranceObj.insureTermCode
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//获取钣金项目的关联的配件金额
export function getRepairRelationPartInfo(data) {
  const url = postUrl.repairQuery_getRepairRelationPartInfo;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//添加工时项目
export function addRepair(data,userCode) {
  const url = postUrl.evalRepair_add;
  data.repairItemName=insuranceObj.insureTerm
  data.repairItemCode=insuranceObj.insureTermCode
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//添加自定义工时
export function addSelfRepair(repairData) {
  const url = postUrl.evalRepair_add;
  repairData.repairItemName=insuranceObj.insureTerm
  repairData.repairItemCode=insuranceObj.insureTermCode
  return axios.post(url, qs.stringify(repairData))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//删除外修项目
export function delOuterRepair(data) {
  const url = postUrl.evalRepair_delOuterRepair;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//加载工时类型
export function getRepairGroupTree(data) {
  const url = postUrl.repairQuery_getRepairGroupTree;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//加载工时类型--华泰
export function getRepairTree(data) {
  const url = postUrl.repairQuery_getRepairTree;
  return axios.post(url, qs.stringify(data))
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
//加载工时数组--华泰
export function getRepairList(data) {
  const url = postUrl.repairQuery_getRepairList;
  return axios.post(url, qs.stringify(data))
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
//工时类型搜索
export function getRepairListForGroup(data) {
  const url = postUrl.repairQuery_getRepairListForGroup;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//工时分类tab
export function calcRepairItem(data) {
  const url = postUrl.evalRepair_calcRepairItem;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//查看图片
export function getPartPicture(data) {
  const url = postUrl.partQuery_getPartPicture;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//自定义配件添加获取系统关联配件
export function getPartListForManualPart(data) {
  const url = postUrl.partQuery_getPartListForManualPart;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}


//查询相关零件
export function getPartListForRelevantPart(data) {
  const url = postUrl.partQuery_getPartListForRelevantPart;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//查询配件的附加工时
export function getPartAppendHour(data) {
  const url = postUrl.partQuery_getPartAppendHour;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//删除所有项目
export function delAllItem(evalId) {
  const url = postUrl.saveEval_delAllLossInfo;
  let data = {
    evalId: evalId,
  }
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}


export function getHighPartList(car,partStandId,customerFlag) {
  const url = postUrl.partQuery_getHighPartList;
  let data = {
    evalId:car.id,
    modelId: car.modelId,
    brandCode: car.brandCode,
    evalComCode: car.evalComCode,
    carTypeCode: car.carTypeCode,
    customerFlag: customerFlag,
    partStandId: partStandId,
    standPartSearch:'0'
  }
  if(customerFlag!=car.customerFlag){
    data.standPartSearch='1'
  }
  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//添加工时时获取的工时列表接口
export function getSalvQuery(data) {
  const url = postUrl.salv_getSalvQuery;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//添加某一项施救费  添加接口
export function evalSalvFeeAdd(data,userCode) {
  const url = postUrl.evalSalvFee_add;
  // data.salvItemName=salvInsuranceObj.insureTerm
  // data.salvItemCode=salvInsuranceObj.insureTermCode
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//刪除evalSalvFee_delSalvFee
export function delSalve(data) {
  const url = postUrl.evalSalvFee_delSalvFee;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
// 点击替换件标记
export function partQuerygetReplacePartListForPart (data) {
  const url = postUrl.partQuerygetReplacePartListForPart
  return axios.post(url, qs.stringify(data)).then(res => {
    return Promise.resolve(res.data)
  })
}

// 替换号查询
export function partQuerygetReplacePartListForOe (data) {
  const url = postUrl.partQuerygetReplacePartListForOe
  return axios.post(url, qs.stringify(data)).then(res => {
    return Promise.resolve(res.data)
  })
}
// 加装标准件列表
export function additionsQueryGetAdditionList (data) {
  const url = postUrl.additionsQueryGetAdditionList
  return axios.post(url, qs.stringify(data)).then(res => {
    return Promise.resolve(res.data)
  })
}

// 根据工种查询工时
export function getRepairListForWorkType (data) {
  const url = postUrl.getRepairListForWorkType
  return axios.post(url, qs.stringify(data)).then(res => {
    return Promise.resolve(res.data)
  })
}
//配件转外修
export function convertOutRep(data) {
  const url = postUrl.evalPart_convertOutRep;
  let rdata = qs.stringify(data);
  return axios.post(url, rdata)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
// 外修转配件
export function convertPart(data) {
  const url = postUrl.evalRepair_convertPart;
  let rdata = qs.stringify(data);
  return axios.post(url, rdata)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
// 名字传参数获取自定义配件
export function getCustomerPartPriceListForName(car, partName, customerFlag) {
  const url = postUrl.partQuery_getCustomerPartPriceListForName;
  let data = {
    evalId: car.id,
    modelId: car.modelId,
    brandCode: car.brandCode,
    evalComCode:car.evalComCode,//car.evalComCode
    carTypeCode: car.carTypeCode,
    customerFlag: customerFlag,
    partName: partName,
    standPartSearch: '0'
  }
  if (customerFlag != car.customerFlag) {
    data.standPartSearch = '1'
  }

  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
///
export function getCustomerPartPriceList(car, partGroupId, customerFlag) {
  const url = postUrl.partQuery_getCustomerPartPriceList;
  let data = {
    evalId: car.id,
    modelId: car.modelId,
    brandCode: car.brandCode,
    evalComCode:car.evalComCode,//car.evalComCode
    carTypeCode: car.carTypeCode,
    customerFlag: customerFlag,
    partGroupId: partGroupId,
    standPartSearch: '0'
  }
  if (customerFlag != car.customerFlag) {
    data.standPartSearch = '1'
  }

  data = qs.stringify(data);
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//获取外修项目的附加工时
export function getOuterRepairAppendHour(data) {
  const url = postUrl.partQuery_getOuterRepairAppendHour;
  let rdata = qs.stringify(data);
  return axios.post(url, rdata)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
