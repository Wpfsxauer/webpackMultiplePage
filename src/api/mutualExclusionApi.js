import axios from 'axios'
import postUrl from './webconfig'
import {desc} from '../assets/js/util'
import {delPart,delRepair} from './addItemApi'
const qs = require('qs');

//保存互斥记录
export function saveExclusionItem(data) {
  const url = postUrl.saveEval_exclusionItem;
  return axios.post(url, qs.stringify(data))
  .then((res) => {
    return Promise.resolve(res.data)
  })
}

//配件关联碰撞部位
export function getPartPzRelation(data) {
  const url = postUrl.partQuery_getPartPzRelation;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//工时关联碰撞部位
export function getRepairPzRelation(data) {
  const url = postUrl.repairQuery_getRepairPzRelation;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//  外修关联碰撞部位
export function getOuterRepairCollision(data) {
  const url = postUrl.getOuterRepairCollision;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//获取零件的互斥关系表中互斥关系信息
export function getPartExclusiveInfo (data){
  const url = postUrl.partQuery_getPartExclusiveInfo;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

///获取配件关联的低碳项目
export function getOuterRepairRelation (data){
  const url = postUrl.partQuery_getOuterRepairRelation;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//获取工种程度费用信息
export function getRepairItemDetail (data){
  const url = postUrl.repairQuery_getRepairItemDetail;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//获取工时的附加工时
export function getRepairAppendHour (data){
  const url = postUrl.repairQuery_getRepairAppendHour;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//获取工时的附加辅料
export function getRepairAppendMate (data,repairId,modelId){
   //获取工时项目的附加辅料项目
  const url = postUrl.materialQuery_getRepairAppendMate+repairId+"/"+modelId;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

export function getAssemblyPart(data){
  const url = postUrl.partQuery_getAssemblyPartInfo;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//外修互斥
export function getOuterRepairExclusion(data) {
  const url = postUrl.repairQuery_getOuterRepairExclusion;
  return axios.post(url, qs.stringify(data))
    .then((res) => {
      return Promise.resolve(res.data)
    })
}

//包含关系码对象封装 incCode example"00A00"
export const IncObj = function (partIncCode) {
  let incObj = {};
  if (partIncCode != null && partIncCode != "") {
    incObj.mainGroup = partIncCode.substring(0, 2);
    incObj.level = partIncCode.substring(2, 3);
    incObj.subGroup_1 = partIncCode.substring(3, 4);
    incObj.subGroup_2 = partIncCode.substring(4, 5);
    return incObj;
  } else {
    return null;
  }
  /*   包含关系码含义：incCode
 example"00A00"，6位
 前两位00为主组，中间一位是级别； 第4位是子组1； 第五位是子组2
 (1) 其中一个包含关系码为空，则二者无包含关系
 (2) 主组相同，进行包含关系计算； 主组不同无包含关系
 (3) 级别都是A，看子组1， 小的为父亲
 （4）其中一个级别是A，则它为父亲
 （5）如果级别没有A的，再看子组1，子组1不同则无包含关系，子组1相同继续看级别
 （6）如果都是BCD级别的话，级别高的（B>C>D）为父亲
 （7）如果只有一个是BCD级别的话，则它为父亲
 （8）如果没有ABCD级别的，再看子组2，子组2不同则无包含关系，子组2相同继续看级别
 */
  /**
   *包含关系码比较
   *返回 0  无包含关系；
   *返回 1  inc1包含inc2；
   *返回 -1 inc2包含inc1；
   */
};

export const incCompare = function (partIncCode1, partIncCode2) {
  let inc1 = IncObj(partIncCode1);
  let inc2 = IncObj(partIncCode2);
  if (inc1 == null || inc2 == null) {
    return 0;//其中一个包含关系码为空，则二者无包含关系
  }
  if (inc1.mainGroup == inc2.mainGroup) {//主组相同，进行包含关系计算； 主组不同无包含关系
    if (inc1.level == "A" && inc2.level == "A") {	//级别都是A，看子组1， 小的为父亲
      if (inc1.subGroup_1 < inc2.subGroup_1) {
        return 1;
      } else {
        return -1;
      }
    } else if (inc1.level == "A") {//其中一个级别是A，则它为父亲
      return 1;
    } else if (inc2.level == "A") {
      return -1;
    } else {
      if (inc1.subGroup_1 == inc2.subGroup_1) {	//如果级别没有A的，再看子组1，子组1不同则无包含关系，子组1相同继续看级别
        //如果都是BCD级别的话，级别高的（B>C>D）为父亲
        if ((inc1.level == "B" || inc1.level == "C" || inc1.level == "D") && (inc2.level == "B" || inc2.level == "C" || inc2.level == "D")) {
          return compareLevel(inc1.level, inc2.level);
        } else if (inc1.level == "B" || inc1.level == "C" || inc1.level == "D") {//如果只有一个是BCD级别的话，则它为父亲
          return 1;
        } else if (inc2.level == "B" || inc2.level == "C" || inc2.level == "D") {
          return -1;
        } else {
          if (inc1.subGroup_2 == inc2.subGroup_2) {	//如果没有ABCD级别的，再看子组2，子组2不同则无包含关系，子组2相同继续看级别
            return compareLevel(inc1.level, inc2.level);
          } else {
            return 0;
          }
        }
      } else {
        return 0;
      }
    }
  } else {
    return 0;
  }
};

/**比较等级**/
export const compareLevel = function (level1, level2) {
  if (level1 < level2) {
    return 1;
  } else if (level1 == level2) {
    return 0;
  } else {
    return -1;
  }
};

//配件同名互斥
export function checkPartNameExclusive(partData,partList,evalCar,thisObj,type){
  let exclusiveFlag = true;

  let reDate = {
    evalId : evalCar.id,
    evalComCode : evalCar.evalComCode,
    createdBy : evalCar.userCode,
    itemType : "1",
    itemTypeName : "配件",
    derogationType:"0"
  };

  for (let i = 0; i < partList.length; i++) {
    reDate.exclusionItemCode =partData.factPartCode;
    reDate.exclusionItemName = partData.partName;
    reDate.exclusionItemPrice = partData.referencePrice;
    reDate.evalItemCode = partList[i].factPartCode;
    reDate.evalItemName = partList[i].partName;
    reDate.evalItemPrice = partList[i].evalPartSum;

    if (partData.partName === partList[i].partName) {
      //添加配件项目互斥记录

      reDate.exclusionTypeName =  type ==="0"
        ? '配件项目同名互斥'
        : type ==="1"
          ? '自定义配件项目添加同名互斥'
          : '标准配件项目添加同名互斥' ;

      saveExclusionItem(reDate);

      const content="已存在【"+partData.partName+"】同名称项目，不可重复添加";

      thisObj.$confirm(content, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton:false,
        closeOnClickModal:false,
        closeOnPressEscape:false,
        type: 'warning'
      }).then(() => {}).catch(() => {});

      exclusiveFlag = false;
      return exclusiveFlag;
    }
  }
  return exclusiveFlag;
}

//配件与工时项目互斥：同名（非拆装、非喷漆）工时项目互斥
export function checkPartRepairExclusive(partData,partList,repairList,evalCar,thisObj,type){
  let exclusiveFlag = true;
  let reDate = {};
  reDate.evalId = evalCar.id;
  reDate.evalComCode = evalCar.evalComCode;
  reDate.createdBy = evalCar.userCode;
  reDate.itemType = "1";
  reDate.itemTypeName = "配件";
  reDate.derogationType="0";
  if (!repairList) {
    return exclusiveFlag;
  }
  for (let i = 0; i < repairList.length; i++) {
    if (partData.partName == repairList[i].repairName && (repairList[i].workTypeCode == 'R03' || repairList[i].workTypeCode == 'R04' || repairList[i].workTypeCode == 'R05')) {
      reDate.exclusionItemCode =partData.factPartCode;
      reDate.exclusionItemName = partData.partName;
      reDate.exclusionItemPrice = partData.referencePrice;

      reDate.evalItemCode = repairList[i].repairCode;
      reDate.evalItemName = repairList[i].repairName;
      reDate.evalItemPrice = repairList[i].evalRepairSum;

      //添加配件项目与工时项目的互斥记录
      if(type=="0"){
        reDate. exclusionTypeName  = "添加配件与已添加的工时项目互斥";
      }else if(type=="1"){
        reDate.exclusionTypeName = "自定义配件项目添加与已添加的工时项目互斥";
      }else{
        reDate.exclusionTypeName = "标准配件项目添加与已添加的工时项目互斥";
      }
      saveExclusionItem(reDate);

      let content="已存在【" + partData.partName + "】的" + repairList[i].workTypeName + "，不可再添加【" + partData.partName + "】配件项目";
      thisObj.$confirm(content, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton:false,
        closeOnClickModal:false,
        closeOnPressEscape:false,
        type: 'warning'
      }).then(() => {}).catch(() => {});
      exclusiveFlag = false;
      return exclusiveFlag;
    }
  }
  return exclusiveFlag;
}

//配件与外修项目的同名互斥
export function checkPartOuterNameExclusive(partData,partList,outerRepairList,evalCar,thisObj,type){
  let exclusiveFlag = true;

  let reDate = {
    evalId : evalCar.id,
    evalComCode : evalCar.evalComCode,
    createdBy : evalCar.userCode,
    itemType : "1",
    itemTypeName : "配件",
    derogationType:"0"
  };


  for (let i = 0; i < outerRepairList.length; i++) {
    if (partData.partName === outerRepairList[i].repairName &&
        partData.evalPartOriAmount > 0 &&
        partData.evalPartOriAmount - outerRepairList[i].evalRepairAmount <= 0) {

        reDate.exclusionItemCode =partData.factPartCode;
        reDate.exclusionItemName = partData.partName;
        reDate.exclusionItemPrice = partData.referencePrice;

        reDate.evalItemCode = outerRepairList[i].repairCode;
        reDate.evalItemName = outerRepairList[i].repairName;
        reDate.evalItemPrice = outerRepairList[i].evalRepairSum;

        //添加配件项目互斥记录
        reDate. exclusionTypeName = type ==="0"
          ? "添加配件与已添加的外修项目互斥"
          : type ==="1"
            ?  '自定义配件项目添加与已添加的外修项目互斥'
            : '标准配件项目添加与已添加的外修项目互斥';

        saveExclusionItem(reDate);

      const content = "已存在【" + partData.partName + "】的外修项目，且已达最大装车数量，不可再添加【" + partData.partName + "】配件项目";

      thisObj.$confirm(content, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton:false,
        closeOnClickModal:false,
        closeOnPressEscape:false,
        type: 'warning'
      }).then(() => {}).catch(() => {});

      exclusiveFlag = false;
      return exclusiveFlag;
    }
  }
  return exclusiveFlag;
}

//配件碰撞部位校验
export function checkPzExclusive(checkDate,partData,collision,evalCar,type){
  let tipConent = "";

  let reDate = {
    evalId : evalCar.id,
    evalComCode : evalCar.evalComCode,
    createdBy : evalCar.userCode,
    itemType : "1",
    itemTypeName : "配件",
    derogationType:"0",
    exclusionItemCode : partData.factPartCode,
    exclusionItemName : partData.partName,
    exclusionItemPrice : partData.referencePrice,
    evalItemCode : "",
    evalItemName : "",
    evalItemPrice : "",
  };

  return new Promise((resolve)=>{
    getPartPzRelation(checkDate).then(res=>{
      if (res.result && res.result.length > 0) {
        for (let i = 0; i < res.result.length; i++) {
          if (tipConent) {
            tipConent += "、";
          }
          tipConent += res.result[i].bwmc;
        }
      }
      if (tipConent) {
        if (collision && collision.length > 0) {
          //添加配件项目互斥记录
          if(type === "0"){
            reDate. exclusionTypeName  = "配件项目和损失部位不相符";
          }else{
            reDate.exclusionTypeName = "标准配件项目和损失部位不相符";
          }
        } else {
          reDate.exclusionTypeName = "未选择车辆损失部位";
        }
        saveExclusionItem(reDate);
      }
      resolve(res.result)
    })
  })

}

//标准件互斥关系
export function checkStandPartExclusive(partData,evalCar,partList,thisObj,type){
  let reDate = {
    evalId : evalCar.id,
    evalComCode : evalCar.evalComCode,
    createdBy : evalCar.userCode,
    itemType : "1",
    itemTypeName : "配件",
    derogationType:"0",
    exclusionItemCode : partData.factPartCode,
    exclusionItemName : partData.partName,
    exclusionItemPrice : partData.referencePrice
  };

  //获取配件标准件之间的互斥关系信息
  const excluData ={
    "partStandId":partData.partStandId,
    "carTypeCode":evalCar.carTypeCode
  };

  let excFlag =false;

  return new Promise((resolve)=>{
    getPartExclusiveInfo(excluData).then(res=>{
      if(res.result  && res.result.length>0){
        for(let v=0;v< res.result.length;v++){
          if(excFlag){
            break;
          }
          for (let u = 0; u < partList.length; u++) {
            if(res.result[v] == partList[u].partStandId){
              //添加配件项目互斥记录
              if(type=="0"){
                reDate. exclusionTypeName  = "配件项目与标准配件项目互斥";
              }else{
                reDate.exclusionTypeName = "标准配件项目与标准配件项目互斥";
              }
              reDate.evalItemCode = partList[u].factPartCode;
              reDate.evalItemName = partList[u].partName;
              reDate.evalItemPrice = partList[u].referencePrice;
              saveExclusionItem(reDate);

              let content="项目【"+partData.partName+"】与【"+partList[u].partName+"】存在互斥，不可添加";
              thisObj.$confirm(content, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                showCancelButton:false,
                closeOnClickModal:false,
                closeOnPressEscape:false,
                type: 'warning'
              }).then(() => {}).catch(() => {});
              excFlag=true;
            }
          }
        }
      }
        resolve(excFlag)
    })
  })
}

//配件项目和外修项目互斥关系表中判断互斥关系
export function checkOuterRelExclusive(partData,evalCar,outerRepairList,thisObj,type){
  //判断是否存在互斥关系
  let reDate = {
    evalId : evalCar.id,
    evalComCode : evalCar.evalComCode,
    createdBy : evalCar.userCode,
    itemType : "1",
    itemTypeName : "配件",
    exclusionItemCode : partData.factPartCode,
    exclusionItemName : partData.partName,
    exclusionItemPrice : partData.referencePrice,
    evalItemCode : "",
    evalItemName : "",
    evalItemPrice : "",
    derogationType:"0"
  };

  //获取配件关联的低碳项目
  const outerRelationData ={
    partStandId:partData.partStandId,
    modelId:evalCar.modelId
  }

  let outerExclusiveFlag =false;

  return new Promise(resolve=>{
    getOuterRepairRelation(outerRelationData).then(outerData=>{

      if(outerData.result && outerData.result.length>0){
        for(let n=0;n<outerData.result.length;n++){
          if(outerExclusiveFlag){
            break;
          }

          for (let v = 0; v < outerRepairList.length;v++) {
            if(outerData.result[n].repairCode === outerRepairList[v].repairCode &&
               partData.evalPartOriAmount > 0 &&
               partData.evalPartOriAmount - outerRepairList[v].evalRepairAmount <= 0){

              reDate. exclusionTypeName =  type ==="0"
                ? '配件项目与外修项目互斥'
                : '标准配件项目与外修项目互斥';

              reDate.evalItemCode = outerRepairList[v].repairCode;
              reDate.evalItemName = outerRepairList[v].repairName;
              reDate.evalItemPrice = outerRepairList[v].evalRepairSum;

              //添加配件项目互斥记录
              saveExclusionItem(reDate);

              const content = "配件【" + partData.partName + "】与外修项目【" + outerRepairList[v].repairName + "】存在互斥，且已达最大装车数量，不能添加";

              thisObj.$confirm(content, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                showCancelButton:false,
                closeOnClickModal:false,
                closeOnPressEscape:false,
                type: 'warning'
              }).then(() => {}).catch(() => {});

              outerExclusiveFlag =true;
              break;
            }
          }
        }
      }
      resolve(outerExclusiveFlag)
    })
  })
}

//  工时碰撞部位校验
export function checkRepaiePzExclusive(checkDate,partData,collision,evalCar,type){
  let tipConent = "";

  let reDate = {};

  return new Promise((resolve)=>{
    getRepairPzRelation(checkDate).then(res=>{
      if (res.result && res.result.length > 0) {
        for (let i = 0; i < res.result.length; i++) {
          if (tipConent) {
            tipConent += "、";
          }
          tipConent += res.result[i].bwmc;
        }
      }
      if (tipConent) {
        reDate. exclusionTypeName = collision && collision.length > 0
          ? type ==="0"
            ? '配件项目和损失部位不相符'
            : '标准配件项目和损失部位不相符'
          : '未选择车辆损失部位';
        saveExclusionItem(reDate);
      }
      resolve(res.result)
    })
  })
}

//外修碰撞部位校验
export function checkOutRepairExclusion(checkDate,partData,collision,evalCar){
  let tipConent = "";

  let reDate = {
    evalId : evalCar.id,
    evalComCode : evalCar.evalComCode,
    createdBy : evalCar.userCode,
    itemType : "2",
    itemTypeName : "外修",
    derogationType:"0",
    exclusionItemCode : partData.derogationItemCode,
    exclusionItemName : partData.repairName,
    exclusionItemPrice : partData.derogationPrice,
    evalItemCode : "",
    evalItemName : "",
    evalItemPrice : "",
    exclusionTypeName  : "外修项目和损失部位不相符"
  };

  return new Promise((resolve)=>{
    getOuterRepairCollision(checkDate).then(res=>{
      if (res.result && res.result.length > 0) {
        for (let i = 0; i < res.result.length; i++) {
          if (tipConent) {
            tipConent += "、";
          }
          tipConent += res.result[i].bwmc;
        }
      }
      if(tipConent){
        saveExclusionItem(reDate)
      }
      resolve(res.result)
    })
  })
}

//判断配件互斥关系
//获取具有互斥关系:
// (1) 同名换件互斥
//（2）父子零件互斥
//（3）与工时项目互斥：同名（非拆装、非喷漆）工时项目互斥
//（4）与低碳项目互斥：添加同名低碳项目后不能添加配件
// partData 当前点选的配件属性对象  partList 已添加的配件列表  repairList 已添加的工时列表 outerRepairList 已添加的外修项目列表 car 定损单对象
export function getExclusiveRelationParts(partData,orgPartList,delPartList,repairList,outerRepairList,evalCar,thisObj) {
  let partList=orgPartList.filter((item)=>item.reopenNumber===null||item.reopenNumber==='')
  let exclusiveFlag = true;
  let reDate = {};
  reDate.evalId = evalCar.id;
  reDate.evalComCode = evalCar.evalComCode;
  reDate.createdBy = evalCar.userCode;
  reDate.itemType = "1";
  reDate.itemTypeName = "配件";
  reDate.derogationType="0";

  //(1) 同名换件互斥
  exclusiveFlag =checkPartNameExclusive(partData,partList,evalCar,thisObj,'0');
  if(!exclusiveFlag){
    return exclusiveFlag;
  }

  //（2）父子零件互斥
 //1、判断多个父子互斥关系的
  let indexArray1 =[];//父子互斥 父包含子,删除子零件
  let indexArray2 =[];//字父互斥 要添加的零件为子零件

  for (let i = 0; i < partList.length; i++) {
    //调用互斥关系码进行判断
    let incFlag = incCompare(partData.incCode, partList[i].incCode);
    if(incFlag==1){
      indexArray1.push(i);
    }else if (incFlag == -1) {
      indexArray2.push(i);
    }
  }
  //判断子父关系,添加子零件时已添加的零件中存在父零件，此时子零件不能进行添加
  if(indexArray2.length>0){
    reDate.exclusionItemCode =partData.factPartCode;
    reDate.exclusionItemName = partData.partName;
    reDate.exclusionItemPrice = partData.referencePrice;

    reDate.evalItemCode = partList[indexArray2[0]].factPartCode;
    reDate.evalItemName = partList[indexArray2[0]].partName;
    reDate.evalItemPrice = partList[indexArray2[0]].evalPartSum;
    //添加配件项目互斥记录
    reDate. exclusionTypeName  = "添加子件与已添加的总成件互斥";
    saveExclusionItem(reDate);

    let content="已存在换件【" + partList[indexArray2[0]].partName + "】项目，不可再添加子零件【" + partData.partName+"】项目";
    thisObj.$confirm(content, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      showCancelButton:false,
      closeOnClickModal:false,
      closeOnPressEscape:false,
      type: 'warning'
    }).then(() => {}).catch(() => {});

    exclusiveFlag = false;
    return exclusiveFlag;
  }

  //判断父子关系,添加父零件时已添加的零件中存在子零件，此时所有的子零件需要全部删除，若配件存在附加工时，同步删除
  if(indexArray1.length>0){
    reDate.exclusionItemCode =partData.factPartCode;
    reDate.exclusionItemName = partData.partName;
    reDate.exclusionItemPrice = partData.referencePrice;

    indexArray1 = indexArray1.sort(desc);
    let existRepairFlag =false;

    for(let k=0;k<indexArray1.length;k++){
      reDate.evalItemCode = partList[indexArray1[k]].factPartCode;
      reDate.evalItemName = partList[indexArray1[k]].partName;
      reDate.evalItemPrice = partList[indexArray1[k]].evalPartSum;
      //添加配件项目互斥记录
      reDate. exclusionTypeName  = "添加总成件与已添加的子件互斥";
      reDate.derogationType="1";
      saveExclusionItem(reDate);
      let delFlag =delChildPart(partList[indexArray1[k]].id,repairList,evalCar);
      if(delFlag){
        existRepairFlag=true;
      }
      if (partList[indexArray1[k]].partApprCheckState || partList[indexArray1[k]].partEstiCheckState) {
        delPartList.push(partList[indexArray1[k]])
      }
      for(let j=0;j<orgPartList.length;j++){
        if(orgPartList[j].id===partList[indexArray1[k]].id){
          orgPartList.splice(j,1)
          break;
        }
      }
      // partList.splice(indexArray1[k], 1);
      if(k==indexArray1.length-1){
        let content="已添加【"+partData.partName+"】，总成下的子零件会自动删除";
        thisObj.$confirm(content, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          showCancelButton:false,
          closeOnClickModal:false,
          closeOnPressEscape:false,
          type: 'warning'
        }).then(() => {}).catch(() => {});
      }
    }
    if(existRepairFlag){
      //若有工时项目删除，反算工种合计信息
      thisObj.$emit('update:changeRepairFlag', true);
    }
    return exclusiveFlag;
  }

  //（3）与工时项目互斥：同名（非拆装、非喷漆）工时项目互斥
  //工时种类字典 workTypeCode   钣金项目R03 机修项目R04 电工项目:R05 喷漆项目：R02 拆装项目：R01 低碳项目：R06
  exclusiveFlag = checkPartRepairExclusive(partData,partList,repairList,evalCar,thisObj,'0');
  if(!exclusiveFlag){
    return exclusiveFlag;
  }

  //（4）与低碳项目互斥：添加同名低碳项目后不能添加配件
  exclusiveFlag = checkPartOuterNameExclusive(partData,partList,outerRepairList,evalCar,thisObj,"0");
  return exclusiveFlag;
}

//添加总成配件时删除子配件，以及获取子配件的附加工时信息
export function delChildPart (partIds,repairList,evalCar){

  let existRepairFlag =false;
  //删除配件请求参数
  let redata = {
    partIds: "",
    userCode: evalCar.userCode,
    repairIds: ""
  };
  //设置需要删除配件id集合
  redata.partIds = partIds;
  let appendRepairIndex = [];
  let repairIndex = 0;
  let repairIdStr = "";
  for (let i = 0; i < repairList.length; i++) {
    if (partIds == repairList[i].partId) {
      if (repairIdStr != "") {
        repairIdStr += ",";
      }
      repairIdStr += repairList[i].id;
      appendRepairIndex[repairIndex] = i;
      repairIndex++;
    }
  }

  if (repairIdStr != "") {
    redata.appendRepairIds=repairIdStr;
    redata.repairIds=repairIdStr;//repairIds 工时Id
  }
    //调用删除方法进行配件项目删除
    delPart(redata);
  if(appendRepairIndex.length>0){
    //删除工时列表展示信息
    //倒序排列
    appendRepairIndex = appendRepairIndex.sort(desc);
    for (let k = 0; k < appendRepairIndex.length; k++) {
      repairList.splice(appendRepairIndex[k], 1);
    }
    existRepairFlag =true;
  }

  return existRepairFlag;
}

//判断标准配件互斥关系
//获取具有互斥关系:
// (1) 同名换件互斥
//（2）与工时项目互斥：同名（非拆装、非喷漆）工时项目互斥
//（3）与低碳项目互斥：添加同名低碳项目后不能添加配件
// partData 当前点选的配件属性对象  partList 已添加的配件列表  repairList 已添加的工时列表 outerRepairList 已添加的外修项目列表 car 定损单对象
export function getExclusiveRelationStandParts(partData,partList,repairList,outerRepairList,evalCar,thisObj) {
  let exclusiveFlag = true;

  //(1) 同名换件互斥
  exclusiveFlag =checkPartNameExclusive(partData,partList,evalCar,thisObj,'2');
  if(!exclusiveFlag){
    return exclusiveFlag;
  }

  //（2）与工时项目互斥：同名（非拆装、非喷漆）工时项目互斥
  //工时种类字典 workTypeCode   钣金项目R03 机修项目R04 电工项目:R05 喷漆项目：R02 拆装项目：R01 低碳项目：R06
  exclusiveFlag = checkPartRepairExclusive(partData,partList,repairList,evalCar,thisObj,'2');
  if(!exclusiveFlag){
    return exclusiveFlag;
  }

  //（3）与低碳项目互斥：添加同名低碳项目后不能添加配件
  exclusiveFlag = checkPartOuterNameExclusive(partData,partList,outerRepairList,evalCar,thisObj,"2");
  return exclusiveFlag;
}

//工时互斥判断
//(1)同名工时互斥
//(2)父子工时互斥
//(3)工时【非拆装、非喷漆】同名换件互斥
export const getExclusiveRelationRepairs = function (orgRepairList,partList,repairDate,evalCar,thisObj,outerRepairList,HTFlag) {
  let exclusiveFlag = true;
  let repairList=orgRepairList.filter(item=>item.reopenNumber===null||item.reopenNumber==='')
  let reDate = {};
  reDate.evalId = evalCar.id;
  reDate.evalComCode = evalCar.evalComCode;
  reDate.createdBy = evalCar.userCode;
  reDate.itemType = "2";
  reDate.itemTypeName = "工时";
  reDate.exclusionItemCode =repairDate.repairCode;
  reDate.exclusionItemName = repairDate.repairName;
  reDate.exclusionItemPrice = repairDate.referencePrice;
  reDate.derogationType="0";


  for (let i = 0; i < repairList.length; i++) {
    reDate.evalItemCode = repairList[i].repairCode;
    reDate.evalItemName = repairList[i].repairName;
    reDate.evalItemPrice = repairList[i].evalRepairSum;

    if (repairDate.repairName == repairList[i].repairName && repairDate.workTypeCode == repairList[i].workTypeCode) {
      //添加工时项目互斥记录
      reDate. exclusionTypeName  = "工时项目同名互斥";
      saveExclusionItem(reDate);
        // let content="已存在【"+repairDate.repairName+"】同名称的"+repairDate.workTypeName+"项目，不可重复添加";
        // thisObj.$confirm(content, '提示', {
        //   confirmButtonText: '确定',
        //   cancelButtonText: '取消',
        //   showCancelButton:false,
        //   closeOnClickModal:false,
        //   closeOnPressEscape:false,
        //   type: 'warning'
        // }).then(() => {}).catch(() => {});

      exclusiveFlag = false;
      return exclusiveFlag;
    } else if (repairList[i].repairCode == 'Q089000' && repairDate.workTypeCode == 'R02') {

      //添加工时项目互斥记录
      reDate. exclusionTypeName  = "添加喷漆项目与已添加的全车喷漆项目互斥";
      saveExclusionItem(reDate);


      let content="已存在【全车喷漆】项目，不可再添加【" + repairDate.repairName + "】的"+repairDate.workTypeName+"项目";

      thisObj.$confirm(content, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton:false,
        closeOnClickModal:false,
        closeOnPressEscape:false,
        type: 'warning'
      }).then(() => {}).catch(() => {});

      exclusiveFlag = false;
      return exclusiveFlag;
    } else if (repairDate.repairCode == 'Q089000' && repairList[i].workTypeCode == 'R02') {

      //添加工时项目互斥记录
      reDate. exclusionTypeName  = "添加全车喷漆项目与已添加的喷漆项目互斥";
      saveExclusionItem(reDate);

      let content='已存在【'+repairList[i].repairName+'】喷漆项目，不可再添加全车喷漆项目';
      thisObj.$confirm(content, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton:false,
        closeOnClickModal:false,
        closeOnPressEscape:false,
        type: 'warning'
      }).then(() => {}).catch(() => {});

      exclusiveFlag = false;
      return exclusiveFlag;
    }
  }
  if(!exclusiveFlag) {
    return exclusiveFlag;
  }
  if(!HTFlag){
    //（2）父子工时互斥
    //1、判断多个工时互斥关系的
    let indexArray1 =[];//父子互斥 父包含子,删除子工时
    let indexArray2 =[];//字父互斥 要添加的工时为子工时

    for (let i = 0; i < repairList.length; i++) {
      //调用互斥关系码进行判断
      let incFlag = incCompare(repairDate.incCode, repairList[i].incCode);
      if(incFlag==1){
        indexArray1.push(orgRepairList.indexOf(repairList[i]));
      }else if (incFlag == -1) {
        indexArray2.push(orgRepairList.indexOf(repairList[i]));
      }
    }

    //判断子父关系,添加子工时已添加的工时中存在父工时，此时子工时不能进行添加
    if(indexArray2.length>0){
      reDate.evalItemCode = orgRepairList[indexArray2[0]].repairCode;
      reDate.evalItemName = orgRepairList[indexArray2[0]].repairName;
      reDate.evalItemPrice = orgRepairList[indexArray2[0]].evalRepairSum;
      //添加工时项目互斥记录
      reDate. exclusionTypeName  = "添加子工时项目与已添加的总成工时项目互斥";
      saveExclusionItem(reDate);

      let content="已存在工时【" + orgRepairList[indexArray2[0]].repairName + "】项目，不可再添加子工时【" + repairDate.repairName+"】项目";
      thisObj.$confirm(content, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton:false,
        closeOnClickModal:false,
        closeOnPressEscape:false,
        type: 'warning'
      }).then(() => {}).catch(() => {});

      exclusiveFlag = false;
      return exclusiveFlag;
    }

    //判断父子关系,添加父工时已添加的零件中存在子工时，此时所有的子工时需要全部删除，若工时存在附加工时，同步删除
    if(indexArray1.length>0){
      indexArray1 = indexArray1.sort(desc);
      let existRepairFlag =false;

      for(let k=0;k<indexArray1.length;k++){
        reDate.evalItemCode = orgRepairList[indexArray1[k]].repairCode;
        reDate.evalItemName = orgRepairList[indexArray1[k]].repairName;
        reDate.evalItemPrice = orgRepairList[indexArray1[k]].evalRepairSum;
        //添加工时项目互斥记录
        reDate. exclusionTypeName  = "添加总成工时项目与已添加的子工时项目互斥";
        reDate.derogationType="1";
        saveExclusionItem(reDate);

        let delFlag =delChildRepair(orgRepairList[indexArray1[k]].id,orgRepairList,evalCar);
        if(delFlag){
          existRepairFlag=true;
        }
        if (orgRepairList[indexArray1[k]].repairApprCheckState || orgRepairList[indexArray1[k]].repairApprCheckState) {
          delRepairList.push(orgRepairList[indexArray1[k]])
        }

        orgRepairList.splice(indexArray1[k], 1);
        if(k==indexArray1.length-1){
          let content="已添加【"+repairDate.repairName+"】，总成下的子工时会自动删除";
          thisObj.$confirm(content, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            showCancelButton:false,
            closeOnClickModal:false,
            closeOnPressEscape:false,
            type: 'warning'
          }).then(() => {}).catch(() => {});
        }
      }
      if(existRepairFlag){
        //若有工时项目删除，反算工种合计信息
        thisObj.$emit('update:changeRepairFlag', true);
      }
      exclusiveFlag = false
      return exclusiveFlag;
    }

  }else{
    // 全车喷漆 yu 其它喷漆不能共存
    let indexArray1 =[];//父子互斥 父包含子,删除子工时
    let indexArray2 =[];//字父互斥 要添加的工时为子工时

    for (let i = 0; i < repairList.length; i++) {
      if(repairList[i].repairName=='全车喷漆'&&repairDate.workTypeCode=='R02'){
        indexArray2.push(orgRepairList.indexOf(repairList[i]));
      }else if(repairDate.repairName=='全车喷漆'&&repairList[i].workTypeCode=='R02'){
        indexArray1.push(orgRepairList.indexOf(repairList[i]))
      }
    }

    //判断子父关系,添加子工时已添加的工时中存在父工时，此时子工时不能进行添加
    if(indexArray2.length>0){
      reDate.evalItemCode = orgRepairList[indexArray2[0]].repairCode;
      reDate.evalItemName = orgRepairList[indexArray2[0]].repairName;
      reDate.evalItemPrice = orgRepairList[indexArray2[0]].evalRepairSum;
      //添加工时项目互斥记录
      reDate. exclusionTypeName  = "添加子工时项目与已添加的总成工时项目互斥";
      saveExclusionItem(reDate);

      let content="已存在工时【" + orgRepairList[indexArray2[0]].repairName + "】项目，不可再添加子工时【" + repairDate.repairName+"】项目";
      thisObj.$confirm(content, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton:false,
        closeOnClickModal:false,
        closeOnPressEscape:false,
        type: 'warning'
      }).then(() => {}).catch(() => {});

      exclusiveFlag = false;
      return exclusiveFlag;
    }

    //判断父子关系,添加父工时已添加的零件中存在子工时，此时所有的子工时需要全部删除，若工时存在附加工时，同步删除
    if(indexArray1.length>0){
      indexArray1 = indexArray1.sort(desc);
      let existRepairFlag =false;

      for(let k=0;k<indexArray1.length;k++){
        reDate.evalItemCode = orgRepairList[indexArray1[k]].repairCode;
        reDate.evalItemName = orgRepairList[indexArray1[k]].repairName;
        reDate.evalItemPrice = orgRepairList[indexArray1[k]].evalRepairSum;
        //添加工时项目互斥记录
        reDate.exclusionTypeName  = "添加总成工时项目与已添加的子工时项目互斥";
        reDate.derogationType="1";
        saveExclusionItem(reDate);

        let delFlag =delChildRepair(orgRepairList[indexArray1[k]].id,orgRepairList,evalCar);
        if(delFlag){
          existRepairFlag=true;
        }
        if (orgRepairList[indexArray1[k]].repairApprCheckState || orgRepairList[indexArray1[k]].repairApprCheckState) {
          delRepairList.push(orgRepairList[indexArray1[k]])
        }

        orgRepairList.splice(indexArray1[k], 1);
        if(k==indexArray1.length-1){
          let content="已添加【"+repairDate.repairName+"】，总成下的子工时会自动删除";
          thisObj.$confirm(content, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            showCancelButton:false,
            closeOnClickModal:false,
            closeOnPressEscape:false,
            type: 'warning'
          }).then(() => {}).catch(() => {});
        }
      }
      if(existRepairFlag){
        //若有工时项目删除，反算工种合计信息
        thisObj.$emit('update:changeRepairFlag', true);
      }
      exclusiveFlag = false // +++
      return exclusiveFlag;
    }
  }
  
  //（3)同名的换件互斥
  //工时种类字典 workTypeCode   钣金项目R03 机修项目R04 电工项目:R05 喷漆项目：R01 拆装项目：R01 低碳项目：R06
  for (let i = 0; i < partList.length; i++) {
    if (repairDate.repairName == partList[i].partName && (repairDate.workTypeCode == 'R03' || repairDate.workTypeCode == 'R04' || repairDate.workTypeCode == 'R05')) {
      reDate.evalItemCode = partList[i].factPartCode;
      reDate.evalItemName = partList[i].partName;
      reDate.evalItemPrice = partList[i].evalPartSum;

      reDate. exclusionTypeName  = "工时项目与已添加的配件项目互斥";
      saveExclusionItem(reDate);

      let content="已存在换件【"+partList[i].partName+"】，不可再添加【"+repairDate.workTypeName+"-"+repairDate.repairName+"】";
      thisObj.$confirm(content, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton:false,
        closeOnClickModal:false,
        closeOnPressEscape:false,
        type: 'warning'
      }).then(() => {}).catch(() => {});

      exclusiveFlag = false;
      return exclusiveFlag;
    }
  }

  //外修同名互斥
  //工时种类字典 workTypeCode   钣金项目R03 机修项目R04 电工项目:R05 喷漆项目：R01 拆装项目：R01 低碳项目：R06
  if(outerRepairList){
    for (let i = 0; i < outerRepairList.length; i++) {
      if (repairDate.repairName == outerRepairList[i].repairName && (repairDate.workTypeCode == 'R03'||repairDate.workTypeCode == 'R04'||repairDate.workTypeCode == 'R05')) {
        reDate.evalItemCode = outerRepairList[i].repairCode;
        reDate.evalItemName = outerRepairList[i].repairName;
        reDate.evalItemPrice = outerRepairList[i].evalRepairTotal;
        reDate. exclusionTypeName  = "工时项目与已添加的外修项目互斥";
        saveExclusionItem(reDate);

        let content="已存在外修项目【"+outerRepairList[i].repairName+"】，不可再添加【"+repairDate.workTypeName+"-"+repairDate.repairName+"】";
        thisObj.$confirm(content, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          showCancelButton:false,
          closeOnClickModal:false,
          closeOnPressEscape:false,
          type: 'warning'
        }).then(() => {}).catch(() => {});

        exclusiveFlag = false;
        return exclusiveFlag;
      }
    }
  }
  return exclusiveFlag;
}

