/**
 * 漏斗图配置项
 * @param info echart图表的配置项总和，对象格式，里面包含{color，data，title}
 */
export default class funnelChart {
    constructor(info) {
        // 漏斗图
        this.FUNNEL_CHARTS = {
            funnel_charts_option: {
                boxTitle: '金字塔漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                legend: {
                    data: ["问题按类别增量统计"]
                },
                color: info.color,
                tooltip: {
                    trigger: 'item',
                    formatter: '{b} : {c}%'
                },
                series: [{
                    type: "funnel",
                    width: "50%",
                    height: "80%",
                    top: '53',
                    left: "8%",
                    sort: "ascending",
                    label: {
                        // color: "#333"
                    },
                    labelLine: {
                        show: false
                    },
                    data: info.data
                }]
            },
            funnel_charts_option2: {
                boxTitle: '倒金字塔漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                legend: {
                    data: ["问题按类别增量统计"]
                },
                color: info.color,
                series: [{
                    type: "funnel",
                    width: "50%",
                    height: "80%",
                    top: '53',
                    left: "8%",
                    label: {
                        // color: "#333"
                    },
                    labelLine: {
                        show: false
                    },
                    data: info.data
                }]
            },
            funnel_charts_option3: {
                boxTitle: '钉状漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                color: info.color,
                tooltip: {
                    trigger: 'item',
                    formatter: '{b} : {c}%'
                },
                series: [{
                    type: 'funnel',
                    width: '50%',
                    height: '80%',
                    left: '38%',
                    top: 53,
                    label: {
                        position: 'left'
                    },
                    data: info.nailData
                }]
            },
            funnel_charts_option4: {
                boxTitle: '漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                color: info.color,
                tooltip: {
                    show: true
                },
                series: [{
                    type: 'funnel',
                    sort: 'none',
                    width: '50%',
                    height: '90%',
                    top: '60',
                    left: "20%",
                    name: '漏斗型',
                    label: {
                        position: 'rightTop',
                        // color: '#282f38',
                        padding: [0, 0, 0, 8],
                        align: 'right',
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#c2c6cc',
                            type: 'dashed',
                        },
                    },
                    data: [{ name: '感知', value: 100, }, { name: '好奇', value: 80, }, { name: '询问', value: 60, }, { name: '行动', value: 42, }, { name: '拥护', value: 18, itemStyle: { height: 0 } }]
                }]
            },
            funnel_charts_option5: {
                boxTitle: '喇叭型漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                color: info.color,
                tooltip: {
                    show: true
                },
                series: [{
                    type: 'funnel',
                    sort: 'none',
                    width: '50%',
                    height: '90%',
                    top: '60',
                    left: "20%",
                    name: '喇叭型',
                    label: {
                        position: 'rightTop',
                        padding: [0, 0, 0, 8],
                        align: 'right',
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#c2c6cc',
                            type: 'dashed',
                        },
                    },
                    data: [{ name: '感知', value: 100, }, { name: '好奇', value: 60, }, { name: '询问', value: 50, }, { name: '行动', value: 20, }, { name: '拥护', value: 40, itemStyle: { height: 0 } }]
                }]
            },
            funnel_charts_option6: {
                boxTitle: '倒喇叭型漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                color: info.color,
                tooltip: {
                    show: true
                },
                series: [{
                    type: 'funnel',
                    sort: 'none',
                    width: '50%',
                    height: '90%',
                    top: '60',
                    left: "20%",
                    name: '倒喇叭型',
                    label: {
                        position: 'rightTop',
                        padding: [0, 0, 0, 8],
                        align: 'right',
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#c2c6cc',
                            type: 'dashed',
                        },
                    },
                    data: [{ name: '感知', value: 40, }, { name: '好奇', value: 20, }, { name: '询问', value: 30, }, { name: '行动', value: 40, }, { name: '拥护', value: 70, itemStyle: { height: 0 } }]
                }]
            },
            funnel_charts_option7: {
                boxTitle: '门把手型漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                color: info.color,
                tooltip: {
                    show: true
                },
                series: [{
                    type: 'funnel',
                    sort: 'none',
                    width: '50%',
                    height: '90%',
                    top: '60',
                    left: "20%",
                    name: '门把手型',
                    label: {
                        position: 'rightTop',
                        padding: [0, 0, 0, 8],
                        align: 'right',
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#c2c6cc',
                            type: 'dashed',
                        },
                    },
                    data: [{ name: '感知', value: 100, }, { name: '好奇', value: 60, }, { name: '询问', value: 20, }, { name: '行动', value: 40, }, { name: '拥护', value: 20, itemStyle: { height: 0 } }]
                }]
            },
            funnel_charts_option8: {
                boxTitle: '蝴蝶结型漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                color: info.color,
                tooltip: {
                    show: true
                },
                series: [{
                    type: 'funnel',
                    sort: 'none',
                    width: '50%',
                    height: '90%',
                    top: '60',
                    left: "20%",
                    name: '蝴蝶结型',
                    label: {
                        position: 'rightTop',
                        padding: [0, 0, 0, 8],
                        align: 'right',
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#c2c6cc',
                            type: 'dashed',
                        },
                    },
                    data: [{ name: '感知', value: 100, }, { name: '好奇', value: 60, }, { name: '询问', value: 20, }, { name: '行动', value: 60, }, { name: '拥护', value: 100, itemStyle: { height: 0 } }]
                }]
            },
            funnel_charts_option9: {
                boxTitle: '金鱼型漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                color: info.color,
                tooltip: {
                    show: true
                },
                series: [{
                    type: 'funnel',
                    sort: 'none',
                    width: '50%',
                    height: '90%',
                    top: '60',
                    left: "20%",
                    name: '金鱼型',
                    label: {
                        position: 'rightTop',
                        padding: [0, 0, 0, 8],
                        align: 'right',
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#c2c6cc',
                            type: 'dashed',
                        },
                    },
                    data: [{ name: '感知', value: 100, }, { name: '好奇', value: 20, }, { name: '询问', value: 60, }, { name: '行动', value: 20, }, { name: '拥护', value: 15, itemStyle: { height: 0 } }]
                }]
            },
            funnel_charts_option10: {
                boxTitle: '糖果型漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                color: info.color,
                tooltip: {
                    show: true
                },
                series: [{
                    type: 'funnel',
                    sort: 'none',
                    width: '50%',
                    height: '90%',
                    top: '60',
                    left: "20%",
                    name: '糖果型',
                    label: {
                        position: 'rightTop',
                        padding: [0, 0, 0, 8],
                        align: 'right',
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#c2c6cc',
                            type: 'dashed',
                        },
                    },
                    data: [{ name: '感知', value: 100, }, { name: '好奇', value: 30, }, { name: '询问', value: 50, }, { name: '行动', value: 20, }, { name: '拥护', value: 50, itemStyle: { height: 0 } }]
                }]
            },
            funnel_charts_option11: {
                boxTitle: '酒杯型漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                color: info.color,
                tooltip: {
                    show: true
                },
                series: [{
                    type: 'funnel',
                    sort: 'none',
                    width: '50%',
                    height: '90%',
                    top: '60',
                    left: "20%",
                    name: '酒杯型',
                    label: {
                        position: 'rightTop',
                        padding: [0, 0, 0, 8],
                        align: 'right',
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#c2c6cc',
                            type: 'dashed',
                        },
                    },
                    data: [{ name: '感知', value: 100, }, { name: '好奇', value: 15, }, { name: '询问', value: 30, }, { name: '行动', value: 80, }, { name: '拥护', value: 70, itemStyle: { height: 0 } }]
                }]
            },
            funnel_charts_option12: {
                boxTitle: '瓶子型漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                color: info.color,
                tooltip: {
                    show: true
                },
                series: [{
                    type: 'funnel',
                    sort: 'none',
                    width: '50%',
                    height: '90%',
                    top: '60',
                    left: "20%",
                    name: '瓶子型',
                    label: {
                        position: 'rightTop',
                        padding: [0, 0, 0, 8],
                        align: 'right',
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#c2c6cc',
                            type: 'dashed',
                        },
                    },
                    data: [{ name: '感知', value: 30, }, { name: '好奇', value: 70, }, { value: 62, }, { name: '行动', value: 48, }, { name: '拥护', value: 36, itemStyle: { height: 0 } }]
                }]
            },
            funnel_charts_option13: {
                boxTitle: '糖葫芦型漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                color: info.color,
                tooltip: {
                    show: true
                },
                series: [{
                    type: 'funnel',
                    sort: 'none',
                    width: '50%',
                    height: '90%',
                    top: '60',
                    left: "20%",
                    name: '糖葫芦型',
                    label: {
                        position: 'rightTop',
                        padding: [0, 0, 0, 8],
                        align: 'right',
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#c2c6cc',
                            type: 'dashed',
                        },
                    },
                    data: [{ name: '感知', value: 30, }, { name: '好奇', value: 70, }, { name: '询问', value: 32, }, { name: '行动', value: 68, }, { name: '拥护', value: 40, itemStyle: { height: 0 } }]
                }]
            },
            funnel_charts_option14: {
                boxTitle: '话筒型漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                color: info.color,
                tooltip: {
                    show: true
                },
                series: [{
                    type: 'funnel',
                    sort: 'none',
                    width: '50%',
                    height: '90%',
                    top: '60',
                    left: "20%",
                    name: '话筒型',
                    label: {
                        position: 'rightTop',
                        padding: [0, 0, 0, 8],
                        align: 'right',
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#c2c6cc',
                            type: 'dashed',
                        },
                    },
                    data: [{ name: '感知', value: 30, }, { name: '好奇', value: 80, }, { name: '询问', value: 65, }, { name: '行动', value: 20, }, { name: '拥护', value: 40, itemStyle: { height: 0 } }]
                }]
            },
            funnel_charts_option15: {
                boxTitle: '倒话筒型漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                color: info.color,
                tooltip: {
                    show: true
                },
                series: [{
                    type: 'funnel',
                    sort: 'none',
                    width: '50%',
                    height: '90%',
                    top: '60',
                    left: "20%",
                    name: '倒话筒型',
                    label: {
                        position: 'rightTop',
                        padding: [0, 0, 0, 8],
                        align: 'right',
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#c2c6cc',
                            type: 'dashed',
                        },
                    },
                    data: [{ name: '感知', value: 20, }, { name: '好奇', value: 30, }, { name: '询问', value: 40, }, { name: '行动', value: 70, }, { name: '拥护', value: 55, itemStyle: { height: 0 } }]
                }]
            },
            gradient_funnel_charts_option: {
                boxTitle: '渐变漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "cross",
                        label: {
                            backgroundColor: "#6a7985"
                        },
                        lineStyle: {
                            color: "#9eb2cb"
                        }
                    }
                },
                legend: {
                    left: 'center',
                    bottom: '10',
                    textStyle: {
                        color: "#333"
                    },
                    itemHeight: 10,
                    data: info.gradientData.map((v) => { return v.name })
                },
                grid: {
                    containLabel: true,
                    borderWidth: 0.5
                },
                series: [
                    {
                        top: '20',
                        name: '',
                        type: 'funnel',
                        left: '20%',
                        width: '60%',
                        gap: 10,
                        minSize: '94',
                        maxSize: '190',
                        label: {
                            normal: {
                                color: '#353535',
                                position: 'left',
                            },
                            emphasis: {
                                position: 'left',
                                formatter: '{c}%'
                            }
                        },
                        labelLine: {
                            normal: {
                                length: '30',
                                position: 'left',
                                lineStyle: {
                                    width: 2
                                }
                            }
                        },
                        itemStyle: {
                            normal: {}
                        },
                        data: (() => {
                            let newData = [],
                                dataObj = {
                                    value: '',
                                    name: '',
                                    itemStyle: {
                                        normal: {
                                            color: '#4e99de'
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            lineStyle: {
                                                shadowColor: '#4e99de',
                                                shadowOffsetX: 1
                                            }
                                        }
                                    }
                                };
                            info.gradientData.forEach((item) => {
                                dataObj.value = item.value;
                                dataObj.name = item.name;
                                dataObj.itemStyle.normal.color = item.color;
                                dataObj.labelLine.normal.lineStyle.shadowColor = item.color;
                                newData.push(JSON.parse(JSON.stringify(dataObj)));
                            });
                            return newData;
                        })(),
                    },
                    {
                        name: '',
                        type: 'funnel',
                        top: '20',
                        gap: 10,
                        label: {
                            normal: {
                                position: 'inside',
                                formatter: '转化率：({c}%)',
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        labelLine: {
                            normal: {}
                        },
                        itemStyle: {
                            normal: {
                                color: 'transparent',
                                borderWidth: 0,
                                opacity: 0
                            }
                        },
                        data: info.gradientData
                    }
                ]
            },
            funnel_charts_option16: {
                boxTitle: '不对称漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c}%"
                },
                calculable: true,
                series: [{
                    color: ['#0000ff'],
                    name: '计划投入',
                    type: 'funnel',
                    width: '45%',
                    height: '70%',
                    x: '5%',
                    minSize: '10%',
                    funnelAlign: 'right',
                    center: ['50%', '50%'], // for pie
                    data: [{
                        value: 30,
                        name: '下单30%'
                    }, {
                        value: 55,
                        name: '咨询55%'
                    },
                    {
                        value: 65,
                        name: '点击65%'
                    },
                    {
                        value: 60,
                        name: '访问62%'
                    }, {
                        value: 80,
                        name: '展现80%'
                    }
                    ].sort(function (a, b) {
                        return a.value - b.value
                    }),
                    roseType: true,
                    label: {
                        normal: {
                            formatter: function (params) { },
                            position: 'inside'
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 0,
                            shadowBlur: 20,
                            shadowOffsetX: 0,
                            shadowOffsetY: 5,
                            shadowColor: 'rgba(0, 0, 0, 0.3)'
                        }
                    }
                },
                {
                    color: ['#67E0E3'],
                    name: '实际投入',
                    type: 'funnel',
                    width: '45%',
                    height: '70%',
                    x: '50%',
                    minSize: '10%',
                    funnelAlign: 'left',
                    center: ['50%', '50%'], // for pie
                    data: [{
                        value: 35,
                        name: '下单35%'
                    }, {
                        value: 40,
                        name: '咨询40%'
                    },
                    {
                        value: 70,
                        name: '访问70%'
                    },
                    {
                        value: 90,
                        name: '点击90%'
                    },
                    {
                        value: 95,
                        name: '展现95%'
                    }
                    ].sort(function (a, b) {
                        return a.value - b.value
                    }),
                    roseType: true,
                    label: {
                        normal: {
                            position: 'inside'
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 0,
                            shadowBlur: 20,
                            shadowOffsetX: 0,
                            shadowOffsetY: 5,
                            shadowColor: 'rgba(0, 0, 0, 0.3)'
                        }
                    }
                }]
            },
            funnel_charts_option17: {
                boxTitle: '3d金字塔漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                // backgroundColor: {type: 'linear',x: 0,y: 0,x2: 0,y2: 1,colorStops: [{offset: 0,color: '#0c0d2b'},{offset: 0.5,color: '#0a0c3d'},{offset: 1,color: '#111629'}],globalCoord: false},
                title: {
                    text: '转化率',
                    subtext: '转化的百分率或分率',
                    link: 'https://gallery.echartsjs.com/explore.html?u=bd-1841183165&type=work',
                    target: 'blank',
                    x: 'center',
                    top: '10',
                    textStyle: {
                        color: '#fff',
                        fontSize: 16,
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c}%"
                },
                legend: {
                    data: ['A', 'B', 'C', 'D', 'E'],
                    x: 'center',
                    y: '92%',
                    textStyle: {
                        color: '#fff'
                    }
                },
                color: ['#c2c1bd', '#00a1e5', '#23c768', '#e5ce10', '#ff7e00', '#fe0000',],
                series: [
                    {
                        name: 'TIT',
                        type: 'funnel',
                        left: 'center',
                        width: '90%',
                        sort: 'ascending',
                        label: {
                            normal: {
                                formatter: '{b}',
                            },
                        },
                        labelLine: {
                            normal: {
                                show: true,
                                length: 30
                            }
                        },
                        itemStyle: {
                            normal: {
                                opacity: 0.3
                            }
                        },
                        tooltip: {
                            show: false
                        },
                        data: [{
                            value: 10,
                            name: 'A'
                        }, {
                            value: 20,
                            name: 'B'
                        },
                        {
                            value: 40,
                            name: 'C'
                        },
                        {
                            value: 60,
                            name: 'D'
                        },
                        {
                            value: 80,
                            name: 'E'
                        },
                        {
                            value: 100,
                            name: 'F'
                        }
                        ]
                    },
                    {
                        name: 'TIT',
                        type: 'funnel',
                        left: 'center',
                        width: '80%',
                        maxSize: '80%',
                        sort: 'ascending',
                        label: {
                            normal: {
                                position: 'inside',
                                formatter: '{c}%',
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 14,
                                }
                            },
                            emphasis: {
                                position: 'inside',
                                formatter: '{b}: {c}%'
                            }
                        },
                        itemStyle: {
                            normal: {
                                opacity: 0.8,
                                borderColor: 'rgba(12, 13, 43, .9)',
                                borderWidth: 3,
                                shadowBlur: 5,
                                shadowOffsetX: 0,
                                shadowOffsetY: 5,
                                shadowColor: 'rgba(0, 0, 0, .6)'
                            }
                        },
                        data: [{
                            value: 2,
                            name: 'A'
                        }, {
                            value: 5,
                            name: 'B'
                        },
                        {
                            value: 12,
                            name: 'C'
                        },
                        {
                            value: 18,
                            name: 'D'
                        },
                        {
                            value: 25,
                            name: 'E'
                        },
                        {
                            value: 40,
                            name: 'F'
                        }]
                    }
                ]
            },
        };
        // 3d立体柱状图
        this.SOLID_FUNNEL_CHARTS = {
            solid_funnel_charts_option: {
                boxTitle: '3d立体漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                color: info.color,
                tooltip: {
                    trigger: 'item',
                    // formatter: "{a} <br/>{b} : {c}"
                    formatter: "{b} : {c}"
                },
                series: [
                    {
                        name: '',
                        type: 'funnel',
                        left: '8%',
                        width: '70%',
                        sort: 'ascending',
                        gap: 8,
                        label: {
                            normal: {
                                formatter: '{b}',
                                // fontSize: 18,
                            },
                            emphasis: {
                                position: 'inside',
                                formatter: '{b}: {c}'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                opacity: .8,
                                borderColor: 'rgba(9,20,36,0)',
                            }
                        },
                        data: info.data
                    },
                    {
                        name: '',
                        type: 'funnel',
                        left: '8%',
                        width: '70%',
                        maxSize: '80%',
                        sort: 'ascending',
                        gap: 8,
                        label: {
                            normal: {
                                show: false,
                                position: 'inside',
                                formatter: '{c}',
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            emphasis: {
                                position: 'inside',
                                formatter: '{b}: {c}'
                            }
                        },
                        itemStyle: {
                            normal: {
                                opacity: 1,
                                borderColor: 'rgba(9,20,36,0)',
                                borderWidth: 0,
                                shadowBlur: 5,
                                shadowOffsetX: 5,
                                shadowOffsetY: 0,
                                shadowColor: 'rgba(0, 0, 0, 1)'
                            }
                        },
                        data: info.data
                    }
                ]
            }
        }
    }
}