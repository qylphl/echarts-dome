/**
 * 雷达图配置项
 * @param info echart图表的配置项总和，对象格式，里面包含{color，data，title}
 */
export default class radarChart {
    // 雷达图
    constructor(info) {
        this.RADAR_CHARTS = {
            radar_charts_option: {
                boxTitle: '雷达图', // 给图表父元素定义的title，不用于echarts中的option
                radar: {
                    center: ['50%', '50%'],
                    radius: '75%',
                    name: {
                        formatter: function (name, indicator) {
                            let arr;
                            //   if(name=='开卡绑定数'||name=='渠道批量办理业务'){
                            //         arr = [
                            //         '{a|'+name+'}{b|'+indicator.value+'万}'
                            //     ]
                            //   }else{
                            arr = ['{a|' + name + '}']
                            //   }
                            return arr.join('\n')
                        },
                        textStyle: {
                            rich: { //根据文字的组设置格式
                                a: {
                                    color: '#BCDCFF',
                                    fontSize: 14,
                                    fontWeight: 600,
                                    fontFamily: 'Source Han Sans CN',
                                },
                                // b:{
                                //     fontSize:14,
                                //     verticalAlign:'top',
                                //     width:57,
                                //     color:'#8E88FE',
                                //     fontWeight:600,
                                //     align:'center'
                                // },
                            }

                        }
                    },
                    nameGap: 0,
                    indicator: info.dataInfo,
                    splitLine: {
                        show: false
                    },
                    splitArea: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    }
                },
                series: [{
                    // name: '家庭融合包',
                    type: 'radar',
                    data: info.data,
                    // value:14,
                    label: {
                        show: true,
                        formatter: function (params) {
                            return params.value + '万';
                        },
                        color: '#8E88FE',
                        // position:[-20,-10,-10,-10],
                        align: 'right',
                        distance: 10,
                        align: 'right'
                    },
                    symbolSize: [6, 6],
                    lineStyle: { //边缘颜色
                        width: 0
                    },
                    itemStyle: {
                        borderWidth: 1,
                        color: '#fff',
                        borderColor: '#F2F063',
                    },
                    areaStyle: {
                        color: '#7D77F1',
                        opacity: 0.6
                    }
                },
                // 背景
                {
                    type: 'radar',
                    data: [[1000, 1000, 1000, 1000, 1000, 1000]],
                    symbol: 'none',
                    lineStyle: {
                        width: 0
                    },
                    itemStyle: {
                        color: '#4175F5'
                    },

                    areaStyle: {
                        color: '#4175F5',
                        opacity: 0.06
                    }
                },
                {
                    type: 'radar',
                    data: [[900, 900, 900, 900, 900, 900]],
                    symbol: 'none',
                    lineStyle: {
                        width: 0
                    },
                    itemStyle: {
                        color: '#2C72C8'
                    },
                    areaStyle: {
                        color: '#2C72C8',
                        opacity: 0.12
                    }
                },
                {
                    type: 'radar',
                    data: [[800, 800, 800, 800, 800, 800]],
                    symbol: 'none',
                    lineStyle: {
                        width: 0
                    },
                    itemStyle: {
                        color: '#4175F5'
                    },

                    areaStyle: {
                        color: '#4175F5',
                        opacity: 0.18
                    }
                },
                {
                    type: 'radar',
                    data: [[700, 700, 700, 700, 700, 700]],
                    symbol: 'none',
                    lineStyle: {
                        width: 0
                    },
                    itemStyle: {
                        color: '#4175F5'
                    },
                    areaStyle: {
                        color: '#4175F5',
                        opacity: 0.19
                    }
                },
                {
                    type: 'radar',
                    data: [[600, 600, 600, 600, 600, 600]],
                    symbol: 'none',
                    lineStyle: {
                        width: 0
                    },
                    itemStyle: {
                        color: '#4175F5'
                    },
                    areaStyle: {
                        color: '#4175F5',
                        opacity: 0.17
                    }
                },
                {
                    type: 'radar',
                    data: [[500, 500, 500, 500, 500, 500]],
                    symbol: 'none',
                    lineStyle: {
                        width: 0
                    },
                    itemStyle: {
                        color: '#4175F5'
                    },
                    areaStyle: {
                        color: '#4175F5',
                        opacity: 0.16
                    }
                },
                {
                    type: 'radar',
                    data: [[400, 400, 400, 400, 400, 400]],
                    symbol: 'none',
                    lineStyle: {
                        width: 0
                    },
                    itemStyle: {
                        color: '#4175F5'
                    },
                    areaStyle: {
                        color: '#4175F5',
                        opacity: 0.13
                    }
                },
                ]
            },
            radar_charts_option2: {
                boxTitle: '雷达图', // 给图表父元素定义的title，不用于echarts中的option
                normal: {
                    top: 200,
                    left: 300,
                    width: 500,
                    height: 400,
                    zIndex: 6,
                    backgroundColor: ""
                },
                color: ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],
                tooltip: {
                    show: true,
                    trigger: "item"
                },
                legend: {
                    show: true,
                    icon: "circle",
                    left: "center",
                    top: "90%",
                    orient: "horizontal",
                    textStyle: {
                        fontSize: 14,
                        color: "#7D77F1"
                    },
                    data: info.dataTwo.map((v) => { return v.name })
                },
                radar: {
                    center: ["50%", "48%"],
                    radius: "65%",
                    startAngle: 90,
                    splitNumber: 4,
                    shape: "circle",
                    splitArea: {
                        areaStyle: {
                            color: ["transparent"]
                        }
                    },
                    axisLabel: {
                        show: false,
                        fontSize: 18,
                        color: "#7D77F1",
                        fontStyle: "normal",
                        fontWeight: "normal"
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: "#7D77F1"
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: "#7D77F1"
                        }
                    },
                    indicator: info.dataInfo
                },
                series: [{
                    name: info.dataTwo.map((v) => { return v.name })[0],
                    type: "radar",
                    symbol: "circle",
                    symbolSize: 10,
                    areaStyle: {
                        normal: {
                            color: "rgba(245, 166, 35, 0.4)"
                        }
                    },
                    itemStyle: {
                        color: 'rgba(245, 166, 35, 1)',
                        borderColor: 'rgba(245, 166, 35, 0.3)',
                        borderWidth: 10,
                    },
                    lineStyle: {
                        normal: {
                            type: "dashed",
                            color: "rgba(245, 166, 35, 1)",
                            width: 2
                        }
                    },
                    data: [
                        info.dataTwo.map((v) => { return v.value })[0]
                    ]
                }, {
                    name: info.dataTwo.map((v) => { return v.name })[1],
                    type: "radar",
                    symbol: "circle",
                    symbolSize: 10,
                    itemStyle: {
                        normal: {
                            color: 'rgba(19, 173, 255, 1)',
                            borderColor: "rgba(19, 173, 255, 0.4)",
                            borderWidth: 10
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: "rgba(19, 173, 255, 0.5)"
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: "rgba(19, 173, 255, 1)",
                            width: 2,
                            type: "dashed"
                        }
                    },
                    data: [
                        info.dataTwo.map((v) => { return v.value })[1]
                    ]
                }]
            },
        };
    }
}
