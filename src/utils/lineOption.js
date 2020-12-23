/**
 * 折线（面积）图配置项
 * @param info echart图表的配置项总和，对象格式，里面包含{color，data，title}
 */
import echarts from "echarts/lib/echarts";
export default class LineChart {
    constructor(info) {
        // 折线图
        this.LINE_CHARTS = {
            // 折线图
            line_charts_option: {
                boxTitle: '多线折线图', // 给图表父元素定义的title，不用于echarts中的option
                boxWidth: '66.15%',  // 给图表父元素定义的宽，不用于echarts中的option
                legend: {
                    icon: 'circle',
                    top: '5%',
                    right: '5%',
                    itemWidth: 6,
                    itemGap: 20,
                    textStyle: {
                        color: '#556677'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        label: {
                            show: true,
                            color: '#556677',
                            borderColor: 'rgba(0,0,0,0)',
                            shadowColor: 'rgba(0,0,0,0)',
                            shadowOffsetY: 0
                        },
                        lineStyle: {
                            width: 0
                        }
                    },
                    textStyle: {
                        color: '#fff'
                    },
                    padding: [10, 10],
                    extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
                },
                grid: {
                    top: '15%',
                    left: '5%',
                    right: '5%'
                },
                xAxis: [{
                    type: 'category',
                    data: info.data.monthData,
                    axisLine: {
                        lineStyle: {
                            color: '#DCE2E8'
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            color: '#556677'
                        },
                        // 默认x轴字体大小
                        fontSize: 12,
                        // margin:文字到x轴的距离
                        margin: 15
                    },
                    axisPointer: {
                        label: {
                            // padding: [11, 5, 7],
                            padding: [0, 0, 10, 0],
                            // 这里的margin和axisLabel的margin要一致!
                            margin: 15,
                            // 移入时的字体大小
                            fontSize: 12,
                            backgroundColor: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: '#fff' // 0% 处的颜色
                                }, {
                                    // offset: 0.9,
                                    offset: 0.86,  // 0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）	
                                    color: '#fff' // 0% 处的颜色
                                }, {
                                    offset: 0.86,
                                    color: '#33c0cd' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#33c0cd' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        }
                    },
                    boundaryGap: false
                }],
                yAxis: [{
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#DCE2E8'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#556677'
                        }
                    },
                    splitLine: {
                        show: false
                    }
                }, {
                    type: 'value',
                    position: 'right',
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#556677'
                        },
                        formatter: '{value}'
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#DCE2E8'
                        }
                    },
                    splitLine: {
                        show: false
                    }
                }],
                series: [{
                    name: info.data.dataInfo[0].name,
                    type: 'line',
                    data: info.data.dataInfo[0].value,
                    symbolSize: 1,
                    symbol: 'circle',
                    smooth: true,
                    yAxisIndex: 0,
                    showSymbol: false,
                    lineStyle: {
                        width: 5,
                        color: { type: "linear", x: 0, y: 0, x2: 1, y2: 1, colorStops: [{ offset: 0, color: "#9effff" }, { offset: 1, color: "#9E87FF" },], globalCoord: false },
                        shadowColor: 'rgba(158,135,255, 0.3)',
                        shadowBlur: 10,
                        shadowOffsetY: 20
                    },
                    itemStyle: {
                        normal: {
                            color: info.color[0],
                            borderColor: info.color[0]
                        }
                    }
                }, {
                    name: info.data.dataInfo[1].name,
                    type: 'line',
                    data: info.data.dataInfo[1].value,
                    symbolSize: 1,
                    symbol: 'circle',
                    smooth: true,
                    yAxisIndex: 0,
                    showSymbol: false,
                    lineStyle: {
                        width: 5,
                        color: { type: "linear", x: 0, y: 0, x2: 1, y2: 1, colorStops: [{ offset: 0, color: "#73DD39" }, { offset: 1, color: "#73DDFF" },], globalCoord: false },
                        shadowColor: 'rgba(115,221,255, 0.3)',
                        shadowBlur: 10,
                        shadowOffsetY: 20
                    },
                    itemStyle: {
                        normal: {
                            color: info.color[1],
                            borderColor: info.color[1]
                        }
                    }
                },
                {
                    name: info.data.dataInfo[2].name,
                    type: 'line',
                    data: info.data.dataInfo[2].value,
                    symbolSize: 1,
                    yAxisIndex: 1,
                    symbol: 'circle',
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        width: 5,
                        color: { type: "linear", x: 0, y: 0, x2: 1, y2: 1, colorStops: [{ offset: 0, color: "#fe9a" }, { offset: 1, color: "#fe9a8b" },], globalCoord: false },
                        shadowColor: 'rgba(254,154,139, 0.3)',
                        shadowBlur: 10,
                        shadowOffsetY: 20
                    },
                    itemStyle: {
                        normal: {
                            color: info.color[2],
                            borderColor: info.color[2]
                        }
                    }
                }
                ]
            },
            line_charts_option2: {
                boxTitle: '动态折线图--适用于深色背景', // 给图表父元素定义的title，不用于echarts中的option
                grid: {
                    left: '10%',
                    top: '8%',
                    bottom: '10%',
                    right: '6%',
                },
                legend: {
                    type: "scroll",
                    data: "来电量",
                    itemWidth: 18,
                    itemHeight: 12,
                    textStyle: {
                        color: "#00ffff",
                        fontSize: 14
                    },
                },
                yAxis: [{
                    type: 'value',
                    position: 'left',
                    nameTextStyle: {
                        color: '#00FFFF'
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(135,140,147,0.8)'
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        formatter: '{value}',
                        color: '#556677',
                        fontSize: 14
                    }
                },],
                xAxis: [{
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#0696f9',
                        }
                    },
                    axisLabel: {
                        inside: false,
                        textStyle: {
                            color: '#556677', // x轴颜色
                            fontWeight: 'normal',
                            fontSize: '14',
                            lineHeight: 22
                        }

                    },
                    data: info.dynamicData.map((v) => { return v.name }),
                },],
                series: [{
                    symbolSize: 150,
                    symbol: info.img[2],
                    name: '小灯光',
                    type: "line",
                    data: info.dynamicData.map((v) => { return v.value }),
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            color: '#0696f9',
                        }
                    }
                },
                {
                    name: '滑行的光点',
                    type: 'lines',
                    coordinateSystem: 'cartesian2d',
                    symbolSize: 30,
                    polyline: true,
                    effect: {
                        show: true,
                        trailLength: 0,
                        symbol: "arrow",
                        period: 10, //光点滑动速度
                        symbolSize: 150,
                        symbol: info.img[0]
                    },
                    lineStyle: {
                        normal: {
                            width: 1,
                            opacity: 0.6,
                            curveness: 0.2
                        }
                    },
                    data: (() => {
                        let data = [],
                            newobj = {},
                            coords = [];
                        for (var i = 0; i < info.dynamicData.length; i++) {
                            coords.push([info.dynamicData[i].name, info.dynamicData[i].value]);
                        }
                        newobj.coords = coords;
                        data.push(newobj);
                        return data;
                    })()
                }
                ],
            },
            line_charts_option3: {
                boxTitle: 'X轴可选折线图--适用于深色背景', // 给图表父元素定义的title，不用于echarts中的option
                boxWidth: '66.15%',  // 给图表父元素定义的宽，不用于echarts中的option
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                        textStyle: {
                            color: "#fff"
                        }
                    },
                },
                grid: {
                    borderWidth: 0,
                    top: 110,
                    bottom: 95,
                    textStyle: {
                        color: "#fff"
                    }
                },
                legend: {
                    x: '46%',
                    top: '11%',
                    textStyle: {
                        color: '#90979c',
                    },
                    data: ['访问量', '订单量']
                },
                calculable: true,
                xAxis: [{
                    type: "category",
                    axisLine: {
                        lineStyle: {
                            color: "rgba(204,187,225,0.5)",
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    data: (() => {
                        var data = [];
                        for (var i = 1; i < 31; i++) {
                            data.push(i + "日");
                        }
                        return data;
                    })()
                }],
                yAxis: [{
                    type: "value",
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgba(204,187,225,0.5)",
                        }
                    },
                }],
                dataZoom: [{
                    show: true,
                    height: 30,
                    xAxisIndex: [0],
                    bottom: 30,
                    start: 10,
                    end: 80,
                    handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                    handleSize: '110%',
                    handleStyle: {
                        color: "#5B3AAE",
                    },
                    textStyle: {
                        color: "rgba(204,187,225,0.5)",
                    },
                    fillerColor: "rgba(67,55,160,0.4)",
                    borderColor: "rgba(204,187,225,0.5)",
                }, {
                    type: "inside",
                    show: true,
                    height: 15,
                    start: 1,
                    end: 35
                }],
                series: [{
                    name: "访问量",
                    type: "line",
                    symbolSize: 10,
                    symbol: 'circle',
                    itemStyle: {
                        color: "#6f7de3",
                    },
                    markPoint: {
                        label: {
                            normal: {
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        data: [{
                            type: 'max',
                            name: '最大值',

                        }, {
                            type: 'min',
                            name: '最小值'
                        }]
                    },
                    data: [
                        509, 917, 2455, 2610, 2719, 3033, 3044, 3085, 2708, 2809, 2117, 2000, 1455, 1210, 719,
                        733, 944, 2285, 2208, 3372, 3936, 3693, 2962, 2810, 3519, 2455, 2610, 2719, 2484, 2078
                    ],
                }, {
                    name: "订单量",
                    type: "line",
                    symbolSize: 10,
                    symbol: 'circle',
                    itemStyle: {
                        color: "#c257F6",
                    },
                    markPoint: {
                        label: {
                            normal: {
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        data: [{
                            type: 'max',
                            name: '最大值',

                        }, {
                            type: 'min',
                            name: '最小值'
                        }]
                    },
                    data: [
                        2136, 3693, 2962, 3810, 3519, 3484, 3915, 3823, 3455, 4310, 4019, 3433, 3544, 3885, 4208, 3372,
                        3484, 3915, 3748, 3675, 4009, 4433, 3544, 3285, 4208, 3372, 3484, 3915, 3823, 4265, 4298
                    ]
                },]
            }
        };
        // 面积图
        this.AREA_PIE_CHARTS = {
            area_charts_option: {
                boxTitle: '面积图', // 给图表父元素定义的title，不用于echarts中的option
                color: ['#bb5edf', '#32acf8', '#f0d21b'],
                grid: {
                    left: 35,
                    top: 30,
                    right: 30,
                    bottom: 20,
                    containLabel: true,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: info.data.monthData,
                    axisLine: {
                        lineStyle: {
                            fontSize: 16,
                            color: '#c9c6c6'
                        }
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        fontSize: 16,
                        color: '#333',
                        interval: 0,
                    },
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 14,
                            color: '#666'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#ced3dc',
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                series: [{
                    data: info.data.dataInfo[0].value,
                    type: 'line',
                    smooth: true,//曲线
                    showSymbol: true,
                    symbolSize: 8,   //设定点的大小
                    itemStyle: {
                        color: '#2191ff',
                        normal: {
                            borderColor: '#2191ff',
                            lineStyle: {        // 系列级个性化折线样式 
                                width: 4,
                                type: 'solid',
                                color: { type: "linear", x: 0, y: 0, x2: 1, y2: 1, colorStops: [{ offset: 0, color: "#40a3fe" }, { offset: 1, color: "#3287fe" },], globalCoord: false },
                            }
                        },
                        emphasis: {
                            borderColor: '#e83c0c',
                            lineStyle: {        // 系列级个性化折线样式 
                                width: 4,
                                type: 'solid',
                                color: { type: "linear", x: 0, y: 0, x2: 1, y2: 1, colorStops: [{ offset: 0, color: "#1E90FF" }, { offset: 1, color: "#0000FF" },], globalCoord: false },
                            }
                        }
                    },//线条样式
                    areaStyle: {
                        normal: {
                            color: { type: "linear", x: 0, y: 0, x2: 1, y2: 1, colorStops: [{ offset: 0, color: "rgba(60,158,249,1)" }, { offset: 1, color: "rgba(60,158,249,0.1)" },], globalCoord: false },
                        }
                    },
                }],
                tooltip: {
                    trigger: 'axis',
                    padding: [10, 20],    // 内边距
                    backgroundColor: 'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
                    textStyle: {
                        color: '#f3f3f3',
                    },
                    lineStyle: {
                        color: '#f3f3f3',
                        width: 3,
                        opacity: 0.61
                    },
                    formatter: function (params, ticket, callback) {
                        var myDate = new Date();
                        var tYear = myDate.getFullYear();
                        var htmlStr = "<div style='color: #0f0f0f;'>";
                        htmlStr += "<p style='font-size:15px;'>" + tYear + "年" + params[0].name + "</p>";
                        htmlStr += "<p style='font-size:15px;padding:5px 0;'>信访数量 <span style='dispaly:inline-block;color:#0b73ec;padding-left:15px;padding-right:8px;font-size:20px;font-weight: bold;'>" + params[0].value + "</span>件</p>"
                        htmlStr += "</div>"
                        return htmlStr;
                    }
                },
            },
            area_charts_option2: {
                boxTitle: '堆积面积图', // 给图表父元素定义的title，不用于echarts中的option
                boxWidth: '66.15%',  // 给图表父元素定义的宽，不用于echarts中的option
                color: ['#ffb515', '#32acf8', '#bb5edf'],
                tooltip: {
                    trigger: 'axis',
                    padding: [10, 20],
                    backgroundColor: 'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
                    color: '#0f0f0f',
                    textStyle: {
                        color: 'black',
                    },
                    axisPointer: {
                        type: 'line',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    },
                    formatter: function (params, ticket, callback) {
                        var htmlStr = "<div>";
                        params.forEach((v, i) => {
                            htmlStr += "<p>";
                            htmlStr += v.marker + "<span style='display:inline-block;width:20px;font-size:14px;margin-left:10px;text-align: left;'>" + v.seriesName + "</span>";
                            htmlStr += "<span style='display:inline-block;width:40px;font-size:18px;color:#0675eb;margin-left:20px;margin-right:6px;text-align: right;'>" + v.value + "</span>件";
                            htmlStr += "</p>";
                        });
                        htmlStr += "</div>";
                        return htmlStr;
                    }
                },
                legend: {
                    top: 10,
                    right: 0,
                    icon: "roundRect",
                    itemWidth: 20,
                    itemHeight: 8,
                    textStyle: {
                        color: '#333',
                        fontSize: 16
                    },
                    selectedMode: false,
                    padding: [5, 25, 5, 0],
                    data: info.data.dataInfo.map((v) => { return v.name })
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: info.data.monthData,
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: "#e8e8e8",
                                fontSize: '12px'
                            }
                        },
                        axisLabel: {
                            show: true,
                            color: '#666',
                        },
                        splitLine: {
                            show: false
                        },
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: "#e8e8e8",
                                fontSize: '12px'
                            }
                        },
                        axisLabel: {
                            show: true,
                            color: '#666',
                        },
                        splitLine: {
                            show: true
                        }
                    }
                ],
                series: [
                    {
                        name: info.data.dataInfo[0].name,
                        smooth: true,
                        type: 'line',
                        itemStyle: {
                            normal: {
                                color: '#32acf8',
                                lineStyle: {
                                    color: "#32acf8",
                                    width: 1
                                },
                                areaStyle: {},
                                areaStyle: {
                                    color: { type: "linear", x: 0, y: 0, x2: 1, y2: 1, colorStops: [{ offset: 0, color: "rgba(88,171,239,0.4)" }, { offset: 1, color: "rgba(88,171,239,0.4)" },], globalCoord: false, },
                                }
                            }
                        },
                        data: info.data.dataInfo[0].value
                    },
                    {
                        name: info.data.dataInfo[1].name,
                        type: 'line',
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: '#f0d21b',
                                lineStyle: {
                                    color: "#f0d21b",
                                    width: 1
                                },
                                areaStyle: {
                                    color: { type: "linear", x: 0, y: 0, x2: 1, y2: 1, colorStops: [{ offset: 0, color: "rgba(245,183,64,0.6)" }, { offset: 1, color: "rgba(245,183,64,0.8)" },], globalCoord: false, },
                                }
                            }
                        },
                        data: info.data.dataInfo[1].value
                    },
                    {
                        name: info.data.dataInfo[2].name,
                        smooth: true,
                        type: 'line',
                        itemStyle: {
                            normal: {
                                color: '#bb5edf',
                                lineStyle: {
                                    color: "#bb5edf",
                                    width: 1
                                },
                                // areaStyle: {},
                                areaStyle: {
                                    color: { type: "linear", x: 0, y: 0, x2: 1, y2: 1, colorStops: [{ offset: 0, color: "rgba(204,121,227,0.6)" }, { offset: 1, color: "rgba(204,121,227,0.6)" },], globalCoord: false, },
                                }
                            }
                        },
                        data: info.data.dataInfo[2].value
                    }]
            },
            area_charts_option3: {
                boxTitle: '堆积面积图', // 给图表父元素定义的title，不用于echarts中的option
                boxWidth: '49.3%',  // 给图表父元素定义的宽，不用于echarts中的option
                title: {
                    text: '近一周空气质量变化',
                    textStyle: {
                        align: 'center',
                        color: '#556677',
                        fontSize: 20,
                    },
                    top: '5%',
                    left: 'center',
                },
                legend: {
                    data: ['NO2', 'O3'],
                    textStyle: {
                        color: '#556677',
                        align: 'right',
                    },
                    // x:'right',
                    top: '2%',
                    right: '3%',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(0, 255, 233,0)'
                                }, {
                                    offset: 0.5,
                                    color: 'rgba(255, 255, 255,1)',
                                }, {
                                    offset: 1,
                                    color: 'rgba(0, 255, 233,0)'
                                }],
                                global: false
                            }
                        },
                    },
                },
                grid: {
                    top: '15%',
                    left: '6%',
                    right: '6%',
                    bottom: '15%',
                    // containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    axisLine: {
                        show: true
                    },
                    splitArea: {
                        // show: true,
                        color: '#f00',
                        lineStyle: {
                            color: '#f00'
                        },
                    },
                    axisLabel: {
                        // rotate: 30,
                        color: '#556677'
                    },
                    splitLine: {
                        show: false
                    },
                    boundaryGap: false,
                    data: info.cumulateAreaData.date_list,
                    // date:getVirtulData()['data'],

                }],
                yAxis: [{
                    type: 'value',
                    min: 0,
                    // max: 140,
                    splitNumber: 4,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(255,255,255,0.1)'
                        }
                    },
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                        margin: 20,
                        textStyle: {
                            color: '#d1e6eb',
                        },
                    },
                    axisTick: {
                        show: false,
                    },
                }],
                series: [{
                    name: 'NO2',
                    type: 'line',
                    // smooth: true, //是否平滑
                    showAllSymbol: true,
                    // symbol: 'image://./static/images/guang-circle.png',
                    symbol: 'circle',
                    symbolSize: 25,
                    lineStyle: {
                        normal: {
                            color: "#6c50f3",
                            shadowColor: 'rgba(0, 0, 0, .3)',
                            shadowBlur: 0,
                            shadowOffsetY: 5,
                            shadowOffsetX: 5,
                        },
                    },
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#6c50f3',
                        }
                    },
                    itemStyle: {
                        color: "#6c50f3",
                        borderColor: "#fff",
                        borderWidth: 3,
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 2,
                        shadowOffsetX: 2,
                    },
                    tooltip: {
                        show: false
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(108,80,243,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(108,80,243,0)'
                            }
                            ], false),
                            shadowColor: 'rgba(108,80,243, 0.9)',
                            shadowBlur: 20
                        }
                    },
                    data: info.cumulateAreaData.NO2_data
                },
                {
                    name: 'O3',
                    type: 'line',
                    // smooth: true, //是否平滑
                    showAllSymbol: true,
                    // symbol: 'image://./static/images/guang-circle.png',
                    symbol: 'circle',
                    symbolSize: 25,
                    lineStyle: {
                        normal: {
                            color: "#00ca95",
                            shadowColor: 'rgba(0, 0, 0, .3)',
                            shadowBlur: 0,
                            shadowOffsetY: 5,
                            shadowOffsetX: 5,
                        },
                    },
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#00ca95',
                        }
                    },

                    itemStyle: {
                        color: "#00ca95",
                        borderColor: "#fff",
                        borderWidth: 3,
                        shadowColor: 'rgba(0, 0, 0, .3)',
                        shadowBlur: 0,
                        shadowOffsetY: 2,
                        shadowOffsetX: 2,
                    },
                    tooltip: {
                        show: false
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0,202,149,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)'
                            }
                            ], false),
                            shadowColor: 'rgba(0,202,149, 0.9)',
                            shadowBlur: 20
                        }
                    },
                    data: info.cumulateAreaData.O3_data,
                },
                ]
            },
            area_charts_option4: {
                boxTitle: '堆积面积图', // 给图表父元素定义的title，不用于echarts中的option
                boxWidth: '49.3%',  // 给图表父元素定义的宽，不用于echarts中的option
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        lineStyle: {
                            color: '#57617B'
                        }
                    }
                },
                grid: {
                    left: '5%',
                    right: '5%',
                    bottom: '10%',
                    top: '20%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            lineStyle: {
                                color: '#0E2A43'
                            }
                        },
                        axisLabel: {
                            margin: 10,
                            textStyle: {
                                fontSize: 14,
                                color: '#D5CBE8'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
                    }, {
                        axisPointer: {
                            show: false
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#0E2A43'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        position: 'bottom',
                        offset: 20
                    }],
                yAxis: [{
                    type: 'value',
                    name: '单位（%）',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#0E2A43'
                        }
                    },
                    axisLabel: {
                        margin: 10,
                        textStyle: {
                            fontSize: 14,
                            color: '#D5CBE8'
                        }
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: '#57617B'
                        }
                    }
                }],
                series: [{
                    name: '移动',
                    type: 'line',
                    smooth: true,
                    stack: '总量',
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    animationDelay: 2000,
                    animationDuration: 1000,
                    markPoint: {
                        // symbol: 'image://url',
                        data: [
                            { type: 'max', name: '最大值' }
                        ],
                        animationDelay: 3000,
                        animationDuration: 1000
                    },
                    lineStyle: {
                        normal: {
                            width: 1,
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'red' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'grey' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            opacity: 0.9
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(137, 189, 27, 0.3)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(137, 189, 27, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgb(137,189,27)',
                            borderColor: 'rgba(137,189,2,0.27)',
                            borderWidth: 12

                        }
                    },
                    data: [220, 182, 191, 134, 250, 120, 110, 125, 145, 122, 165, 122]
                }, {
                    name: '电信',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    stack: '总量',
                    symbolSize: 5,
                    animationDelay: 1000,
                    animationDuration: 1000,
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' }
                        ],
                        animationDelay: 2000,
                        animationDuration: 1000
                    },
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            width: 1,
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'red' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'yellow' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            opacity: 0.9
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0, 236, 212, 0.3)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(0, 236, 212, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgb(0,136,212)',
                            borderColor: 'rgba(0,136,212,0.2)',
                            borderWidth: 12

                        }
                    },
                    data: [120, 110, 125, 145, 122, 165, 122, 220, 282, 191, 134, 150]
                }, {
                    name: '联通',
                    type: 'line',
                    stack: '总量',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    animationDelay: 0,
                    animationDuration: 1000,
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' }
                        ],
                        animationDelay: 1000,
                        animationDuration: 1000
                    },
                    lineStyle: {
                        normal: {
                            width: 1,
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'red' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'yellowgreen' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            opacity: 0.9
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(219, 50, 51, 0.3)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(219, 50, 51, 0)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                            shadowBlur: 10
                        }
                    },
                    itemStyle: {
                        normal: {

                            color: 'rgb(219,50,51)',
                            borderColor: 'rgba(219,50,51,0.2)',
                            borderWidth: 12
                        }
                    },
                    data: [220, 182, 325, 145, 122, 191, 134, 150, 120, 110, 165, 122]
                },]
            }
        };
    }
}
