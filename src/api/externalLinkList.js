import axios from 'axios'
import postUrl from './webconfig'
var qs = require('qs')

export function getExternalLinkListImage(data) {//获取影像链接
  const url=postUrl.getExternalLinkList_gotoNewImage;
  return axios.post(url,qs.stringify(data))
    .then(res=>{
      return Promise.resolve(res.data)
    })
}
