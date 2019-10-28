import axios from 'axios'
import postUrl from './webconfig'
var qs = require('qs');

export function getFactoryList(facdata) {

  const url = postUrl.factory_querybyname + facdata;

  return axios.post(url,'')
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function getFactoryInfo(facdata) {

  const url = postUrl.factory_getfactoryInfo + facdata;

  return axios.post(url,'')
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

export function refFactoryInfo(facdata) {

  const url = postUrl.factory_refreshfactoryInfo + facdata;

  return axios.post(url,'')
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function getOrgList(orgdata) {

  const url = postUrl.factory_queryorg + orgdata;

  return axios.post(url,'')
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//获取修理厂机构列表
export function getFacOrgList() {
  const url = postUrl.factory_queryOrgs;
  return axios.post(url,'')
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//获取某个机构下的修理厂列表
export function getFacList(queryFactoryDTO) {
  const url = postUrl.factory_queryByCondition;
  queryFactoryDTO = qs.stringify(queryFactoryDTO);
  return axios.post(url,queryFactoryDTO)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//获取全国省份 地区 列表
export function getCityList(data,queryType) {
  var url;
  if( queryType == '0' ){
    url = postUrl.factory_queryRegionDictInfo;
  }else{
    url = postUrl.factory_queryCitySelectByProvincen;
  }
  data = qs.stringify(data);
  return axios.post(url,data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function saveRepairFactoryByDefined(evalId,returndata) {
  var url = postUrl.factory_saveRepairFactoryInfoByDefinedInfo+evalId;
  returndata = qs.stringify(returndata);
  return axios.post(url,returndata)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function icfactory_saveRepairFactoryInfo(evalId,returndata) {
  var url = postUrl.icfactory_saveRepairFactoryInfo+'/'+evalId;
  returndata = qs.stringify(returndata);
  return axios.post(url,returndata)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//修理厂方案更换
export function updateRepairFactoryInfo(data) {
  const url = postUrl.factory_updateRepairFactoryInfo;
  return axios.post(url,qs.stringify(data))
  .then((res) => {
    return Promise.resolve(res.data)
  })
}
