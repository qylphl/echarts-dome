import Vue from 'vue'
import Router from 'vue-router'

const Index = r => require.ensure([], () => r(require('@/page/index')), 'Index');
const PieCharts = r => require.ensure([], () => r(require('@/page/pieCharts')), 'PieCharts');
// const BarCharts = r => require.ensure([], () => r(require('@/components/bar/barCharts')), 'BarCharts');

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
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/pieCharts/:index',
          component: PieCharts,
        },
      ]
    }
  ]
})
