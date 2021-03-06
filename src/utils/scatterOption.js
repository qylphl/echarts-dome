/**
 * 散点气泡图配置项
 * @param info echart图表的配置项总和，对象格式，里面包含{color，data，title}
 */
import echarts from "echarts/lib/echarts";
export default class scatterChart {
    constructor(info) {
        // 散点气泡图
        this.SCATTER_CHARTS = {
            // 散点气泡图
            scatter_charts_option: {
                boxTitle: '气泡散点图', // 给图表父元素定义的title，不用于echarts中的option
                boxWidth: '66.15%',  // 给图表父元素定义的宽，不用于echarts中的option
                grid: {
                    top: 60,
                    bottom: 40,
                    left: 50,
                    right: 30
                },
                legend: {
                    data: Object.keys(info.data),
                    type: "scroll",
                    right: '15',
                    top: '10',
                    itemGap: 25,
                    itemWidth: 14,
                    itemHeight: 14,
                    textStyle: {
                        fontSize: '13',
                        color: '#656565',
                    },
                },
                tooltip: {
                    extraCssText: 'padding-right:8px;padding-left:8px;line-height:30px;background:rgba(255,255,255,1);box-shadow:1px 5px 20px 0px rgba(1,11,19,0.2);border-radius:6px;',
                    textStyle: {
                        fontSize: '13',
                        color: '#656565',
                    },
                    formatter: function (obj) {
                        var value = obj.value;
                        return '<div style="padding-bottom: 0px;margin-bottom: 0px">' + '年份：' + obj.seriesName + '</div>' + '收录期刊：' + value[2] + '<br/>' + '总被引用次数：' + value[0] + '<br/>' + '人均发表篇次：' + value[1].toFixed(1) + '<br/>' + '发表论文总数：' + value[3] + '<br/>';
                    }
                },
                xAxis: {
                    splitLine: {
                        show: false,
                    },
                    scale: true,
                    type: 'value',
                    name: '总被引篇次',
                    nameTextStyle: {
                        color: '#666',
                        fontSize: 13,
                        padding: [0, 0, 30, -80]
                    },
                    axisLabel: {
                        formatter: function (value) {
                            var num = value
                            if (num && num != 'undefined' && num != 'null') {
                                let numS = num;
                                numS = numS.toString();
                                numS = numS.replace(/,/gi, '');
                                return numS;
                            } else {
                                return num;
                            }
                        },
                        color: '#656565',
                        textStyle: {
                            fontSize: 13
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#333',
                        }
                    },
                    axisTick: {
                        show: false
                    },
                },
                yAxis: {
                    name: '人均发表篇数',
                    nameTextStyle: {
                        color: '#666',
                        fontSize: 13,
                        padding: [0, 0, 0, 70]
                    },
                    axisLabel: {
                        formatter: function (value) {
                            var num = value
                            if (num && num != 'undefined' && num != 'null') {
                                let numS = num;
                                numS = numS.toString();
                                numS = numS.replace(/,/gi, '');
                                return numS;
                            } else {
                                return num;
                            }
                        },
                        color: '#656565',
                        textStyle: {
                            fontSize: 13
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#333',
                        }
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(209,209,209,.25)',
                        }
                    }
                },
                series: [{
                    name: '2010',
                    symbolSize: function (data) {
                        return data[1] * 50 / 1.2;
                    },
                    itemStyle: {
                        normal: {
                            color: '#9CC8FF',
                            borderColor: '#4B95F3',
                            borderWidth: 2,
                        }
                    },
                    data: (() => {
                        let data = [],
                            datas = info.data[Object.keys(info.data)[0]][0];
                        for (var i = 0; i < datas.name.length; i++) {
                            data.push({
                                name: datas.name[i],
                                value: datas.value[i],
                                amount: datas.amount[i],
                                orderCount: datas.orderCount[i],
                            });
                        }
                        let dataInfo = data.map((data) => {
                            let name = data['name'];
                            let dispathCount = data['orderCount'];
                            let refs = data['amount'];
                            let avt = data['value'];
                            return [dispathCount, refs, name, avt];
                        });
                        return dataInfo;
                    })(),
                    type: 'scatter',
                }, {
                    name: '2020',
                    symbolSize: function (data) {
                        return data[1] * 50 / 1.2;
                    },
                    itemStyle: {
                        normal: {
                            color: '#FFD291',
                            borderColor: '#F3B14B',
                            borderWidth: 2,
                        }
                    },
                    data: (() => {
                        let data = [],
                            datas = info.data[Object.keys(info.data)[1]][0];
                        for (var i = 0; i < datas.name.length; i++) {
                            data.push({
                                name: datas.name[i],
                                value: datas.value[i],
                                amount: datas.amount[i],
                                orderCount: datas.orderCount[i],
                            });
                        }
                        let dataInfo = data.map((data) => {
                            let name = data['name'];
                            let dispathCount = data['orderCount'];
                            let refs = data['amount'];
                            let avt = data['value'];
                            return [dispathCount, refs, name, avt];
                        });
                        return dataInfo;
                    })(),
                    type: 'scatter',
                }]
            },
            scatter_charts_option2: {
                boxTitle: '气泡散点图', // 给图表父元素定义的title，不用于echarts中的option
                color: ["rgba(15,179,243,0.3)", "rgba(23,216,161,0.3)"],
                xAxis: {
                    axisLine: { //  改变x轴颜色
                        lineStyle: {
                            color: '#26D9FF',
                        }
                    },
                    axisLabel: { //  改变x轴字体颜色和大小
                        textStyle: {
                            color: "rgba(250,250,250,0.6)",
                            fontSize: 16
                        },
                    },
                    splitLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.2)"
                        }
                    },
                },
                yAxis: {
                    axisLine: { //  改变y轴颜色
                        lineStyle: {
                            color: '#26D9FF'
                        }
                    },
                    axisLabel: { //  改变y轴字体颜色和大小
                        //formatter: '{value} m³ ', //  给y轴添加单位
                        textStyle: {
                            color: "rgba(250,250,250,0.6)",
                            fontSize: 16
                        },
                    },
                    splitLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,0.2)"
                        }
                    },
                },
                series: [{
                    itemStyle: {
                        borderColor: "#0FC5F3",
                        borderWidth: 2,
                        shadowColor: "#0FC5F3",
                        shadowBlur: 10
                    },
                    symbolSize: 22,
                    data: [
                        [10.0, 8.04],
                        [8.0, 6.95],
                        [13.0, 7.58],
                        [9.0, 8.81],
                        [11.0, 8.33],
                        [14.0, 9.96],
                        [6.0, 7.24],
                        [4.0, 4.26],
                        [12.0, 10.84],
                        [7.0, 4.82],
                        [5.0, 5.68]
                    ],
                    type: 'scatter'
                }, {
                    itemStyle: {
                        borderColor: "#17D8A1",
                        borderWidth: 2,
                        shadowColor: "#17D8A1",
                        shadowBlur: 10
                    },
                    symbolSize: 22,
                    data: [
                        [9.0, 5.04],
                        [11.0, 7.95],
                        [12.0, 8.58],
                        [5.0, 11.81],
                        [7.0, 12.33],
                        [11.0, 7.96],
                        [7.0, 9.24],
                        [6.0, 8.26],
                        [10.0, 11.84],
                        [7.0, 3.82],
                        [6.0, 4.68]
                    ],
                    type: 'scatter'
                }]
            },
            scatter_charts_option3: {
                boxTitle: '气泡散点图', // 给图表父元素定义的title，不用于echarts中的option
                boxWidth: '100%',  // 给图表父元素定义的宽，不用于echarts中的option
                tooltip: {
                    trigger: 'axis',
                    textStyle: {
                        color: '#fff'
                    },
                    axisPointer: {
                        type: 'shadow',
                        borderColor: 'rgba(124,128,244, .5)',
                    },
                    position: 'inside',
                    formatter: (params) => {
                        return `${params[0].axisValueLabel}-${params[0].seriesName}：${params[0].data[2]} <br /> ${params[1].axisValueLabel}-${params[1].seriesName}：${params[1].data[2]}`
                    }
                },
                legend: {
                    show: true,
                    top: 10,
                    right: 20,
                    itemWidth: 20,
                    itemHeight: 10,
                    textStyle: {
                        fontSize: 14,
                        color: "#072B79"
                    }
                },
                grid: {
                    show: true,
                    top: 50,
                    left: '5%',
                    right: '3%',
                    bottom: 40,
                    borderColor: "#061C61"
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    axisPointer: {
                        type: 'shadow'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#215AFF'
                        }
                    },
                    //网格样式
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#103095'],
                            width: 1,
                            type: 'dashed'
                        }
                    }
                },
                yAxis: {
                    type: 'category',
                    //网格样式
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['#103095'],
                            width: 1,
                            type: 'dashed'
                        }
                    },
                    nameTextStyle: {
                        color: '#fff'
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#215AFF"
                        }
                    },
                    data: ['福州', '厦门', '莆田', '三明', '泉州', '龙岩'],
                    scale: true
                },
                series: [{
                    name: '数据2',
                    //  先X,后y
                    data: [
                        [0, 0, 122],
                        [1, 1, 123],
                        [2, 2, 223],
                        [3, 3, 123],
                        [4, 2, 123],
                        [5, 4, 323],
                        [6, 5, 123],
                        [7, 5, 123],
                        [8, 1, 123],
                        [9, 3, 123],
                        [10, 5, 223],
                        [11, 2, 123],
                    ],
                    type: 'scatter',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) * 3;
                    },
                    emphasis: {
                        label: {
                            show: false,
                            formatter: function (param) {
                                return param.data[2];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        shadowBlur: 15,
                        shadowColor: 'rgba(0,0,0, 0.5)',
                        shadowOffsetY: 5,
                        color: '#ff9f7f',
                    }
                },
                {
                    name: '数据1',
                    data: [
                        [0, 2, 222],
                        [1, 3, 223],
                        [2, 4, 223],
                        [3, 2, 123],
                        [4, 5, 123],
                        [5, 3, 123],
                        [6, 1, 123],
                        [7, 2, 123],
                        [8, 3, 323],
                        [9, 5, 123],
                        [10, 2, 223],
                        [11, 5, 123],
                    ],
                    type: 'scatter',
                    symbolSize: function (data) {
                        return Math.sqrt(data[2]) * 3;
                    },
                    emphasis: {
                        label: {
                            show: false,
                            formatter: function (param) {
                                return param.data[2];
                            },
                            position: 'top'
                        }
                    },
                    itemStyle: {
                        shadowBlur: 15,
                        shadowColor: 'rgba(25, 100, 150, 0.5)',
                        shadowOffsetY: 5,
                        color: '#8379ea',
                    }
                }
                ] //end series
            },
            scatter_charts_option4: {
                boxTitle: '气泡散点图', // 给图表父元素定义的title，不用于echarts中的option
                tooltip: {
                    trigger: 'item',
                    formatter: function (e, t, n) {
                        return e.seriesName + "<br />" + e.name + "：" + e.value
                    }
                },
                xAxis: {
                    scale: true
                },
                yAxis: {
                    scale: true
                },
                series: [{
                    type: 'effectScatter',
                    symbolSize: 20,
                    data: [
                        [172.7, 105.2],
                        [153.4, 42]
                    ]
                }, {
                    type: 'scatter',
                    data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                    [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                    [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                    [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                    [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                    [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                    [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                    [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
                    [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
                    [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
                    [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
                    [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
                    [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
                    [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
                    [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
                    [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
                    [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
                    [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
                    [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
                    [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
                    [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
                    [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
                    [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
                    [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
                    [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
                    [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
                    [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
                    [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
                    [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
                    [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
                    [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
                    [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
                    [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
                    [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
                    [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
                    [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
                    [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
                    [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
                    [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
                    [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
                    [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
                    [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
                    [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
                    [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
                    [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
                    [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
                    [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
                    [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
                    [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                    [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                    [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                    [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
                    ],
                }]
            },
            scatter_charts_option5: {
                boxTitle: '气泡散点图', // 给图表父元素定义的title，不用于echarts中的option
                boxWidth: '66.15%',  // 给图表父元素定义的宽，不用于echarts中的option
                legend: {
                    icon: 'ract',
                    bottom: '15',
                    textStyle: {
                        color: "#666",
                        fontSize: 12, //字体大小
                        padding: [0, 15, 0, 0],
                    }
                },
                grid: {
                    top: '8%',
                    left: '4%',
                    right: '4%',
                    bottom: '17%',
                    containLabel: true
                },
                xAxis: [{
                    gridIndex: 0,
                    type: 'value',
                    axisTick: { show: false },
                    axisLabel: { show: true },
                    axisLine: {
                        lineStyle: { color: '#ccc' }
                    },
                    splitLine: {
                        lineStyle: { opacity: 0.3 }
                    },
                    min: 24,
                    max: 52
                }],
                yAxis: [{
                    gridIndex: 0,
                    min: 0,
                    axisTick: { show: false },
                    axisLabel: { show: true },
                    axisLine: {
                        lineStyle: { color: '#ccc' }
                    },
                    splitLine: {
                        lineStyle: { opacity: 0.3 }
                    },
                    max: 25
                }],
                series: (() => {
                    let dataArr = [],
                        firstObj = {
                            type: 'scatter',
                            symbol: 'circle',
                            label: {
                                normal: {
                                    show: true,
                                    formatter: '{b}',
                                    textStyle: {
                                        fontSize: 34,
                                        fontWeight: 'bold',
                                        color: '#fff'
                                    }
                                },
                            },
                            itemStyle: {
                                normal: {
                                    opacity: 0.8,
                                    shadowBlur: 20,
                                    shadowColor: '#4ea8ff'
                                }
                            },
                            data: (() => {
                                let datas = [];
                                for (var i = 0; i < info.dataList.length; i++) {
                                    datas.push({
                                        name: info.dataList[i].value,
                                        value: info.colorList[i].offset,
                                        symbolSize: info.colorList[i].symbolSize,
                                        itemStyle: {
                                            normal: {
                                                color: info.colorList[i].color,
                                                // opacity: info.colorList[i].opacity
                                            }
                                        },
                                    });
                                }
                                return datas;
                            })(),
                        };
                    dataArr.push(firstObj);
                    for (var j = 0; j < info.dataList.length; j++) {
                        dataArr.push({
                            name: info.dataList[j].name,
                            type: 'scatter',
                            color: info.colorList[j].color,
                            symbolSize: 60,
                        });
                    }
                    return dataArr;
                })()
            }
        },
            this.SCATTER_CHARTS_TWO = {
                scatter_charts_option6: {
                    boxTitle: '关系图延伸散点气泡图', // 给图表父元素定义的title，不用于echarts中的option
                    boxWidth: '66.15%',  // 给图表父元素定义的宽，不用于echarts中的option
                    // 图表标题
                    title: {
                        show: false,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
                        text: '"新时代"主题图谱',//主标题文本，'\n'指定换行
                        x: 'center',        // 水平安放位置，默认为左对齐，可选为：'center' ¦ 'left' ¦ 'right' ¦ {number}（x坐标，单位px）
                        y: 'bottom',             // 垂直安放位置，默认为全图顶端，可选为： 'top' ¦ 'bottom' ¦ 'center' ¦ {number}（y坐标，单位px）
                        //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderColor: '#ccc',    // 标题边框颜色
                        borderWidth: 0,         // 标题边框线宽，单位px，默认为0（无边框）
                        padding: 5,             // 标题内边距，单位px，默认各方向内边距为5，
                        // 接受数组分别设定上右下左边距，同css
                        itemGap: 10,            // 主副标题纵向间隔，单位px，默认为10，
                        textStyle: {
                            fontSize: 18,
                            fontWeight: 'bolder',
                            color: '#333'        // 主标题文字颜色
                        },
                        subtextStyle: {
                            color: '#aaa'        // 副标题文字颜色
                        }
                    },
                    // backgroundColor: '#fff',
                    tooltip: {},
                    animationDurationUpdate: function (idx) {
                        // 越往后的数据延迟越大
                        return idx * 100;
                    },
                    animationEasingUpdate: 'bounceIn',
                    series: [{
                        type: 'graph',
                        layout: 'force',
                        force: {
                            repulsion: 340,
                            edgeLength: [5, 25]
                        },
                        roam: 'move',   // 开启缩放或者平移'scale' / 'move'   设置成 true 为都开启
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        data: (() => {
                            let datas = [],
                                dataModel = {
                                    name: '',
                                    value: '',
                                    symbolSize: '',
                                    draggable: true,
                                    itemStyle: {
                                        normal: {
                                            shadowBlur: 20,
                                            shadowColor: '',
                                            color: ''
                                        }
                                    }
                                };
                            for (var i = 0; i < info.dataListInfo.length; i++) {
                                dataModel.name = info.dataListInfo[i].name;
                                dataModel.value = info.dataListInfo[i].value;
                                dataModel.symbolSize = info.dataListInfo[i].symbolSize;
                                dataModel.itemStyle.normal.shadowColor = info.colorListInfo[i];
                                dataModel.itemStyle.normal.color = info.colorListInfo[i];
                                var newDataModel = JSON.parse(JSON.stringify(dataModel))
                                datas.push(newDataModel)
                            }
                            return datas;
                        })()
                    }]
                }
            },
            // 关系图
            this.DIAGRAM_CHAETS = {
                diagram_charts_option: {
                    boxTitle: '关系图', // 给图表父元素定义的title，不用于echarts中的option
                    title: {
                        show: false,
                        text: '知识图谱',
                    },
                    legend: [{
                        // selectedMode: 'single',
                        data: ['公司', '董事'],
                        left: 'auto',
                        // icon: 'circle'
                    }],
                    series: [{
                        type: 'graph',
                        center: ['78%', '50%'],
                        layout: 'force',
                        symbolSize: 50,
                        draggable: true,
                        roam: true,
                        focusNodeAdjacency: true,
                        categories: [{
                            name: '公司',
                            itemStyle: {
                                color: info.diagramColor[0]
                            }
                        },
                        {
                            name: '董事',
                            itemStyle: {
                                color: info.diagramColor[1]
                            }
                        }],
                        edgeSymbol: ['', 'arrow'],
                        // edgeSymbolSize: [80, 10],
                        edgeLabel: {
                            normal: {
                                show: true,
                                textStyle: {
                                    fontSize: 20
                                },
                                formatter(x) {
                                    return x.data.name;
                                }
                            }
                        },
                        label: {
                            show: true
                        },
                        force: {
                            repulsion: 650,
                            edgeLength: 140
                        },
                        data: (() => {
                            info.diagramData.nodes.forEach(node => {
                                if (node.category === 0) {
                                    node.symbolSize = 85;
                                    node.itemStyle = {
                                        color: info.diagramColor[0]
                                    };
                                } else if (node.category === 1) {
                                    node.itemStyle = {
                                        color: info.diagramColor[1]
                                    };
                                }
                            });
                            return info.diagramData.nodes;
                        })(),
                        links: (() => {
                            info.diagramData.links.forEach(link => {
                                link.label = {
                                    align: 'center',
                                    fontSize: 12
                                };
                                if (link.name === '参股') {
                                    link.lineStyle = {
                                        color: info.diagramColor[1]
                                    }
                                } else if (link.name === '董事') {
                                    link.lineStyle = {
                                        color: info.diagramColor[0]
                                    }
                                } else if (link.name === '法人') {
                                    link.lineStyle = {
                                        color: info.diagramColor[2]
                                    }
                                }
                            });
                            return info.diagramData.links;
                        })()
                    }]
                },
                diagram_charts_option2: {
                    boxTitle: '关系图', // 给图表父元素定义的title，不用于echarts中的option
                    boxWidth: '66.15%',  // 给图表父元素定义的宽，不用于echarts中的option
                    title: {
                        show: false,
                        text: "实体属性关系图",
                        top: "top",
                        left: "center"
                    },
                    itemStyle: {
                        normal: {
                            color: '#000',
                        },
                        shadowBlur: 10
                    },
                    animationDuration: 1500,
                    animationEasingUpdate: 'quinticInOut',
                    xAxis: {
                        show: false,
                        type: 'value'
                    },
                    yAxis: {
                        show: false,
                        type: 'value'
                    },
                    series: [{
                        type: 'graph',
                        coordinateSystem: 'cartesian2d',
                        legendHoverLink: false,
                        hoverAnimation: true,
                        nodeScaleRatio: false,
                        //建头
                        edgeSymbol: ['circle', 'arrow'],
                        edgeSymbolSize: [2, 15],
                        edgeLabel: {
                            show: false,
                            normal: {
                                show: true,
                                position: 'middle',
                                textStyle: {
                                    fontSize: 12
                                },
                                formatter: "{c}"
                            }
                        },
                        focusNodeAdjacency: true,
                        roam: true,
                        nodeScaleRatio: 0.64,
                        categories: [{
                            name: '一级关系',
                            itemStyle: { //可配置颜色
                                normal: {
                                    color: "#A170DD",
                                }
                            }
                        }, {
                            name: '二级关系',
                            itemStyle: { //可配置颜色
                                normal: {
                                    color: "#41B1EF",
                                }
                            }
                        }, {
                            name: '三级关系',
                            itemStyle: { //可配置颜色
                                normal: {
                                    color: "#E8B842",
                                }
                            }
                        }, {
                            name: '四级关系',
                            itemStyle: { //可配置颜色
                                normal: {
                                    color: "#667AED",
                                }
                            }
                        }],
                        //圆形上面的文字
                        label: {
                            normal: {
                                position: "inside",
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 12
                                },
                            }
                        },
                        force: {
                            repulsion: 1000,
                        },
                        force: {
                            repulsion: 2500,

                        },
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#157eff'
                                }, {
                                    offset: 1,
                                    color: '#35c2ff'
                                }]),
                            },
                            shadowBlur: 10
                        },
                        // lineStyle: {
                        //     normal: {
                        //         width: 1,
                        //         shadowColor: 'none',
                        //         color: '#0250FD'
                        //     },
                        // },
                        lineStyle: {
                            normal: {
                                opacity: 0.9,
                                width: 1,
                                curveness: 0.1
                            }
                        },
                        data: [{
                            name: "浮游植物",
                            category: 0, // 这是种类，一级实体1二级关系2三级关系3四级关系4
                            symbolSize: 50,
                            draggable: true,
                            fixed: true,
                            value: [0, 150]
                        }, {
                            name: "虎鲸",
                            category: 0,
                            symbolSize: 50,
                            draggable: true,
                            fixed: true,
                            value: [600, 150]
                        }, {
                            name: "磷虾",
                            category: 1,
                            value: [200, 200],
                            draggable: true,
                            fixed: true,
                            symbolSize: 50
                        }, {
                            name: "浮游动物",
                            category: 1,
                            value: [200, 150],
                            draggable: true,
                            fixed: true,
                            symbolSize: 50
                        }, {
                            name: "小鱼",
                            category: 1,
                            value: [200, 100],
                            draggable: false,
                            symbolSize: 50
                        }, {
                            name: "须鲸",
                            category: 2,
                            symbolSize: 50,
                            draggable: false,
                            value: [300, 200]
                        }, {
                            name: "大鱼",
                            category: 2,
                            symbolSize: 50,
                            draggable: false,
                            value: [300, 150]
                        }, {
                            name: "海豹",
                            category: 2,
                            symbolSize: 50,
                            draggable: false,
                            value: [300, 100]
                        }],
                        links: [{
                            source: "浮游植物",
                            value: "132",
                            target: "磷虾",
                        }, {
                            source: "磷虾",
                            value: "132",
                            target: "浮游植物",
                        }, {
                            source: "浮游植物",
                            value: "778",
                            target: "浮游动物",
                        }, {
                            source: "浮游植物",
                            value: "5354",
                            target: "小鱼",
                        }, {
                            source: "须鲸",
                            value: "6677",
                            target: "虎鲸",
                        }, {
                            source: "大鱼",
                            value: "3344",
                            target: "虎鲸",
                        }, {
                            source: "海豹",
                            value: "2333",
                            target: "虎鲸",
                        }, {
                            source: "磷虾",
                            value: "3737",
                            target: "须鲸",
                        }, {
                            source: "浮游动物",
                            value: "6688",
                            target: "大鱼",
                        }, {
                            source: "小鱼",
                            value: "7788",
                            target: "海豹",
                        }, {
                            source: "大鱼",
                            value: "9933",
                            target: "海豹",
                        }]
                    }]
                },
                diagram_charts_option3: {
                    boxTitle: '关系图', // 给图表父元素定义的title，不用于echarts中的option
                    grid: {
                        left: '15%',
                        top: 60,
                        right: '15%',
                        bottom: 60,
                    },
                    series: [{
                        type: 'graph',
                        layout: 'force',
                        force: {
                            repulsion: 850,
                            edgeLength: 60,
                            layoutAnimation: true,
                        },
                        symbolSize: 55,
                        nodeScaleRatio: 1, //图标大小是否随鼠标滚动而变
                        roam: true, //缩放
                        draggable: true, //节点是否可以拖拽
                        focusNodeAdjacency: false, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
                        edgeSymbol: ['circle', 'arrow'], //线2头标记
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                color: 'gold'
                            }
                        },
                        edgeLabel: {
                            normal: {
                                show: true,
                                textStyle: {
                                    fontSize: 12,
                                    color: '#333'
                                },
                                formatter: "{c}"
                            }
                        },
                        categories: [{
                            name: '亲人',
                        }, {
                            name: '租户',
                            symbol: 'rect'
                        }],
                        itemStyle: {
                            normal: {
                                borderColor: '#04f2a7',
                                borderWidth: 2,
                                shadowBlur: 10,
                                shadowColor: '#04f2a7',
                                color: '#001c43',
                            }
                        },
                        lineStyle: {
                            normal: {
                                opacity: 0.9,
                                width: 1,
                                curveness: 0,
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: '#e0f55a' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#639564' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        },
                        symbolKeepAspect: false,
                        data: [{
                            name: '李富贵',
                        },
                        {
                            name: '王桂花',
                        },
                        {
                            name: '李思思',
                        },
                        {
                            name: '自住房屋',

                        },
                        {
                            name: '车子',

                        },
                        {
                            name: '租房',

                        },
                        {
                            name: '黄涛',
                        },
                        {
                            name: '于海',

                        },
                        {
                            name: '张柏',
                        },
                        {
                            name: '付梦杰',
                        }
                        ],
                        links: [{
                            source: 0,
                            target: 1,
                            value: '夫妻'
                        },
                        {
                            source: 0,
                            target: 2,
                            value: '父女'
                        },
                        {
                            source: 0,
                            target: 3,
                            value: '自住'
                        },
                        {
                            source: 0,
                            target: 4,
                            value: '车主'
                        },
                        {
                            source: 0,
                            target: 5,
                            value: '租户'
                        },
                        {
                            source: 5,
                            target: 6,
                            value: '租赁'

                        },
                        {
                            source: 5,
                            target: 7,
                            value: '租赁'
                        },
                        {
                            source: 5,
                            target: 8,
                            value: '租赁'
                        },
                        {
                            source: 5,
                            target: 9,
                            value: '租赁'
                        }
                        ],
                    }]
                }
            }
    }
}
