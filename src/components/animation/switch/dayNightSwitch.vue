<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="day-night-switch-content-box flex-box">
      <input type="checkbox" id="toggle" class="toggle--checkbox" />
      <label for="toggle" class="toggle--label">
        <span class="toggle--label-background"></span>
      </label>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "昼夜切换开关动画",
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
.day-night-switch-content-box {
  position: relative;
  width: 100%;
  height: calc(100% - 64px);
  min-height: calc(500px - 64px);
  align-items: center;
  justify-content: center;
  --blue-background: #c2e9f6;
  --blue-border: #72cce3;
  --blue-color: #96dcee;
  --yellow-background: #fffaa8;
  --yellow-border: #f5eb71;
  /** dark side **/
  --indigo-background: #808fc7;
  --indigo-border: #5d6baa;
  --indigo-color: #6b7abb;
  --gray-border: #e8e8ea;
  --gray-dots: #e8e8ea;
  /** general **/
  --white: #fff;

  .toggle--checkbox {
    display: none;
    &:checked {
      /** This will all flip from sun to moon **/
      /** Change the label color **/
    }
  }
  .toggle--checkbox:checked ~ .background {
    background: var(--indigo-background);
  }
  .toggle--checkbox:checked + .toggle--label {
    background: var(--indigo-color);
    border-color: var(--indigo-border);
    /** Change the cloud to stars **/
    /** Change the sun into the moon **/
    /** Show the dimples on the moon **/
  }
  .toggle--checkbox:checked + .toggle--label .toggle--label-background {
    left: 60px;
    width: 5px;
  }
  .toggle--checkbox:checked + .toggle--label .toggle--label-background:before {
    width: 5px;
    height: 5px;
    top: -25px;
  }
  .toggle--checkbox:checked + .toggle--label .toggle--label-background:after {
    width: 5px;
    height: 5px;
    left: -30px;
    top: 20px;
  }
  .toggle--checkbox:checked + .toggle--label:before {
    background: var(--white);
    border-color: var(--gray-border);
    animation-name: switch;
    animation-duration: 350ms;
    animation-fill-mode: forwards;
  }
  .toggle--checkbox:checked + .toggle--label:after {
    transition-delay: 350ms;
    opacity: 1;
  }
  .toggle--label {
    /** Placeholder element, starting at blue **/
    width: 200px;
    height: 100px;
    background: var(--blue-color);
    border-radius: 100px;
    border: 5px solid var(--blue-border);
    display: flex;
    position: relative;
    transition: all 350ms ease-in;
    z-index: 10;
    /** The sun cloud and moon stars **/
    /** Sun/Moon element **/
    /** Gray dots on the moon **/
    &:before {
      animation-name: reverse;
      animation-duration: 350ms;
      animation-fill-mode: forwards;
      transition: all 350ms ease-in;
      content: "";
      width: 82px;
      height: 82px;
      border: 5px solid var(--yellow-border);
      top: 4px;
      left: 4px;
      position: absolute;
      border-radius: 82px;
      background: var(--yellow-background);
    }
    &:after {
      transition-delay: 0ms;
      transition: all 250ms ease-in;
      position: absolute;
      content: "";
      box-shadow: var(--gray-dots) -13px 0 0 2px,
        var(--gray-dots) -24px 14px 0 -2px;
      left: 143px;
      top: 23px;
      width: 10px;
      height: 10px;
      background: transparent;
      border-radius: 50%;
      opacity: 0;
    }
    .toggle--label-background {
      width: 10px;
      height: 5px;
      border-radius: 5px;
      position: relative;
      background: var(--white);
      left: 135px;
      top: 45px;
      transition: all 150ms ease-in;
      &:before {
        content: "";
        position: absolute;
        top: -5px;
        width: 40px;
        height: 5px;
        border-radius: 5px;
        background: var(--white);
        left: -20px;
        transition: all 150ms ease-in;
      }
      &:after {
        content: "";
        position: absolute;
        top: 5px;
        width: 40px;
        height: 5px;
        border-radius: 5px;
        background: var(--white);
        left: -10px;
        transition: all 150ms ease-in;
      }
    }
  }
  .background {
    position: absolute;
    left: 0;
    top: 0;
    background: var(--blue-background);
    z-index: 1;
    width: 100%;
    height: 100%;
    transition: all 250ms ease-in;
  }

  @keyframes switch {
    0% {
      left: 4px;
    }
    60% {
      left: 4px;
      width: 112px;
    }
    100% {
      left: 104px;
      width: 82px;
    }
  }
  @keyframes reverse {
    0% {
      left: 104px;
      width: 82px;
    }
    60% {
      left: 72px;
      width: 112px;
    }
    100% {
      left: 4px;
    }
  }
}
</style>