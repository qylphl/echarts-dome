/**
 * 矩阵图配置项
 * @param info echart图表的配置项总和，对象格式，里面包含{color，data，title}
 */
export default class MatrixChart {
    constructor(info) {
        // 矩阵图
        this.MATRIX_CHARTS = {
            Matrixe_charts_option: {
                boxTitle: '矩阵图', // 给图表父元素定义的title，不用于echarts中的option
                boxWidth: '100%',  // 给图表父元素定义的宽，不用于echarts中的option
                tooltip: {},
                series: [{
                    name: 'option',
                    type: 'treemap',
                    visibleMin: 300,
                    data: info.data,
                    leafDepth: 2,
                    roam: false,
                    levels: [
                        {
                            itemStyle: {
                                normal: {
                                    borderColor: '#555',
                                    borderWidth: 4,
                                    gapWidth: 4
                                }
                            }
                        },
                        {
                            colorSaturation: [0.3, 0.6],
                            itemStyle: {
                                normal: {
                                    borderColorSaturation: 0.7,
                                    gapWidth: 1,
                                    borderWidth: 2
                                }
                            }
                        },
                        {
                            colorSaturation: [0.3, 0.5],
                            itemStyle: {
                                normal: {
                                    borderColorSaturation: 0.6,
                                    gapWidth: 1
                                }
                            }
                        },
                        {
                            colorSaturation: [0.3, 0.5]
                        }
                    ]
                }]
            },
        };
    }
}
