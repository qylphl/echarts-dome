<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="loadbox-content flex-box">
      <div class="loader-content-box">
        <div class="loader loader-1">
          <div class="loader-outter"></div>
          <div class="loader-inner"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-2">
          <svg
            class="loader-star"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <polygon
              points="29.8 0.3 22.8 21.8 0 21.8 18.5 35.2 11.5 56.7 29.8 43.4 48.2 56.7 41.2 35.1 59.6 21.8 36.8 21.8 "
              fill="#18ffff"
            />
          </svg>
          <div class="loader-circles"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-3">
          <div class="dot dot1"></div>
          <div class="dot dot2"></div>
          <div class="dot dot3"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-4"></div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-5">
          <div class="loader-pacman"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-6">
          <div class="loader-inner"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-7">
          <div class="line line1"></div>
          <div class="line line2"></div>
          <div class="line line3"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-9">
          <svg
            class="loader-star star1"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="23.172px"
            height="23.346px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              fill="#c6ff00"
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9"
            />
          </svg>
          <svg
            class="loader-star star2"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="23.172px"
            height="23.346px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              fill="#c6ff00"
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  "
            />
          </svg>
          <svg
            class="loader-star star3"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="23.172px"
            height="23.346px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              fill="#c6ff00"
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  "
            />
          </svg>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-12">
          <svg
            class="loader-star star1"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="35px"
            height="35px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9"
            />
          </svg>
          <svg
            class="loader-star star2"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="35px"
            height="35px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9"
            />
          </svg>
          <svg
            class="loader-star star3"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="35px"
            height="35px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9"
            />
          </svg>
          <svg
            class="loader-star star4"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="35px"
            height="35px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9"
            />
          </svg>
          <svg
            class="loader-star star5"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="35px"
            height="35px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9"
            />
          </svg>
          <svg
            class="loader-star star6"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="35px"
            height="35px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9"
            />
          </svg>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-13">
          <div class="css-heart heart1"></div>
          <div class="css-heart heart2"></div>
          <div class="css-heart heart3"></div>
          <div class="css-heart heart4"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-14">
          <svg
            class="loader-star star-small"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="23.172px"
            height="23.346px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              fill="#01579b"
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  "
            ></polygon>
          </svg>
          <svg
            class="loader-star star-big"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="23.172px"
            height="23.346px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              fill="#40c4ff"
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  "
            ></polygon>
          </svg>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-18">
          <div class="css-star star1"></div>
          <div class="css-star star2"></div>
          <div class="css-star star3"></div>
          <div class="css-star star4"></div>
          <div class="css-star star5"></div>
          <div class="css-star star6"></div>
          <div class="css-star star7"></div>
          <div class="css-star star8"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-17">
          <div class="css-square square1"></div>
          <div class="css-square square2"></div>
          <div class="css-square square3"></div>
          <div class="css-square square4"></div>
          <div class="css-square square5"></div>
          <div class="css-square square6"></div>
          <div class="css-square square7"></div>
          <div class="css-square square8"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-20">
          <div class="css-diamond"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-21">
          <div class="css-times times1"></div>
          <div class="css-times times2"></div>
          <div class="css-times times3"></div>
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
      default: "各种风格加载动效",
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
@import "style/loading/styleLoading.scss";
.loadbox-content {
  padding: 20px 20px 0;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  .loader-content-box{
      width: 19%;
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      border-radius: 5px;
      background-color: rgba(2, 13, 70, .9);
  }
}
</style>
