import storage from 'good-storage'
export const domain = '/ClaimCloudProd-app';
export const domain2 = '/InsuranceClaim-app';
const fb_domain = '/FeedbackCloud'; //客服

(function () {
  function urlParse() {
    let url = window.location.href;
    let num = url.indexOf('?');
    url = url.slice(num);
    let obj = {};
    let reg = /[?&][^?&]+=[^?&]+/g;
    let arr = url.match(reg);
    if (arr) {
      arr.forEach(function(item) {
        let tempArr = item.substring(1).split('=');
        let key = decodeURIComponent(tempArr[0]);
        let val = decodeURIComponent(tempArr[1]);
        obj[key] = val;
      });
    }
    return obj;
  }
  let queryParam = urlParse(), caseTaskFlag = queryParam.caseTaskFlag;
  if (caseTaskFlag) {
    sessionStorage.setItem('caseTaskFlag', JSON.stringify(caseTaskFlag));
  }
})();

let common = {
  returnTask: domain + '/evaluation/returnTask',//退回接口
  selectResult: domain + '/zeus/selectResult ',//获取风险（宙斯）
  selectDispatch: domain + '/zeus/dispatch ',//调度风险（宙斯）
  risk_getRisk: domain + '/risk/getRisk/',//获取风险（天网）
  risk_getSelfRisk: domain + '/risk/getSelfRisk/', //风险自查
  risk_setHaveRiskFlag: domain + '/risk/setHaveRiskFlag',//是否有风险
  risk_getRiskDetailed: domain + '/risk/getRiskDetailed',
  risk_getRiskCheckRatioInfo: domain + '/risk/getRiskCheckRatioInfo',//获取点选率
  risk_getRiskAccidentInfo: domain + '/risk/getRiskAccidentInfo',//获取车辆历史出险
  getPartContent: domain + '/evalHabit/getPartContent',//表头优化获取
  updateEvalHabit: domain + '/evalHabit/updateEvalHabit',//表头优化修改接口
  evalHabit_getLossItemHabit:domain + '/evalHabit/getLossItemHabit',//查询获取用户损失项目习惯
  evalHabit_updateLossItemHabit:domain + '/evalHabit/updateLossItemHabit',//保存用户损失项目习惯
  cancelEvalLoss: domain + '/evaluation/cancelEvalLoss',//定损取消接口
  print_getInfo: domain + '/print/getInfo',//打印接口
  dict_getPzbwList: domain + '/common/getPzbwList',//加载页面字典 碰撞部位字典
  dict_getPzcdList: domain + '/common/getPzcdList',//加载页面字典 碰撞程度字典
  factory_getfactorychangelist: domain + '/factory/getfactorychangelist/',//查询修理厂变更轨迹
  factory_querybyname: domain + '/factory/querybyname/',//通过修理厂名称或编码获取修理厂列表
  factory_getfactoryInfo: domain + '/factory/getfactoryInfo/',//查询相关修理厂信息
  factory_refreshfactoryInfo: domain + '/factory/refreshfactoryInfo/',//刷新修理厂信息
  factory_queryorg: domain + '/factory/queryorg/',//定型历史记录
  factory_getOutsideFactoryList: domain + '/factory/getOutsideFactoryList',//修理厂列表
  factory_queryOrgs: domain + '/factory/queryOrgs',//修理厂查询
  factory_queryByCondition: domain + '/factory/queryFactoryByCondition',//修理厂查询
  factory_queryRegionDictInfo: domain + '/common/getRegionDictInfo',//查询省份信息
  factory_queryCitySelectByProvincen: domain + '/common/getCitySelectByProvince',//查询城市信息
  factory_saveRepairFactoryInfoByDefinedInfo: domain + '/factory/saveRepairFactoryInfoByDefinedInfo/',//保存自定义修理厂
  vehicleIdentify_getModeSettingHistoryByEvalID: domain + '/vehicleIdentify/getModeSettingHistoryByEvalID/',//定型历史记录
  vehicleIdentify_getVehicleInfoByVehCertainId: domain + '/vehicleIdentify/getVehicleInfoByVehCertainId/',//根据车型ID获取配置信息
  vehicleIdentify_getVehicleInfoByVehIdVinStage: domain + '/vehicleIdentify/getVehicleInfoByVehIdVinStage/',//根据车型ID获取配置信息
  vehicleIdentify_getVehicleInfoByComplex: domain + '/vehicleIdentify/getVehicleInfoByComplex/',//
  vehicleIdentify_getBrandListByName: domain + '/vehicleIdentify/getBrandListByName/',//
  vehicleIdentify_getSeriesListByBrandID: domain + '/vehicleIdentify/getSeriesListByBrandID/',//获取品牌信息接口
  vehicleIdentify_getBrandList: domain + '/vehicleIdentify/getBrandList',//
  vehicleIdentify_getBrandInfoByID: domain + '/vehicleIdentify/getBrandInfoByID/', //获取品牌信息接口
  vehicleIdentify_getSeriesListBySeriesName: domain + '/vehicleIdentify/getSeriesListBySeriesName/', //获取品牌信息接口
  vehicleIdentify_getGroupListByGroupName: domain + '/vehicleIdentify/getGroupListByGroupName', //获取品牌信息接口
  vehicleIdentify_getGroupListBySeriesID: domain + '/vehicleIdentify/getGroupListBySeriesID/', //获取车组列表信息接口
  vehicleIdentify_getVehicleInfoByGroupID: domain + '/vehicleIdentify/getVehicleInfoByGroupID/', //获取车组列表信息接口
  vehicleIdentify_saveVehicleInfo: domain + '/vehicleIdentify/saveVehicleInfo', //定型信息保存接口调用
  vehicleIdentify_getSeriGradeListByCarType: domain + '/vehicleIdentify/getSeriGradeListByCarType/', //定型信息保存接口调用
  vehicleIdentify_getVehicleIdentifyByVinAnswerQuestion: domain + '/vehicleIdentify/getVehicleIdentifyByVinAnswerQuestion/', //定型信息保存接口调用
  vehicleIdentify_getVehicleIdentifyByVin: domain + '/vehicleIdentify/getVehicleIdentifyByVin/', ///VIN码定型接口调用
  eval_getCarImgPath: domain + '/eval/getCarImgPath', //VIN码定型接口调用
  eval_getEvalHistory: domain + '/record/getEvalHistory/',
  saveEval_serarchRecord: domain + '/saveEval/serarchRecord', //
  partQuery_getPartListForCollision: domain + '/partQuery/getPartListForCollision',
  partQuery_getPartListForGroup: domain + '/partQuery/getPartListForGroup',
  partQuery_getPartListForName: domain + '/partQuery/getPartListForName',
  partQuery_getPartPzRelation: domain + '/partQuery/getPartPzRelation',//配件关联碰撞部位
  partQuery_getPartAppendHour: domain + '/partQuery/getPartAppendHour/', //配件附加工时
  partQuery_getStandPartPzRelation: domain + '/partQuery/getStandPartPzRelation',
  partQuery_getPartListForManualPart: domain + '/partQuery/getPartListForManualPart',
  partQuery_getPartListForRelevantPart: domain + '/partQuery/getPartListForRelevantPart', //添加配件项目互斥记录
  partQuery_getPartPicture: domain + '/partQuery/getPartPicture', //添加配件项目互斥记录
  partQuery_getPartGroupTree: domain + '/partQuery/getPartGroupTree', //初始化加载左侧菜单
  partQuery_getOuterRepairRelation: domain + '/partQuery/getOuterRepairRelation',//配件项目添加时，获取关联的低碳项目
  partQuery_getPartExclusiveInfo: domain + '/partQuery/getPartExclusiveInfo',//配件项目添加时,获取配件标准件互斥关系
  partQuery_getCustomerPartPriceListForName: domain + '/partQuery/getCustomerPartPriceListForName', //名字获取更多自定义配件
  partQuery_getCustomerPartPriceList: domain + '/partQuery/getCustomerPartPriceList', //获取更多自定义配件
  partQuery_getOuterRepairAppendHour:domain + '/partQuery/getOuterRepairAppendHour',//获取外修项目的附加工时项目
  partQuery_getHighPartList: domain + '/partQuery/getHighPartList',//高价值配件查询
  repairQuery_getRepairAppendHour: domain + '/repairQuery/getRepairAppendHour', //获取工时项目的附加工时
  repairQuery_getRepairGroupTree: domain + '/repairQuery/getRepairGroupTree',
  repairQuery_getRepairListForName: domain + '/repairQuery/getRepairListForName',
  repairQuery_getRepairListForGroup: domain + '/repairQuery/getRepairListForGroup',
  repairQuery_getRepairRelationPartInfo: domain + '/repairQuery/getRepairRelationPartInfo',//获取钣金关联配件
  repairQuery_getOuterRepairExclusion: domain + '/repairQuery/getOuterRepairExclusion',
  repairQuery_getRepairItemDetail: domain + '/repairQuery/getRepairItemDetail',
  repairQuery_getAllPaintItemFee: domain + '/repairQuery/getAllPaintItemFee', //全车喷漆费用
  repairQuery_getOuterRepairList: domain + '/repairQuery/getOuterRepairDetailList',//查询外修列表(新接口)
  materialQuery_getRepairAppendMate: domain + '/materialQuery/getRepairAppendMate/', //获取工时项目的附加工时
  materialQuery_getMateByAppendRepairId: domain + '/materialQuery/getMateByAppendRepairId/', //判断改项目是否存在附加的辅料项目
  materialQuery_getRepairByAppendMate: domain + '/materialQuery/getRepairByAppendMate/',
  materialQuery_getMaterialList: domain + '/materialQuery/getMaterialList',
  evalPart_add: domain + '/evalPart/add', //添加配件
  evalPart_delPart: domain + '/evalPart/delPart', //删除配件
  evalPart_recoveryPart: domain + '/evalPart/recoveryPart/',//恢复已删除配件
  evalRepair_add: domain + '/evalRepair/add', //添加工时
  evalRepair_delRepair: domain + '/evalRepair/delRepair', //删除工时
  evalRepair_recoveryRepair: domain + '/evalRepair/recoveryRepair/', //恢复已删除工时
  evalMaterial_add: domain + '/evalMaterial/add/', //添加辅料
  evalMaterial_delMaterial: domain + '/evalMaterial/delMaterial', //删除辅料项目
  evalMaterial_recoveryMaterial: domain + '/evalMaterial/recoveryMaterial/', //恢复已删除辅料
  evalRepair_addOuterRepair: domain + '/evalRepair/addOuterRepair',//添加外修
  evalRepair_delOuterRepair: domain + '/evalRepair/delOuterRepair',//删除外修
  evalRepair_recoveryOuterRepair: domain + '/evalRepair/recoveryOuterRepair/', //恢复已删除外修
  evalSalvFee_add: domain + '/evalSalvFee/add', // 添加施救费
  evalSalvFee_delSalvFee: domain+'/evalSalvFee/delSalvFee',//删除施救费
  evalPart_convertOutRep: domain + '/evalPart/partToOutRep', //配件转外修
  evalRepair_convertPart: domain + '/evalRepair/outRepToPart', //外修转配件
  saveEval_delAllLossInfo: domain + '/saveEval/delAllLossInfo',//删除全部损失项目
  saveEval_updatePart: domain + '/saveEval/updatePart/',//定损更新配件
  saveEval_updateRepair: domain + '/saveEval/updateRepair/',//定损更新工时
  saveEval_updateMate: domain + '/saveEval/updateMate/',//定损更新辅料
  evalRepair_updateOuterRepair: domain + '/evalRepair/updateOuterRepair/',//定损更新外修
  saveEval_updateSalv: domain + '/saveEval/updateSalv/', //定损更新施救费
  salv_updateSalvRemark:domain + '/salv/updateSalvRemark',//仅单条施救费备注保存接口
  estimate_part: domain + '/estimate/part/',//核价更新配件信息
  estimate_updateRepair: domain + '/estimate/updateRepair/',//核价更新分项工时信息
  estimate_updateRepairExtend: domain + '/estimate/updateRepairExtend/',//核价更新打包工时信息
  estimate_saveOuterRepair: domain + '/estimate/saveOuterRepair', //核价更新外修信息
  estimate_updateSalv: domain + '/estimate/updateSalv/', //核价更新施救费信息
  approve_updatePart: domain + '/approve/updatePart/',//核损更新配件备注
  approve_updateRepair: domain + '/approve/updateRepair/',//核损更新分项工时侧边栏备注
  approve_updateRepairExtend: domain + '/approve/updateRepairExtend/',//核损更新打包工时保存备注
  approve_updateMate: domain + '/approve/updateMate/',//核损更新辅料备注
  approve_updateOuterRepair: domain + '/approve/updateOuterRepair/',//核损更新外修备注
  approve_updateSalv: domain + '/approve/updateSalv/', //核损更新施救费备注
  saveEval_exclusionItem: domain + '/saveEval/exclusionItem', //存储互斥信息
  setLossInfo_visitSetLossInfo: domain + '/setLossInfo/visitSetLossInfo/',
  vehicleIdentify_getSeriType: domain + '/vehicleIdentify/getSeriType/',
  saveEval_saveSetLossFlags: domain + '/saveEval/saveSetLossFlags/',
  eval_getEvalChangeRate: domain + '/record/getEvalChangeRate/', //金额变化率
  eval_getEvalChangeRateByFlowId: domain + '/record/getEvalChangeRateByFlowId', //金额变化率加参数
  eval_getEvalRepairItem: domain + '/eval/getEvalRepairItem/',
  evalRepair_calcRepairItem: domain + '/evalRepair/calcRepairItem',
  eval_getEvalCollisionRelation: domain + '/eval/getEvalCollisionRelation/', //碰撞部位变更时，查询关联配件
  dict_getFeedbackCateDictList: domain + '/common/getFeedbackCateDictList',
  feedback_submitFeedback: domain + '/feedback/submitFeedback',//我要反馈 提交按钮
  feedback_getFeedbackInfoList: domain + '/feedback/getFeedbackInfoList',//历史反馈
  eval_getRecordInfo: domain + '/record/getRecordInfo',//轨迹
  eval_getRecordLineList: domain + '/record/getRecordLineList',//轨迹
  eval_saveCollisionInfo: domain + '/saveEval/saveCollisionInfo',//保存碰撞部位信息
  estimate_getEstimatePartLocalPriceList: domain + '/estimate/getEstimatePartLocalPriceList',
  estimate_getEstimateHistoryPartList: domain + '/estimate/getEstimateHistoryPartList',
  estimate_getEstimatePartLocalPriceListByParts: domain + '/estimate/getEstimatePartLocalPriceListByParts',//获取多个零件本地化价格
  estimate_saveLocalPartPrice: domain + '/estimate/saveLocalPartPrice',
  approve_getApproveHistoryMaterialList: domain + '/approve/getApproveHistoryMaterialList',
  approve_getApprvoeHistoryRepairList: domain + '/approve/getApprvoeHistoryRepairList',
  approve_getApproveHistoryPartList: domain + '/approve/getApproveHistoryPartList',
  jm_sendOutJm: domain + '/jm/sendOutJm',//发起精米询价
  jm_getJmPartPrice: domain + '/jm/getJmPartPrice',//接收精米价,
  common_getValByCodeAndCol: domain + '/common/getValByCodeAndCol', //获取机构扩展表对应列的值
  icEval_sendLeRepair: domain + '/leRepair/sendLeRepair',//推修乐修
  leRepair_checkReceived: domain + '/leRepair/checkReceived', //校验乐修是否接车
  leRepair_viewRepairState: domain + '/leRepair/viewRepairState',//乐修推修查看
  updateReadFlag: domain + '/callCenter/updateReadFlag',//更新反馈任务是否被读取
  saveEval_saveEvalCollision: domain + '/saveEval/saveEvalCollision',//保存碰撞部位信息
  jyCustService_poseQuestion: fb_domain + '/callCenter/createFeedbackLink',//创建反馈
  jyCustService_veiwFeedBack: fb_domain + '/callCenter/veiwFeedbackLink',// 查看反馈
  callCenter_selectUnreadTask: fb_domain + '/callCenter/selectUnreadTask',// 获取反馈状态
  getOuterRepairCollision: domain + '/repairQuery/getOuterRepairCollision', //外修关联碰撞部位
  getEvalReport: domain + '/eval/getEvalReport', // 提交定损获取定损单
  evaluation_isCanSubmit: domain + '/evaluation/isCanSubmit', // 诚泰发起重案
  isCanSubmit: domain + '/comms/isCanSubmit', // 诚泰车损提交校验大案逻辑
  bigCaseQuery: domain + '/comms/bigCaseQuery', // 诚泰车损提交校验大案查询 ****
  getZSPartPriceList: domain + '/partQuery/getZSPartPriceList',  // 浙商查询价格用
  setZSPartPriceType: domain + '/partQuery/setZSPartPriceType',  // 浙商价格方案选用
  recordGetComparInfo: domain + '/record/getComparInfo', // 审核周期开始对比
  getComparLossItem: domain + '/record/getComparLossItem', // 对比结果查看详情
  getHistoryOpinion: domain + '/record/getHistoryOpinion', // 获取历史处理意见
  getItemPriceTrend: domain + '/record/getItemPriceTrend', // 查看价格走势
  partQuerygetReplacePartListForPart: domain + '/partQuery/getReplacePartListForPart',  //点击替换件标记
  partQuerygetReplacePartListForOe: domain + '/partQuery/getReplacePartListForOe',  // 替换号查询
  file_fileUpload: domain + '/file/fileUpload',//图片上传
  upload: domain + '/import/upload', // 上传excel
  getImportResult: domain + '/import/getImportResult', // 上传excel结果列表查看
  importDownload: domain+'/import/download', // excel模板导出
  estimateImportPartEsti: domain + '/estimate/importPartEsti', // 核价环节询价单导入
  estiamte_exportPartInquiry: domain + '/estimate/exportPartEsti', // 核价询价单导出
  estimateGetExcelPartWrong: domain + '/estimate/getExcelPartWrong', // 询价单导入错误查询
  additionsQueryGetAdditionList: domain + '/additionsQuery/getAdditionList', // 加装标准间列表
  getImportItemList: domain + '/import/getImportItemList', // 项目列表-匹配未匹配
  delImportLoss: domain + '/import/delImportLoss', // 删除导入数据
  updateImportRelation: domain + '/import/updateImportRelation', // 取消匹配操作
}

