/**
 * 饼（环）状图配置项
 * @param info echart图表的配置项总和，对象格式，里面包含{color，data，title}
 */
export default class PieChart {
    // 饼状图
    constructor(info) {
        this.ORDINARY_PIE_CHARTS = {
            // 普通饼图
            pie_charts_option: {
                color: info.color,
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)",
                },
                legend: {
                    icon: "roundRect",
                    orient: "horizontal",
                    bottom: "10%",
                    itemGap: 20,
                    align: "left",
                    padding: [5, 25, 5, 10],
                    itemWidth: 17,
                    itemHeight: 8,
                    selectedMode: false,
                    textStyle: {
                        color: "#666",
                        fontSize: 12, //字体大小
                        padding: [0, 15, 0, 0],
                    },
                    data: info.data.map((v) => v.name),
                },
                series: [
                    {
                        name: "访问来源",
                        type: "pie",
                        radius: "55%",
                        center: ["50%", "40%"],
                        data: info.data,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)",
                            },
                        },
                    },
                ],
            },
            // 普通环状图
            ring_charts_option: {
                boxTitle: '环状图', // 给图表父元素定义的title，不用于echarts中的option
                isCheck: 1, // 是否默认选中最大的区域，不用于echarts中的option 1:普通的默认选中高亮 2:带虚线边框饼图的默认高亮
                legend: {
                    icon: "roundRect",
                    orient: "horizontal",
                    bottom: "10%",
                    itemGap: 20,
                    align: "left",
                    padding: [5, 25, 5, 10],
                    itemWidth: 17,
                    itemHeight: 8,
                    selectedMode: false,
                    textStyle: {
                        color: "#666",
                        fontSize: 12, //字体大小
                        padding: [0, 15, 0, 0],
                    },
                    data: info.data.map((v) => v.name),
                },
                // color: ['#499bfe','#f67673','#ffc460','#bc5ccb','#40dea0','#08d471','#6ad408','#fff100','#ff7700','#ff0000','#ff5e66','#7c65f1','#601986'],
                series: [
                    {
                        type: "pie",
                        radius: ["40%", "55%"],
                        center: ["50%", "40%"],
                        avoidLabelOverlap: true,
                        label: {
                            normal: {
                                show: false,
                                position: "center",
                            },
                            emphasis: {
                                show: true,
                                formatter: (params) => {
                                    return ("{name|" + params.name + "}\n{value|" + params.value + "}{percent|" + "\n" + "占比" + params.percent.toFixed(2) + "%}");
                                },
                                rich: {
                                    name: {
                                        fontSize: 14,
                                        padding: [5, 0, 5, 0],
                                        color: "#333",
                                    },
                                    value: {
                                        fontSize: 28,
                                        fontWeight: "bold",
                                        color: "#333",
                                        padding: [5, 0, 5, 0],
                                    },
                                    percent: {
                                        color: "#333",
                                        fontSize: 12,
                                        padding: [5, 0, 5, 0],
                                    },
                                },
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false,
                                length2: 10,
                            },
                        },
                        data: info.data,
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return info.gradients[params.dataIndex];
                                },
                                shadowBlur: 20,
                                shadowColor: "rgba(56,147,252,0.3)",
                                shadowBlur: 5,
                                shadowOffsetY: 5,
                            },
                            show: false,
                            emphasis: {
                                borderColor: "#fff",
                                borderWidth: 1,
                            },
                            shadowBlur: 20,
                            shadowColor: "rgba(56,147,252,0.3)",
                            shadowBlur: 5,
                            shadowOffsetY: 5,
                        },
                    },
                ],
            },
            // 带小圆点环状图
            dot_ring_charts_option: {
                boxTitle: '带小圆点环状图', // 给图表父元素定义的title，不用于echarts中的option
                isCheck: 2, // 是否默认选中最大的区域，不用于echarts中的option 1:普通的默认选中高亮 2:带虚线边框饼图的默认高亮
                legend: {
                    icon: "roundRect",
                    orient: "horizontal",
                    bottom: "10%",
                    itemGap: 20,
                    align: "left",
                    padding: [5, 25, 5, 10],
                    itemWidth: 17,
                    itemHeight: 8,
                    selectedMode: false,
                    textStyle: {
                        color: "#666",
                        fontSize: 12, //字体大小
                        padding: [0, 15, 0, 0],
                    },
                    data: info.data.map((v) => v.name),
                },
                series: [
                    {
                        type: "pie",
                        radius: ["40%", "55%"],
                        center: ["50%", "40%"],
                        label: {
                            normal: {
                                show: false,
                                position: "center",
                            },
                            emphasis: {
                                show: true,
                                formatter: (params) => {
                                    return ("{name|" + params.name + "}\n{value|" + params.value + "}{percent|" + "\n" + "占比" + params.percent.toFixed(2) + "%}");
                                },
                                rich: {
                                    name: {
                                        fontSize: 14,
                                        padding: [5, 0, 5, 0],
                                        color: "#333",
                                    },
                                    value: {
                                        fontSize: 28,
                                        fontWeight: "bold",
                                        color: "#333",
                                        padding: [5, 0, 5, 0],
                                    },
                                    percent: {
                                        color: "#333",
                                        fontSize: 12,
                                        padding: [5, 0, 5, 0],
                                    },
                                },
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return info.color[params.dataIndex];
                                },
                                borderColor: "#fff",
                                borderWidth: 1,
                            },
                            show: false,
                            emphasis: {
                                borderColor: "#fff",
                                borderWidth: 1,
                            },
                        },
                        data: info.data,
                    },
                    {
                        type: "pie",
                        radius: ["70%", "70%"],
                        center: ["50%", "40%"],
                        color: "rgba(0,0,0,0)",
                        hoverOffset: 0,
                        legend: {
                            show: false,
                        },
                        label: {
                            normal: {
                                show: false,
                                position: "inner",
                                formatter: (params) => {
                                    const index = params.dataIndex;
                                    return [`{hr${index}|}`].join("\n");
                                },
                                rich: (() => {
                                    let result = {},
                                        colorRich = info.color;
                                    colorRich.forEach((v, i) => {
                                        result[`hr${i}`] = {
                                            backgroundColor: colorRich[i],
                                            borderRadius: 6,
                                            width: 1,
                                            height: 1,
                                            padding: [-6, -6, -6, -6],
                                        };
                                    });
                                    return result;
                                })(),
                            },
                            emphasis: {
                                // 强调样式
                                show: true,
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false,
                                length: 8,
                                smooth: 1,
                                width: 0,
                            },
                            emphasis: {
                                // 强调样式
                                show: false,
                            },
                        },
                        itemStyle: {
                            borderType: "dashed",
                            show: true,
                            borderColor: "#17acf6",
                            borderWidth: 1,
                        },
                        data: info.data,
                    },
                ],
            },
            // 带内边框环状图
            innerBorder_charts_option: {
                boxTitle: '带内边框环状图', // 给图表父元素定义的title，不用于echarts中的option
                isCheck: 2, // 是否默认选中最大的区域，不用于echarts中的option 1:普通的默认选中高亮 2:带虚线边框饼图的默认高亮
                legend: {
                    icon: "roundRect",
                    orient: "horizontal",
                    bottom: "10%",
                    itemGap: 20,
                    align: "left",
                    padding: [5, 25, 5, 10],
                    itemWidth: 17,
                    itemHeight: 8,
                    selectedMode: false,
                    textStyle: {
                        color: "#666",
                        fontSize: 12, //字体大小
                        padding: [0, 15, 0, 0],
                    },
                    data: info.data.map((v) => v.name),
                },
                // color: ['#fcb83d','#fc7e68','#da7cee','#3f96ff'],
                series: [
                    // 饼图
                    {
                        type: "pie",
                        radius: ["40%", "55%"],
                        center: ["50%", "40%"],
                        avoidLabelOverlap: false,
                        tooltip: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                        label: {
                            normal: {
                                show: false,
                                position: "center",
                            },
                            emphasis: {
                                show: true,
                                color: "#333",
                                formatter: (params) => {
                                    return (
                                        "{name|" + params.name + "}\n{value|" + params.value + "}"
                                    );
                                },
                                rich: {
                                    name: {
                                        fontSize: 14,
                                        color: "#333",
                                        padding: [5, 0, 5, 0],
                                    },
                                    value: {
                                        fontSize: 28,
                                        fontWeight: "bold",
                                        color: "#333",
                                        padding: [5, 0, 5, 0],
                                    },
                                },
                            },
                        },
                        itemStyle: {
                            borderWidth: 0, //设置border的宽度有多大
                            borderColor: "#fff",
                            normal: {
                                color: function (params) {
                                    return info.gradients[params.dataIndex];
                                },
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)",
                            },
                        },
                        data: info.data,
                    },
                    {
                        type: "pie",
                        radius: ["33%", "33%"],
                        center: ["50%", "40%"],
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        hoverOffset: 2,
                        tooltip: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                        legend: {
                            show: false,
                        },
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                        itemStyle: {
                            show: true,
                            borderColor: "rgba(0,0,0,0)",
                            borderWidth: 0,
                            shadowBlur: 0,
                            normal: {
                                color: function (params) {
                                    return info.gradients[params.dataIndex];
                                },
                            },
                        },
                        data: info.data,
                    },
                ],
            },
            // 花瓣饼状图
            charts_option: {
                boxTitle: '花瓣饼状图', // 给图表父元素定义的title，不用于echarts中的option
                tooltip: {
                    show: false
                },
                legend: {
                    show: false
                },
                toolbox: {
                    show: false
                },
                series: [{
                    name: '',
                    type: 'pie',
                    clockWise: false,
                    radius: ["30%", "65%"],
                    center: ["50%", "50%"],
                    hoverAnimation: false,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'inner',
                                fontWeight: 'bold',
                                formatter: function (params) {
                                    var percent = 0;
                                    var total = 0;
                                    for (var i = 0; i < info.petalData.length; i++) {
                                        total += info.petalData[i].value;
                                    }
                                    percent = ((params.value / total) * 100).toFixed(0);
                                    if (params.name !== '') {
                                        return params.name + '\n{white|' + '占比' + percent + '%}';
                                    } else {
                                        return '';
                                    }
                                },
                                rich: {
                                    white: {
                                        color: '#fff',
                                        align: 'center',
                                        fontWeight: 'bold',
                                        padding: [3, 0]
                                    }
                                }
                            },
                            labelLine: {
                                show: false,
                            }
                        }
                    },
                    data: (() => {
                        let data = [];
                        for (var i = 0; i < info.petalData.length; i++) {
                            data.push({
                                value: info.petalData[i].value,
                                name: info.petalData[i].name,
                                itemStyle: {
                                    normal: {
                                        borderWidth: 4,
                                        shadowBlur: 30,
                                        borderColor: info.petalColor[i],
                                        shadowColor: info.petalColor[i],
                                        color: info.petalColor[i],
                                        opacity: 0.75,
                                    }
                                }
                            }, {
                                value: 2,
                                name: '',
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: false
                                        },
                                        labelLine: {
                                            show: false
                                        },
                                        color: 'rgba(0, 0, 0, 0)',
                                        borderColor: 'rgba(0, 0, 0, 0)',
                                        borderWidth: 0
                                    }
                                }
                            });
                        };
                        return data;
                    })()
                }]
            }
        };
    }
}
