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
                boxWidth: '100%',  // 给图表父元素定义的宽，不用于echarts中的option
                tooltip: {
                    position: 'top'
                },
                animation: false,
                grid: {
                    height: '50%',
                    top: '10%'
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
                    bottom: '15%'
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
        };
    }
}