const systemAndTool = {
  recheckAppr_getRecheckCarInfo: domain + '/recheckAppr/getRecheckCarInfo',//复勘审核che获取主信息
  recheckAppr_saveCarRecheck: domain + '/recheckAppr/saveCarRecheck',//复勘审核che保存信息
  evaluation_viewEvalInfo: domain + '/evaluation/viewEvalInfo',//车查看接口
  evaluation_getAppendHistoryEvalInfo: domain + '/evaluation/getAppendHistoryEvalInfo', //查看历史定损单（多个单子）
  evaluation_getAppendHistoryLossInfo: domain + '/evaluation/getAppendHistoryLossInfo', //所有历史损失项目
  evalCargo_getAppendHistoryLossCargoInfo: domain + '/evalCargo/getAppendHistoryLossCargoInfo', //所有历史损失项目wusun
  inquiry_getInquiryInfo: domain + '/inquiry/getInquiryInfo',//询价相关信息
  inquiry_initiateInquiry: domain + '/inquiry/initiateInquiry',//发起询价
  inquiry_batchInquiry: domain + '/inquiry/batchInquiry/',//批量获取品质
  inquiry_saveBatchInquiry: domain + '/inquiry/saveBatchInquiry',//批量获取品质
  inquiry_getPartInquiry: domain + '/inquiry/getPartInquiry',//获取配件报价信息
  inquiry_getToken: domain + '/inquiry/getToken',//打开直供页
  inquiry_updatePartInquiryInfo: domain + '/inquiry/updatePartInquiryInfo',//选择直供
  inquiry_showInquiryDetail: domain + '/inquiry/showInquiryDetail',//核价核损直供查看
  inquiry_apprLaunchOrder: domain + '/inquiry/apprLaunchOrder', //整单下单
  inquiry_sendInquiry: domain + '/inquiry/sendInquiry',//刷新报价
  saveEval_getAddress: domain + '/inquiry/getAddress', //之前是上边的名字
  inquiry_getEvalAddress: domain + '/inquiry/getEvalAddress',//获取定损地址信息
  inquiry_setEvalAddress: domain + '/inquiry/setEvalAddress',//更改定损地址信息
  inquiry_getProvince: domain + '/inquiry/getProvince',//获取省份列表
  inquiry_getCity: domain + '/inquiry/getCity',//获取城市列表
  inquiry_getCounty: domain + '/inquiry/getCounty',//获取地区列表
  inquiry_getTown: domain + '/inquiry/getTown',//获取乡镇街道列表
  save_directSupplyParts:domain + '/inquiry/saveDirectSupplyParts',//保存确认直供配件
  comms_getExternalLinkList: domain + '/comms/getExternalLinkList/', //获取外部链接按钮
  eval_sendOutRepairInquir: domain + '/eval/sendOutRepairInquir', //打印单导出
  evaluation_getZeroLoss: domain + '/evaluation/getZeroLoss',//一键零结
  evaluation_checkVinPlateNum: domain + '/evaluation/checkVinPlateNum',//定损验证vin码 车牌
  partQuery_getAssemblyPartInfo: domain + '/partQuery/getAssemblyPartInfo',//获取总成配件信息
  factory_updateRepairFactoryInfo: domain + '/factory/updateRepairFactoryInfo',//修理厂方案更换
  repairQuery_getRepairTree: domain + '/repairQuery/getRepairTree',//华泰的工时树
  repairQuery_getRepairList: domain + '/repairQuery/getRepairList',//获取对应的工时数组
  vehicleIdentify_getActualPrice: domain + '/vehicleIdentify/getActualPrice',//选初登日期自动计算出险实际价值
  export_inquiry: domain + '/export/inquiry/',//各环节的配件导出
  inquiry_showPartAuxiliaryDetail: domain + '/inquiry/showPartAuxiliaryDetail',//电商价查看
  inquiry_getpictureHistory: domain + '/inquiry/getpictureHistory',//询价时候的历史照片获取
  comms_getEvalIdCard: domain + '/comms/getEvalIdCard',//华安的驾驶员身份证号校验 走后端
  saveEval_getOtherCarListBySubsidiaryReport: domain + '/saveEval/getOtherCarListBySubsidiaryReport/', //永成复制三者车信息按钮
  saveEval_copyOtherCarInfo: domain + '/saveEval/copyOtherCarInfo/', //复制三者车信息，选中一辆回传
  inquiry_rejectParts: domain + '/inquiry/rejectParts',//退货
  repairQuery_getRepairPzRelation: domain + '/repairQuery/getRepairPzRelation', // 添加工时时，判断是否和碰撞部位互斥
  salv_getSalvQuery: domain + '/salv/getSalvQuery', // 点击添加施救费按钮，出现的所有施救费列表
  feedback_getQrCode: domain + '/feedback/getQrCode/', // 扫码反馈 二维码获取
  comms_getIfcRisk: domain + '/comms/getIfcRisk', // 诚泰风险需求
  facade_getFacadeAccount:domain + '/facade/getFacadeAccount',//获取facade版本的
  saveEval_checkVinPart: domain + '/saveEval/checkVinPart',//获取vin校验结果
  saveEval_saveCheckPartInfo: domain + '/saveEval/saveCheckPartInfo',//保存精准定件结果
  getRepairListForWorkType: domain + '/repairQuery/getRepairListForWorkType', //根据工种查询工时
}

