import axios from 'axios'
import postUrl from './webconfig'
import qs from 'qs'
//物损定损信息
export function getRecheckCarInfo(data) {
  const url = postUrl.recheck_getRecheckCarInfo;
  return axios.post(url, qs.stringify(data))
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

export function saveRecheckCarInfo(data) {
  const url = postUrl.recheck_saveRecheckCarInfo;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
