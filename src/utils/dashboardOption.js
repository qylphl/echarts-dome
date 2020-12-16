/**
 * 仪表盘配置项
 * @param info echart图表的配置项总和，对象格式，里面包含{color，data，title}
 */
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
                        detail: { formatter: '{value}%' },
                        data: [{ value: 85, name: '入库率' }],
                        axisLine: {
                            lineStyle: {
                                color: [[0.25, '#ef5633'], [0.5, '#f3b962'], [0.75, '#53de42'], [1, '#099c15']]
                            }
                        },
                    }
                ]
            },
        };
    }
}