const toolAndThunk ={
  estimate_getEstimateInfo: domain + '/estimate/getEstimateInfo',//核价信息获取接口
  estimate_saveEstiMateLoss: domain + '/estimate/saveEstiMateLoss',//核价信息保存接口
  approve_getApproveInfo: domain + '/approve/getApproveInfo',//核损信息获取接口
  approve_saveApproveLoss: domain + '/approve/saveApproveLoss',//核损保存接口
  vehicleIdentify_getSeriGradeListByCarType: domain + '/vehicleIdentify/getSeriGradeListByCarType/',
}

const tool = {
  eval_getEvalBasicInfo: domain + '/eval/getEvalBasicInfo',//获取定损单主页面信息
  eval_getEvalLossInfo: domain + '/eval/getEvalLossInfo', //损失项目获取
  saveEval_basic: domain + '/saveEval/basic/',//基本信息保存接口
  saveEval_loss: domain + '/saveEval/loss', //损失项目保存
  saveEval_overall: domain + '/saveEval/overall/', // 信息汇总信息保存
  recheck_getRecheckCarInfo: domain + '/recheckTool/getRecheckInfo', //获取车损复勘
  recheck_saveRecheckCarInfo: domain + '/recheckTool/saveRecheckLoss', //保存车损复勘
}

