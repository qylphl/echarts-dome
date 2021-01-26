<template>
  <div
    class="nav-box"
    :style="{ width: width + 'px', 'background-color': backgroundColor }"
  >
    <ul class="nav-content" :style="{ color: navListColor }">
      <li
        :class="{
          'flex-box': true,
          'nav-list': true,
          'choose-nav-list': index == chooseNavType,
        }"
        v-for="(item, index) in navList"
        :key="index"
        @click="chooseNav(index, item.Vrouter)"
      >
        <i :class="item.iconCls"></i>
        <span>{{ item.title }}</span>
      </li>
      <p class="copyright flex-box">
        <img
          class="logo-icon"
          src="../../../src/assets/img/logo.png"
          alt=""
        /><span>行业推广一部版权所有</span>
      </p>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    backgroundColor: {
      type: String,
    },
    navListColor: {
      default: "#333",
      type: String,
    },
    defaultNavType: {
      default: 0,
      type: Number,
    },
    defaultActive: {
      // 默认路由
      type: String,
    },
    width: {
      default: 272,
      type: Number,
    },
    menuList: {
      type: Array,
    },
  },
  data() {
    return {
      navList: this.menuList,
      chooseNavType: this.defaultNavType, //默认选中的nav
    };
  },
  mounted() {},
  watch: {
    // 监听父组件中传入默认选中type的值改变
    defaultNavType: {
      immediate: true,
      handler(val) {
        this.chooseNavType = val;
      },
    },
    menuList: {
      immediate: true,
      handler(val) {
        this.navList = val;
      },
    },
  },
  methods: {
    chooseNav(index, router) {
      this.chooseNavType = index;
      this.$router.push("/main/" + router);
      this.$emit("chooseNav", {
        chooseNavType: this.chooseNavType,
        router: router,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.nav-box {
  height: 100%;
  box-shadow: 0 0 8px 0 rgba(98, 116, 207, 0.35);
  padding-top: 19px;
  box-sizing: border-box;
  .nav-content {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: visible;
    .nav-list {
      width: 100%;
      height: 64px;
      align-items: center;
      padding: 0 24px;
      box-sizing: border-box;
      border-right: 6px solid transparent;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      &:hover span {
        color: #2f7ef6;
      }
      i {
        display: inline-block;
        font-size: 24px;
      }
      span {
        display: inline-block;
        font-size: 24px;
        padding-left: 18px;
      }
    }
    .choose-nav-list {
      background-color: #2f7ef615;
      color: #2f7ef6 !important;
      border-color: #005ff0;
    }
    .copyright {
      position: absolute;
      bottom: 21px;
      font-size: 18px;
      padding-left: 20px;
      align-items: center;
      .logo-icon {
        margin-right: 7px;
      }
    }
  }
}
</style>
