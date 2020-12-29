/**
 * 矩阵图配置项
 * @param info echart图表的配置项总和，对象格式，里面包含{color，data，title}
 */
export default class MatrixChart {
    constructor(info) {
        // 热力图
        this.HEAT_CHARTS = {
            heat_charts_option: {
                boxTitle: '热力图', // 给图表父元素定义的title，不用于echarts中的option
                boxWidth: '66.15%',  // 给图表父元素定义的宽，不用于echarts中的option
                tooltip: {
                    position: 'top'
                },
                animation: false,
                grid: {
                    height: '70%',
                    top: '5%'
                },
                xAxis: {
                    type: 'category',
                    data: ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p'],
                    splitArea: {
                        show: true
                    }
                },
                yAxis: {
                    type: 'category',
                    data: ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
                    splitArea: {
                        show: true
                    }
                },
                visualMap: {
                    min: 0,
                    max: 10,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '5%'
                },
                series: [{
                    name: 'Punch Card',
                    type: 'heatmap',
                    data: info.data.map(function (item) {
                        return [item[1], item[0], item[2] || '-'];
                    }),
                    label: {
                        show: true
                    },
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            },
            heat_charts_option2: {
                boxTitle: '热力图', // 给图表父元素定义的title，不用于echarts中的option
                boxWidth: '66.15%',  // 给图表父元素定义的宽，不用于echarts中的option
                tooltip: {
                    show: true,
                    backgroundColor: '#fff',
                    textStyle: {
                        color: '#0c0c0c'
                    }
                },
                grid: {
                    right: '3%',
                    left: '10%',
                    bottom: '5%'
                },
                xAxis: {
                    type: 'category',
                    data: info.dataList.XNameData,
                    splitArea: {
                        show: true
                    },
                    position: 'top',
                    axisLabel: {
                        show: true,
                        interval: 0,
                        textStyle: {
                            fontSize: 14,
                            color: 'rgba(0, 0, 0, 0.85)'
                        },
                        margin: 24
                    },
                    axisTick: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'category',
                    data: info.dataList.YNameData,
                    splitArea: {
                        show: true
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize: 14,
                            color: 'rgba(0, 0, 0, 0.85)'
                        },
                        margin: 24,
                        formatter: function (params) {
                            var newParamsName = "";// 最终拼接成的字符串
                            var paramsNameNumber = params.length;// 实际标签的个数
                            var provideNumber = 10;// 每行能显示的字的个数
                            var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                            /**
                             * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                             */
                            // 条件等同于rowNumber>1
                            if (paramsNameNumber > provideNumber) {
                                /** 循环每一行,p表示行 */
                                for (var p = 0; p < rowNumber; p++) {
                                    var tempStr = "";// 表示每一次截取的字符串
                                    var start = p * provideNumber;// 开始截取的位置
                                    var end = start + provideNumber;// 结束截取的位置
                                    // 此处特殊处理最后一行的索引值
                                    if (p == rowNumber - 1) {
                                        // 最后一次不换行
                                        tempStr = params.substring(start, paramsNameNumber);
                                    } else {
                                        // 每一次拼接字符串并换行
                                        tempStr = params.substring(start, end) + "\n";
                                    }
                                    newParamsName += tempStr;// 最终拼成的字符串
                                }
                            } else {
                                // 将旧标签的值赋给新标签
                                newParamsName = params;
                            }
                            //将最终的字符串返回
                            return newParamsName
                        }
                    },
                    axisTick: {
                        show: false
                    }
                },
                visualMap: {
                    show: false,
                    min: 0,
                    max: 100,
                    itemHeight: 600,
                    itemWidth: 10,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '2%',
                    color: ['#003a8c', '#0050b3', '#096dd9', '#1890ff', '#bae7ff']
                },
                series: [{
                    type: 'heatmap',
                    data: info.dataList.resultData,
                    label: {
                        show: true,
                        fontSize: 18
                    }
                }]
            }
        };
    }
}
