<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="loadbox flex-box">
      <div class="three col" v-for="index in listNum" :key="index">
        <div
          :class="{ hamburger: true, 'is-active': isActive == index }"
          :id="'hamburger-' + index"
          @click="isActive = index"
        >
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
      <div class="three col" v-for="index in listNum2" :key="index">
        <div class="spinner-master">
          <input type="checkbox" :id="'spinner-form' + index" />
          <label :class="'spinner-spin' + index" :for="'spinner-form' + index">
            <div class="spinner diagonal part-1"></div>
            <div class="spinner horizontal"></div>
            <div class="spinner diagonal part-2"></div>
          </label>
        </div>
      </div>
      <div class="three col">
        <div class="wrapper">
          <button
            :class="{ nav: true, open: isChoose }"
            @click="isChoose = !isChoose"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
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
      default: "按钮点击切换动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      listNum: 12,
      listNum2: 4,
      isActive: 0,
      isChoose: false,
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
@import "style/aminationBtn/clickBtn.scss";
.loadbox {
  padding: 20px 20px 0;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  .three {
    position: relative;
    width: 19%;
    height: 150px !important;
    text-align: center;
    margin: 0 0 20px;
    background-color: rgba(2, 13, 70, 0.9);
    border-radius: 5px;
    box-sizing: border-box;
    &:last-child{
        margin-right: auto;
        margin-left: 1.3%;
    }
  }
}
</style>
