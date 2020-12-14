/**
 * 折线（面积）图配置项
 * @param info echart图表的配置项总和，对象格式，里面包含{color，data，title}
 */
export default class LineChart {
    constructor(info) {
        // 折线图
        this.LINE_CHARTS = {
            // 折线图
            line_charts_option: {
                boxTitle: '堆积折线图', // 给图表父元素定义的title，不用于echarts中的option
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
                            color:{ type: "linear", x: 0, y: 0, x2: 1, y2: 1, colorStops: [{ offset: 0, color: "rgba(60,158,249,1)" }, { offset: 1, color: "rgba(60,158,249,0.1)" },], globalCoord: false }, 
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
            }
        };
        // 环饼嵌套图
        this.NEST_PIE_CHARTS = {

        }
    }
}
