<template>
  <div>
    <el-container>
      <el-header height="80px">
        <div class="header-left-content">
          <span class="header-line"></span>
          <p class="header-title">{{ Headline }}</p>
        </div>
        <div class="header-right-content">
          <!-- <img src="../assets/img/header_img.jpg" alt=""> -->
          <p class="header-right-content-title"></p>
        </div>
      </el-header>
      <el-container>
        <el-aside width="339px">
          <!-- 左边头部开始 -->
          <div class="aside-header">
            <!-- <img src="../../src/assets/img/logo.png" alt=""> -->
            <span>图表相关示例</span>
          </div>
          <!-- 左边头部结束-->
          <!-- 左边导航菜单开始 -->
          <el-menu
            class="el-menu-vertical-demo"
            :unique-opened="true"
            background-color="#21428f"
            text-color="#fff"
            active-text-color="#fff"
          >
            <div v-for="(msg, index) in menuList" :key="index">
              <el-submenu
                class="select-menu"
                :index="index + ''"
                v-if="msg.secondList && msg.secondList.length > 0"
              >
                <template slot="title">
                  <i :class="msg.iconCls"></i>
                  <span>{{ msg.title }}</span>
                </template>
                <el-menu-item
                  class="class-second-level"
                  v-for="(item, indexS) in msg.secondList"
                  @click="clickSecond(index + '-' + indexS, item.Vrouter)"
                  :key="indexS"
                >
                  <span class="line"></span>
                  <span class="second-level-title">{{ item.name }}</span>
                  <span
                    :class="{
                      circular: true,
                      'clickIndex-choose':
                        clickIndex == index + '-' + indexS ? true : false,
                    }"
                  ></span>
                </el-menu-item>
              </el-submenu>
              <el-menu-item class="unselect-menu" :index="index + ''" v-else>
                <i :class="msg.iconCls"></i>
                <span slot="title">{{ msg.title }}</span>
              </el-menu-item>
            </div>
          </el-menu>
          <!-- 左边导航菜单结束 -->
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Headline: "图表相关示例", // 大标题
      //导航菜单标题
      menuList: [
        {
          title: "饼状图相关图列",
          iconCls: "el-icon-i iconfont iconrenyuan",
          secondList: [
            {
              name: "饼图",
              Vrouter: "/pieCharts/1",
              iconCls: "el-icon-i el-icon-location",
            },
            {
              name: "环形图",
              Vrouter: "/pieCharts/2",
              iconCls: "el-icon-i el-icon-location",
            },
            {
              name: "玫瑰图",
              Vrouter: "/pieCharts/3",
              iconCls: "el-icon-i el-icon-location",
            },
            {
              name: "环饼嵌套图",
              Vrouter: "/pieCharts/4",
              iconCls: "el-icon-i el-icon-location",
            },
            {
              name: "旭日图",
              Vrouter: "/pieCharts/5",
              iconCls: "el-icon-i el-icon-location",
            },
          ],
        },
        {
          title: "柱状图相关图例",
          iconCls: "el-icon-i iconfont iconrenyuan",
          secondList: [
            {
              name: "来访大厅",
              Vrouter: "/barCharts",
              iconCls: "el-icon-i el-icon-location",
            },
            {
              name: "转发回收",
              Vrouter: "/table",
              iconCls: "el-icon-i el-icon-location",
            },
            {
              name: "来访接谈",
              Vrouter: "/visiting",
              iconCls: "el-icon-i el-icon-location",
            },
          ],
        },
        { title: "折线图相关图例", iconCls: "el-icon-i el-icon-location" },
        { title: "漏斗图相关图例", iconCls: "el-icon-i el-icon-location" },
        { title: "地图相关图例", iconCls: "el-icon-i el-icon-location" },
        { title: "雷达图相关图例", iconCls: "el-icon-i el-icon-location" },
        { title: "词云图相关图例", iconCls: "el-icon-i el-icon-location" },
        { title: "散点气泡图相关图例", iconCls: "el-icon-i el-icon-location" },
        { title: "水滴图相关图例", iconCls: "el-icon-i el-icon-location" },
        { title: "热力图相关图例", iconCls: "el-icon-i el-icon-location" },
        { title: "矩阵图相关图例", iconCls: "el-icon-i el-icon-location" },
      ],
      //选中二级菜单的index值
      clickIndex: "-1",
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var initTitleArr = this.clickIndex.split("-");
      this.Headline = this.menuList[initTitleArr[0]].secondList[
        initTitleArr[1]
      ].name;
    },
    clickSecond(index, r) {
      var titleArr = index.split("-");
      this.Headline = this.menuList[titleArr[0]].secondList[titleArr[1]].name;
      this.clickIndex = index;
      let router = r;
      this.$router.push(router);
    },
  },
};
</script>
<style lang="scss" scoped>
.el-container {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  .el-header {
    padding: 0 52px 0 365px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.45);
    z-index: 99;
    .header-left-content {
      display: flex;
      align-items: center;
      .header-line {
        display: inline-block;
        width: 5px;
        height: 22px;
        background-color: #1e48aa;
      }
      .header-title {
        font-size: 20px;
        color: #333;
        margin-left: 13px;
        font-weight: bold;
      }
    }
    .header-right-content {
      display: flex;
      align-items: center;
      img {
        margin-right: 15px;
      }
      .header-right-content-title {
        font-size: 18px;
        color: #999;
        .user-name {
          display: inline-block;
          color: #747474;
          padding: 0 11px;
        }
      }
    }
  }
  .el-aside {
    height: 100%;
    margin-top: 0;
    z-index: 11111;
    background-color: #21428e;
    overflow: hidden;
    .aside-header {
      height: 80px;
      display: flex;
      align-items: center;
      padding-left: 30px;
      /*box-shadow: 5px 5px 60px #162b5e;*/
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.45);
      background-color: #1e48aa;
      img {
        width: 52px;
        height: 50px;
        margin-right: 16px;
      }
      span {
        font-size: 32px;
        font-weight: bold;
        color: white;
      }
    }
    .el-menu-vertical-demo {
      width: 100%;
      height: calc(100% - 90px);
      margin-top: 11px;
      background-color: #1f459d !important;
      overflow-y: visible;
      overflow-x: hidden;
      cursor: pointer;
      &::-webkit-scrollbar-track-piece {
        background-color: #1f459d;
      }
      .select-menu {
        width: 339px;
        color: white;
        font-size: 22px;
        /deep/ .el-submenu__title {
          height: 75px;
          padding: 0 57px 0 30px !important;
          color: white;
          font-size: 22px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #3d5ba1;
          .el-icon-i {
            color: white;
            font-size: 22px;
            margin-right: 33px;
          }
          .el-submenu__icon-arrow {
            position: relative;
            top: 0;
            right: 0;
            margin-top: 0;
            margin-left: auto;
            color: white;
            font-size: 22px;
            &:before {
              content: "\e790";
            }
          }
        }
        /deep/ .el-menu {
          background-color: #1c356f !important;
          z-index: 0;
          .class-second-level {
            height: 57px !important;
            font-size: 22px !important;
            display: flex;
            align-items: center;
            padding-left: 90px !important;
            border-bottom: 1px solid #8a97b5;
            background-color: #1c356f !important;
            padding-right: 0;
            &:last-child {
              border: none;
            }
            .line {
              display: inline-block;
              height: 20px;
              margin-right: 23px;
              border-left: 3px solid #fff;
            }
            .second-level-title {
              display: inline-block;
              height: 57px;
              line-height: 57px;
            }
            .circular {
              display: inline-block;
              width: 18px;
              height: 18px;
              border-radius: 50%;
              background-color: #5774b8;
              margin-left: auto;
              margin-right: 58px;
            }
            .clickIndex-choose {
              background-color: #ffa200 !important;
            }
          }
        }
      }
      .unselect-menu {
        width: 339px;
        height: 75px;
        padding: 0 57px 0 30px !important;
        color: white;
        font-size: 22px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #3d5ba1;
        .el-icon-i {
          color: white;
          font-size: 22px;
          margin-right: 33px;
        }
      }
    }
  }
  .el-main {
    margin-top: 80px !important;
    background-color: #e9e9e9;
  }
}
</style>
