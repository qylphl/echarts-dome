/**
 * 双轴图配置项
 * @param info echart图表的配置项总和，对象格式，里面包含{color，data，title}
 */
import echarts from "echarts/lib/echarts";
export default class BiaxialChart {
    constructor(info) {
        // 双轴图
        this.BIAXIAL_CHARTS = {
            biaxial_charts_option: {
                boxTitle: '双轴图', // 给图表父元素定义的title，不用于echarts中的option
                boxWidth: '66.15%',  // 给图表父元素定义的宽，不用于echarts中的option
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                        label: {
                            show: true
                        }
                    }
                },
                grid: {
                    left: "4%",
                    top: "18%",
                    right: "5%",
                    bottom: "22%"
                },
                legend: {
                    data: ["昨日总人数", "今日实时人数", "昨日使用率"],
                    top: "4%",
                    textStyle: {
                        color: "#1FC3CE",
                        fontSize: 14
                    }
                },
                xAxis: {
                    data: [
                        "会议室1",
                        "会议室2",
                        "会议室3",
                        "会议室4",
                        "会议室5",
                        "会议室6",
                        "会议室7",
                        "会议室8",
                        "会议室9",
                        "会议室10",
                        "会议室11",
                        "会议室12"
                    ],
                    axisLine: {
                        show: true, //隐藏X轴轴线
                        lineStyle: {
                            color: "#3d5269",
                            width: 1
                        }
                    },
                    axisTick: {
                        show: true, //隐藏X轴刻度
                        alignWithLabel: true
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#396A87", //X轴文字颜色
                            fontSize: 14
                        },
                        interval: 0,
                        rotate: 30
                    }
                },
                yAxis: [{
                    type: "value",
                    name: "人数",
                    nameTextStyle: {
                        color: "#396A87",
                        fontSize: 14
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 1,
                            color: "#3d5269"
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: "#396A87",
                            fontSize: 14
                        }
                    }
                },
                {
                    type: "value",
                    name: "使用率%",
                    nameTextStyle: {
                        color: "#396A87",
                        fontSize: 14
                    },
                    position: "right",
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: "#396A87",
                            width: 2
                        }
                    },
                    axisLabel: {
                        show: true,
                        formatter: "{value} %", //右侧Y轴文字显示
                        textStyle: {
                            color: "#396A87",
                            fontSize: 14
                        }
                    }
                }
                ],
                series: [{
                    name: "昨日总人数",
                    type: "bar",
                    barWidth: 18,
                    itemStyle: {
                        normal: {
                            color: { type: "linear", x: 0, y: 0, x2: 1, y2: 1, colorStops: [{ offset: 0, color: "#00FFFF" }, { offset: 1, color: "#0080FF" },], globalCoord: false },
                        }
                    },
                    data: [24, 45, 43, 35, 76, 154, 86, 42, 68, 97, 24, 34]
                },
                {
                    name: "今日实时人数",
                    type: "bar",
                    barWidth: 18,
                    itemStyle: {
                        normal: {
                            color: { type: "linear", x: 0, y: 0, x2: 1, y2: 1, colorStops: [{ offset: 0, color: "#E29052" }, { offset: 1, color: "#FA5A53" },], globalCoord: false },
                        }
                    },
                    data: [133, 23, 114, 67, 89, 35, 67, 96, 90, 46, 75, 85]
                },
                {
                    name: "昨日使用率",
                    type: "line",
                    yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                    showAllSymbol: true, //显示所有图形。
                    symbol: "circle", //标记的图形为实心圆
                    symbolSize: 6, //标记的大小
                    itemStyle: {
                        //折线拐点标志的样式
                        color: "#26D9FF",
                        borderColor: "#26D9FF",
                        width: 2,
                        shadowColor: "#26D9FF",
                        shadowBlur: 2
                    },
                    lineStyle: {
                        color: "#26D9FF",
                        width: 2,
                        shadowBlur: 2
                    },
                    data: [4.2, 3.5, 2.9, 7.8, 2, 3, 4.2, 3.5, 2.9, 7.8, 2, 3]
                }
                ]
            },
            biaxial_charts_option1: {
                boxTitle: '双轴图', // 给图表父元素定义的title，不用于echarts中的option
                title: {
                    text: '',
                    x: 'center',
                    y: 0,
                    textStyle: {
                        color: '#B4B4B4',
                        fontSize: 16,
                        fontWeight: 'normal'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    // formatter:"{b}:{c}"
                    formatter: function (params) {
                        let str = params[0].name + ' ' + params[0].data.stationName + '</br>';
                        params.forEach(item => {
                            if (item.seriesName === '供温' || item.seriesName === '回温') {
                                str += item.marker + item.seriesName + ' : ' + item.data.value + ' ℃' + '</br>';
                            } else if (item.seriesName === '压力值(Mpa)') {
                                // 柱状图渐变时设置marker
                                item.marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#6C50F3;"></span>';
                                str += item.marker + item.seriesName + ' : ' + item.data.value + ' m';
                            }
                        });
                        return str;
                    }
                },
                legend: {
                    // 修改legend的高度宽度
                    itemHeight: 5,
                    itemWidth: 24,
                    data: [{
                        name: '供温',
                        icon: 'rect' // legend的icon
                    },
                    {
                        name: '回温',
                        icon: 'rect'
                    },
                    {
                        name: '压力值(Mpa)',
                        icon: 'rect'
                    }
                    ],
                    textStyle: {
                        color: '#B4B4B4'
                    },
                    top: '3%',
                    // 选择关闭的legend
                    selected: {
                        '回温': false
                    }
                },
                grid: {
                    x: '8%',
                    width: '82%',
                    y: '12%'
                },
                xAxis: [{
                    // type:'category',
                    data: ["1km", '2km', '3km', '4km', '5km', '6km'],
                    boundaryGap: true,
                    axisLine: {
                        lineStyle: {
                            color: '#B4B4B4'
                        }
                    },
                    axisTick: {
                        show: false
                    }
                }],
                yAxis: [{
                    name: '供回温度(℃）',
                    nameLocation: 'middle',
                    nameTextStyle: {
                        padding: [3, 4, 50, 6]
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            color: '#eee'
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#333'
                        },
                        formatter: '{value} '
                    }
                },
                {
                    name: '压力值(Mpa)',
                    nameLocation: 'middle',
                    nameTextStyle: {
                        padding: [50, 4, 5, 6]
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#333'
                        },
                        formatter: '{value} '
                    }
                }
                ],
                series: [{
                    name: '供温',
                    type: 'line',
                    smooth: true,
                    showSymbol: true,
                    // 矢量画五角星
                    symbol: 'path://M150 0 L80 175 L250 75 L50 75 L220 175 Z',
                    symbolSize: 12,
                    yAxisIndex: 0,
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(250,180,101,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(250,180,101,0)'
                            }
                            ]),
                            shadowColor: 'rgba(250,180,101,0.2)',
                            shadowBlur: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#FF8000'
                        }
                    },
                    // data中可以使用对象，value代表相应的值，另外可加入自定义的属性
                    data: [{
                        value: 1,
                        stationName: "s1"
                    }, {
                        value: 3,
                        stationName: "s2"
                    }, {
                        value: 4,
                        stationName: "s3"
                    }, {
                        value: 9,
                        stationName: "s4"
                    }, {
                        value: 3,
                        stationName: "s5"
                    }, {
                        value: 2,
                        stationName: "s6"
                    }]
                },
                {
                    name: '回温',
                    type: 'line',
                    smooth: true,
                    showSymbol: true,
                    symbol: 'emptyCircle',
                    symbolSize: 12,
                    yAxisIndex: 0,
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                                [{
                                    offset: 0,
                                    color: 'rgba(199, 237, 250,0.5)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(199, 237, 250,0.2)'
                                }
                                ],
                                false
                            )
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#3bbc86'
                        }
                    },
                    data: [{
                        value: 31,
                        stationName: "s1"
                    }, {
                        value: 36,
                        stationName: "s2"
                    }, {
                        value: 54,
                        stationName: "s3"
                    }, {
                        value: 89,
                        stationName: "s4"
                    }, {
                        value: 73,
                        stationName: "s5"
                    }, {
                        value: 22,
                        stationName: "s6"
                    }]
                },
                {
                    name: '压力值(Mpa)',
                    type: 'bar',
                    barWidth: 30,
                    yAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(108,80,243,0.3)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(108,80,243,0)'
                            }
                            ]),
                            //柱状图圆角
                            barBorderRadius: [30, 30, 0, 0],
                        }
                    },
                    data: [{
                        value: 11,
                        stationName: "s1"
                    }, {
                        value: 34,
                        stationName: "s2"
                    }, {
                        value: 54,
                        stationName: "s3"
                    }, {
                        value: 39,
                        stationName: "s4"
                    }, {
                        value: 63,
                        stationName: "s5"
                    }, {
                        value: 24,
                        stationName: "s6"
                    }]
                }]
            }
        }
    }
}
