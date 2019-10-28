/**
 * Created by Administrator on 2017/1/2 0002.
 */

// make sure to call Vue.use(Vuex) if using a module system
// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)

//storeA 损失页面三个表格数据渲染

export const storeA = {
    state: {
      car: {},
      mateList: [],
      partList: [],
      repairList: [],
      outerRepairList: [],
      insureTermList: [],
      lpEvalInsuranceList: [],//险别列表
      repairExtendList: [],
      userCode: '',
      inApprEsti: false,//是否进入过核价，或者核损
      inAppr: false,
      inEsti: false,
      businessConfigDTO: {},
      isUseJm:"0"
    }
  };
  // 全局转态开关状态管理
  export const storeGlobalState = {
    modalState: {
      show: false,
      tabIndex: 0,
      email: "",
      isUseOuterRepair:1//是否使用外修
    },
    globalTabState: 1,
    routerPath: 0,
    scrollYLeve: 0,
    scrollFlag: false,
    scrollYLeve_02: 0,
    scrollFlag_02: false,
    scrollYLeve_01: 0,
    scrollFlag_01: false,
    lossFlag: "0",//精细化定损 1  标准定损 0
    ifFineFlag: "0",//是否精细化车型 1 是 0 否
    globalTabIndex: "",
    fgsorgName:"", //分公司名称
    userName:"" //当前登录人
  };
  // 配件列表 树形 菜单 //查询配件结果列表
  export const storePartModal = {
    debug: true,
    state: {
      items: [],
      //deItemIndex: [],
      itemsSons: {
        data: [],
        index: ""
      },
      sp_itemsSons: {
        data: [],
        index: ""
      },
      treeTabState: 0,
      partName: "",
      bwItems: [],
      cdItems: [],
      pzcdId: "",
      pzbwId: "",
      checkArr: [],
      partGroupId: "",
      showPartList: "1",
      showAddStandPart: "",
      bwItemsStyle: [],
      cdItemsStyle: [],
      bwItemsLiArr: [],
      cdItemsLiArr: [],
      groupliArr: [],
      groupiiArr: [],
      childFlag: false,
      groupIndex: "",
      groupChildIndex: "",
      childItemFlag: false,
      highPriceFlag: "",
      partStandId:""
    },
  
    data: {
      addItemIndex: [],
      checkAll: false,
      //零件图片展示modal状态汇总
      isShowPartImg: false,
      //反馈弹窗
      isShowFeedback: false,
      feedbackIndex: 0,//微信反馈 在线反馈的标识
      feedbackFlag: 0,//配件反馈
      feedBackObjIndex:0,//配件反馈下标
      feedbackMsg: 0,//切换历史反馈/我要反馈
      tabArr: [],
      indexArr: [],
      standTabArr: [],
      //partPicPath:"",
      searchType: "", //1：碰撞部位查询 2：零件分组查询 3：名称查询 4：首次按照车辆碰撞部位和程度查询
      addPartCount: 0,
      priceSchemeName: "",
      priceSchemeCode: "",
      showAddStandPart: "",
      showPartList: "1",
      manualPartName: "",
      manualPartCode: "",
      manualPartPrice: "",
      manualPartRemark: "",
      manualPartAmount: "1",
      partNameLen: "0",
      partRemarkLen: "0",
      showRelevantPart: "1",
      chooseArray:[],
      standChooseArray:[],
      showCollisionFlag:false,
      isShowMultiplePrice:"",
      partAppendHourFlag:"1",
      hourAppendMateFlag:"1",
      isShowPartRefPrice:"1"//是否显示参考费用
    }
  };
  
  //反馈内容
  export const storeFeedback = {
    data: {
      feedBackTypeList:[],
      feedBackTypeId: '',
      feedBackTypeName: '',
      questionBackTypeList:[],
      questionBackIndex: '',
      factoryName:'',
      phoneNum:'',
      feedbackRemark:'',//反馈描述
      feedbackInfoList:[],//历史反馈
      remarkLen:"0",
      problemDesc:"",
      haveStatus:false,//反馈是否有未读消息
    }
  }
  
  //查询辅料结果列表
  export const storeF = {
    debug: true,
    state: {
      addItemIndex: [],
      checkAll: false,
      tabArr: [],
      indexArr: [],
      addMateCount: 0,
      priceSchemeName: "",
      showMateList: "1",
      manualMateName: "",
      manualMatePrice: "",
      manualMateAmount: "1",
      manualMateRemark: "",
      mateNameLen: "0",
      mateRemarkLen: "0",
      chooseArray:[]
    }
  };
  //查询外修结果列表
  export const storeOutside = {
    debug: true,
    state: {
      addItemIndex: [],
      checkAll: false,
      tabArr: [],
      indexArr: [],
      priceSchemeName: "",
      showMateList: "1",
      repairName: "",
      referencePrice: 0,
      derogationPrice: 0,
      derogationItemName: "",
      outsideRemark: "",
      mateNameLen: "0",
      mateRemarkLen: "0",
      chooseArray:[]
    }
  };
  //基本信息页面所用数据
  export const storeEvalEdit = {
    debug: true,
    state: {
      isActiveA: [],
      isActiveB: [],
      isActiveC: [],
      userDTO:"",
      insurerCode:'',
      car: {},//定损单主表
      evalRepair: {},//修理厂业务表
      insuranceCar:{},//承保车辆信息
      repairID: [],//修理厂ID
      orgIndex: [],//选中的组织索引
      selectedOrgCode: "",//组织ID
      collisionList: [],//碰撞业务信息list
      isshowVehicleIdentify: false,
      showFactoryList: false,//修理厂查询结果列表是否显示
      showOrgList: false,//组织查询结果列表是否显示
      accidentCourse: "",//出险经过
      accidentReasonCode: "",//事故原因代码
      accidentReasonName: "",//事故原因名称
      vehicleModelName: "未定型",//定型方式
      clickpriceRate: {},//点选率 金额占比
      flag: '0',//后台返回接口中是否成功标示 0 代表 失败  1代表成功
      errormessage: '',//异常信息
      flowCode: '',//流程环节
      selfEstiFlag: '',//自核价标志
      selfApproveFlag: '',//自核损标志
      flowCodeArry: [],//流程变化
      partPriceArry: [],//配件金额
      totalPriceArry: [],//合计金额
      guideList:[],//流程信息
      taskType:"",//2 正常定损 3 查定一体
      allLoseLine:'',//推定全损基准
      commentMode:'',//意见备注模式
      lossWay: false, //是否展示全损弹框
      commoninfos:[],//公共信息
      extraFieldMap: {},//扩展字段
      allInsuranceArr: [],//所有险别的数组
      delInsuranceArr: [],//除去交强险的数组
      forceInsuranceArr: [],//只有交通强制险的数组
      insureTermValue1: '',//主车互碰自赔 交强险
      insureTermValue2: '',//主车非互碰自赔 车险
      insureTermValue3: '',//三者车险别
      selectedLawsuit: 0,
      selectedSelfCompensation: 0,
      selectedRisktype:'',
      columnName: '',
      //riskNewOldFlag: '1',//1用新风险，0老风险
      lossTips: false,// 是否展示推定全损提示
      bussineUseCollision:"", //商用车是否使用碰撞部位点选
      insuranceMode: 1,//整单险别是否展示
      vehiclePriceFlag:false,
      isUseDefinedRepairFactoryFlag:"0",//是否使用自定义修理厂
      isUseClaimRepairFacFlag:"0",//是否使用理赔修理厂
      isUseDefinedRepairFactoryTypeFlag:"0",//自定义修理厂是否使用修理厂类型标志
      chooseEvalTypeCode:"",
      businessConfigDTO: {},
      estiAutoReason:"",//自核价阻止原因
      apprAutoReason:""//自核损阻止原因
    }
  
  };
  //全局头部信息数据
  export const storeHeader = {
    state: {
      car: {},
      flag: '0',//后台返回接口中是否成功标示 0 代表 失败  1代表成功
      flowCode: '',//流程环节
      selfEstiFlag: '',//自核价标志
    },
    setState: function (res) {
      if (this.state.flowCode == '' || this.state.flowCode ==null) {
        //console.debug("this",this)
        this.state.car = res.result.car;
        this.state.flag = res.code == "0" ? '1' : '0';
        if(res.result.flowCode!=null && res.result.flowCode!=""){
          this.state.flowCode = res.result.flowCode;
        }else{
          this.state.flowCode ="05";
        }
        this.state.selfEstiFlag = res.result.selfEstiFlag
      }
    }
  };
  
  // 工时列表 树形 菜单 //查询工时结果列表
  export const storeRepair = {
    debug: true,
    state: {
      items: [],
      deItemIndex: [],
      itemsSons: {
        data: [],
        index: ""
      },
      repairName: "",
      showRepairList: "1",
      imteStyleFlag: false,
      groupIndex: "",
      childFlag: false
    },
    data: {
      addItemIndex: [],
      checkAll: false,
      tabArr: [],
      indexArr: [],
      addRepairCount: 0,
      priceSchemeName: "",
      showRepairList: "1",
      manualRepairName: "",
      manualLevalCode: "",
      manualworkType: "",
      manualRepairPrice: "",
      manualRepairRemark: "",
      manualManHour: "",
      evalHour: "",
      repairNameLen: "0",
      repairRemarkLen: "0",
      cm_data: {},
      levelShowFlag: false, //工时添加表格增加选择提示框
      evalHourLevel1: 0.0,//轻度工时数
      evalHourLevel2: 0.0,//中度工时数
      evalHourLevel3: 0.0,//重度工时数
      evalHourLPrice1: 0.0,//轻度工时费
      evalHourLPrice2: 0.0,//中度工时费
      evalHourLPrice3: 0.0,//重度工时费
      evalUnitPrice: 0.0,
      repairIndex: "", //点击钣金项目序号
      chooseArray:[],
      gsType: 0,
      gsListType: '',
      derogationPrice:0.0,//低碳项目减损金额
      derogationPriceType:"", //低碳项目减损价格类型
      derogationItemName:"", //低碳项目减损关联配件项目名称
      derogationItemCode:"", //低碳项目减损关联配件零件号,
      changeRepair:false,
      hourAppendHourFlag:"1",
      hourAppendMateFlag:"1"
    }
  };
  
  //字典表store
  export const storeDict = {
    debug: true,
    state: {
      dic_collision: {},//字典表_碰撞部位
      dic_collision_Cd: {}//字典表_碰撞程度
    }
  };
  
  
  //风险报告
  export const riskResult = {
    debug: true,
    state: {
      isSubmit: false,
      riskTable: false,
      noPing: false,
      loading: false,
      without: false
    }
  };
  
  
  //历史意见store
  export const storeHis = {
    debug: true,
    data: {
      items: []
    }
  };
  
  //历史意见显示
  export const showHis = {
    debug: true,
    state: {
      isshow: false
    }
  };
  
  
  //输入的本次意见
  export const opinionContent = {
    debug: true,
    data: {
      //opinionText:[]
    }
  
  };
  
  //历史记录 变更记录
  export const storeHisRec = {
    data: {
      dxHisRec: [],//定型历史记录
      facUpdateRec: [],//修理厂变更记录
      evalInfoRec: [],//定损单轨迹记录
      hisIndex: "0",//展示tab的索引
      isShowFlow: false,//弹窗显示flag
    }
  };
  
  
  //零件图形数据
  export const storePartImg = {
    state: {
      redata: {},
      imgSrc: "",
      partName: "",
      serialNo: ""
    }
  };
  
  //风险评估
  export const storeRiskPing = {
    state: {
      riskViewArr: [],
      riskViewDateArr: [],
      riskRule: [],
      itemRuleGrade: [],
      ruleScoreResult: {}//评估总分
    }
  };
  
  export const storeModal_part = {
    partList: {},
    evalIndex: 0,
    currentIndex: -1,
    part_MTS: false,
    partRemarkLen: "0",
    apprHandlerCode: "",
    estiHandlerCode: "",
    lpEvalInsuranceList: [],//险别列表
    defaulName: '',//险别名称，默认展示为空
    Insurancemode: "",
    isUsePartDeviceFlag:"0",//配件是否使用新增设备标识
    isShowPartRefPrice:"1" //是否显示配件参考价
  };
  
  export const storeModal_repair = {
    repairList: {},
    evalIndex: 0,
    currentIndex: -1,
    repair_MTS: false,
    apprHandlerCode: "",
    repairRemarkLen: "0",
    lpEvalInsuranceList: [],//险别列表
    abnormalArr: [],//异常样式
    defaulName: '',//险别名称，默认展示为空
    gsType:"",
    Insurancemode: "",
  };
  export const storeModal_outside = {
    outsideList: {},
    evalIndex: 0,
    currentIndex: -1,
    outside_MTS: false,
    apprHandlerCode: "",
    repairRemarkLen: "0",
    lpEvalInsuranceList: [],//险别列表
    defaulName: '',//险别名称，默认展示为空
    evalRemark: '',
    isUseOuterRepair:1,//是否使用外修
    Insurancemode: "",
  };
  
  export const storeModal_mate = {
    mateList: {},
    evalIndex: 0,
    currentIndex: -1,
    mate_MTS: false,
    apprHandlerCode: "",
    mateRemarkLen: "0",
    lpEvalInsuranceList: [],//险别列表
    defaulName: '',//险别名称，默认展示为空
    Insurancemode: "",
  };
  //险别数据
  export const insuredData = {
    insuredPlay: false,//控制险别弹框显示隐藏
    index: [],//选中的项
    type: 0 //判断当前操作的是哪个列表 0配件 1工时 2辅料
  }
  
  //直供 管理费率
  export const managementData = {
    index: [],//选中的项
    managementPlay: false,//控制险别弹框显示隐藏
    storeSelectedSum: 0,//选中配件的定损金额
    storeSelectedFee: 0,//选中配件的管理费总和
  }
  //工时分项费用合计列表
  export const repairExtendList = {
    list: [],
    type: 0
  }
  
  //全损
  export const lossData = {
    lossWay: {
      show: false
    }
  }
  
  //定报核吸顶导航更多菜单
  export const fixedMenu = {
    // showFixedMenu: false,
  }
  
  //配置字段
  export const configurationFields = {
    config: {
      isUseOutsideFactory: 0//是否使用外修修理厂
    }
  }
  //配件碰撞信息
  export const collisionData = {
    collision:[],//关联的碰撞部位名称
    tipMsg:"",//提示信息
    isActiveA: [],
    isActiveB: [],
    isActiveC: [],
    partData:{}
  
  }
  
  //批量打折
  export const batchDiscountData = {
    discountShow: false,
    partDiscount:0.0,
    selectIndexs: []//选中的项
  }
  
  //风险表store
  export const storeRisk = {
    debug: true,
    state: {
      rightFlag: false,
      showDetails: false,
      index: 0,
      riskMain: {}
    }
  }
  //风险
  export const riskShow = {
    id: '',
    type: '',
    index: 0,
  }
  
  //收货信息
  export const deliveryData = {
    contactsName: "",//收货人
    contactsPhone: "",//联系电话
    contactsAddress: "",//收货地址
    paymentMethod: "",//支付方式
    vinCode:"",
    directProvinceId:'',
    directProvinceName:'',
    directCityId:'',
    directCityName:'',
    directCountyId:'',
    directCountyName:'',
    directTownId:'',
    directTownName:'',
  }
  
  //询价信息
  export const inquiryData = {
    handlerName: "",//定损员名称
    phoneNo: "",//联系电话
    inquiryRemark: "",// 损失备注说明
  }
  
  export const globalFlag= {
    qualityColFlag: false,// 是否展示配件品质列
  }
  