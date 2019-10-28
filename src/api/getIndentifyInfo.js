import axios from 'axios'
import postUrl from './webconfig'
var qs = require('qs');

//接口调用参数，如果接口访问方式是get则为空，post则为json串
export function getSeriGradeListByCarType(facdata) {

  const url = postUrl.vehicleIdentify_getSeriGradeListByCarType + facdata;

  return axios.post(url,'')
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function getSetPicInfo(redata) {

  const url = postUrl.eval_getCarImgPath;

  return axios.get(url, {
    params: redata
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getVehicleIdentifyByVin(data) {

  const url = postUrl.vehicleIdentify_getVehicleIdentifyByVin + data;

  return axios.post(url,'')
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function getVinAnswerQuestion(data) {
  const url = postUrl.vehicleIdentify_getVehicleIdentifyByVinAnswerQuestion;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//其他定型方式获取详细配置
export function getVehicleInfoByVehCertainId(data) {

  const url = postUrl.vehicleIdentify_getVehicleInfoByVehCertainId + data;

  return axios.post(url)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
//vin码获取详细配置
export function getVehicleInfoByVehIdVinStage(data) {

  const url = postUrl.vehicleIdentify_getVehicleInfoByVehIdVinStage + data;

  return axios.post(url)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function getBrandListByName(data) {

  const url = postUrl.vehicleIdentify_getBrandListByName + data;

  return axios.post(url)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function getSeriesListByName(data) {

  const url = postUrl.vehicleIdentify_getSeriesListBySeriesName;

  return axios.post(url,qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function getGroupListByName(data) {

  const url = postUrl.vehicleIdentify_getGroupListByGroupName;

  return axios.post(url,qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function getBrandInfoByID(data) {

  const url = postUrl.vehicleIdentify_getBrandInfoByID + data;

  return axios.post(url)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function getSeriesListByBrandID(data) {

  const url = postUrl.vehicleIdentify_getSeriesListByBrandID + data;

  return axios.post(url)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function getGroupListBySeriesID(data) {

  const url = postUrl.vehicleIdentify_getGroupListBySeriesID + data;

  return axios.post(url)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function getVehicleInfoByGroupID(data) {

  const url = postUrl.vehicleIdentify_getVehicleInfoByGroupID + data;

  return axios.post(url)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function getVehicleInfoByCodeOrName(data) {
  const url = postUrl.vehicleIdentify_getVehicleInfoByComplex;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function saveVehicleInfo(data) {
  const url = postUrl.vehicleIdentify_saveVehicleInfo;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

// 获取facade版本
export function getFacadeAccount(type) {
  const url = postUrl.facade_getFacadeAccount+'?insCode='+type;
  return axios.get(url)
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
