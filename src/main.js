// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import Router from 'vue-router';
import store from './store/store';
import './assets/icon/iconfont.css';
// 使用echarts
import echarts from 'echarts'
import 'echarts-liquidfill'
Vue.prototype.$echarts = echarts;

// 使用highcharts
import highcharts from 'highcharts'
// import VueHighCharts from 'vue-highcharts'
import highcharts3d from 'highcharts/highcharts-3d'

// 使用particles（星空粒子动效）
import particles from 'particles.js'
Vue.use(particles)

//解决Element/vue router连续点击多次路由报错解决方法
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.use(highcharts);
highcharts3d(highcharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