//仅仅同名取消 不提示
export function checkMateNameExclusiveNoTips(mateData,mateList,evalCar,type,thisObj){
  let exclusiveFlag = true;
  let reDate = {};
  reDate.evalId = evalCar.id;
  reDate.evalComCode = evalCar.evalComCode;
  reDate.createdBy = evalCar.userCode;
  reDate.derogationType="0";

  if(type=="0"){
    reDate.itemType = "2";
    reDate.itemTypeName = "工时";
  }else{
    reDate.itemType = "3";
    reDate.itemTypeName = "辅料";
  }
  reDate.exclusionItemCode =mateData.mateCode;
  reDate.exclusionItemName = mateData.mateName;
  reDate.exclusionItemPrice =0.0;
  for (let i = 0; i < mateList.length; i++) {
    reDate.evalItemCode = mateList[i].mateCode;
    reDate.evalItemName = mateList[i].mateName;
    reDate.evalItemPrice = mateList[i].evalMateSum;
    if (mateData.mateName == mateList[i].mateName) {
      //添加配件项目互斥记录
      if(type=="0"){
        reDate.exclusionTypeName  = "工时附加辅料项目与已添加辅料项目同名互斥";
      }else{
        reDate.exclusionTypeName  = "辅料项目同名互斥";
      }
      saveExclusionItem(reDate);
      exclusiveFlag = false;
      return false;
    }else if (("F002" == mateData.mateCode && "F003" == mateList[i].mateCode) ||
      ("F003" == mateData.mateCode && "F002" == mateList[i].mateCode)) {
      //添加辅料项目互斥记录
      reDate.evalItemCode = mateList[i].mateCode;
      reDate.evalItemName =  mateList[i].mateName;
      reDate.evalItemPrice = mateList[i].evalMateSum;

      if(type=="0"){
        reDate. exclusionTypeName  = "工时附加辅料项目变速箱油互斥";
      }else{
        reDate. exclusionTypeName  = "辅料项目变速箱油互斥";
      }
      saveExclusionItem(reDate);
      exclusiveFlag = false;
      return false;
    }
  }
  return exclusiveFlag;
}

