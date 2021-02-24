# echarts_dome

## 项目描述
    components文件          ---存放的组件
      + head文件              ---存放的头部组件
      + nav文件               ---存放的导航组件和echart头部介绍
      + chartsPublic文件      ---存放的通用的图表组件
      + bar文件               ---存放的常用的柱状图组件
      + pie文件               ---存放的常用的饼图组件
      + line文件              ---存放的常用的折线图组件
      + funnel文件            ---存放的常用的漏斗图组件
      + map文件               ---存放的常用的地图组件
      + radar文件             ---存放的常用的雷达图组件
      + word文件              ---存放的常用的词云图组件
      + scatter文件           ---存放的常用的散点气泡图组件
      + water文件             ---存放的常用的水滴图组件
      + heat文件              ---存放的常用的热力图组件
      + animation文件         ---存放的动效相关组件
        ++ nav文件              ---存放的导航和菜单动效组件
        ++ form文件             ---存放的表单动效组件
        ++ btn文件              ---存放的按钮动效组件
        ++ choice文件           ---存放的选择和筛选动效组件
        ++ login文件            ---存放的登录动效组件
        ++ background文件       ---存放的背景动效组件
        ++ switch文件           ---存放的轮播和切换动效组件
        ++ loading文件          ---存放的加载和上传动效组件
        ++ css3文件             ---存放的css3动画组件
        ++ svg文件              ---存放的svg动画组件
        ++ canvas文件           ---存放的canvas动画组件
        ++ other文件            ---存放的其他动效组件
--------------------------------------------------------------
    page文件                 ---存放的页面
      + main.vue              ---主入口页面
      + barCharts.vue         ---图表/柱状图
      + pieCharts.vue         ---图表/饼状图
      + lineCharts.vue        ---图表/折线图
      + funnelCharts.vue      ---图表/漏斗图
      + mapCharts.vue         ---图表/地图
      + radarCharts.vue       ---图表/雷达图
      + dashboardCharts.vue   ---图表/仪表盘
      + wordCharts.vue        ---图表/词云图
      + scatterCharts.vue     ---图表/散点气泡图
      + biaxialCharts.vue     ---图表/双轴图
      + waterCharts.vue       ---图表/水滴图
      + matrixCharts.vue      ---图表/矩阵图
      + heatCharts.vue        ---图表/热力图
      + animationNav.vue      ---动效/导航和菜单
      + animationBtn.vue      ---动效/表单和按钮
      + animationChoice.vue   ---动效/选择和筛选
      + animationLoginBg.vue  ---动效/登录和背景
      + animationSwitch.vue   ---动效/轮播和切换
      + animationLoading.vue  ---动效/加载和上传
      + animationCss3.vue     ---动效/CSS3动画
      + animationSvg.vue      ---动效/SVG动画
      + animationCanvas.vue   ---动效/Canvas动画
      + animationOther.vue    ---动效/其他
      + assembly.vue          ---组件
      + standard.vue          ---规范
--------------------------------------------------------------
    store文件                ---存放vuex相关
--------------------------------------------------------------
    utils文件                ---存放工具类常用常量和方法
      + constant.js           ---全局公用配置项集合
      + chartsClass.js        ---图表配置公用方法（饼图默认选中高亮）
      + barOption.js          ---柱状图option配置项集合
      + pieOption.js          ---饼状图option配置项集合
      + lineOption.js         ---折线图option配置项集合
      + funnelOption.js       ---漏斗图option配置项集合
      + radarOption.js        ---雷达图option配置项集合
      + dashboardOption.js    ---仪表盘option配置项集合
      + scatterOption.js      ---散点气泡图option配置项集合
      + biaxialOption.js      ---双轴图option配置项集合
      + matrixOption.js       ---矩阵图option配置项集合
      + heatOption.js         ---热力图option配置项集合
--------------------------------------------------------------
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
