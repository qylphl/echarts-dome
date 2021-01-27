<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="navbar">
      主菜单
      <ul class="menu">
        <li><a href="#" class="iconfont iconzhuzhuangtu"></a></li>
        <li><a href="#" class="iconfont iconbingtu"></a></li>
        <li><a href="#" class="iconfont iconzhexiantu"></a></li>
        <li><a href="#" class="iconfont iconloudoutu"></a></li>
        <li><a href="#" class="iconfont iconditu"></a></li>
        <li><a href="#" class="iconfont iconleidatu"></a></li>
        <li><a href="#" class="iconfont iconyibiaopan"></a></li>
        <li><a href="#" class="iconfont iconciyun"></a></li>
        <li><a href="#" class="iconfont iconqipao"></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "圆形菜单悬停展开效果",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {};
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
.navbar {
  width: 150px;
  height: 150px;
  line-height: 150px;
  border-radius: 50%;
  background: #2094FB;
  margin: 140px auto 0;
  position: relative;
  cursor: pointer;
  text-align: center;
  font-size: 1.75em;
  font-weight: bold;
  color: #fff;
  transition: 0.24s 0.2s;
  .menu {
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    top: -75px;
    left: -75px;
    border: 150px solid transparent;
    cursor: default;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 1.4s 0.07s;
    z-index: -1;
    li {
      position: absolute;
      top: -100px;
      left: -100px;
      transform-origin: 100px 100px;
      transition: all 0.5s 0.1s;
      a {
        transition: all 0.4s ease 0s;
        width: 45px;
        height: 45px;
        line-height: 45px;
        border-radius: 50%;
        background: #2094FB;
        position: absolute;
        font-size: 60%;
        color: #fff;
        transition: 0.6s;
        text-decoration: none;
        &:hover {
          background-color: #2860f8;
          color: #fff;
        }
      }
    }
  }
  &:hover {
    background: rgba(32, 148, 251, 0.75);
    .menu {
      transition: transform 0.4s 0.08s, z-index 0s 0.5s;
      transform: scale(1);
      z-index: 1;
      li {
        transition: all 0.6s;
      }
    }
  }
}
.navbar:hover .menu li:nth-child(1) {
  transition-delay: 0.02s;
  transform: rotate(85deg);
}
.navbar:hover .menu li:nth-child(1) a {
  transition-delay: 0.04s;
  transform: rotate(635deg);
}
.navbar:hover .menu li:nth-child(2) {
  transition-delay: 0.04s;
  transform: rotate(125deg);
}
.navbar:hover .menu li:nth-child(2) a {
  transition-delay: 0.08s;
  transform: rotate(595deg);
}
.navbar:hover .menu li:nth-child(3) {
  transition-delay: 0.06s;
  transform: rotate(165deg);
}
.navbar:hover .menu li:nth-child(3) a {
  transition-delay: 0.12s;
  transform: rotate(555deg);
}
.navbar:hover .menu li:nth-child(4) {
  transition-delay: 0.08s;
  transform: rotate(205deg);
}
.navbar:hover .menu li:nth-child(4) a {
  transition-delay: 0.16s;
  transform: rotate(515deg);
}
.navbar:hover .menu li:nth-child(5) {
  transition-delay: 0.1s;
  transform: rotate(245deg);
}
.navbar:hover .menu li:nth-child(5) a {
  transition-delay: 0.2s;
  transform: rotate(475deg);
}
.navbar:hover .menu li:nth-child(6) {
  transition-delay: 0.12s;
  transform: rotate(285deg);
}
.navbar:hover .menu li:nth-child(6) a {
  transition-delay: 0.24s;
  transform: rotate(435deg);
}
.navbar:hover .menu li:nth-child(7) {
  transition-delay: 0.14s;
  transform: rotate(325deg);
}
.navbar:hover .menu li:nth-child(7) a {
  transition-delay: 0.28s;
  transform: rotate(395deg);
}
.navbar:hover .menu li:nth-child(8) {
  transition-delay: 0.16s;
  transform: rotate(365deg);
}
.navbar:hover .menu li:nth-child(8) a {
  transition-delay: 0.32s;
  transform: rotate(355deg);
}
.navbar:hover .menu li:nth-child(9) {
  transition-delay: 0.18s;
  transform: rotate(405deg);
}
.navbar:hover .menu li:nth-child(9) a {
  transition-delay: 0.36s;
  transform: rotate(315deg);
}
</style>