//辅料的同名互斥
export function checkMateNameExclusive(mateData,mateList,evalCar,type,thisObj){
  let exclusiveFlag = true;
  let reDate = {};
  reDate.evalId = evalCar.id;
  reDate.evalComCode = evalCar.evalComCode;
  reDate.createdBy = evalCar.userCode;
  reDate.derogationType="0";

  if(type=="0"){
    reDate.itemType = "2";
    reDate.itemTypeName = "工时";
  }else{
    reDate.itemType = "3";
    reDate.itemTypeName = "辅料";
  }
  reDate.exclusionItemCode =mateData.mateCode;
  reDate.exclusionItemName = mateData.mateName;
  reDate.exclusionItemPrice =0.0;


  for (let i = 0; i < mateList.length; i++) {

    reDate.evalItemCode = mateList[i].mateCode;
    reDate.evalItemName = mateList[i].mateName;
    reDate.evalItemPrice = mateList[i].evalMateSum;
    if (mateData.mateName == mateList[i].mateName) {
      //添加配件项目互斥记录
      if(type=="0"){
        reDate.exclusionTypeName  = "工时附加辅料项目与已添加辅料项目同名互斥";
      }else{
        reDate.exclusionTypeName  = "辅料项目同名互斥";
      }

      let msg = "已存在【"+mateList[i].mateName+"】同名称辅料项目，不可重复添加";
        thisObj.$confirm(msg, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          showCancelButton:false,
          closeOnClickModal:false,
          closeOnPressEscape:false,
          type: 'warning'
        }).then((type) => {}).catch(() => {});
        saveExclusionItem(reDate);
      exclusiveFlag = false;
      return false;
    }else if (("F002" == mateData.mateCode && "F003" == mateList[i].mateCode) ||
      ("F003" == mateData.mateCode && "F002" == mateList[i].mateCode)) {
      //添加辅料项目互斥记录
      reDate.evalItemCode = mateList[i].mateCode;
      reDate.evalItemName =  mateList[i].mateName;
      reDate.evalItemPrice = mateList[i].evalMateSum;

      if(type=="0"){
        reDate. exclusionTypeName  = "工时附加辅料项目变速箱油互斥";
      }else{
        reDate. exclusionTypeName  = "辅料项目变速箱油互斥";
      }
      saveExclusionItem(reDate);

      let content="变速箱油(MT)与变速箱油(AT)存在互斥关系，不能同时添加";
      thisObj.$confirm(content, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton:false,
        closeOnClickModal:false,
        closeOnPressEscape:false,
        type: 'warning'
      }).then(() => {}).catch(() => {});
      exclusiveFlag = false;
      return false;
    }
  }
  return exclusiveFlag;
}

