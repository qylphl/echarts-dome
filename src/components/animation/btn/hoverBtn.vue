<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="loadbox flex-box">
        <button class="button button--winona button--border-thin button--round-s" data-text="Open"><span>Open</span></button>
        <button class="button button--ujarak button--border-thin button--text-thick">Publish</button>
        <button class="button button--wayra button--border-thin button--round-s">Open</button>
        <button class="button button--rayen button--border-thin button--text-thick button--text-upper button--size-s" data-text="Send"><span>Send</span></button>
        <button class="button button--aylen button--border-thin button--round-s">Hold</button>
        <button class="button button--tamaya button--round-s button--text-thick button--border-thin" data-text="Copy"><span>Copy</span></button>
        <button class="button button--pipaluk button--text-thick">Add</button>
        <button class="button button--isi button--text-thick button--text-upper button--size-s"><span>Archive</span></button>
        <button class="button button--wapasha button--round-s">Hide</button>
        <button class="button button--saqui button--inverted button--border-thin button--round-s" data-text="Follow">Follow</button>
        <button class="button button--nina button--text-thick button--text-upper button--size-s" data-text="Filter">
            <span>F</span><span>i</span><span>l</span><span>t</span><span>e</span><span>r</span>
        </button>
        <button class="button button--nanuk button--border-thin button--round-s">
            <span>F</span><span>i</span><span>l</span><span>t</span><span>e</span><span>r</span>
        </button>
        <button class="button button--nuka">Subscribe</button>
        <button class="button button--antiman button--text-thick button--text-upper button--size-s button--inverted-alt button--round-s button--border-thick"><span>Locate</span></button>
        <button class="button button--quidel button--round-s"><span>Delete</span></button>
        <button class="button button--shikoba button--round-s button--border-thin"><i class="button__icon iconfont iconbingtu"></i><span>Next</span></button>
        <button class="button lights-bg-btn">Hover me</button>
        <button class="button draw-border">Hover me</button>
        <button class="button border-btn">Hover me</button>
        <button class="button button--moema button--text-thick button--text-upper button--size-s">Make</button>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "按钮悬停动效",
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
@import "style/animationBtn/hoverBtn.scss";
.loadbox {
  padding: 20px 20px 0;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  .button {
    min-width: 150px !important;
    width: 150px !important;
    height: 54px !important;
    box-sizing: border-box;
    &:last-child {
        margin-right: auto;
    }
  }
  .button--pipaluk,
  .button--moema {
    padding: 1em 2em !important;
  }
  .button--tamaya {
    &::before {
      padding-top: 1.2em;
    }
  }
  .button--saqui {
      &::after {
           padding: 1.2em 2em;
      }
  }
  .button--rayen {
      &::before {
          padding: 1.2em 2em;
      }
  }
  .button--wapasha {
      background-color: #7986cb;
      &:hover {
          background-color: #fff;
      }
  }
  .button--nina {
    &::before{
        padding: 1.2em 0;
    }
  }
  .button--shikoba {
      .button__icon {
        left: 40px;
      }
  }
  // 霓虹效果
  .lights-bg-btn {
    border: 1px solid;
    background-color: transparent;
    text-transform: uppercase;
    color: #3f51b5;
    &:hover {
      background-color: #3f51b5;
      color: #fff;
      -webkit-box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
      -moz-box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
      box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
    }
  }
  // 边框效果
  .draw-border {
    border: 0;
    background: none;
    text-transform: uppercase;
    color: #4361ee;
    font-weight: bold;
    position: relative;
    outline: none;
    padding: 10px 20px;
    box-sizing: border-box;
    &::before,
    &::after {
      box-sizing: inherit;
      position: absolute;
      content: '';
      border: 2px solid transparent;
      width: 0;
      height: 0;
    }
    &::after {
      bottom: 0;
      right: 0;
    }
    &::before {
      top: 0;
      left: 0;
    }
    &:hover {
      &::before,
      &::after {
        width: 100%;
        height: 100%;
      }
      &::before {
        border-top-color: #4361ee;
        border-right-color: #4361ee;
        transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
      }
      &::after {
        border-bottom-color: #4361ee;
        border-left-color: #4361ee;
        transition: border-color 0s ease-out 0.6s, width 0.3s ease-out 0.6s, height 0.3s ease-out 1s;
      }
    }
  }
  // 圆角效果
  .border-btn {
    border-radius: 10px;
    background: #4361ee;
    color: white;
    padding: 15px 30px;
    outline: none;
    position: relative;
    transition: border-radius 3s;
    -webkit-transition: border-radius 3s;
    &:hover {
      border-bottom-right-radius: 50px;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }

}
</style>
