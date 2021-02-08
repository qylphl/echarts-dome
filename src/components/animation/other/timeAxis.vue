<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="main-timeline">
      <div class="timeline" v-for="(msg, index) in innerList" :key="index" :style="{'--color': msg.color}">
        <div class="timeline-content">
          <span class="year">{{ msg.year }}</span>
          <div class="inner-content">
            <h3 class="title">
              {{ msg.title }}
            </h3>
            <p class="description">
              {{ msg.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "时间轴效果",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      innerList: [
        {
          year: "2021",
          title: "Web Designer",
          color: "#ee4423",
          description:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.",
        },
        {
          year: "2020",
          title: "Web Designer",
          color: "#f68829",
          description:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.",
        },
        {
          year: "2019",
          title: "Web Designer",
          color: "#2991d0",
          description:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.",
        },
        {
          year: "2018",
          title: "Web Designer",
          color: "#9361aa",
          description:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.",
        },
        {
          year: "2017",
          title: "Web Designer",
          color: "#a7be26",
          description:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo quis.",
        },
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
.main-timeline {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 200px 4em 5em;
  box-sizing: border-box;
  font-family: "Microsoft YaHei", "Segoe UI", "Lucida Grande", Helvetica, Arial, sans-serif;
  background: #e7f3ff;
  &:before {
    content: "";
    width: 7px;
    height: calc(100% - 60px);
    background: #909090;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    box-sizing: border-box;
  }
  .timeline {
    width: 50%;
    padding-left: 50px;
    float: right;
    position: relative;
    box-sizing: border-box;
    --color: #ee4423;
    &:before {
      content: "";
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #909090;
      border: 7px solid #fff;
      position: absolute;
      top: 50%;
      left: -15px;
      transform: translateY(-50%);
      box-sizing: border-box;
    }
    &:after {
      content: "";
      display: block;
      border-right: 30px solid var(--color);
      border-top: 20px solid transparent;
      border-bottom: 20px solid transparent;
      position: absolute;
      top: 50%;
      left: 24px;
      transform: translateY(-50%);
      box-sizing: border-box;
    }
    .timeline-content {
      display: block;
      padding: 15px 25px;
      border-radius: 100px;
      background: var(--color);
      position: relative;
      box-sizing: border-box;
      &:before,
      &:after {
        content: "";
        display: block;
        width: 100%;
        clear: both;
        box-sizing: border-box;
      }
      .year {
        display: inline-block;
        font-size: 46px;
        font-weight: 600;
        color: #fff;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      .inner-content {
        width: 74%;
        float: right;
        padding: 10px 20px 10px 10px;
        background: #fff;
        border-radius: 0 100px 100px 0;
        color: var(--color);
        box-sizing: border-box;
        .title {
          font-size: 24px;
          font-weight: 600;
          text-transform: uppercase;
          margin: 0 0 5px 0;
        }
        .description {
          font-size: 14px;
          margin: 0 0 5px 0;
        }
      }
    }
    &:first-child,
    &:nth-child(even) {
      margin: 0;
    }
    &:nth-child(odd) {
      margin: -130px 0 0 0;
      .timeline-content {
        padding-right: 15px;
      }
    }
    &:nth-child(even) {
      padding: 0 50px 0 0;
      margin-bottom: 105px;
      &:before {
        left: auto;
        right: -15px;
      }
      &:after {
        border-right: none;
        border-left: 30px solid var(--color);
        left: auto;
        right: 24px;
      }
      .timeline-content {
        padding-left: 15px;
        .year {
          right: 25px;
        }
        .inner-content {
          float: none;
          border-radius: 100px 0 0 100px;
          text-align: right;
        }
      }
    }
  }
}
</style>