//自定义项目添加互斥判断
//1、配件同名互斥
//2、配件和工时项目互斥
//3、配件和外修项目互斥
export function getExclusiveManualPart(partData,partList,repairList,outerRepairList,evalCar,thisObj) {
  let exclusiveFlag = true;
  let reDate = {};
  reDate.evalId = evalCar.id;
  reDate.evalComCode = evalCar.evalComCode;
  reDate.createdBy = evalCar.userCode;
  reDate.itemType = "1";
  reDate.itemTypeName = "配件";

  //(1) 同名换件互斥
  exclusiveFlag =checkPartNameExclusive(partData,partList,evalCar,thisObj,'1');

  if(!exclusiveFlag){
    return exclusiveFlag;
  }

  //（2）与工时项目互斥：同名（非拆装、非喷漆）工时项目互斥
  //工时种类字典 workTypeCode   钣金项目R03 机修项目R04 电工项目:R05 喷漆项目：R02 拆装项目：R01 低碳项目：R06
  exclusiveFlag = checkPartRepairExclusive(partData,partList,repairList,evalCar,thisObj,'1');
  if(!exclusiveFlag){
    return exclusiveFlag;
  }

  //（3）与低碳项目互斥：添加同名低碳项目后不能添加配件
  exclusiveFlag = checkPartOuterNameExclusive(partData,partList,outerRepairList,evalCar,thisObj,"1");
  return exclusiveFlag;
}

