export default {
    // 普通柱状（条形）图
    ORDINARY_BAR_CHARTS: {
        bar_charts_option: {
            title: {
                text: '行政级别',
            },
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
                left: '8%', // 默认10%，给24就挺合适的。
                right: '5%', // 默认10%
                top: '15%',
                bottom: '30%',
            },
            calculable: true,
            xAxis: [{
                type: 'category',
                data: this.data.map(v => v.name),
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
                        color: '#B6B6B6',
                    }
                },
                data: this.data.map(v => v.value),
                itemStyle: {
                    normal: { color: '#CB7F83', barBorderRadius: [20, 20, 0, 0], },
                },
            }]
        }
    }

}