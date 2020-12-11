/**
 * 饼（环）状图配置项
 * @param info echart图表的配置项总和，对象格式，里面包含{color，data，title}
 */
export default class PieChart {
    // 饼状图
    constructor(info) {
        // 饼（环）状图
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
            petal_charts_option: {
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
        // 玫瑰图
        this.ROSE_PIE_CHARTS = {
            // 普通玫瑰图
            rose_charts_option: {
                boxTitle: '玫瑰饼状图', // 给图表父元素定义的title，不用于echarts中的option
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
                tooltip: {
                    trigger: "item",
                    textStyle: {
                        color: "#fff",
                        fontSize: 14,
                    },
                    formatter: "{b}<br/>{c} <br/>占比{d}%",
                },
                series: [
                    {
                        type: "pie",
                        radius: "60%",
                        center: ["50%", "40%"],
                        clockwise: true,
                        avoidLabelOverlap: true,
                        // minAngle: 50,           　　 //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
                        label: {
                            show: false,
                            position: "outside",
                            formatter: function (params) {
                                const name = params.name,
                                    value = params.value,
                                    percent = params.percent + "%",
                                    index = params.dataIndex;
                                return [`{hr${index}|}`, `{a${index}|${value} ${percent}}`, `{b${index}|${name}}`,].join("\n");
                            },
                            rich: (() => {
                                let that = this,
                                    result = {};
                                info.gradients.forEach((v, i) => {
                                    result[`hr${i}`] = {
                                        backgroundColor: info.gradients[i],
                                        borderRadius: 3,
                                        width: 3,
                                        height: 3,
                                        padding: [3, 3, 0, -12],
                                    };
                                    result[`a${i}`] = {
                                        padding: [8, -20, -10, 0],
                                        color: "#333",
                                        fontSize: 12,
                                    };
                                    result[`b${i}`] = {
                                        padding: [8, -20, 0, 0],
                                        color: "#333",
                                        fontSize: 12,
                                    };
                                });
                                return result;
                            })(),
                        },
                        labelLine: {
                            normal: {
                                // lineStyle: {
                                //     color: 'rgb(98,137,169)',
                                // },
                                show: false,
                                smooth: 0.2,
                                length: 10,
                                // length2: 10,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return info.gradients[params.dataIndex];
                                },
                            },
                            emphasis: {
                                borderColor: "#fff",
                                borderWidth: 2,
                                shadowColor: "rgba(158,223,253,0.1)",
                                shadowBlur: 5,
                                shadowOffsetY: 5,
                            },
                        },
                        data: info.data,
                        roseType: "radius",
                    },
                ],
            },
            rose_charts_option2: {
                boxTitle: '玫瑰环状图', // 给图表父元素定义的title，不用于echarts中的option
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
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)",
                    textStyle: {
                        fontSize: 18,
                    },
                },
                series: [
                    {
                        type: "pie",
                        radius: ["20%", "50%"],
                        center: ["50%", "40%"],
                        roseType: "radius",
                        label: {
                            show: true,
                            normal: {
                                position: "outside",
                                fontSize: 16,
                            },
                        },
                        labelLine: {
                            length: 2,
                            length2: 7,
                        },
                        data: info.data.map((it, i) => {
                            return {
                                value: it.value,
                                name: it.name,
                                itemStyle: {
                                    color: `${info.color[i]}`,
                                    borderColor: `${info.color[i]}`,
                                    borderWidth: 1,
                                },
                            };
                        }),
                    },
                ],
            }
        };
        // 环饼嵌套图
        this.NEST_PIE_CHARTS = {
            nest_charts_option: {
                boxTitle: '环饼嵌套图', // 给图表父元素定义的title，不用于echarts中的option
                grid: {
                    top: 100,
                    bottom: 100,
                },
                tooltip: {
                    show: true,
                    formatter: function (params) {
                        var id = params.dataIndex;
                        return info.data.map(v => v.name)[id] + '<br>最低：' + info.data.map(v => v.value)[id][0] + '<br>最高：' + info.data.map(v => v.value)[id][1] + '<br>平均：' + info.data.map(v => v.value)[id][2];
                    }
                },
                color: ["#328ff6", "#f56e6b", "#c956d7",],
                legend: {
                    icon: "roundRect",
                    orient: 'horizontal',
                    bottom: 20,
                    itemGap: 10,
                    align: 'left',
                    padding: [5, 25, 5, 0],
                    itemWidth: 17,
                    itemHeight: 8,
                    selectedMode: false,
                    textStyle: {
                        color: "#666",
                        fontSize: 12,//字体大小
                        padding: [5, 20, 5, 0],
                    },
                    formatter: function (name) {
                        if (!name) return '';
                        if (name.length > 8) {
                            name = name.slice(0, 8) + '...';
                        }
                        return name;
                    },
                    data: info.data.map(v => v.name)
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} {c}",
                    textStyle: {
                        color: '#fff',
                        fontSize: 12,//字体大小
                        padding: [0, 10, 0, 0],
                    },
                },
                series: [{
                    name: '',
                    type: 'pie',
                    radius: [0, '45%'],
                    center: ["50%", "45%"],
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 0
                        }
                    },
                    label: {
                        normal: {
                            position: 'inner',
                            formatter: "{c}",
                            color: '#fff'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 0,
                            color: function (params) {
                                return info.gradients[params.dataIndex]
                            }
                        }
                    },
                    data: info.data
                },
                {
                    name: '',
                    type: 'pie',
                    radius: ['60%', '70%'],
                    center: ["50%", "45%"],
                    data: info.data,
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 0
                        }
                    },
                    label: {
                        normal: {
                            show: false,
                            position: 'bottom',
                        },
                        emphasis: {
                            show: false,
                            position: 'bottom',
                            formatter: params => {
                                return ('{icon|●}{name|' + params.name + '}{value|' + (params.value) + '}');
                            },
                            padding: [0, 5, 0, -30],
                            rich: {
                                color: '#333',
                                icon: {
                                    fontSize: 16
                                },
                                name: {
                                    fontSize: 12,
                                    // padding: [0, 5, 0, 5],
                                },
                                percent: {
                                    // padding: [0, 5, 0, 0],
                                    fontSize: 12,
                                },
                                value: {
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                }
                            }
                        },
                    },
                    labelLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                            position: 'bottom',
                            length: 2,
                            length2: 2,
                        },
                    },
                }]
            },
            nest_charts_option2: {
                boxTitle: '环饼嵌套图', // 给图表父元素定义的title，不用于echarts中的option
                top: 10,
                left: 200,
                angleAxis: {
                    startAngle: 230,
                    max: 100,
                    clockwise: true, // 逆时针
                    // 隐藏刻度线
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                radiusAxis: {
                    type: "category",
                    // 隐藏刻度线
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                },
                polar: {
                    center: ["50%", "45%"],
                    radius: "120%" //图形大小
                },
                series: [
                    {
                        name: '整体分类',
                        type: 'pie',
                        radius: [0, '30%'],
                        center: ["50%", "45%"],
                        label: {
                            position: 'inner',
                        },
                        roundCap: true,
                        itemStyle: {
                            normal: {
                                borderColor: '#fff',
                                borderWidth: 2,
                                color: function (params) {
                                    return info.color[params.dataIndex]
                                }
                            }
                        },
                        selectedMode: 'single',
                        data: [{
                            value: 875,
                            name: '传输',
                        },
                        {
                            value: 1239,
                            name: '话务',
                        },
                        ]
                    },
                    {
                        type: "bar",
                        data: [
                            {
                                name: "职级一",
                                value: 55,
                                itemStyle: {
                                    color: "#43a0ff"
                                }
                            }
                        ],
                        coordinateSystem: "polar",
                        roundCap: true,
                        barWidth: 35,
                        barGap: "-100%", // 两环重叠
                        z: 5,
                        label: {
                            normal: {
                                show: true,
                                position: 'center',
                            }
                        }
                    },
                    {
                        type: "bar",
                        data: [
                            {
                                name: "职级二",
                                value: 70,
                                itemStyle: {
                                    color: "#90cc4f"
                                }
                            }
                        ],
                        coordinateSystem: "polar",
                        roundCap: true,
                        barWidth: 35,
                        barGap: "-100%", // 两环重叠
                        z: 4
                    }, //70
                    {
                        type: "bar",
                        data: [
                            {
                                name: "职级三",
                                value: 82,
                                itemStyle: {
                                    color: "#f1c338"
                                }
                            }
                        ],
                        coordinateSystem: "polar",
                        roundCap: true,
                        barWidth: 35,
                        barGap: "-100%", // 两环重叠
                        z: 3
                    }, //82
                    {
                        type: "bar",
                        data: [
                            {
                                name: "职级四",
                                value: 90,
                                itemStyle: {
                                    color: "#f4802b"
                                }
                            }
                        ],
                        coordinateSystem: "polar",
                        roundCap: true,
                        barWidth: 35,
                        barGap: "-100%", // 两环重叠
                        z: 2
                    }, //90
                    {
                        type: "bar",
                        data: [
                            {
                                name: "职级五",
                                value: 100,
                                itemStyle: {
                                    color: "#eb3b1b",
                                    shadowColor: "rgba(0, 0, 0, 0.2)",
                                    shadowBlur: 5,
                                    shadowOffsetY: 2
                                }
                            }
                        ],
                        coordinateSystem: "polar",
                        roundCap: true,
                        barWidth: 35,
                        barGap: "-100%", // 两环重叠
                        z: 1
                    } //100
                ]
            },
            nest_charts_option3: {
                boxTitle: '环饼嵌套图', // 给图表父元素定义的title，不用于echarts中的option
                tooltip: {
                    trigger: 'item',
                    formatter: e => {
                        return `
                            ${e.name}<br/>
                            人数: ${e.data.value}人<br/>
                            及格率: ${e.data.rate}%
                        `
                    }
                },
                angleAxis: {
                    type: 'category',
                    // 去掉边线
                    axisLine: {
                        show: false
                    },
                },
                radiusAxis: {
                    max: 100,
                    // 去掉刻度线
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                },
                polar: {
                    radius: [0, '50%']
                },
                series: [
                    // 饼图
                    {
                        type: 'pie',
                        radius: [0, '50%'],
                        label: {
                            color: '#333',
                            lineHeight: 14,
                            formatter: e => {
                                return `${e.name}\n人数: ${e.data.value}人\n及格率: ${e.data.rate}%`
                            }
                        },
                        labelLine: {
                            length: 20,
                            lineStyle: {
                                color: '#999'
                            }
                        },
                        itemStyle: {
                            borderWidth: 3,
                            borderColor: '#fff',
                            shadowColor: 'rgba(0, 0, 0, .2)',
                            shadowBlur: 6,
                            shadowOffsetY: 4
                        },
                        data: [
                            {
                                value: 45,
                                // 因为触发的是饼图的 tooltip，这里对应放极坐标的 data 值
                                rate: 78,
                                name: '一班',
                                itemStyle: {
                                    color: 'rgba(255, 198, 93, .4)',
                                }
                            },
                            {
                                value: 47,
                                rate: 65,
                                name: '二班',
                                itemStyle: {
                                    color: 'rgba(127, 229, 253, .4)',
                                }
                            },
                            {
                                value: 48,
                                rate: 50,
                                name: '三班',
                                itemStyle: {
                                    color: 'rgba(145, 205, 241, .4)',
                                }
                            },
                            {
                                value: 30,
                                rate: 80,
                                name: '四班',
                                itemStyle: {
                                    color: 'rgba(152, 234, 220, .4)',
                                }
                            },
                        ],
                    },
                    // 极坐标 - 玫瑰图
                    {
                        type: 'bar',
                        name: '一班',
                        max: 100, // 100 的比例
                        data: [78], // 控制半径占比
                        barWidth: (45 / 170) * 100 + '%', // 控制和饼图角度一致
                        barGap: 0,
                        itemStyle: {
                            color: '#ffc65d',
                            shadowColor: '#000',
                            shadowBlur: 6
                        },
                        coordinateSystem: 'polar',
                    }, {
                        type: 'bar',
                        name: '二班',
                        data: [65],
                        max: 100,
                        barWidth: (47 / 170) * 100 + '%',
                        barGap: 0,
                        itemStyle: {
                            color: '#7fe5fd',
                            shadowColor: '#000',
                            shadowBlur: 6
                        },
                        coordinateSystem: 'polar',
                    }, {
                        type: 'bar',
                        name: '三班',
                        data: [50],
                        max: 100,
                        barWidth: (48 / 170) * 100 + '%',
                        barGap: 0,
                        itemStyle: {
                            color: '#8db9ff',
                            shadowColor: '#000',
                            shadowBlur: 6
                        },
                        coordinateSystem: 'polar',
                    }, {
                        type: 'bar',
                        name: '四班',
                        data: [80],
                        max: 100,
                        barWidth: (30 / 170) * 100 + '%',
                        barGap: 0,
                        itemStyle: {
                            color: '#a3ffc5',
                            shadowColor: '#000',
                            shadowBlur: 6
                        },
                        coordinateSystem: 'polar',
                    }
                ],
            }
        }
    }
}
