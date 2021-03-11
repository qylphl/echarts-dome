<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="polygon-nav-main flex-box">
      <ul class="dbx_menu cf">
        <li><a href="#">Home</a></li>
        <li>
          <a href="#">Lessons</a>
          <ul class="dbx_submenu">
            <li><a href="#">CSS3</a></li>
            <li><a href="#">HTML5</a></li>
            <li><a href="#">PHP</a></li>
            <li><a href="#">JavaScript</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Contacts</a>
          <ul class="dbx_submenu">
            <li><a href="#">CSS3</a></li>
            <li><a href="#">HTML5</a></li>
          </ul>
        </li>
        <li><a href="#">About Us</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "多边形导航菜单动效",
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
.polygon-nav-main {
  width: 100%;
  height: calc(100% - 64px);
  min-height: 430px;
  justify-content: center;
  .cf {
    *zoom: 1;
    &:before,
    &:after {
      content: " ";
      display: table;
    }
    &:after {
      clear: both;
    }
  }
  .dbx_menu {
    list-style: none;
    margin: 50px auto;
    width: 800px;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width: fit-content;
    & > li {
      background: #34495e;
      float: left;
      position: relative;
      -webkit-transform: skewX(25deg);
      transform: skewX(25deg);
      & > a {
        -webkit-transform: skewX(-25deg);
        transform: skewX(-25deg);
        padding: 1em 2em;
      }
    }
    li {
      &:hover {
        background: #e74c3c;
      }
    }
    a {
      display: block;
      color: #fff;
      text-transform: uppercase;
      text-decoration: none;
      font-family: Arial, Helvetica;
      font-size: 14px;
    }
    .dbx_submenu,
    .dbx_submenu li {
      opacity: 0;
      visibility: hidden;
    }
    .dbx_submenu {
      position: absolute;
      width: 200px;
      left: 50%;
      margin-left: -100px;
      -webkit-transform: skewX(-25deg);
      transform: skewX(-25deg);
      -webkit-transform-origin: left top;
      transform-origin: left top;
      & > li {
        & > a {
          padding: 1em 2em;
        }
        &::after {
          content: "";
          position: absolute;
          top: -125%;
          height: 100%;
          width: 100%;
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.9);
        }
        &:nth-child(odd) {
          -webkit-transform: skewX(-25deg) translateX(0);
          transform: skewX(-25deg) translateX(0);
          & > a {
            -webkit-transform: skewX(25deg);
            transform: skewX(25deg);
          }
          &::after {
            right: -50%;
            -webkit-transform: skewX(-25deg) rotate(3deg);
            transform: skewX(-25deg) rotate(3deg);
          }
        }
        &:nth-child(even) {
          -webkit-transform: skewX(25deg) translateX(0);
          transform: skewX(25deg) translateX(0);
          & > a {
            -webkit-transform: skewX(-25deg);
            transform: skewX(-25deg);
          }
          &::after {
            left: -50%;
            -webkit-transform: skewX(25deg) rotate(3deg);
            transform: skewX(25deg) rotate(3deg);
          }
        }
      }
      li {
        background-color: #34495e;
        position: relative;
        overflow: hidden;
        transition: 0.2s ease -webkit-transform;
      }
    }
  }
  .dbx_menu > li:hover .dbx_submenu,
  .dbx_menu > li:hover .dbx_submenu li {
    opacity: 1;
    visibility: visible;
  }
  .dbx_menu > li:hover .dbx_submenu li:nth-child(even) {
    -webkit-transform: skewX(25deg) translateX(15px);
    transform: skewX(25deg) translateX(15px);
  }
  .dbx_menu > li:hover .dbx_submenu li:nth-child(odd) {
    -webkit-transform: skewX(-25deg) translateX(-15px);
    transform: skewX(-25deg) translateX(-15px);
  }
}
</style>