/**
 * 仪表盘配置项
 * @param info echart图表的配置项总和，对象格式，里面包含{color，data，title}
 */
import echarts from "echarts/lib/echarts";
export default class DashboardChart {
    constructor(info) {
        // 仪表盘
        this.DASHBOARD_CHARTS = {
            dashboard_charts_option: {
                boxTitle: '仪表盘', // 给图表父元素定义的title，不用于echarts中的option
                tooltip: {
                    formatter: '{a} <br/>{b} : {c}%'
                },
                toolbox: {
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [
                    {
                        name: '入库率',
                        type: 'gauge',
                        detail: { formatter: info.dataArr + '%' },
                        data: [{ value: info.dataArr, name: '入库率' }],
                        axisLine: {
                            lineStyle: {
                                color: [[0.25, '#ef5633'], [0.5, '#f3b962'], [0.75, '#53de42'], [1, '#099c15']]
                            }
                        },
                    }
                ]
            },
            dashboard_charts_option2: {
                boxTitle: '仪表盘', // 给图表父元素定义的title，不用于echarts中的option
                title: {
                    show: true,
                    text: '任务进度',
                    x: '50%',
                    y: '57%',
                    z: 8,
                    textAlign: 'center',
                    textStyle: {
                        color: '#f1f7fe',
                        fontSize: 14,
                        fontWeight: 'normal'
                    },
                },
                series: [{
                    name: "内部（环形）进度条",
                    type: "gauge",
                    // center: ['20%', '50%'],
                    radius: '60%',
                    splitNumber: 100,
                    axisLine: {
                        lineStyle: {
                            color: [
                                [info.dataArr / 100, '#458EFD'],
                                [1, "#fff"]
                            ],
                            width: 14
                        }
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,

                    },
                    splitLine: {
                        show: false,
                    },
                    pointer: {
                        show: false,
                    },
                },
                {
                    name: '外部刻度',
                    type: 'gauge',
                    //  center: ['20%', '50%'],
                    radius: '70%',
                    min: 0, //最小刻度
                    max: 100, //最大刻度
                    splitNumber: 10, //刻度数量
                    startAngle: 225,
                    endAngle: -45,
                    axisLine: {
                        show: true,
                        // 仪表盘刻度线
                        lineStyle: {
                            width: 2,
                            color: [
                                [1, '#fff']
                            ]
                        }
                    },
                    //仪表盘文字
                    axisLabel: {
                        show: true,
                        color: '#868FDF',
                        distance: 25,
                        formatter: function (v) {
                            switch (v + '') {
                                case '0':
                                    return '0';
                                case '10':
                                    return '10';
                                case '20':
                                    return '20';
                                case '30':
                                    return '30';
                                case '40':
                                    return '40';
                                case '50':
                                    return '50';
                                case '60':
                                    return '60';
                                case '70':
                                    return '70';
                                case '80':
                                    return '80';
                                case '90':
                                    return '90';
                                case '100':
                                    return '100';
                            }
                        }
                    }, //刻度标签。
                    axisTick: {
                        show: true,
                        splitNumber: 7,
                        lineStyle: {
                            color: '#3082FE', //用颜色渐变函数不起作用
                            width: 2,
                        },
                        length: -8
                    }, //刻度样式
                    splitLine: {
                        show: true,
                        length: -20,
                        lineStyle: {
                            color: '#458EFD', //用颜色渐变函数不起作用
                        }
                    }, //分隔线样式
                    detail: {
                        show: false
                    },
                    pointer: {
                        show: false
                    }
                },
                /*内部*/
                {
                    type: 'pie',
                    radius: ['0', '40%'],
                    center: ['50%', '50%'],
                    z: 8,
                    hoverAnimation: false,
                    data: [{
                        name: '检查进度',
                        value: info.dataArr,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#3398ff'
                                }, {
                                    offset: 1,
                                    color: '#7db0fd'
                                }])
                            }

                        },
                        label: {
                            normal: {
                                formatter: function (params) {
                                    return params.value + '%';
                                },
                                color: '#fff',
                                fontSize: 32,
                                fontWeight: "bold",
                                position: 'center',
                                show: true
                            }
                        },
                        labelLine: {
                            show: false
                        }
                    }],
                },
                /*外一层*/
                {
                    type: "pie",
                    radius: "45%",
                    startAngle: 220,
                    endAngle: -40,
                    hoverAnimation: false,
                    center: ["50%", "50%"],
                    avoidLabelOverlap: false,
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    data: [{
                        value: 1,
                        itemStyle: {
                            normal: {
                                color: '#8DC4FD'
                            }
                        }
                    }],
                },
                //外二层圈
                {
                    type: "pie",
                    radius: "50%",
                    center: ["50%", "50%"],
                    avoidLabelOverlap: false,
                    z: 0,
                    hoverAnimation: false,
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    data: [{
                        "value": 1,
                        itemStyle: {
                            normal: {
                                color: '#e3edf8'
                            }
                        }
                    }]
                }
                ]
            },
            dashboard_charts_option3: {
                boxTitle: '仪表盘--适用于深色背景', // 给图表父元素定义的title，不用于echarts中的option
                tooltip: {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                series: [{
                    name: "最外部进度条",
                    type: "gauge",
                    radius: '80%',
                    splitNumber: 10,
                    axisLine: {
                        lineStyle: {
                            color: [
                                [info.dataArr / 100, new echarts.graphic.LinearGradient(
                                    0, 1, 0, 0, [{
                                        offset: 0,
                                        color: 'rgba(145,207,255,0)',
                                    }, {
                                        offset: 0.5,
                                        color: 'rgba(145,207,255,0.2)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(145,207,255,1)',
                                    }
                                ]
                                )],
                                [
                                    1, 'rgba(28,128,245,.0)'
                                ]
                            ],
                            width: 3
                        },
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: false,
                    },
                    itemStyle: {
                        show: false,
                    },
                    detail: {
                        show: false
                    },
                    title: { //标题
                        show: false,
                    },
                    data: [{
                        name: "title",
                        value: info.dataArr,
                    }],
                    pointer: {
                        show: false,
                    },
                    animationDuration: 4000,
                }, {
                    name: "内部阴影",
                    type: "gauge",
                    // center: ['20%', '50%'],
                    radius: '70%',
                    z: 4,
                    splitNumber: 10,
                    axisLine: {
                        lineStyle: {
                            color: [
                                [info.dataArr / 100, new echarts.graphic.LinearGradient(
                                    0, 1, 0, 0, [{
                                        offset: 0,
                                        color: 'rgba(145,207,255,0)',
                                    }, {
                                        offset: 0.5,
                                        color: 'rgba(145,207,255,0.1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(145,207,255,0.3)',
                                    }
                                ]
                                )],
                                [
                                    1, 'rgba(28,128,245,.0)'
                                ]
                            ],
                            width: 80,
                        }
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,

                    },
                    splitLine: {
                        show: false,
                    },
                    itemStyle: {
                        show: false,
                    },
                    detail: {
                        formatter: function (value) {
                            if (value !== 0) {
                                return parseInt(value);
                            } else {
                                return 0;
                            }
                        },
                        offsetCenter: [0, 5],
                        textStyle: {
                            padding: [0, 0, 0, 0],
                            fontSize: 18,
                            color: '#EDFFFD'
                        }
                    },
                    title: { //标题
                        show: false,
                    },
                    data: [{
                        name: "title",
                        value: info.dataArr,
                    }],
                    pointer: {
                        show: false,
                    },
                }, {
                    name: '内部圈',
                    type: 'gauge',
                    z: 2,
                    min: 0,
                    max: 100,
                    splitNumber: 10,
                    radius: '70%',
                    axisLine: {
                        lineStyle: {
                            color: [
                                [1, info.colorSet.color]
                            ],
                            width: 3,
                            shadowColor: 'rgba(145,207,255,.5)',
                            shadowBlur: 6,
                            shadowOffsetX: 0,
                        }
                    },
                    tooltip: {
                        show: false
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,

                    },
                    splitLine: {
                        show: false,
                    },
                    itemStyle: {
                        show: false,
                    },
                    detail: {
                        show: false
                    },
                    title: { //标题
                        show: false,
                    },
                    data: [{
                        name: "title",
                        value: info.dataArr,
                    }],
                    itemStyle: {
                        normal: {
                            color: 'rgba(145,207,255,1)'
                        }
                    },
                    pointer: {
                        show: true,
                        length: '80%',
                        radius: '20%',
                        width: 3, //指针粗细
                    },
                    animationDuration: 4000,
                },
                {
                    name: '内部刻度',
                    type: 'gauge',
                    radius: '65%',
                    min: 0, //最小刻度
                    max: 100, //最大刻度
                    splitNumber: 10, //刻度数量
                    startAngle: 225,
                    endAngle: -45,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            width: 5,
                            color: [
                                [1, '#1087e2']
                            ],
                        }
                    }, //仪表盘轴线
                    axisLabel: {
                        show: true,
                        color: 'rgba(172,207,255,.5)',
                        distance: 2,
                        fontSize: 12,
                        formatter: function (v) {
                            switch (v + '') {
                                case '0':
                                    return '0';
                                case '10':
                                    return '10';
                                case '20':
                                    return '20';
                                case '30':
                                    return '30';
                                case '40':
                                    return '40';
                                case '50':
                                    return '50';
                                case '60':
                                    return '60';
                                case '70':
                                    return '70';
                                case '80':
                                    return '80';
                                case '90':
                                    return '90';
                                case '100':
                                    return '100';
                            }
                        }
                    }, //刻度标签。
                    axisTick: {
                        show: true,
                        splitNumber: 7,
                        lineStyle: {
                            color: "#1C3164", //用颜色渐变函数不起作用
                            width: 1,
                        },
                        length: 4
                    }, //刻度样式
                    splitLine: {
                        show: true,
                        length: 8,
                        lineStyle: {
                            color: '#1C3164', //用颜色渐变函数不起作用
                        }
                    }, //分隔线样式
                    detail: {
                        show: false
                    },
                    pointer: {
                        show: false
                    }
                }, { //指针上的圆
                    type: 'pie',
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false,
                    legendHoverLink: false,
                    radius: ['0%', '20%'],
                    center: ['50%', '50%'],
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 120,
                        itemStyle: {
                            normal: {
                                color: "rgb(14,31,73)",
                            },
                        }
                    }]
                },
                ]
            },
            dashboard_charts_option4: {
                boxTitle: '仪表盘--适用于深色背景', // 给图表父元素定义的title，不用于echarts中的option
                tooltip: {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                series: [{
                    name: "最外部进度条",
                    type: "gauge",
                    radius: '70%',
                    splitNumber: 100,
                    axisLine: {
                        lineStyle: {
                            color: [
                                [1, '#33507A']
                            ],
                            width: 10,
                            shadowColor: 'rgba(145,207,255,.5)',
                            shadowBlur: 6,
                            shadowOffsetX: 0,
                        }
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,

                    },
                    splitLine: {
                        show: false,
                    },
                    itemStyle: {
                        show: false,
                    },
                    detail: {
                        show: false
                    },
                    title: { //标题
                        show: false,
                    },
                    data: [{
                        name: "title",
                        value: info.dataArr,
                    }],
                    pointer: {
                        show: false,
                    },
                    animationDuration: 4000,
                },
                {
                    name: "内部进度条",
                    type: "gauge",
                    // center: ['50%', '50%'],
                    radius: '54%',
                    z: 4,
                    splitNumber: 10,
                    axisLine: {
                        lineStyle: {
                            color: [
                                [info.dataArr / 100, new echarts.graphic.LinearGradient(
                                    0, 1, 0, 0, [{
                                        offset: 0,
                                        color: 'rgba(0,191,194,.1)',
                                    }, {
                                        offset: 0.5,
                                        color: 'rgba(0,191,194,0.4)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0,191,194,0.8)',
                                    }
                                ]
                                )],
                                [
                                    1, 'rgba(28,128,245,.0)'
                                ]
                            ],
                            width: 170
                        }
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,

                    },
                    splitLine: {
                        show: false,
                    },
                    itemStyle: {
                        show: false,
                    },
                    detail: {
                        formatter: function (value) {
                            if (value !== 0) {
                                var num = Math.round(value);
                                return parseInt(num).toFixed(0) + "";
                            } else {
                                return 0;
                            }
                        },
                        offsetCenter: [0, 50],
                        textStyle: {
                            padding: [0, 0, 0, 0],
                            fontSize: 30,
                            fontWeight: '700',
                            color: info.colorSet.color
                        }
                    },
                    title: { //标题
                        show: false,
                        offsetCenter: [0, 46], // x, y，单位px
                        textStyle: {
                            color: "rgba(46, 143, 255, 1)",
                            fontSize: 30, //表盘上的标题文字大小
                            fontWeight: 700,
                            fontFamily: 'PingFangSC'
                        }
                    },
                    data: [{
                        name: info.dataArr,
                        value: info.dataArr,
                    }],
                    itemStyle: {
                        normal: {
                            color: 'rgba(46, 143, 255, 1)'
                        }
                    },
                    pointer: {
                        show: true,
                        length: '80%',
                        radius: '20%',
                        width: 3, //指针粗细
                    },
                    animationDuration: 4000,
                },
                // 内圆
                {
                    "name": '内圆',
                    "type": 'pie',
                    "hoverAnimation": false,
                    "legendHoverLink": false,
                    "radius": '4%',
                    "z": 4,

                    "labelLine": {
                        "normal": {
                            "show": false
                        }
                    },
                    "data": [{
                        "value": 0,
                    }, {
                        "value": 10,

                        itemStyle: {
                            normal: {
                                color: "#0E1327"
                            },
                            emphasis: {
                                color: "#0E1327"
                            }
                        }
                    }]
                },
                // 圆环
                {
                    "name": '小圆形',
                    "type": 'pie',
                    "hoverAnimation": false,
                    "legendHoverLink": false,
                    "radius": ['4%', '3%'],
                    "z": 5,
                    "labelLine": {
                        "normal": {
                            "show": false
                        }
                    },
                    "data": [{
                        "value": 0,
                    }, {
                        "value": 10,

                        itemStyle: {
                            normal: {
                                color: "rgba(46, 143, 255, 1)",
                            },

                        }
                    }]
                },
                {
                    name: '外部刻度',
                    type: 'gauge',
                    //  center: ['20%', '50%'],
                    radius: '60%',
                    min: 0, //最小刻度
                    max: 100, //最大刻度
                    splitNumber: 10, //刻度数量
                    startAngle: 225,
                    endAngle: -45,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            width: 1,
                            color: [
                                [1, 'rgba(0,0,0,0)']
                            ]
                        }
                    }, //仪表盘轴线
                    axisLabel: {
                        show: true,
                        color: 'rgba(255,255,255,.5)',
                        distance: 25,
                        formatter: function (v) {
                            switch (v + '') {
                                case '0':
                                    return '0';
                                case '10':
                                    return '10';
                                case '20':
                                    return '20';
                                case '30':
                                    return '30';
                                case '40':
                                    return '40';
                                case '50':
                                    return '50';
                                case '60':
                                    return '60';
                                case '70':
                                    return '70';
                                case '80':
                                    return '80';
                                case '90':
                                    return '90';
                                case '100':
                                    return '100';
                            }
                        }
                    }, //刻度标签。
                    axisTick: {
                        show: true,
                        splitNumber: 7,
                        lineStyle: {
                            color: '#42E5FB', //用颜色渐变函数不起作用
                            width: 2,
                        },
                        length: 8
                    }, //刻度样式
                    splitLine: {
                        show: true,
                        length: 15,
                        lineStyle: {
                            color: '#42E5FB', //用颜色渐变函数不起作用
                        }
                    }, //分隔线样式
                    detail: {
                        show: false
                    },
                    pointer: {
                        show: true
                    }
                },
                ]
            },
            dashboard_charts_option5: {
                boxTitle: '仪表盘--适用于深色背景', // 给图表父元素定义的title，不用于echarts中的option
                tooltip: {
                    formatter: "{b}{c}"
                },
                series: [{
                    tooltip: {
                        show: false
                    },
                    name: 'wrap',
                    type: 'pie',
                    hoverAnimation: false,
                    legendHoverLink: false,
                    center: ['50%', '60%'],
                    radius: ['0%', '7%'],
                    z: 5,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 100,
                        itemStyle: {
                            normal: {
                                color: "#072B79"
                            },
                            emphasis: {
                                color: "#072B79"
                            }
                        }
                    }]
                }, {
                    tooltip: {
                        show: false
                    },
                    name: 'wrap',
                    type: 'pie',
                    hoverAnimation: false,
                    legendHoverLink: false,
                    center: ['50%', '60%'],
                    radius: ['6%', '8%'],
                    z: 5,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 100,
                        itemStyle: {
                            normal: {
                                color: "#24D8E7"
                            },
                            emphasis: {
                                color: "#24D8E7"
                            }
                        }
                    }]
                }, {
                    tooltip: {
                        show: false
                    },
                    name: '刻度',
                    type: 'gauge',
                    radius: '83%',
                    z: 1,
                    min: 0,
                    max: 1,
                    center: ['50%', '60%'],
                    splitNumber: 5, //刻度数量
                    startAngle: 180,
                    endAngle: 0,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 5,
                            color: [
                                [0.12, '#E71A6D'],
                                [0.35, '#F88168'],
                                [0.63, '#FBF76B'],
                                [0.8, '#7AD4DF'],
                                [1, '#70C27E'],
                            ]
                        }
                    }, //仪表盘轴线
                    axisLabel: {
                        show: false
                    }, //刻度标签。
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: 'auto',
                            width: 0
                        },
                        length: -15
                    }, //刻度样式
                    splitLine: {
                        show: true,
                        length: 0,
                        lineStyle: {
                            color: 'auto',
                            width: 2
                        }
                    }, //分隔线样式
                    detail: {
                        show: false
                    },
                    pointer: {
                        show: false
                    }
                }, {
                    name: '本期',
                    type: 'gauge',
                    radius: '80%',
                    min: 0,
                    max: 1,
                    center: ['50%', '60%'],
                    data: [{
                        value: 0.89,
                        name: '本期'
                    }],
                    splitNumber: 12, //刻度数量
                    startAngle: 180,
                    endAngle: 0,
                    z: 5,
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 0,
                            color: [
                                [0.12, '#E71A6D'],
                                [0.35, '#F88168'],
                                [0.63, '#FBF76B'],
                                [0.8, '#7AD4DF'],
                                [1, '#70C27E'],
                            ]
                        }
                    }, //仪表盘轴线
                    axisLabel: {
                        show: true,
                        color: 'rgba(172,207,255,.5)',
                        fontSize: 16,
                        distance: -60,
                        formatter: function (params) {
                            var value = params.toFixed(2)
                            if (value == 0.00) {
                                return '危'
                            } else if (value == 0.25) {
                                return '差'
                            } else if (value == 0.50) {
                                return '中'
                            } else if (value == 0.75) {
                                return '良'
                            } else if (value == 1.00) {
                                return '优'
                            } else {
                                return ''
                            }
                        }
                    }, //刻度标签。
                    axisTick: {
                        splitNumber: 10,
                        show: true,
                        lineStyle: {
                            color: 'auto',
                            width: 2
                        },
                        length: 20,
                    }, //刻度样式
                    splitLine: {
                        show: true,
                        length: 25,
                        lineStyle: {
                            color: 'auto',
                            width: 5
                        }
                    }, //分隔线样式

                    "itemStyle": {
                        "normal": {
                            "color": "#24D8E7" //指针颜色
                        }
                    },
                    pointer: {
                        width: 10,
                        length: '80%'
                    },
                    detail: {
                        formatter: function (params) {
                            return (params * 100).toFixed(0) + '%'
                        },
                        fontSize: 20,
                        color: "rgba(172,207,255,.5)",
                        offsetCenter: ['0%', '-35%']
                    },
                    title: {
                        offsetCenter: ['0', '-60%'],
                        fontSize: 16,
                        color: "rgba(172,207,255,.5)",
                        show: true
                    },
                }]
            },
            dashboard_charts_option6: {
                boxTitle: '仪表盘--适用于深色背景', // 给图表父元素定义的title，不用于echarts中的option
                title: {
                    text: '{num|' + info.dataArr + '}{key| %}',
                    subtext: info.name,
                    x: '49%',
                    y: '46%',
                    textAlign: 'center',
                    textStyle: {
                        rich: {
                            num: {
                                fontWeight: 'bold',
                                color: 'rgba(172,207,255,.5)',
                                fontFamily: '微软雅黑',
                                fontSize: 25,
                            },
                            key: {
                                fontWeight: 'bold',
                                color: 'rgba(172,207,255,.5)',
                                fontFamily: '微软雅黑',
                                fontSize: 15,
                            }
                        }

                    },
                    subtextStyle: {
                        lineHeight: 30,
                        fontSize: 15
                    }
                },
                data: [{
                    name: info.name,
                }],
                series: [{ // 主圆环
                    name: info.name,
                    type: 'pie',
                    radius: ['50%', '70%'],
                    startAngle: 225,
                    color: [{
                        type: 'linear',
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(51,227,189,1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(51,227,189,.1)' // 100% 处的颜色
                        }]
                    }, 'transparent'],
                    hoverAnimation: true,
                    legendHoverLink: false,
                    z: 10,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 75 * info.dataArr / 100
                    }, {
                        value: 100 - (75 * info.dataArr / 100)
                    }]
                }, { // 背景圆环
                    name: '',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    silent: true,
                    startAngle: 225,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    z: 5,
                    data: [{
                        value: 75,
                        itemStyle: {
                            color: '#1A3B4C'
                        }
                    }, {
                        value: 25,
                        itemStyle: {
                            color: 'transparent'
                        }
                    }]
                }, { // 中间圈
                    name: '',
                    z: 5,
                    type: 'pie',
                    cursor: 'default',
                    radius: ['45%', '45%'],
                    startAngle: 225,
                    hoverAnimation: false,
                    legendHoverLink: false,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 75,
                        itemStyle: {
                            borderColor: 'rgba(51,123,321,1)',
                            borderType: 'dashed'
                        }
                    }, {
                        value: 25,
                        itemStyle: {
                            color: 'transparent'
                        }
                    }]
                }]
            },
            dashboard_charts_option7: {
                boxTitle: '仪表盘--多种形态', // 给图表父元素定义的title，不用于echarts中的option
                boxWidth: '100%',  // 给图表父元素定义的宽，不用于echarts中的option
                title: (() => {
                    let titleData = [];
                    for (var i = 0; i < info.dataList.length; i++) {
                        titleData.push({
                            x: 9.5+25*i+'%',
                            y: "72%",
                            subtext: info.dataList[i].name,
                            subtextStyle: {
                                fontSize: 14,
                                color: info.dataList[i].colorList[1]
                            }
                        })
                    }
                    return titleData;
                })(),
                series: (() => {
                    let dataArr = [];
                    for (var i = 0; i < info.dataList.length; i++) {
                        dataArr.push({// 仪表盘
                            type: 'gauge',
                            min: 0,
                            max: 100,
                            splitNumber: 5,
                            center: [12.5 + 25 * i + '%', '50%'],
                            radius: '70%',
                            axisLine: {
                                lineStyle: {
                                    color: [
                                        [0, info.dataList[i].colorList[0]],
                                        [info.dataList[i].value / 100, info.dataList[i].colorList[1]],
                                        [1, info.dataList[i].colorList[2]]
                                    ],
                                    width: 8
                                }
                            },
                            axisLabel: {
                                textStyle: {
                                    color: '#595959',
                                    fontSize: '10'
                                }
                            },
                            //分割线
                            splitLine: {
                                length: 14,
                                lineStyle: {
                                    width: 2,
                                    color: info.dataList[i].colorList[1],
                                }
                            },
                            itemStyle: {//指针颜色
                                color: info.dataList[i].colorList[1],
                            },
                            pointer: {//指针长短
                                length: 52,
                                width: "3",
                            },
                            detail: {
                                offsetCenter: [-1, 50],
                                formatter: function (param) {
                                    var x = param / 100;
                                    return `{a|占比  }` + param + `%`;
                                },
                                rich: {
                                    a: {
                                        fontSize: 14,
                                        color: "#666"
                                    }
                                },
                                textStyle: {
                                    fontSize: 14,
                                    color: info.dataList[i].colorList[1]
                                }
                            },
                            data: [{ value: info.dataList[i].value }],
                        }, {//指针外环
                            type: 'pie',
                            hoverAnimation: false,
                            legendHoverLink: false,
                            radius: ['6%', '8%'],
                            center: [12.5 + 25 * i + '%', '50%'],
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [{
                                value: 100,
                                itemStyle: {
                                    normal: {
                                        color: info.dataList[i].colorList[1]
                                    }
                                }
                            }]
                        })
                    }
                    return dataArr;
                })()
            }
        };
    }
}
