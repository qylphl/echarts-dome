/**
 * 漏斗图配置项
 * @param info echart图表的配置项总和，对象格式，里面包含{color，data，title}
 */
export default class funnelChart {
    constructor(info) {
        // 漏斗图
        this.FUNNEL_CHARTS = {
            funnel_charts_option: {
                boxTitle: '金字塔漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                legend: {
                    data: ["问题按类别增量统计"]
                },
                color: info.color,
                tooltip: {
                    trigger: 'item',
                    formatter: '{b} : {c}%'
                },
                series: [{
                    type: "funnel",
                    width: "50%",
                    height: "80%",
                    top: '53',
                    left: "8%",
                    sort: "ascending",
                    label: {
                        color: "#333"
                    },
                    labelLine: {
                        show: false
                    },
                    data: info.data
                }]
            },
            funnel_charts_option2: {
                boxTitle: '倒金字塔漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                legend: {
                    data: ["问题按类别增量统计"]
                },
                color: info.color,
                series: [{
                    type: "funnel",
                    width: "50%",
                    height: "80%",
                    top: '53',
                    left: "8%",
                    label: {
                        color: "#333"
                    },
                    labelLine: {
                        show: false
                    },
                    data: info.data
                }]
            },
            funnel_charts_option3: {
                boxTitle: '钉状漏斗图', // 给图表父元素定义的title，不用于echarts中的option
                color: info.color,
                tooltip: {
                    trigger: 'item',
                    formatter: '{b} : {c}%'
                },
                series: [{
                    type: 'funnel',
                    width: '50%',
                    height: '80%',
                    left: '38%',
                    top: 53,
                    label: {
                        position: 'left'
                    },
                    data: info.nailData
                }]
            }
        };
    }
}