//添加总成工时时删除子工时项目，以及获取子工时的附加工时信息
export function delChildRepair (repairIds,repairList,evalCar){
  let existRepairFlag = false;
  //删除配件请求参数
  let redata = {
    repairIds: "",
    userCode: evalCar.userCode,
    appendRepairIds: ""
  };
  //设置需要删除工时id集合
  redata.repairIds = repairIds;

  let appendRepairIndex = [];
  let repairIndex = 0;
  let repairIdStr = "";
  for (let i = 0; i < repairList.length; i++) {
    if (repairIds == repairList[i].id) {
      if (repairIdStr != "") {
        repairIdStr += ",";
      }
      repairIdStr += repairList[i].id;
      appendRepairIndex[repairIndex] = i;
      repairIndex++;
    }
  }

    if (repairIdStr != "") {
      redata.appendRepairIds=repairIdStr
    }
    if(appendRepairIndex.length>0){
      //调用删除方法进行工时项目删除
      delRepair(redata);

      //删除工时列表展示信息
      //倒序排列
      // appendRepairIndex = appendRepairIndex.sort(desc);
      // for (let k = 0; k < appendRepairIndex.length; k++) {
      //   repairList.splice(appendRepairIndex[k], 1);
      // }
      existRepairFlag =true;
    }
  // return existRepairFlag;
  return false
}

