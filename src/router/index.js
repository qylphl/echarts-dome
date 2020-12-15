import Vue from 'vue'
import Router from 'vue-router'

const Index = r => require.ensure([], () => r(require('@/page/index')), 'Index');
const Main = r => require.ensure([], () => r(require('@/page/main')), 'Main');
const PieCharts = r => require.ensure([], () => r(require('@/page/pieCharts')), 'PieCharts');   // 饼状图
const BarCharts = r => require.ensure([], () => r(require('@/page/barCharts')), 'BarCharts');   // 柱状图
const LineCharts = r => require.ensure([], () => r(require('@/page/lineCharts')), 'LineCharts');  // 折线图
const FunnelCharts = r => require.ensure([], () => r(require('@/page/funnelCharts')), 'FunnelCharts');  // 漏斗图
const MapCharts = r => require.ensure([], () => r(require('@/page/mapCharts')), 'MapCharts');  // 地图
const RadarCharts = r => require.ensure([], () => r(require('@/page/radarCharts')), 'RadarCharts');  // 雷达图
const WordCharts = r => require.ensure([], () => r(require('@/page/wordCharts')), 'WordCharts');  // 词云图
const ScatterCharts = r => require.ensure([], () => r(require('@/page/scatterCharts')), 'ScatterCharts');  // 散点气泡图
const BiaxialCharts = r => require.ensure([], () => r(require('@/page/biaxialCharts')), 'BiaxialCharts');  // 双轴图
const WaterCharts = r => require.ensure([], () => r(require('@/page/waterCharts')), 'WaterCharts');  // 水滴图

Vue.use(Router)

let scrollBehavior = function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    if (from.meta.keepAlive) {
      from.meta.savedPosition = document.body.scrollTop
    }
    return { x: 0, y: to.meta.savedPosition || 0 }
  }
}

export default new Router({
  scrollBehavior,
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/',
          component: BarCharts,
        },
      ]
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          component: BarCharts,
        },
        {
          path: 'barCharts',
          component: BarCharts,
        },
        {
          path: 'pieCharts',
          component: PieCharts,
        },
        {
          path: 'lineCharts',
          component: LineCharts,
        },
        {
          path: 'funnelCharts',
          component: FunnelCharts,
        },
        {
          path: 'mapCharts',
          component: MapCharts,
        },
        {
          path: 'radarCharts',
          component: RadarCharts,
        },
        {
          path: 'wordCharts',
          component: WordCharts,
        },
        {
          path: 'scatterCharts',
          component: ScatterCharts,
        },
        {
          path: 'biaxialCharts',
          component: BiaxialCharts,
        },
        {
          path: 'waterCharts',
          component: WaterCharts,
        },
      ]
    }
  ]
})
