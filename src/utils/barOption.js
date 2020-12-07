/**
 * 柱状（条形）图配置项
 * @param info echart图表的配置项总和，对象格式，里面包含{color，data，title}
 */
// 引入数组对象从大到小排序
import { sortByKey } from "./chartsClass";
export default class BarChart {
    // 普通柱状（条形）图
    constructor(info) {
        this.ORDINARY_BAR_CHARTS = {
            // 普通柱状图
            bar_charts_option: {
                // title: {text: '行政级别',},
                tooltip: {
                    trigger: 'axis',
                    show: true,
                    extraCssText: 'width:max-content;height:60px;',
                    backgroundColor: 'rgba(0,0,0,0.6)',//通过设置rgba调节背景颜色与透明度
                    padding: 10,
                    textStyle: {
                        color: '#fff',
                        fontSize: 12,//字体大小
                    },
                },
                grid: {
                    left: '10%', // 默认10%，给24就挺合适的。
                    right: '5%', // 默认10%
                    top: '10%',
                    bottom: '25%',
                },
                calculable: true,
                xAxis: [{
                    type: 'category',
                    data: info.data.map(v => v.name),
                    axisTick: {       //刻度线
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        interval: 0,
                        rotate: 50,
                    }
                }],
                yAxis: [{
                    type: 'value',
                    axisLine: { //y轴
                        show: false
                    },
                    axisTick: { //y轴刻度线
                        show: false
                    },
                }],
                series: [{
                    name: '行政级别',
                    type: 'bar',
                    barWidth: 15,
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            color: info.color,
                        }
                    },
                    data: info.data.map(v => v.value),
                    itemStyle: {
                        normal: { color: info.color[0], barBorderRadius: [20, 20, 0, 0], },
                    },
                }]
            },
            // 小横线别致柱状图
            line_charts_option: {
                boxTitle: '个性化柱状图', // 给图表父元素定义的title，不用于echarts中的option
                tooltip: {
                    trigger: 'axis',
                    extraCssText: 'width:auto;height:auto;',
                    // padding: [13,13],    // 内边距
                    backgroundColor: 'rgba(0,0,0,0.6)',//通过设置rgba调节背景颜色与透明度
                    shadowBlur: 8,
                    shadowColor: 'rgba(0, 0, 0, 0.15)',
                    shadowOffsetY: 2,
                    color: '#fff',
                    textStyle: {
                        color: 'black',
                    },
                    axisPointer: {
                        type: 'none',
                        label: {
                            backgroundColor: '#fff'
                        }
                    },
                    lineStyle: {
                        color: '#fff',
                        show: false,

                    },
                    formatter: function (params, ticket, callback) {
                        var htmlStr = "<div style='color: #ffffff;width:max-content;height:auto;'>";
                        htmlStr += "<p style='font-size:16px;'>" + params[0].name + "</p>";
                        htmlStr += "<p style='font-size:16px;padding:5px 0 0;'> <span font-size:24px;font-weight: bold;margin-right:4px;'>" + params[0].value + "</span>件</p>"
                        htmlStr += "</div>"
                        return htmlStr;
                    }
                },
                grid: {
                    left: '10',
                    right: '20',
                    bottom: '10',
                    top: '40',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        //  boundaryGap: true,//坐标轴两边留白
                        data: info.data.map(v => v.name),
                        axisLabel: { //坐标轴刻度标签的相关设置。
                            //  interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                            //  margin:15,
                            textStyle: {
                                color: '#333',
                                fontStyle: 'normal',
                                fontFamily: '微软雅黑',
                                fontSize: 12,
                            },
                            rotate: 50,
                            formatter: function (val) {
                                if (val.length > 9) {
                                    var val1 = val.slice(0, 5);
                                    var val2 = val.slice(5, 10);
                                    val = val1 + '\n' + val2;
                                } else {
                                }
                                return val
                            }
                        },
                        axisTick: {//坐标轴刻度相关设置。
                            show: false,
                        },
                        axisLine: {//坐标轴轴线相关设置
                            lineStyle: {
                                color: '#e8e8e8',
                                width: 2
                                // opacity:0.2
                            }
                        },
                        splitLine: { //坐标轴在 grid 区域中的分隔线。
                            show: false,
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        // splitNumber: 5,
                        axisLabel: {
                            textStyle: {
                                color: '#666',
                                fontStyle: 'normal',
                                fontFamily: '微软雅黑',
                                fontSize: 12
                            }
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#666',
                            }

                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#e8e8e8',
                                // opacity:0.06
                            }
                        }
                    }
                ],
                series: [
                    { // 背景色
                        name: '',
                        type: 'pictorialBar',
                        stack: '总量',
                        symbol: 'fixed',
                        symbolSize: [28, 3],
                        symbolMargin: 2,
                        symbolRepeat: 'repeat',
                        // symbolBoundingData: 300,
                        // z: -10,
                        data: info.data.map(v => v.value),
                        label: {//图形上的文本标签
                            normal: {
                                show: false,
                                position: 'center',
                                textStyle: {
                                    color: 'rgba(0,0,0,0)',
                                    fontStyle: 'normal',
                                    fontFamily: '微软雅黑',
                                    fontSize: 0,
                                    // borderWidth:1,
                                    // borderColor:'#fe263e'
                                },
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    color: 'rgba(0,0,0,0)',
                                    borderWidth: 1,
                                    height: 3,
                                    width: 28,
                                    borderColor: '#fe263e',
                                    fontSize: 0,
                                    backgroundColor: '#fe263e',
                                    padding: [0, 0, 0, 0]
                                },
                                rich: {
                                    a: {
                                        color: 'red',
                                        lineHeight: 10
                                    },
                                    b: {
                                        backgroundColor: {
                                            image: 'xxx/xxx.jpg'
                                        },
                                        height: 10
                                    }
                                }

                            }
                        },
                        barWidth: 28,
                        barGap: 0,//柱间距离
                        itemStyle: {
                            normal: {
                                color: '#0f7cff'
                            }
                        }
                    },
                ],
            },
            // 横向条形图
            transverse_charts_option: {
                boxTitle: '条形图', // 给图表父元素定义的title，不用于echarts中的option
                legend: {
                    right: 20,
                    top: 5,
                    itemWidth: 19,
                    itemHeight: 4,
                    textStyle: {
                        fontSize: 14,
                        color: '#333',
                    },
                    orient: "vertical",
                    data: ["信访量"]
                },
                grid: {
                    left: '23%', // 默认10%，给24就挺合适的。
                    right: '5%', // 默认10%
                    top: '10%',
                    bottom: '10%',
                },
                xAxis: {
                    type: "value",
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#e5e5e5',
                        }
                    },
                    axisLabel: {
                        color: '#333',
                        fontSize: 16,
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#f0f0f0',
                            width: 1,
                            type: 'dashed'
                        }
                    }
                },
                yAxis: {
                    type: "category",
                    data: info.data.map(v => v.name),
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        /* interval: 0,
                        rotate: 50, */
                        color: '#333',
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#e5e5e5'
                        }
                    }
                },
                series: [
                    {
                        name: "信访量",
                        type: "bar",
                        label: {
                            show: true,
                            fontSize: 12,
                            position: "insideRight"
                        },
                        z: 5,
                        data: info.data.map(v => v.value),
                        barWidth: 18,
                        itemStyle: {
                            color: '#43a0ff',
                            barBorderRadius: [0, 9, 9, 0],
                        },

                    },
                ]
            },
            // 渐变柱状图
            gradients_charts_option: {
                boxTitle: '渐变柱状图', // 给图表父元素定义的title，不用于echarts中的option
                boxWidth: '66.3%',  // 给图表父元素定义的宽，不用于echarts中的option
                color: '#fb8168',
                grid: {
                    left: 21,
                    top: 37,
                    right: 23,
                    bottom: 0,
                    containLabel: true,
                },
                tooltip: {
                    show: true,
                    extraCssText: 'width:max-content;height:auto;',
                },
                xAxis: {
                    type: 'category',
                    data: [
                        "福建省", "安徽省", "浙江省", "广东省", "河南省", "湖北省", "宁夏回族自治区", "广西壮族自治区", "湖南省",
                        "福建省", "安徽省", "浙江省", "广东省", "河南省", "湖北省", "宁夏回族自治区", "广西壮族自治区", "湖南省",
                        "福建省", "安徽省", "浙江省", "广东省", "河南省", "湖北省", "宁夏回族自治区", "广西壮族自治区", "湖南省",
                        "福建省", "安徽省", "浙江省", "广东省", "河南省", "湖北省", "宁夏回族自治区", "广西壮族自治区", "湖南省"
                    ],
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
                        fontSize: 12,
                        color: '#333',
                        interval: 0,
                        rotate: 50
                    },
                },
                yAxis: {
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize: 16,
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
                series: [
                    {
                        type: 'bar',
                        barWidth: 16,
                        itemStyle: {
                            barBorderRadius: 30,
                            emphasis: {
                                barBorderRadius: 30,
                            },
                            normal: {
                                barBorderRadius: 7,
                                color: function (params) {
                                    // build a color map as your need.
                                    var colorList = [
                                        '#4c6be9', '#5266e8', '#5866e8', '#5f66ea', '#6866ec',
                                        '#6f66ef', '#7a66f2', '#8266f4', '#8c66f7', '#9466f8',
                                        '#9d66f8', '#a465f7', '#ab62f6', '#b25ff4', '#ba5af1',
                                        '#c056ee', '#c552ea', '#d04de0', '#d64dd9', '#da4dd3',
                                        '#de50cb', '#e153c4', '#e457bc', '#e457bc', '#e75cb1',
                                        '#ea61a8', '#ed679e', '#f37487', '#f87d75', '#fb8167',
                                        '#fb8167', '#fb8168', '#fb8167', '#fe7e5f', '#fe7b5c',
                                        '#fe765b', '#fe705a', '#fe6b59'
                                    ];
                                    return colorList[params.dataIndex]
                                },
                            }
                        },
                        data: [
                            7500, 3800, 4800, 3500, 2800, 6800, 1800, 5800, 3800,
                            7500, 3800, 4800, 3500, 2800, 6800, 1800, 5800, 3800,
                            7500, 3800, 4800, 3500, 2800, 6800, 1800, 5800, 3800,
                            7500, 3800, 4800, 3500, 2800, 6800, 1800, 5800, 3800
                        ],
                    }
                ],
            },
            // 渐变立体条形图
            solid_transverse_charts_option: {
                boxTitle: '立体条形图', // 给图表父元素定义的title，不用于echarts中的option
                tooltip: {
                    trigger: 'axis',
                    extraCssText: 'width:auto;height:auto;',
                    formatter: "{b} {c}",
                    textStyle: {
                        color: '#fff',
                        fontSize: 12,//字体大小
                        padding: [0, 10, 0, 0],
                    },
                },
                grid: {
                    left: '33%',
                    top: '15%',
                    bottom: '20%',
                    width: '60%',
                },
                calculable: true,
                yAxis: [{
                    type: 'category',
                    axisTick: {       //刻度线
                        "show": false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#e8e8e8',
                            width: 2,
                        }
                    },
                    axisLabel: {
                        show: true,
                        interval: 0,
                        fontSize: 14,
                        color: '#666',
                        margin: 15,
                        formatter: function (params) {
                            var val = "";
                            if (params.length > 7) {
                                val = params.substr(0, 7) + '...';
                                return val;
                            } else {
                                return params;
                            }
                        },
                    },
                    axisPointer: {
                        show: true,
                        type: 'line',
                        lineStyle: {
                            color: 'rgba(65,163,252,.4)'
                        }
                    },

                    data: info.data.map(v => v.name),
                    axisTick: {       //刻度线
                        "show": false
                    },
                }],
                xAxis: [{
                    type: 'value',
                    axisLine: { //y轴
                        show: false
                    },
                    axisTick: { //y轴刻度线
                        show: false
                    },
                    axisLabel: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#e8e8e8',
                        }
                    },
                }],
                series: [
                    {
                        type: 'bar',
                        barWidth: 20,
                        data: info.data.map(v => v.value),
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return [
                                        {
                                            type: 'linear', x: 0, y: 0, x2: 1, y2: 1,
                                            colorStops: [{
                                                offset: 0,
                                                color: 'rgba(246,127,47,.6)' // 0% 处的颜色
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(246,127,47,1)' // 100% 处的颜色
                                            }
                                            ],
                                            globalCoord: false // 缺省为 false
                                        },
                                        {
                                            type: 'linear', x: 0, y: 0, x2: 1, y2: 1,
                                            colorStops: [{
                                                offset: 0,
                                                color: 'rgba(151,66,247,.6)' // 0% 处的颜色
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(151,66,247,1)' // 100% 处的颜色
                                            }
                                            ],
                                            globalCoord: false // 缺省为 false
                                        },
                                        {
                                            type: 'linear', x: 0, y: 0, x2: 1, y2: 1,
                                            colorStops: [{
                                                offset: 0,
                                                color: 'rgba(250,92,81,.6)' // 0% 处的颜色
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(250,92,81,1)' // 100% 处的颜色
                                            }
                                            ],
                                            globalCoord: false // 缺省为 false
                                        },
                                        {
                                            type: 'linear', x: 0, y: 0, x2: 1, y2: 1,
                                            colorStops: [{
                                                offset: 0,
                                                color: 'rgba(34,148,255,.6)' // 0% 处的颜色
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(34,148,255,1)' // 100% 处的颜色
                                            }
                                            ],
                                            globalCoord: false // 缺省为 false
                                        },
                                    ][params.dataIndex];
                                },
                                barBorderRadius: [0, 5, 5, 0],
                            },
                        },
                        label: {
                            normal: {
                                show: false,
                                position: 'right',
                                color: '#1c92fe',
                                padding: [3, 10],
                                distance: 3
                            },
                            emphasis: {
                                show: true,
                                backgroundColor: 'rgba(255,255,255,0.9)',
                                color: '#333',
                                borderRadius: 3,
                                borderWidth: 1,
                                shadowColor: 'rgba(0,0,0,0.3)',
                                shadowBlur: 6,
                                distance: 7
                            }
                        },
                    },
                    //投影效果
                    {
                        name: 'a',
                        tooltip: {
                            show: false
                        },
                        type: 'pictorialBar',
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    return [
                                        {
                                            type: 'linear', x: 0, y: 0, x2: 1, y2: 1,
                                            colorStops: [{
                                                offset: 0,
                                                color: '#f47b2c' // 0% 处的颜色
                                            },
                                            {
                                                offset: 1,
                                                color: '#fbbf69' // 100% 处的颜色
                                            }
                                            ],
                                            globalCoord: false // 缺省为 false
                                        },
                                        {
                                            type: 'linear', x: 0, y: 0, x2: 1, y2: 1,
                                            colorStops: [{
                                                offset: 0,
                                                color: '#943ff4' // 0% 处的颜色
                                            },
                                            {
                                                offset: 1,
                                                color: '#c76ff9' // 100% 处的颜色
                                            }
                                            ],
                                            globalCoord: false // 缺省为 false
                                        },
                                        {
                                            type: 'linear', x: 0, y: 0, x2: 1, y2: 1,
                                            colorStops: [{
                                                offset: 0,
                                                color: '#fb5b4f' // 0% 处的颜色
                                            },
                                            {
                                                offset: 1,
                                                color: '#fd8f74' // 100% 处的颜色
                                            }
                                            ],
                                            globalCoord: false // 缺省为 false
                                        },
                                        {
                                            type: 'linear', x: 0, y: 0, x2: 1, y2: 1,
                                            colorStops: [{
                                                offset: 0,
                                                color: '#167fff' // 0% 处的颜色
                                            },
                                            {
                                                offset: 1,
                                                color: '#40c9ff' // 100% 处的颜色
                                            }
                                            ],
                                            globalCoord: false // 缺省为 false
                                        },
                                    ][params.dataIndex];
                                }
                            }
                        },
                        symbol: 'circle',
                        symbolRotate: -90,
                        symbolSize: ['20', '10'],
                        symbolOffset: ['7', '0'],
                        symbolPosition: 'end',
                        data: info.data.map(v => v.value),
                        z: 3
                    },
                ]
            },
            // 排行榜
            ranking_charts_optiom: {
                boxTitle: '排行榜柱状图', // 给图表父元素定义的title，不用于echarts中的option
                boxWidth: '66.3%',  // 给图表父元素定义的宽，不用于echarts中的option
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    show: false
                },
                grid: {
                    left: 100
                },
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'category',
                    inverse: true,
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisPointer: {
                        label: {
                            show: true,
                            margin: 30
                        }
                    },
                    data: info.data.map(v => v.name),
                    axisLabel: {
                        margin: 100,
                        fontSize: 14,
                        align: 'left',
                        color: '#333',
                        rich: {
                            a1: {
                                color: '#fff',
                                backgroundColor: info.color[0],
                                width: 20,
                                height: 20,
                                align: 'center',
                                borderRadius: 2
                            },
                            a2: {
                                color: '#fff',
                                backgroundColor: info.color[1],
                                width: 20,
                                height: 20,
                                align: 'center',
                                borderRadius: 2
                            },
                            a3: {
                                color: '#fff',
                                backgroundColor: info.color[2],
                                width: 20,
                                height: 20,
                                align: 'center',
                                borderRadius: 2
                            },
                            b: {
                                color: '#fff',
                                backgroundColor: info.color[3],
                                width: 20,
                                height: 20,
                                align: 'center',
                                borderRadius: 2
                            }
                        },
                        formatter: function (params) {
                            if (index == 7) {
                                index = 0;
                            }
                            index++;
                            if (index - 1 < 3) {
                                return [
                                    '{a' + index + '|' + index + '}' + '  ' + params
                                ].join('\n')
                            } else {
                                return [
                                    '{b|' + index + '}' + '  ' + params
                                ].join('\n')
                            }
                        }
                    }
                },
                series: [{
                    z: 2,
                    name: 'value',
                    type: 'bar',
                    barWidth: 20,
                    data: info.data.map(v => v.value).map((item, i) => {
                        var itemStyle = {
                            color: i > 3 ? info.color[3] : info.color[i]
                        }
                        return {
                            value: item,
                            itemStyle: itemStyle
                        };
                    }),
                    label: {
                        show: true,
                        position: 'right',
                        color: '#333',
                        fontSize: 14,
                        offset: [10, 0]
                    }
                }
                ]
            },
            // 立体带样式柱状图
            solid_charts_option: {
                boxTitle: '立体柱状图', // 给图表父元素定义的title，不用于echarts中的option
                tooltip: {
                    trigger: 'axis',
                    extraCssText: 'width:auto;height:auto;',
                    formatter: "{b} {c}",
                    textStyle: {
                        color: '#fff',
                        fontSize: 12,//字体大小
                        padding: [0, 10, 0, 0],
                    },
                },
                grid: {
                    left: '10%',
                    top: '15%',
                    bottom: '20%',
                    width: '87%',
                },
                xAxis: [{
                    type: 'category',
                    axisTick: {       //刻度线
                        "show": false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#e8e8e8',
                            width: 2,
                        }
                    },
                    axisLabel: {
                        show: true,
                        interval: 0,
                        fontSize: 14,
                        color: '#666',
                        rotate: 30,
                        margin: 15,
                        formatter: function (params) {
                            var val = "";
                            if (params.length > 5) {
                                val = params.substr(0, 5) + '...';
                                return val;
                            } else {
                                return params;
                            }
                        },
                    },
                    axisPointer: {
                        show: true,
                        type: 'line',
                        lineStyle: {
                            color: 'rgba(65,163,252,.4)'
                        }
                    },
                    data: sortByKey(info.data, 'value').map(v => v.name),
                    axisTick: {       //刻度线
                        "show": false
                    },
                }],
                yAxis: [{
                    type: 'value',
                    axisLine: { //y轴
                        show: false
                    },
                    axisTick: { //y轴刻度线
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#666',
                            fontSize: 14,
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#e8e8e8',
                        }
                    },
                }],
                series: [
                    // 柱状图上的小圆点
                    {
                        type: 'line',
                        smooth: true,
                        symbol: "circle",      // 默认是空心圆（中间是白色的），改成实心圆
                        showAllSymbol: true,
                        hoverAnimation: false,
                        symbolSize: 7,
                        symbolOffset: ['0', '-2'],
                        tooltip: {
                            show: false
                        },
                        itemStyle: {
                            normal: {
                                color: '#b9c2ed', //折点颜色
                                borderColor: '#fffffb',
                                lineStyle: {
                                    color: 'rgba(0,0,0,0)' //折线颜色
                                }
                            },
                            emphasis: {
                                color: '#ff6762',
                            }
                        },
                        data: sortByKey(info.data, 'value').map(v => v.value),
                        z: 4
                    },
                    {
                        type: 'bar',
                        barWidth: 30,
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                color: '#1c92fe',
                                padding: [3, 10],
                                distance: 3
                            },
                            emphasis: {
                                show: true,
                                backgroundColor: '#1e8efe',
                                color: '#fff',
                                borderRadius: 3,
                                distance: 7
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "#1e8efe", // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "#45cfff", // 100% 处的颜色
                                        },
                                    ],
                                    globalCoord: false, // 缺省为 false
                                },
                                barBorderRadius: [5, 5, 5, 5]
                            }
                        },
                        data: sortByKey(info.data, 'value').map(v => v.value),
                    },
                    // 阴影
                    {
                        name: 'a',
                        tooltip: {
                            show: false
                        },
                        type: 'pictorialBar',
                        itemStyle: {
                            normal: {
                                color: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "#1e8efe", // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "#45cfff", // 100% 处的颜色
                                        },
                                    ],
                                    globalCoord: false, // 缺省为 false
                                },
                            }
                        },
                        symbol: 'circle',
                        symbolRotate: -90,
                        symbolSize: ['8', '30'],
                        symbolOffset: ['0', '-13'],
                        symbolPosition: 'end',
                        data: sortByKey(info.data, 'value').map(v => v.value),
                        z: 3
                    },
                ]
            },
            // 渐变锥形柱状图
            charts_option: {
                boxTitle: '渐变锥形柱状图', // 给图表父元素定义的title，不用于echarts中的option
                // backgroundColor: "#38445E",
                grid: {
                    left: '12%',
                    top: '5%',
                    bottom: '17%',
                    right: '8%'
                },
                xAxis: {
                    data: info.data.map(v => v.name),
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255, 129, 109, 0.1)',
                            width: 1 //这里是为了突出显示加上的
                        }
                    },
                    axisLabel: {
                        show: true,
                        interval: 0,
                        fontSize: 12,
                        color: '#999',
                        rotate: 30,
                        margin: 15,
                        formatter: function (params) {
                            var val = "";
                            if (params.length > 5) {
                                val = params.substr(0, 5) + '...';
                                return val;
                            } else {
                                return params;
                            }
                        },
                    },
                },
                yAxis: [{
                    splitNumber: 2,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255, 129, 109, 0.1)',
                            width: 1 //这里是为了突出显示加上的
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#999'
                        }
                    },
                    splitArea: {
                        areaStyle: {
                            color: 'rgba(255,255,255,.5)'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(255, 129, 109, 0.1)',
                            width: 0.5,
                            type: 'dashed'
                        }
                    }
                }
                ],
                series: [{
                    name: 'hill',
                    type: 'pictorialBar',
                    barCategoryGap: '0%',
                    symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                    label: {
                        show: true,
                        position: 'top',
                        distance: 15,
                        color: '#DB5E6A',
                        fontWeight: 'bolder',
                        fontSize: 20,
                    },
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(232, 94, 106, .8)' //  0%  处的颜色
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(232, 94, 106, .1)' //  100%  处的颜色
                                }
                                ],
                                global: false //  缺省为  false
                            }
                        },
                        emphasis: {
                            opacity: 1
                        }
                    },
                    data: info.data.map(v => v.value),
                    z: 10
                }]
            },
            // 带阴影的柱状图
            shadow_charts_option: {
                color: [
                    "rgba(80,136,249,1)", "rgba(80,136,249,1)", "rgba(80,136,249,1)", "rgba(80,136,249,1)", "rgba(80,136,249,1)", "rgba(80,136,249,1)",
                    "rgba(180,67,233,1)", "rgba(180,67,233,1)", "rgba(180,67,233,1)", "rgba(180,67,233,1)", "rgba(180,67,233,1)", "rgba(180,67,233,1)",
                    "rgba(253,125,124,1)"
                ],
                title: {
                    text: '问题性质数量排行',
                    left: 0,
                    top: '0',
                    textStyle: {
                        color: '#333',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: 16
                    }
                },
                grid: {
                    left: 10,
                    top: '12%',
                    right: 5,
                    bottom: 5,
                    containLabel: true,
                },
                tooltip: {
                    // trigger: 'item',
                    trigger: 'axis',
                    padding: [10, 20],    // 内边距
                    backgroundColor: 'rgba(255,255,255,0.9)',//通过设置rgba调节背景颜色与透明度
                    color: '#0f0f0f',
                    textStyle: {
                        color: 'black',
                    },
                    formatter: function (params, ticket, callback) {
                        var htmlStr = "<div style='color: #0f0f0f;'>";
                        htmlStr += "<p style='font-size:15px;'>" + params[0].name + "</p>";
                        htmlStr += "<p style='font-size:15px;padding:5px 0;'><span style='dispaly:inline-block;color:#0b73ec;padding-right:8px;font-size:20px;font-weight: bold;'>" + params[0].value + "</span>件</p>"
                        htmlStr += "<p style='font-size:15px;'></p>"
                        htmlStr += "</div>"
                        return htmlStr;
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: sortByKey(info.data, 'value').map(v => v.name),
                    axisPointer: {
                        show: true,
                        type: 'line',
                        lineStyle: {
                            color: 'rgba(230,212,254,.8)'
                        }
                    },
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
                        show: true,
                        formatter: function (value, index) {
                            return (index + 1);
                        }
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
                            type: 'dashed'
                        }
                    }
                },
                series: [
                    // 柱状图上的小圆点
                    {
                        type: 'line',
                        smooth: true,
                        symbol: "circle",      // 默认是空心圆（中间是白色的），改成实心圆
                        showAllSymbol: true,
                        symbolSize: 7,
                        z: 4,
                        itemStyle: {
                            normal: {
                                color: '#bcc1eb', //折点颜色
                                borderColor: '#fffffb',
                                lineStyle: {
                                    color: 'rgba(0,0,0,0)' //折线颜色
                                }
                            }
                        },
                        data: sortByKey(info.data, 'value').map(v => v.value),
                    },
                    // 柱状图
                    {
                        type: 'bar',
                        xAxisIndex: 0,
                        yAxisIndex: 0,
                        data: sortByKey(info.data, 'value').map(v => v.value),
                        barWidth: '30',
                        z: 3,
                        itemStyle: {
                            barBorderRadius: [5, 5, 2, 2],
                            emphasis: {
                                barBorderRadius: [5, 5, 2, 2],
                            },
                            normal: {
                                barBorderRadius: [5, 5, 2, 2],
                                color: function (params) {
                                    return info.colorList[params.dataIndex]
                                },
                            }
                        },
                    },
                    // 柱状图后面的阴影背景部分
                    {
                        type: 'line',
                        smooth: true,
                        symbol: 'none',  //取消折点圆圈
                        clickable: false,
                        areaStyle: {
                            normal: {
                                color: {
                                    type: "linear",
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 1,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: "rgba(80,163,255,.6)", // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(80,163,255,.1)", // 100% 处的颜色
                                        },
                                    ],
                                    globalCoord: false, // 缺省为 false
                                },
                                shadowColor: 'rgba(80,163,255,.2)',
                            }
                        },
                        itemStyle: {
                            normal: {
                                lineStyle: {
                                    color: 'rgba(0,0,0,0)' //折线颜色
                                }
                            }
                        },
                        data: sortByKey(info.data, 'value').map(v => +v.value + +100),
                    },
                ]
            },
        }
    }


}