const system = {
  eval_getEvalBasicInfo: domain + '/evaluation/getEvalBasicInfo',//获取定损单主页面信息
  eval_getEvalLossInfo: domain + '/evaluation/getEvalLossInfo',//损失项目获取
  saveEval_basic: domain + '/evaluation/saveBasic/',//基本信息保存接口
  saveEval_loss: domain + '/evaluation/saveLoss', //损失项目保存
  saveEval_overall: domain + '/evaluation/saveOverall/', // 信息汇总信息保存
  estimate_getEstimateInfo: domain + '/esti/getEstimateInfo',//核价信息获取接口
  estimate_saveEstiMateLoss: domain + '/esti/saveEstimate',//核价信息保存接口
  approve_getApproveInfo: domain + '/appr/getApproveInfo',//核损信息获取接口
  approve_saveApproveLoss: domain + '/appr/saveApprove',//核损保存接口
  recheck_getRecheckCarInfo: domain + '/recheck/getRecheckCarInfo', //获取车损复勘
  recheck_saveRecheckCarInfo: domain + '/recheck/saveCarRecheckInfo', //保存车损复勘
  evalCargo_getEvalCargoInfo: domain + '/evalCargo/getEvalCargoInfo', //物损定损信息获取
  evalCargo_saveEvalCargoInfo: domain + '/evalCargo/saveEvalCargoInfo',//物损定损信息保存
  apprcargo_getApprCargoInfo: domain + '/apprcargo/getApprCargoInfo', //物损核损信息获取
  apprcargo_saveApprCargoInfo: domain + '/apprcargo/saveApprCargoInfo', //物损核损信息保存
  apprcargo_unlockApprCargo: domain + '/apprcargo/unlockApprCargo', //物损解锁
  apprcargo_deliverApprCargo: domain + '/apprcargo/deliverApprCargo', //物损核损转交
  recheckapprcargo_viewCargoInfo: domain + '/recheckapprcargo/viewCargoInfo',//物损查看接口
  recheckCargo_getRecheckCargoInfo: domain + '/recheckCargo/getRecheckCargoInfo',//复勘物损获取主信息
  recheckCargo_saveCargoRecheck: domain + '/recheckCargo/saveCargoRecheck',//复勘物损暂存保存
  recheckCargo_getRecheckApprCargoInfo: domain + '/recheckapprcargo/getRecheckApprCargoInfo',//复勘物损审进入,返回物损核损信息
  recheckCargo_saveRecheckApprCargoInfo: domain + '/recheckapprcargo/saveRecheckApprCargoInfo',//复勘物损审保存/提交/回退
  processPrintShow: domain + '/pdfPrint/processPrintShow    ',//核损完成打印接口
  MobileTrafficVehicle_checkPC: domain + '/evaluation/checkPC',//车牌号图片验证码校验
  MobileTrafficVehicle_confirmPC: domain + '/evaluation/confirmPC',//车牌号图片验证查询
  MobileTrafficVehicle_saveTraffic: domain + '/evaluation/saveTraffic',//车牌号验证保存
  eval_getEvalCargoHistory: domain + '/record/getEvalCargoHistory/',
  record_getRecordCargoInfo: domain + '/record/getRecordCargoInfo',//物损对比
  eval_getCargoRecordLineList: domain + '/record/getCargoRecordLineList',//物轨迹
  flow_updateFlowState: domain + '/flow/updateFlowState', //定损提交
  comms_getAuditorPerson: domain + '/comms/getAuditorPerson/', //获取转交人员名单
  comms_saveTransferInfo: domain + '/comms/saveTransferInfo/', //确定提交-转交
  comms_getUnlockTask: domain + '/comms/getUnlockTask', //解锁
  flowCtrl_getCtrlFlowList: domain + '/flowCtrl/getCtrlFlowList', //提交弹框按钮
  icEvalCargoControll_getApproveCargoInfoControll: domain + '/icEvalCargoControll/getApproveCargoInfoControll', //物损核损损信息jia
  icEvalCargoControll_getEvalCargoInfoControll: domain + '/icEvalCargoControll/getEvalCargoInfoControll', //jiashuju
  evalCargo_getEvalCargoInfoUpdate: domain + '/evalCargo/updateCargoDetailItem',//物损定损损失清单修改
  evalCargo_getEvalCargoInfoDel: domain + '/evalCargo/delCargoDetailItem',//物损定损删除
  evalCargo_getEvalCargoInfoAdd: domain + '/evalCargo/addCargoDetailItem',//物损定损损失清单添加
  recheckCargo_unlockRecheckApprCargo: domain + '/recheckapprcargo/unlockRecheckApprCargo',//复勘审核物损审解锁
  recheckCargo_cancellationTask: domain + '/comms/cancellationTask',//复勘物损审注销
  comms_getRecordHistory: domain + '/comms/getRecordHistory',//物损历史意见获取
  comms_saveApplyDispatch: domain + '/comms/saveApplyDispatch/',//申请注销按钮  在外部链接
  comms_recoverTaskInfo: domain + '/comms/recoverTaskInfo/',//申请恢复注销按钮  在外部链接
  getExternalLinkList_gotoNewImage: domain + '/comms/getExternalLinkList/gotoNewImage',//影像资料链接的请求
  risk_getRiskPartHistory: domain + '/risk/getRiskPartHistory',//风险配件+风险配件详情
  risk_getRiskPartFactory: domain + '/risk/getRiskPartFactory',//同/不同 修理厂
  evaluation_getSurveyOverFlag: domain + '/evaluation/getSurveyOverFlag',//安盟验证查勘是否已完成
  evaluation_updateWechatSelfHelpSign: domain + '/evaluation/updateWechatSelfHelpSign',//微信自助扩展信息
  evaluation_updateWechatSelfHelpCancelSign: domain + '/evaluation/updateWechatSelfHelpCancelSign',//微信自助扩展信息
}