export function getAssemblyPartInfo(partData,partList,car,assemblyRatio,thisObj) {
  let data = {
    evalId:car.id,
    modelId: car.modelId,
    brandCode: car.brandCode,
    evalComCode: car.evalComCode,
    carTypeCode: car.carTypeCode,
    customerFlag: "0",
    incCode: partData.incCode.substring(0,2)+"A",
    standPartSearch:'0'
  }

  let reqData = {};
  let partArray = new Array();
  partArray.push(partData);
  reqData.exclusiveFlag = false;

  if(assemblyRatio==null || assemblyRatio=="" || assemblyRatio==0){
    assemblyRatio = 1.0;
  }
  let factoryCode="";
  let factoryName="";
  let partSum=0.0;

  return new Promise(resolve=>{
    getAssemblyPart(data).then(partInfo=>{
      if(partInfo && partList && partList.length>0){
        partSum= partData.referencePrice;
        factoryCode+=partData.factPartCode+",";
        factoryName+=partData.partName+",";

        partList.forEach(item => {
          if(item.incCode && partInfo.incCode && item.handAddpartFlag=='0' &&
            item.incCode.substring(0,2)==partInfo.incCode.substring(0,2)){

            partSum +=item.evalPartPrice;
            factoryCode+=item.factPartCode+",";
            factoryName+=item.partName+",";

            partArray.push(item);
            if(partSum>partInfo.referencePrice){
              reqData.exclusiveFlag  = true;

              reqData.partInfo = partInfo;
            }
          }
        })
      }
      //添加互斥记录信息
      if(reqData.exclusiveFlag){
        let reDate = {};
        reDate.evalId = car.id;
        reDate.evalComCode = car.evalComCode;
        reDate.createdBy = car.userCode;
        reDate.itemType = "1";
        reDate.itemTypeName = "配件";
        reDate.derogationType="1";

        reDate.exclusionItemCode =partInfo.factPartCode;
        reDate.exclusionItemName = partInfo.partName;
        reDate.exclusionItemPrice = partInfo.referencePrice;

        reDate.evalItemCode =factoryCode;
        reDate.evalItemName =  factoryName;
        reDate.evalItemPrice = partSum;
        reDate. exclusionTypeName  = "子项配件费用之和超过总成配件费用";
        saveExclusionItem(reDate);
      }
      reqData.partArray = partArray;
      resolve(reqData)
    })
  })
}

