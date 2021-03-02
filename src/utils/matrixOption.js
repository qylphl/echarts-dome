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
            Matrixe_charts_option2: {
                boxTitle: '矩阵图', // 给图表父元素定义的title，不用于echarts中的option
                boxWidth: '100%',  // 给图表父元素定义的宽，不用于echarts中的option
                // backgroundColor: '#012248',
                color: [
                    "#2C58A6"
                ],
                tooltip: {
                    formatter: (info) => {
                        let value = info.value
                        let treePathInfo = info.treePathInfo
                        let treePath = []

                        for (let i = 1; i < treePathInfo.length; i++) {
                            treePath.push(treePathInfo[i].name)
                        }

                        return [
                            '<div class="tooltip-title">' + echarts.format.encodeHTML(treePath.join(' - ')) + '</div>',
                            '数量: ' + echarts.format.addCommas(value),
                        ].join('')
                    }
                },
                series: [{
                    name: '型号',
                    type: 'treemap',
                    roam: false,
                    itemStyle: {
                        normal: {
                            // borderColor: '#2C58A6',
                        }
                    },
                    label: {
                        fontSize: 15
                    },
                    levels: [{
                        itemStyle: {
                            normal: {
                                borderColor: '#fff',
                                borderWidth: 0,
                                gapWidth: 0,
                            }
                        },
                    },
                    {
                        colorAlpha: [0.75, 0.90],
                        colorSaturation: [0.30, 0.40],
                        itemStyle: {
                            normal: {
                                borderWidth: 0,
                                gapWidth: 0,
                                // borderColorSaturation: 0.3,
                            }
                        },
                    }
                    ],
                    width: '90%',
                    height: '90%',
                    leafDepth: 2,
                    data: info.dataTwo
                }]
            }
        };
    }
}