const truck = {
  saveEval_basic: domain + '/claimEval/saveBasic',//基本信息保存接口
  saveEval_overall: domain + '/claimEval/saveOverall', //信息汇总信息保存
  eval_getEvalBasicInfo: domain + '/claimEval/getEvalBasicInfo',//获取定损单主页面信息
  icfactory_saveRepairFactoryInfo: domain + '/Icfactory/saveRepairFactoryInfo',//商用车修理厂保存
  eval_getEvalLossInfo: domain + '/claimEval/getEvalLossInfo', //定损损失信息拉取
  saveEval_loss: domain + '/claimEval/saveLoss', //定损损失信息保存
  file_fileUpload: domain + '/file/fileUpload',//图片上传
  truck_exportEvalInfo: domain + '/truck/exportEvalInfo/',//打印单导出
  truck_printEvalInfo: domain + '/truck/printEvalInfo/', //打印单导出
  approve_showEvalInfo: domain + '/approve/showEvalInfo',//打印单信息
}

if(storage.session.get('caseTaskFlag') === '1'){
  common = {
    ...common,
    ...toolAndThunk,
    ...truck
  }
}else if(storage.session.get('caseTaskFlag') === '2'){
  common = {
    ...common,
    ...systemAndTool,
    ...system
  }
}else{
  common = {
    ...tool,
    ...common,
    ...systemAndTool,
    ...toolAndThunk
  }
}

export default common;

