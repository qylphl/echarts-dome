/**
 * 双轴图配置项
 * @param info echart图表的配置项总和，对象格式，里面包含{color，data，title}
 */
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
        }
    }
}
