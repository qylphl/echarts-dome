<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="wrapper flex-box">
      <ul class="mainMenu">
        <li
          :class="{ item: true, 'choose-item': chooseType == index }"
          v-for="(msg, index) in menuList"
          :key="index"
        >
          <a class="btn" @click="chooseType = index"> {{ msg.title }} </a>
          <div class="subMenu" v-if="msg.second">
            <a v-for="(list, i) in msg.second" :key="'subMenu' + i">{{
              list
            }}</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "手风琴菜单动画",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      chooseType: 0,
      menuList: [
        { title: "我的帐户", second: ["item-1", "item-2", "item-3"] },
        { title: "关于我们", second: ["item-1", "item-2"] },
        { title: "技术支持", second: ["item-1", "item-2"] },
        { title: "退出登录" },
      ],
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {},
  methods: {},
  components: { navBar },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: calc(100% - 64px);
  position: relative;
  align-items: center;
  justify-content: center;
  .mainMenu {
    width: 250px;
    display: block;
    border-radius: 10px;
    overflow: hidden;
    .item {
      border-top: 1px solid #ef584a;
      overflow: hidden;
      .btn {
        display: block;
        padding: 15px 20px;
        background-color: #ff6f61;
        color: #fff;
        position: relative;
        cursor: pointer;
        &:before {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 10px solid #ff6f61;
          right: 15px;
          bottom: -10px;
          z-index: 9;
        }
        i {
          margin-right: 10px;
        }
      }
      .subMenu {
        background: #273057;
        overflow: hidden;
        transition: max-height 0.7s;
        max-height: 0;
        a {
          display: block;
          padding: 15px 20px;
          color: #fff;
          font-size: 14px;
          border-bottom: 1px solid #394c7f;
          position: relative;
          &:before {
            content: "";
            opacity: 0;
            transition: opacity 0.3s;
          }
          &:after {
            content: "";
            opacity: 0;
            transition: opacity 0.3s;
          }
          &:hover {
            background: #273057;
            background: -moz-linear-gradient(
              top,
              #273057 0%,
              #273057 50%,
              #394c7f 51%,
              #394c7f 100%
            );
            background: -webkit-linear-gradient(
              top,
              #273057 0%,
              #273057 50%,
              #394c7f 51%,
              #394c7f 100%
            );
            background: linear-gradient(
              to bottom,
              #273057 0%,
              #273057 50%,
              #394c7f 51%,
              #394c7f 100%
            );
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#273057', endColorstr='#394c7f',GradientType=0 );
            transition: all 0.3s;
            border-bottom: 1px solid #394c7f;
            &:before {
              content: "";
              position: absolute;
              height: 0;
              width: 6px;
              left: 0;
              top: 0;
              opacity: 1;
              /* background-color: #d8d824; */
              border-top: 24px solid transparent;
              border-left: 11px solid #fff;
              border-bottom: 24px solid transparent;
            }
            &:after {
              content: "";
              position: absolute;
              height: 0;
              width: 6px;
              right: 0px;
              top: 0;
              opacity: 1;
              /* background-color: #d8d824; */
              border-top: 24px solid transparent;
              border-right: 11px solid #fff;
              border-bottom: 24px solid transparent;
            }
          }
          &:last-child {
            border: none;
          }
        }
      }
    }
    .choose-item {
      .subMenu {
        max-height: 10em;
      }
    }
  }
}
</style>
