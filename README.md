# echarts_dome

## 项目描述
    components文件 ---存放的组件
      head文件     ---存放的头部组件
      nav文件      ---存放的导航组件和echart头部介绍
      bar文件      ---存放的常用的柱状图组件
      pie文件      ---存放的常用的饼图组件
    page文件       ---存放的页面
    store文件      ---存放vuex相关
    utils文件      ---存放工具类常用常量和方法

    项目中常用的echarts总结和整理
    常用饼图总结                ----- src/page/pieCharts
      饼图的各个组件            ----- src/components/pie
        普通饼图               ----- src/components/pie/pie
        普通3D饼图             ----- src/components/pie/3dpie
        普通环形饼图            ----- src/components/pie/annularPie
        带小圆点边框的环形图     ----- src/components/pie/dotAnnularPie 
        带内边框的环形图        ----- src/components/pie/InnerBorderAnnularPie 
        3D环形图              ----- src/components/pie/3dAnnularPie 
        动态环形图             ----- src/components/pie/motionAnnularPie 
        玫瑰饼图               ----- src/components/pie/rosePie 
        玫瑰环图               ----- src/components/pie/roseAnnularPie 
        鸡冠图                ----- src/components/pie/cockScombPie 

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
