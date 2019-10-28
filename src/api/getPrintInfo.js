import axios from 'axios'
import postUrl from './webconfig'
var qs = require('qs');

//获取打印单基本信息
export function getPrintInfo(data) {
    const url = postUrl.approve_showEvalInfo;
    return axios.post(url, qs.stringify(data))
        .then((res) => {
            return Promise.resolve(res.data)
        })
};
//导出
export function exportEvalInfo(lossNo) {
    const url = postUrl.truck_exportEvalInfo + lossNo;
    return axios.post(url)
        .then((res) => {
            return Promise.resolve(res.data)
        }).catch(function(res){})
};
export function printEvalInfo() {
    const url = postUrl.truck_printEvalInfo;
    return axios.post(url)
        .then((res) => {
            return Promise.resolve(res.data)
        }).catch(function (res) { })
};

//配件导出
export function exportInquiry(flowCode,flowId) {
  const url=postUrl.export_inquiry;
  return axios.post(url,qs.stringify({flowCode,flowId}))
    .then(res=>{
      return Promise.resolve(res.data)
    })
}
//核损完成打印接口
export function processPrintShow(data,name,method='post',responseType='blob') {
  const url=postUrl.processPrintShow;
  return axios.post(url,data)
    .then(res=>{
      return Promise.resolve(res.data)
  })
}

// pdf打印接口
export function printGetInfo(data,name,method='post',responseType='blob') {
  const url=postUrl.print_getInfo;
  return axios({method, url, data, responseType}).then(res=>{
    let Url = window.URL.createObjectURL(new Blob([res.data]));
    let link = document.createElement('a');
    link.style.opacity = '0';
    link.href = Url;
    link.download= `${name}.pdf` //docNumber 动态文件名
    document.body.appendChild(link);
    link.click();
    // window.open(url)
  })
}