//碰撞部位校验  批量
export function checkPzExclusiveBatch(partData,collision,evalCar,thisObj,type){
  // partData  是个 list
  let list=[];
  partData.forEach((item,index)=>{
    let checkDate = {
      "evalId": thisObj.car.id,
      "partStandId": item.partStandId,
      "carTypeCode": thisObj.car.carTypeCode
    }
    list.push(checkDate)
  })
  
  let tipConent = "";
  let reDate = {};
  reDate.evalId = evalCar.id;
  reDate.evalComCode = evalCar.evalComCode;
  reDate.createdBy = evalCar.userCode;
  reDate.itemType = "1";
  reDate.itemTypeName = "配件";
  reDate.derogationType="0";
  reDate.exclusionItemCode = partData.factPartCode;
  reDate.exclusionItemName = partData.partName;
  reDate.exclusionItemPrice = partData.referencePrice;
  reDate.evalItemCode = "";
  reDate.evalItemName = "";
  reDate.evalItemPrice = "";
  let data={}
  newRep(list,data,'partList')
  let result = getPartPzRelationBatch(data);
  if (result != null && result != "" && result.length > 0) {
    for (let i = 0; i < result.length; i++) {
      if (tipConent != "") {
        tipConent += "、";
      }
      tipConent += result[i].bwmc;
    }
  }
  if (tipConent != "") {
    if (collision != null && collision != "" && collision.length > 0) {
      //添加配件项目互斥记录
      if(type=="0"){
        reDate. exclusionTypeName  = "配件项目和损失部位不相符";
      }else{
        reDate.exclusionTypeName = "标准配件项目和损失部位不相符";
      }
    } else {
      reDate.exclusionTypeName = "未选择车辆损失部位";
    }
    saveExclusionItem(reDate);
  }
  return result;
}

//配件同名互斥  批量添加用
export function checkPartNameExclusiveBatch(partDataList,partList,evalCar,thisObj,type){
  //partDataList 多勾选的数组
  //(1)勾选数组内部比对同名
  let nameList=[];//比对存储用的，
  let sameList=[],sameFlag=false;
  partDataList.forEach(part=>{
    if(nameList.indexOf(part.partName)<0){
      nameList.push(part.partName)
    }else{
      sameFlag=true
      if(sameList.indexOf(part.partName)<0){
        sameList.push(part.partName)
      }
    }
  })
  if(sameFlag){
    return {type:'1',list:sameList,name:'勾选的配件中存在已下重复的配件，请不要重复勾选'};
  }
  return false;
}
