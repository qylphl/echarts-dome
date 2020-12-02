/**
 * 设置默认选中高亮
 * @param myChart echart图表的名字
 * @param data    后台返回的数据，需要是数组格式，并且只要值 如：data.map(v => v.value)
 */
export function setHighlight(myChart, data) {
    var max = Math.max(...data),
        indexOfMax = data.indexOf(max);
    //设置默认选中高亮部分
    myChart.dispatchAction({ type: 'showTip', seriesIndex: 0, dataIndex: indexOfMax });
    myChart.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: indexOfMax });
    // 当鼠标移入时，如果不是第一项，则把当前项置为选中，如果是第一项，则设置第一项为当前项
    myChart.on('mouseover', function (e) {
        if (e.componentSubType == "pie") {    //判断是否为饼图
            if (e.dataIndex != indexOfMax) {
                myChart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: indexOfMax });
                myChart.dispatchAction({ type: 'hideTip', seriesIndex: 0, dataIndex: indexOfMax });
            }
        }
    });
    //当鼠标离开时，把当前项置为选中 
    myChart.on('mouseout', function (e) {
        if (e.componentSubType == "pie") {    //判断是否为饼图
            indexOfMax = e.dataIndex;
            myChart.dispatchAction({ type: 'showTip', seriesIndex: 0, dataIndex: e.dataIndex });
            myChart.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: e.dataIndex });
        }
    });
}
/**
* 带虚线边框饼图的默认高亮
* @param myChart 
* @param data 
*/
export function setBorderPieHighlight(myChart, data) {
    var max = Math.max(...data),
        indexOfMax = data.indexOf(max);
    //设置默认选中高亮部分
    myChart.dispatchAction({ type: 'showTip', seriesIndex: 0, dataIndex: indexOfMax });
    myChart.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: indexOfMax });
    myChart.dispatchAction({ type: 'highlight', seriesIndex: 1, dataIndex: indexOfMax });
    // 当鼠标移入时，如果不是第一项，则把当前项置为选中，如果是第一项，则设置第一项为当前项
    myChart.on('mouseover', function (e) {
        if (e.componentSubType == "pie") {    //判断是否为饼图
            myChart.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: e.dataIndex });
            myChart.dispatchAction({ type: 'highlight', seriesIndex: 1, dataIndex: e.dataIndex });
            if (e.dataIndex != indexOfMax) {
                myChart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: indexOfMax });
                myChart.dispatchAction({ type: 'downplay', seriesIndex: 1, dataIndex: indexOfMax });
                myChart.dispatchAction({ type: 'hideTip', seriesIndex: 0, dataIndex: indexOfMax });
            }
        }
    });
    //当鼠标离开时，把当前项置为选中 
    myChart.on('mouseout', function (e) {
        if (e.componentSubType == "pie") {    //判断是否为饼图
            indexOfMax = e.dataIndex;
            myChart.dispatchAction({ type: 'showTip', seriesIndex: 0, dataIndex: e.dataIndex });
            myChart.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: e.dataIndex });
            myChart.dispatchAction({ type: 'highlight', seriesIndex: 1, dataIndex: e.dataIndex });
        }
    });
}