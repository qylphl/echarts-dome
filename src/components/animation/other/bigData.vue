<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="login-content-box">
      <!-- 加载 -->
      <div class="loading">
        <div class="loadbox">
          <img
            src="../../../../src/assets/img/bigDataImg/loading.gif"
          />页面加载中...
        </div>
      </div>
      <!-- 头部 -->
      <div class="head">
        <h1>金源面粉厂</h1>
        <div class="weather">
          <span id="showTime">{{ showTime }}</span>
        </div>
      </div>
      <!-- 主要内容 -->
      <div class="mainbox">
        <ul class="clearfix">
          <li>
            <div class="boxall">
              <div class="alltitle">消防主机报警</div>
              <div class="sycm">
                <ul class="clearfix">
                  <li v-for="(msg, index) in fireList" :key="index">
                    <h2>{{ msg.num }}</h2>
                    <span>{{ msg.title }}</span>
                  </li>
                </ul>
                <div
                  style="border-bottom: 1px solid rgba(255, 255, 255, 0.1)"
                ></div>
                <ul class="clearfix">
                  <li v-for="(msg, index) in fireListTwo" :key="'two' + index">
                    <h2>{{ msg.num }}</h2>
                    <span>{{ msg.title }}</span>
                  </li>
                </ul>
              </div>
              <div class="addnew">
                <div class="tit02"><span>误报种类</span></div>
                <div class="allnav" style="height: 2.2rem" id="wbzl"></div>
              </div>
              <div class="boxfoot"></div>
            </div>
            <div class="boxall">
              <div class="alltitle">无线烟感报警</div>
              <div class="allnav" style="height: 1.5rem" id="wxyg"></div>
              <div class="addnew">
                <div class="tit02"><span>误报种类</span></div>
                <div class="allnav" style="height: 2rem" id="wwbzl"></div>
              </div>
              <div class="boxfoot"></div>
            </div>
          </li>
          <li>
            <div
              class="bar"
              v-for="(msg, index) in networkInfo"
              :key="'network' + index"
            >
              <div class="barbox">
                <ul class="clearfix">
                  <li class="pulll_left counter">{{ msg.infoNum }}</li>
                  <li class="pulll_left counter">{{ msg.infoNum2 }}</li>
                </ul>
              </div>
              <div class="barbox2">
                <ul class="clearfix">
                  <li class="pulll_left">{{ msg.infoTitle }}</li>
                  <li class="pulll_left">{{ msg.infoTitle2 }}</li>
                </ul>
              </div>
            </div>
            <div class="map">
              <div class="map1">
                <img src="../../../../src/assets/img/bigDataImg/lbx.png" />
              </div>
              <div class="map2">
                <img src="../../../../src/assets/img/bigDataImg/jt.png" />
              </div>
              <div class="map3">
                <img src="../../../../src/assets/img/bigDataImg/map.png" />
              </div>
            </div>
            <div class="boxall">
              <div class="alltitle">电报警</div>
              <div
                class="allnav"
                id="dbj"
                style="width: 7.2rem; height: 3rem; margin-top: 0.3rem"
              ></div>
              <div class="boxfoot"></div>
            </div>
          </li>
          <li>
            <div class="boxall">
              <div class="alltitle">燃气报警</div>

              <div class="clearfix">
                <div class="sy" id="yqbj"></div>
              </div>
              <div class="addnew">
                <div class="tit02"><span>最新报警</span></div>
                <div class="adduser">
                  <ul
                    :style="{ top: pulltop }"
                    :class="{ 'animation-ul': animate }"
                  >
                    <li
                      class="clearfix"
                      v-for="(msg, index) in pullList"
                      :key="'pull' + index"
                    >
                      <span class="pulll_left">{{ msg.title }}</span>
                      <span class="pulll_right">{{ msg.inner }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="boxfoot"></div>
            </div>
            <div class="boxall">
              <div class="alltitle">红外报警</div>
              <div class="grid">
                <p class="line"></p>
              </div>
              <div class="grid-title">
                <span>本月报警数量 ：</span>
                <span style="color: #dc143c">809</span>
                <span style="margin-left: 15%">上月报警数量 ：</span>
                <span style="color: #ffeb7b">109</span>
              </div>
              <div class="boxfoot"></div>
            </div>
            <div class="boxall">
              <div class="alltitle">水报警</div>
              <div class="allnav" style="height: 3rem" id="sbj"></div>

              <div class="boxfoot"></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="back"></div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "登录背景动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      showTime: "",
      fireList: [
        { title: "本月报警数量", num: "1824" },
        { title: "上月报警数量", num: "1920" },
        { title: "环比增长", num: "5%" },
      ],
      fireListTwo: [
        { title: "主机(20001)", num: "824" },
        { title: "主机(20003)", num: "710" },
        { title: "主机(20002)", num: "200" },
      ],
      networkInfo: [
        {
          infoTitle: "联网单位数量",
          infoNum: "6069",
          infoTitle2: "联网消防主机数量",
          infoNum2: "410",
        },
        {
          infoTitle: "总点位数量",
          infoNum: "81189",
          infoTitle2: "总报警数量",
          infoNum2: "39410",
        },
      ],
      pullList: [
        { title: "大连市XX医院", inner: "一楼 - 吸烟 - 2019-10-11 09:58:58" },
        { title: "大连市XX集团", inner: "二楼 - 误报 - 2019-10-11 09:58:58" },
        { title: "开发区医院", inner: "三楼 - 粉尘 - 2019-10-11 09:58:58" },
        { title: "时代广场", inner: "十楼 - 误报 - 2019-10-11 09:58:58" },
        { title: "海昌物业", inner: "三楼 - 误报 - 2019-10-11 09:58:58" },
        { title: "文秀物业", inner: "二楼 - 误报 - 2019-10-11 09:58:58" },
        { title: "大连市XX医院", inner: "一楼 - 吸烟 - 2019-10-11 09:58:58" },
        { title: "大连市XX集团", inner: "二楼 - 误报 - 2019-10-11 09:58:58" },
        { title: "开发区医院", inner: "三楼 - 粉尘 - 2019-10-11 09:58:58" },
        { title: "时代广场", inner: "十楼 - 误报 - 2019-10-11 09:58:58" },
        { title: "海昌物业", inner: "三楼 - 误报 - 2019-10-11 09:58:58" },
        { title: "文秀物业", inner: "二楼 - 误报 - 2019-10-11 09:58:58" },
      ],
      pulltop: "0",
      animate: false,
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {
    this.nowTime();
    this.rollAnimation();
  },
  methods: {
    nowTime() {
      setTimeout(this.time, 1000);
    },
    time() {
      clearTimeout(this.nowTime);
      var dt = new Date(),
        y = dt.getFullYear(),
        mt = dt.getMonth() + 1,
        day = dt.getDate(),
        h = dt.getHours(),
        m = dt.getMinutes(),
        s = dt.getSeconds();
      this.showTime =
        y + "年" + mt + "月" + day + "-" + h + "时" + m + "分" + s + "秒";
      setTimeout(this.time, 1000);
    },
    rollAnimation() {
      var that = this,
        ls2 = this.pullList.length / 2 + 1,
        a = 0;
      setInterval(() => {
        a++;
        if (a == ls2) {
          that.animate = false;
          a = 0;
        } else {
          that.animate = true;
        }
        that.pulltop = "-" + 35 * a + "px";
      }, 2300);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.login-content-box {
  position: relative;
  height: 840px;
  width: 100%;
  background: #141e6e;
  background: #000d4a url("../../../../src/assets/img/bigDataImg/bg.jpg") center
    top;
  background-size: cover;
  color: #666;
  padding-bottom: 30px;
  // 加载样式
  .loading {
    display: none;
    width: 100%;
    height: 100%;
    position: relative;
    font-size: 18px;
    z-index: 100000000;
    width: 100%;
    height: 100%;
    background: #1a1a1c;
    text-align: center;
    .loadbox {
      position: absolute;
      width: 160px;
      height: 150px;
      color: #324e93;
      left: 50%;
      top: 50%;
      margin-top: -100px;
      margin-left: -75px;
      img {
        margin: 10px auto 30px;
        display: block;
        width: 40px;
      }
    }
  }
  // 头部样式
  .head {
    height: 85px;
    background: url("../../../../src/assets/img/bigDataImg/head_bg.png")
      no-repeat center;
    background-size: 100% 100%;
    position: relative;
    h1 {
      color: #fff;
      text-align: center;
      font-size: 30px;
      line-height: 75px;
    }
    // 右侧实时时间
    .weather {
      position: absolute;
      right: 18px;
      top: 0;
      line-height: 54px;
      span {
        color: rgba(255, 255, 255, 0.7);
        font-size: 16px;
      }
    }
  }
  // 主要内容
  .mainbox {
    .clearfix {
      &:after,
      &:before {
        display: table;
        content: " ";
      }
      &:after {
        clear: both;
      }
      .pulll_left {
        float: left;
      }
      .pulll_right {
        float: right;
      }
    }
    > ul {
      > li {
        width: 30%;
        float: left;
        padding: 0 15px;
        &:nth-child(2) {
          width: 40%;
          padding: 0;
          .bar {
            background: rgba(101, 132, 226, 0.1);
            padding: 0 15px 15px;
            &:first-child {
              padding-top: 15px;
            }
            .barbox li,
            .barbox2 li {
              width: 50%;
              text-align: center;
              position: relative;
            }
            .barbox {
              border: 1px solid rgba(25, 186, 139, 0.17);
              position: relative;
              &:before,
              &:after {
                position: absolute;
                width: 30px;
                height: 10px;
                content: "";
              }
              &:before {
                border-left: 2px solid #02a6b5;
                left: 0;
                border-top: 2px solid #02a6b5;
              }
              &:after {
                border-right: 2px solid #02a6b5;
                right: 0;
                bottom: 0;
                border-bottom: 2px solid #02a6b5;
              }
              li {
                font-size: 24px;
                color: #ffeb7b;
                padding: 4px 0;
                font-family: Gotham, "Helvetica Neue", Helvetica, Arial,
                  "sans-serif";
                font-weight: bold;
                &:first-child {
                  &:before {
                    position: absolute;
                    content: "";
                    height: 50%;
                    width: 1px;
                    background: rgba(255, 255, 255, 0.2);
                    right: 0;
                    top: 25%;
                  }
                }
              }
            }
            .barbox2 {
              li {
                font-size: 18px;
                color: #637c9f;
                padding-top: 10px;
              }
            }
          }
          .map {
            position: relative;
            height: 330px;
            z-index: 9;
            .map1,
            .map2,
            .map3 {
              position: absolute;
              img {
                width: 100%;
              }
            }
            .map1 {
              width: 300px;
              height: 300px;
              z-index: 2;
              top: 15px;
              left: 50%;
              margin-left: -150px;
              animation: myfirst2 15s infinite linear;
            }
            .map2 {
              width: 280px;
              top: 25px;
              left: 50%;
              margin-left: -140px;
              z-index: 3;
              opacity: 0.2;
              animation: myfirst 10s infinite linear;
            }
            .map3 {
              width: 240px;
              top: 45px;
              left: 50%;
              margin-left: -120px;
              z-index: 1;
            }
            .map4 {
              width: 100%;
              height: 4.3rem;
              position: relative;
              left: -50%;
              top: 2%;
              margin-top: 0.2rem;
              z-index: 5;
            }
          }
        }
      }
    }
    .boxall:before,
    .boxfoot:before {
      border-left: 2px solid #02a6b5;
      left: 0;
    }
    .boxall:after,
    .boxfoot:after {
      border-right: 2px solid #02a6b5;
      right: 0;
    }
    .boxall {
      border: 1px solid rgba(25, 186, 139, 0.17);
      padding: 0 20px 20px;
      background: rgba(255, 255, 255, 0.04)
        url("../../../../src/assets/img/bigDataImg/line.png");
      background-size: 100% auto;
      position: relative;
      margin-bottom: 10px;
      z-index: 20;
      &:before,
      &:after {
        position: absolute;
        width: 10px;
        height: 10px;
        content: "";
        border-top: 2px solid #02a6b5;
        top: 0;
      }
      .alltitle {
        font-size: 22px;
        color: #fff;
        text-align: center;
        line-height: 60px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
    .boxfoot {
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
      &:before,
      &:after {
        position: absolute;
        width: 10px;
        height: 10px;
        content: "";
        border-bottom: 2px solid #02a6b5;
        bottom: 0;
      }
    }
    // 消防主机报警
    .sycm {
      ul {
        margin-left: -20px;
        margin-right: -20px;
        padding: 16px 0;
        li {
          float: left;
          width: 33.33%;
          text-align: center;
          position: relative;
          &:before {
            position: absolute;
            content: "";
            height: 30%;
            width: 1px;
            background: rgba(255, 255, 255, 0.1);
            right: 0;
            top: 15%;
          }
          &:last-child {
            &:before {
              width: 0;
            }
          }
          h2 {
            font-size: 23px;
            color: #c5ccff;
          }
          span {
            font-size: 14px;
            color: #fff;
            opacity: 0.5;
          }
        }
      }
    }
    .tit02 {
      text-align: center;
      margin: 20px 0;
      position: relative;
      &:before,
      &:after {
        position: absolute;
        width: 26%;
        height: 1px;
        background: rgba(25, 186, 139, 0.2);
        content: "";
        top: 12px;
      }
      &:after {
        right: 0;
      }
      &:before {
        left: 0;
      }
      span {
        border: 1px solid rgba(25, 186, 139, 0.17);
        letter-spacing: 2px;
        padding: 1px 20px;
        background: rgba(255, 255, 255, 0.05);
        font-size: 16px;
        color: #49bcf7;
      }
    }
    // 燃气警报表格
    .sy {
      float: left;
      width: 300px;
      height: 160px;
      margin-top: -25px;
    }
    // 燃气警报下走马灯
    .adduser {
      position: relative;
      height: 105px;
      overflow: hidden;
      .animation-ul {
        transition: all ease-in-out 0.8s;
      }
      ul {
        width: 100%;
        position: absolute;
        top: 0;
        // transition: all ease-in-out .3s;
        li {
          height: 35px;
          img {
            width: 40px;
            border-radius: 50px;
            margin-right: 10px;
            display: inline-block;
            vertical-align: middle;
          }
          span {
            line-height: 35px;
            font-size: 13px;
            color: rgba(255, 255, 255, 0.6);
          }
        }
      }
    }
    // 红外报警器部分滚动条
    .grid {
      margin-top: 5%;
      width: 100%;
      height: 10px;
      display: grid;
      grid-template-columns: repeat(20, 1fr);
      grid-column-gap: 14px;
      .line {
        display: inline-block;
        position: relative;
        width: 100%;
        height: 5px;
        &::before,
        &::after {
          display: inline-block;
          content: "";
          position: absolute;
          width: 300px;
          height: 100%;
          border-radius: 7px;
          background-color: #ff0000;
        }
        &::before {
          animation: first-line ease-in-out 4s var(--delay) infinite alternate;
        }
        &::after {
          bottom: 0;
          background-color: #b22222;
          width: calc(80% - 10px);
          animation: second-line ease-in-out 4s var(--delay) infinite alternate;
        }
        &:nth-child(1) {
          --delay: calc(-0.1s);
        }
      }
    }
    // 红外报警器底部文字
    .grid-title {
      span {
        font-size: 13px;
        &:nth-child(odd) {
          color: #fff;
          opacity: 0.5;
        }
        &:nth-child(even) {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }
}
@keyframes first-line {
  70% {
    width: calc(80% - 10px);
  }
  100% {
    background-color: #ff0000;
  }
}
@keyframes myfirst2 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

@keyframes myfirst {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-359deg);
  }
}
</style>
