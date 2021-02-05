<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="clock-content-box" :style="{ height: contentHeight + 'px' }">
      <div class="clock-wrapper">
        <div class="clock-border">
          <div class="clock">
            <ul class="minute-marks">
              <li class="five"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li class="five"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li class="five"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li class="five"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li class="five"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li class="five"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div class="hour" ref="hour" :style="{'transform': 'rotate(' + hour_rotate + 'deg)'}">
              <div class="hand"></div>
            </div>
            <div class="minute" ref="minute" :style="{'transform': 'rotate(' + (minute * 6) + 'deg)'}">
              <div class="hand"></div>
            </div>
            <div class="second" ref="second" :style="{'transform': 'rotate(' + (second * 6) + 'deg)'}">
              <div class="hand"></div>
            </div>
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
      default: "时钟动画",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      contentHeight: 0,
      hour_rotate: 0,
      minute: 0,
      second: 0,
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {
    this.init();
    this.setTime();
  },
  methods: {
    init() {
      this.contentHeight = document.getElementsByClassName("clock-content-box")[0].offsetWidth;
    },
    setTime() {
      var this_day = new Date(),
        hour = this_day.getHours() >= 12 ? this_day.getHours() - 12 : this_day.getHours(),
        minute = this_day.getMinutes(),
        second = this_day.getSeconds(),
        hour_rotate = hour * 30 + Math.floor(minute / 12) * 6,
        year = this_day.getFullYear(),
        month = this_day.getMonth() + 1 < 10 ? "0" + (this_day.getMonth() + 1) : this_day.getMonth() + 1,
        date = this_day.getDate() < 10 ? "0" + this_day.getDate() : this_day.getDate(),
        day = this_day.getDay();
      this.hour_rotate = hour_rotate;
      this.minute = minute;
      this.second = second;
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
@import "style/animationCss3/clock.scss";
.clock-content-box {
  width: 100%;
  position: relative;
}
</style>
