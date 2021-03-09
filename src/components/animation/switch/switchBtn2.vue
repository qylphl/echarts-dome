<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="switch-content-box">
      <section>
        <h2>Checkbox with Animated Marker</h2>
        <div class="section-row">
          <!-- Active Not Checked Checkbox with Animated Marker -->
          <div class="cb-item_animated-marker">
            <!-- Checking and unchecking of the checkbox is toggling automatically by HTML with each click -->
            <!-- For disabling the input please add :disabled attribute to the current input -->
            <!-- All of the possible input states are listed below -->
            <input
              type="checkbox"
              id="cb-item_with-marker-1"
              class="cb-item_input"
            />
            <label for="cb-item_with-marker-1" class="cb-item_label">
              <span class="cb-item_label-content">Active Checkbox</span>
              <span class="cb-item_marker">
                <span class="cb-item_marker_short-line"></span>
                <span class="cb-item_marker_long-line"></span>
              </span>
            </label>
          </div>
          <!-- END -->
          <!-- Active Checked Checkbox with Animated Marker -->
          <div class="cb-item_animated-marker">
            <input
              type="checkbox"
              id="cb-item_with-marker-2"
              class="cb-item_input"
              checked=""
            />
            <label for="cb-item_with-marker-2" class="cb-item_label">
              <span class="cb-item_label-content">Active Checkbox</span>
              <span class="cb-item_marker">
                <span class="cb-item_marker_short-line"></span>
                <span class="cb-item_marker_long-line"></span>
              </span>
            </label>
          </div>
          <!-- END -->
          <!-- END Disabled Not Checked Checkbox with Animated Marker -->
          <div class="cb-item_animated-marker">
            <input
              type="checkbox"
              id="cb-item_with-marker-3"
              class="cb-item_input"
              disabled=""
            />
            <label for="cb-item_with-marker-3" class="cb-item_label">
              <span class="cb-item_label-content">Disabled Checkbox</span>
              <span class="cb-item_marker">
                <span class="cb-item_marker_short-line"></span>
                <span class="cb-item_marker_long-line"></span>
              </span>
            </label>
          </div>
          <!-- END -->
          <!-- Disabled Checked Checkbox with Animated Marker -->
          <div class="cb-item_animated-marker">
            <input
              type="checkbox"
              id="cb-item_with-marker-4"
              class="cb-item_input"
              disabled=""
              checked=""
            />
            <label for="cb-item_with-marker-4" class="cb-item_label">
              <span class="cb-item_label-content">Disabled Checked</span>
              <span class="cb-item_marker">
                <span class="cb-item_marker_short-line"></span>
                <span class="cb-item_marker_long-line"></span>
              </span>
            </label>
          </div>
          <!-- END -->
        </div>
      </section>
      <section>
        <h2>Checkbox with On/Off Toggler</h2>
        <div class="section-row">
          <!-- Active Not Checked Checkbox with On/Off Toggler -->
          <div class="cb-item_toggler">
            <!-- Checking and unchecking of the checkbox is toggling automatically by HTML with each click -->
            <!-- For disabling the input please add :disabled attribute to the current input -->
            <!-- All of the possible input states are listed below -->
            <input
              type="checkbox"
              id="cb-item_toggler-1"
              class="cb-item_input"
            />
            <label for="cb-item_toggler-1" class="cb-item_label">
              <span class="cb-item_marker"></span>
              <span class="cb-item_label-off">Off</span>
              <span class="cb-item_label-on">On</span>
            </label>
          </div>
          <!-- END -->
          <!-- Active Checked Checkbox with On/Off Toggler -->
          <div class="cb-item_toggler">
            <input
              type="checkbox"
              id="cb-item_toggler-2"
              class="cb-item_input"
              checked=""
            />
            <label for="cb-item_toggler-2" class="cb-item_label">
              <span class="cb-item_marker"></span>
              <span class="cb-item_label-off">Off</span>
              <span class="cb-item_label-on">On</span>
            </label>
          </div>
          <!-- END -->
          <!-- Disabled Not Checked Checkbox with On/Off Toggler -->
          <div class="cb-item_toggler">
            <input
              type="checkbox"
              id="cb-item_toggler-3"
              class="cb-item_input"
              disabled=""
            />
            <label for="cb-item_toggler-3" class="cb-item_label">
              <span class="cb-item_marker"></span>
              <span class="cb-item_label-off">Off</span>
              <span class="cb-item_label-on">On</span>
            </label>
          </div>
          <!-- END -->
          <!-- Disabled Checked Checkbox with On/Off Toggler -->
          <div class="cb-item_toggler">
            <input
              type="checkbox"
              id="cb-item_toggler-4"
              class="cb-item_input"
              disabled=""
              checked=""
            />
            <label for="cb-item_toggler-4" class="cb-item_label">
              <span class="cb-item_marker"></span>
              <span class="cb-item_label-off">Off</span>
              <span class="cb-item_label-on">On</span>
            </label>
          </div>
          <!-- END -->
        </div>
      </section>
      <section>
        <h2>Checkbox Switcher Style #1</h2>
        <div class="section-row">
          <!-- Active Not Checked Checkbox Switcher Style #1 -->
          <div class="cb-item_ios-style">
            <!-- Checking and unchecking of the checkbox is toggling automatically by HTML with each click -->
            <!-- For disabling the input please add :disabled attribute to the current input -->
            <!-- All of the possible input states are listed below -->
            <input
              type="checkbox"
              id="cb-item_ios-style-1"
              class="cb-item_input"
            />
            <label for="cb-item_ios-style-1" class="cb-item_label">
              <span class="cb-item_marker"></span>
            </label>
          </div>
          <!-- END -->
          <!-- Active Checked Checkbox Switcher Style #1 -->
          <div class="cb-item_ios-style">
            <input
              type="checkbox"
              id="cb-item_ios-style-2"
              class="cb-item_input"
              checked=""
            />
            <label for="cb-item_ios-style-2" class="cb-item_label">
              <span class="cb-item_marker"></span>
            </label>
          </div>
          <!-- END -->
          <!-- Disabled Not Checked Checkbox Switcher Style #1 -->
          <div class="cb-item_ios-style">
            <input
              type="checkbox"
              id="cb-item_ios-style-3"
              class="cb-item_input"
              disabled=""
            />
            <label for="cb-item_ios-style-3" class="cb-item_label">
              <span class="cb-item_marker"></span>
            </label>
          </div>
          <!-- END -->
          <!-- Disabled Checked Checkbox Switcher Style #1 -->
          <div class="cb-item_ios-style">
            <input
              type="checkbox"
              id="cb-item_ios-style-4"
              class="cb-item_input"
              disabled=""
              checked=""
            />
            <label for="cb-item_ios-style-4" class="cb-item_label">
              <span class="cb-item_marker"></span>
            </label>
          </div>
          <!-- END -->
        </div>
      </section>
      <section>
        <h2>Checkbox Switcher Style #2</h2>
        <div class="section-row">
          <!-- Active Not Checked Checkbox Switcher Style #2 -->
          <div class="cb-item_android-style">
            <!-- Checking and unchecking of the checkbox is toggling automatically by HTML with each click -->
            <!-- For disabling the input please add :disabled attribute to the current input -->
            <!-- All of the possible input states are listed below -->
            <input
              type="checkbox"
              id="cb-item_android-style-1"
              class="cb-item_input"
            />
            <label for="cb-item_android-style-1" class="cb-item_label">
              <span class="cb-item_marker"></span>
            </label>
          </div>
          <!-- END -->
          <!-- Active Checked Checkbox Switcher Style #2 -->
          <div class="cb-item_android-style">
            <input
              type="checkbox"
              id="cb-item_android-style-2"
              class="cb-item_input"
              checked=""
            />
            <label for="cb-item_android-style-2" class="cb-item_label">
              <span class="cb-item_marker"></span>
            </label>
          </div>
          <!-- END -->
          <!-- Disabled Not Checked Checkbox Switcher Style #2 -->
          <div class="cb-item_android-style">
            <input
              type="checkbox"
              id="cb-item_android-style-3"
              class="cb-item_input"
              disabled=""
            />
            <label for="cb-item_android-style-3" class="cb-item_label">
              <span class="cb-item_marker"></span>
            </label>
          </div>
          <!-- END -->
          <!-- Disabled Checked Checkbox Switcher Style #2 -->
          <div class="cb-item_android-style">
            <input
              type="checkbox"
              id="cb-item_android-style-4"
              class="cb-item_input"
              disabled=""
              checked=""
            />
            <label for="cb-item_android-style-4" class="cb-item_label">
              <span class="cb-item_marker"></span>
            </label>
          </div>
          <!-- END -->
        </div>
      </section>
      <section>
        <h2>Checkbox Switcher Style #3</h2>
        <div class="section-row">
          <!-- Active Not Checked Checkbox Switcher Style #3 -->
          <div class="cb-item_bar">
            <!-- Checking and unchecking of the checkbox is toggling automatically by HTML with each click -->
            <!-- For disabling the input please add :disabled attribute to the current input -->
            <!-- All of the possible input states are listed below -->
            <input type="checkbox" id="cb-item_bar-1" class="cb-item_input" />
            <label for="cb-item_bar-1" class="cb-item_label">
              <span class="cb-item_marker"></span>
            </label>
          </div>
          <!-- END -->
          <!-- Active Checked Checkbox Switcher Style #3 -->
          <div class="cb-item_bar">
            <input
              type="checkbox"
              id="cb-item_bar-2"
              class="cb-item_input"
              checked=""
            />
            <label for="cb-item_bar-2" class="cb-item_label">
              <span class="cb-item_marker"></span>
            </label>
          </div>
          <!-- END -->
          <!-- Disabled Not Checked Checkbox Switcher Style #3 -->
          <div class="cb-item_bar">
            <input
              type="checkbox"
              id="cb-item_bar-3"
              class="cb-item_input"
              disabled=""
            />
            <label for="cb-item_bar-3" class="cb-item_label">
              <span class="cb-item_marker"></span>
            </label>
          </div>
          <!-- END -->
          <!-- Disabled Checked Checkbox Switcher Style #3 -->
          <div class="cb-item_bar">
            <input
              type="checkbox"
              id="cb-item_bar-4"
              class="cb-item_input"
              disabled=""
              checked=""
            />
            <label for="cb-item_bar-4" class="cb-item_label">
              <span class="cb-item_marker"></span>
            </label>
          </div>
          <!-- END -->
        </div>
      </section>
      <section>
        <h2>Checkbox Switcher Style #4</h2>
        <div class="section-row">
          <!-- Active Not Checked Checkbox Switcher Style #4 -->
          <div class="cb-item_wave">
            <!-- Checking and unchecking of the checkbox is toggling automatically by HTML with each click -->
            <!-- For disabling the input please add :disabled attribute to the current input -->
            <!-- All of the possible input states are listed below -->
            <input type="checkbox" id="cb-item_wave-1" class="cb-item_input" />
            <label for="cb-item_wave-1" class="cb-item_label">
              <span class="cb-item_marker"></span>
            </label>
          </div>
          <!-- END -->
          <!-- Active Checked Checkbox Switcher Style #4 -->
          <div class="cb-item_wave">
            <input
              type="checkbox"
              id="cb-item_wave-2"
              class="cb-item_input"
              checked=""
            />
            <label for="cb-item_wave-2" class="cb-item_label">
              <span class="cb-item_marker"></span>
            </label>
          </div>
          <!-- END -->
          <!-- Disabled Not Checked Checkbox Switcher Style #4 -->
          <div class="cb-item_wave">
            <input
              type="checkbox"
              id="cb-item_wave-3"
              class="cb-item_input"
              disabled=""
            />
            <label for="cb-item_wave-3" class="cb-item_label">
              <span class="cb-item_marker"></span>
            </label>
          </div>
          <!-- END -->
          <!-- Disabled Checked Checkbox Switcher Style #4 -->
          <div class="cb-item_wave">
            <input
              type="checkbox"
              id="cb-item_wave-4"
              class="cb-item_input"
              disabled=""
              checked=""
            />
            <label for="cb-item_wave-4" class="cb-item_label">
              <span class="cb-item_marker"></span>
            </label>
          </div>
          <!-- END -->
        </div>
      </section>
      <section>
        <h2>Checkbox Classic</h2>
        <div class="section-row">
          <!-- Active Not Checked Checkbox Classic -->
          <div class="cb-item_classic">
            <!-- Checking and unchecking of the checkbox is toggling automatically by HTML with each click -->
            <!-- For disabling the input please add :disabled attribute to the current input -->
            <!-- All of the possible input states are listed below -->
            <input
              type="checkbox"
              id="cb-item_classic-1"
              class="cb-item_input"
            />
            <label for="cb-item_classic-1" class="cb-item_label">
              <span class="cb-item_marker"></span>
              <span class="cb-item_label-content">Active Checkbox</span>
            </label>
          </div>
          <!-- END -->
          <!-- Active Checked Checkbox Classic -->
          <div class="cb-item_classic">
            <input
              type="checkbox"
              id="cb-item_classic-2"
              class="cb-item_input"
              checked=""
            />
            <label for="cb-item_classic-2" class="cb-item_label">
              <span class="cb-item_marker"></span>
              <span class="cb-item_label-content">Active Checkbox</span>
            </label>
          </div>
          <!-- END -->
          <!-- Disabled Not Checked Checkbox Classic -->
          <div class="cb-item_classic">
            <input
              type="checkbox"
              id="cb-item_classic-3"
              class="cb-item_input"
              disabled=""
            />
            <label for="cb-item_classic-3" class="cb-item_label">
              <span class="cb-item_marker"></span>
              <span class="cb-item_label-content">Disabled Checkbox</span>
            </label>
          </div>
          <!-- END -->
          <!-- Disabled Checked Checkbox Classic -->
          <div class="cb-item_classic">
            <input
              type="checkbox"
              id="cb-item_classic-4"
              class="cb-item_input"
              disabled=""
              checked=""
            />
            <label for="cb-item_classic-4" class="cb-item_label">
              <span class="cb-item_marker"></span>
              <span class="cb-item_label-content">Disabled Checked</span>
            </label>
          </div>
          <!-- END -->
        </div>
      </section>
      <section>
        <h2>Checkbox Classic Rounded</h2>
        <div class="section-row">
          <!-- Active Not Checked Checkbox Classic Rounded -->
          <div class="cb-item_classic-rnd">
            <!-- Checking and unchecking of the checkbox is toggling automatically by HTML with each click -->
            <!-- For disabling the input please add :disabled attribute to the current input -->
            <!-- All of the possible input states are listed below -->
            <input
              type="checkbox"
              id="cb-item_classic-rnd-1"
              class="cb-item_input"
            />
            <label for="cb-item_classic-rnd-1" class="cb-item_label">
              <span class="cb-item_marker"></span>
              <span class="cb-item_label-content">Active Checkbox</span>
            </label>
          </div>
          <!-- END -->
          <!-- Active Checked Checkbox Classic Rounded -->
          <div class="cb-item_classic-rnd">
            <input
              type="checkbox"
              id="cb-item_classic-rnd-2"
              class="cb-item_input"
              checked=""
            />
            <label for="cb-item_classic-rnd-2" class="cb-item_label">
              <span class="cb-item_marker"></span>
              <span class="cb-item_label-content">Active Checkbox</span>
            </label>
          </div>
          <!-- END -->
          <!-- Disabled Not Checked Checkbox Classic Rounded -->
          <div class="cb-item_classic-rnd">
            <input
              type="checkbox"
              id="cb-item_classic-rnd-3"
              class="cb-item_input"
              disabled=""
            />
            <label for="cb-item_classic-rnd-3" class="cb-item_label">
              <span class="cb-item_marker"></span>
              <span class="cb-item_label-content">Disabled Checkbox</span>
            </label>
          </div>
          <!-- END -->
          <!-- Disabled Checked Checkbox Classic Rounded -->
          <div class="cb-item_classic-rnd">
            <input
              type="checkbox"
              id="cb-item_classic-rnd-4"
              class="cb-item_input"
              disabled=""
              checked=""
            />
            <label for="cb-item_classic-rnd-4" class="cb-item_label">
              <span class="cb-item_marker"></span>
              <span class="cb-item_label-content">Disabled Checked</span>
            </label>
          </div>
          <!-- END -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "纯css3复选框选中动画",
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
body {
  padding-top: 10px;
  padding-bottom: 70px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #333;
}
h1,
h2 {
  padding-right: 25px;
  padding-left: 25px;
  text-align: center;
  font-weight: normal;
  letter-spacing: 0.5px;
}

h1 {
  display: block;
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
  font-size: 34px;
}

@media (max-width: 880px) {
  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 22px;
  }
}

section {
  padding-top: 25px;
  padding-bottom: 25px;
}

.section-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 20px;
}

.section-row > [class^="cb-item_"] {
  margin: 20px;
}

/* ---
  CSS variables works in all modern browsers
  CSS variables NOT works with IE* browsers
--- */

/* ---
  Hardcoded colors included only for IE* browsers
  Hardcoded colors can be deleted if IE support is unnecessary
--- */

/* Checkbox with Animated Marker */

.cb-item_animated-marker,
.cb-item_animated-marker *,
.cb-item_animated-marker *::before,
.cb-item_animated-marker *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.cb-item_animated-marker {
  position: relative;
  display: block;
  min-width: 200px;
  width: 100%;
  max-width: 280px;
  --cb_text-color: #333;
  --cb_bg-color: #f6f8f9;
  --cb_bg-color_checked: #05c096;
  --cb_border-color: #ccc;
  --cb_marker-bg-color: #fff;
}

@supports (
  (max-width: -webkit-max-content) or (max-width: -moz-max-content) or
    (max-width: max-content)
) {
  .cb-item_animated-marker {
    max-width: -webkit-max-content;
    max-width: -moz-max-content;
    max-width: max-content;
  }
}

.cb-item_input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.cb-item_animated-marker .cb-item_label {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 10px 10px 10px 20px;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  color: #333;
  color: var(--cb_text-color);
  background-color: #f6f8f9;
  background-color: var(--cb_bg-color);
  border: 1px solid;
  border-color: #ccc;
  border-color: var(--cb_border-color);
  border-radius: 25px;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.cb-item_animated-marker .cb-item_label-content {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.cb-item_animated-marker .cb-item_marker {
  position: relative;
  display: inline-block; /* Needs for IE10 */
  width: 30px;
  height: 30px;
  margin-left: 25px;
  background-color: #fff;
  background-color: var(--cb_marker-bg-color);
  border: 1px solid;
  border-color: #ccc;
  border-color: var(--cb_border-color);
  border-radius: 50%;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.cb-item_marker_short-line,
.cb-item_marker_long-line {
  position: absolute;
  overflow: hidden;
  height: 3px;
  background-color: transparent;
  -webkit-transform-origin: left;
  transform-origin: left;
}

.cb-item_marker_short-line {
  top: 11px;
  left: 6px;
  width: 10px;
  -webkit-transform: rotate(44.5deg);
  transform: rotate(44.5deg);
}

.cb-item_marker_long-line {
  top: 19px;
  left: 12px;
  width: 17px;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.cb-item_marker_short-line::before,
.cb-item_marker_long-line::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #05c096;
  background-color: var(--cb_bg-color_checked);
  -webkit-transform: translateX(-110%);
  transform: translateX(-110%);
  -webkit-transform-origin: left;
  transform-origin: left;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
}

/* Checkbox with Animated Marker :checked State */

.cb-item_animated-marker .cb-item_input:checked + .cb-item_label {
  color: #fff;
  background-color: #05c096;
  background-color: var(--cb_bg-color_checked);
}

.cb-item_animated-marker .cb-item_input:checked + .cb-item_label,
.cb-item_animated-marker
  .cb-item_input:checked
  + .cb-item_label
  .cb-item_marker {
  border-color: transparent;
}

.cb-item_animated-marker
  .cb-item_input:checked
  + .cb-item_label
  .cb-item_marker_short-line::before,
.cb-item_animated-marker
  .cb-item_input:checked
  + .cb-item_label
  .cb-item_marker_long-line::before {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

.cb-item_marker_long-line::before,
.cb-item_animated-marker
  .cb-item_input:checked
  + .cb-item_label
  .cb-item_marker_short-line::before {
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

.cb-item_marker_short-line::before,
.cb-item_animated-marker
  .cb-item_input:checked
  + .cb-item_label
  .cb-item_marker_long-line::before {
  -webkit-transition-delay: 0.12s;
  transition-delay: 0.12s;
}

/* Checkbox with Animated Marker :disabled State */

.cb-item_animated-marker .cb-item_input:disabled + .cb-item_label {
  cursor: default;
  color: #ccc;
  color: var(--cb_border-color);
}

/* Checkbox with Animated Marker :disabled:checked State */

.cb-item_animated-marker .cb-item_input:disabled:checked + .cb-item_label {
  background-color: #f6f8f9;
  background-color: var(--cb_bg-color);
}

.cb-item_animated-marker .cb-item_input:disabled:checked + .cb-item_label,
.cb-item_animated-marker
  .cb-item_input:disabled:checked
  + .cb-item_label
  .cb-item_marker {
  border-color: #ccc;
  border-color: var(--cb_border-color);
}

.cb-item_animated-marker
  .cb-item_input:disabled:checked
  + .cb-item_label
  .cb-item_marker_short-line::before,
.cb-item_animated-marker
  .cb-item_input:disabled:checked
  + .cb-item_label
  .cb-item_marker_long-line::before {
  background-color: #ccc;
  background-color: var(--cb_border-color);
}

/* END Checkbox with Animated Marker */

/* Checkbox On/Off Toggler */

.cb-item_toggler,
.cb-item_toggler *,
.cb-item_toggler *::before,
.cb-item_toggler *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.cb-item_toggler {
  position: relative;
  display: inline-block;
  --cb_text-color: #333;
  --cb_marker-bg-color: #fff;
  --cb_marker-bg-color_checked: #05c096;
  --cb_marker-bg-color_disabled: #ccc;
}

.cb-item_input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.cb-item_toggler .cb-item_label {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-width: 50px;
  width: auto;
  cursor: pointer;
  font-size: 18px;
  line-height: 18px;
  color: #333;
  color: var(--cb_text-color);
  background-color: transparent;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

@supports (
  (max-width: -webkit-max-content) or (max-width: -moz-max-content) or
    (max-width: max-content)
) {
  .cb-item_toggler .cb-item_label {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
  }
}

.cb-item_toggler .cb-item_marker {
  position: relative;
  display: inline-block; /* Needs for IE10 */
  width: 16px;
  height: 16px;
  background-color: #fff;
  background-color: var(--cb_marker-bg-color);
  border-radius: 50%;
  -webkit-box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.25),
    0 3px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.cb-item_toggler .cb-item_marker::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
  border-radius: 50%;
  -webkit-animation: toggler-unswitch 0.4s ease-out;
  animation: toggler-unswitch 0.4s ease-out;
}

.cb-item_label-off,
.cb-item_label-on {
  position: absolute;
  top: -1px;
  right: 0;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.cb-item_label-off {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.cb-item_label-on {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}

/* Checkbox On/Off Toggler :checked State */

.cb-item_toggler .cb-item_input:checked + .cb-item_label .cb-item_marker,
.cb-item_toggler
  .cb-item_input:disabled:checked
  + .cb-item_label
  .cb-item_marker {
  background-color: #05c096;
  background-color: var(--cb_marker-bg-color_checked);
}

.cb-item_toggler
  .cb-item_input:checked
  + .cb-item_label
  .cb-item_marker::before {
  -webkit-animation: toggler-switch 0.4s ease-out;
  animation: toggler-switch 0.4s ease-out;
}

.cb-item_toggler .cb-item_input:checked + .cb-item_label .cb-item_label-off {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}

.cb-item_toggler .cb-item_input:checked + .cb-item_label .cb-item_label-on {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

/* Checkbox On/Off Toggler :disabled State */

.cb-item_toggler .cb-item_input:disabled + .cb-item_label {
  opacity: 0.5;
  cursor: default;
}

.cb-item_toggler .cb-item_input:disabled + .cb-item_label .cb-item_marker {
  background-color: #ccc;
  background-color: var(--cb_marker-bg-color_disabled);
  -webkit-box-shadow: none;
  box-shadow: none;
}

/* Checkbox On/Off Toggler Animation */

@-webkit-keyframes toggler-switch {
  0% {
    opacity: 0; /* Removes flash bug in Safari */
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  1% {
    opacity: 0.1;
    -webkit-box-shadow: 0 0 0 0 #05c096;
    box-shadow: 0 0 0 0 #05c096;
    -webkit-box-shadow: 0 0 0 0 var(--cb_marker-bg-color_checked);
    box-shadow: 0 0 0 0 var(--cb_marker-bg-color_checked);
  }

  99% {
    opacity: 0.1;
    -webkit-box-shadow: 0 0 5px 15px #05c096;
    box-shadow: 0 0 5px 15px #05c096;
    -webkit-box-shadow: 0 0 5px 15px var(--cb_marker-bg-color_checked);
    box-shadow: 0 0 5px 15px var(--cb_marker-bg-color_checked);
  }

  100% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}

@keyframes toggler-switch {
  0% {
    opacity: 0; /* Removes flash bug in Safari */
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  1% {
    opacity: 0.1;
    -webkit-box-shadow: 0 0 0 0 #05c096;
    box-shadow: 0 0 0 0 #05c096;
    -webkit-box-shadow: 0 0 0 0 var(--cb_marker-bg-color_checked);
    box-shadow: 0 0 0 0 var(--cb_marker-bg-color_checked);
  }

  99% {
    opacity: 0.1;
    -webkit-box-shadow: 0 0 5px 15px #05c096;
    box-shadow: 0 0 5px 15px #05c096;
    -webkit-box-shadow: 0 0 5px 15px var(--cb_marker-bg-color_checked);
    box-shadow: 0 0 5px 15px var(--cb_marker-bg-color_checked);
  }

  100% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}

@-webkit-keyframes toggler-unswitch {
  0% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  1% {
    opacity: 0.15;
    -webkit-box-shadow: 0 0 0 0 #ccc;
    box-shadow: 0 0 0 0 #ccc;
    -webkit-box-shadow: 0 0 0 0 var(--cb_marker-bg-color_disabled);
    box-shadow: 0 0 0 0 var(--cb_marker-bg-color_disabled);
  }

  99% {
    opacity: 0.15;
    -webkit-box-shadow: 0 0 5px 15px #ccc;
    box-shadow: 0 0 5px 15px #ccc;
    -webkit-box-shadow: 0 0 5px 15px var(--cb_marker-bg-color_disabled);
    box-shadow: 0 0 5px 15px var(--cb_marker-bg-color_disabled);
  }

  100% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}

@keyframes toggler-unswitch {
  0% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  1% {
    opacity: 0.15;
    -webkit-box-shadow: 0 0 0 0 #ccc;
    box-shadow: 0 0 0 0 #ccc;
    -webkit-box-shadow: 0 0 0 0 var(--cb_marker-bg-color_disabled);
    box-shadow: 0 0 0 0 var(--cb_marker-bg-color_disabled);
  }

  99% {
    opacity: 0.15;
    -webkit-box-shadow: 0 0 5px 15px #ccc;
    box-shadow: 0 0 5px 15px #ccc;
    -webkit-box-shadow: 0 0 5px 15px var(--cb_marker-bg-color_disabled);
    box-shadow: 0 0 5px 15px var(--cb_marker-bg-color_disabled);
  }

  100% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}

/* END Checkbox On/Off Toggler */

/* Checkbox Switcher Style #1 */

.cb-item_ios-style,
.cb-item_ios-style *,
.cb-item_ios-style *::before,
.cb-item_ios-style *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.cb-item_ios-style {
  position: relative;
  display: inline-block;
  --cb_bg-color: #fff;
  --cb_bg-color_checked: #05c096;
  --cb_border-color: #ccc;
}

.cb-item_input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.cb-item_ios-style .cb-item_label {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 50px;
  height: 30px;
  cursor: pointer;
  background-color: #fff;
  background-color: var(--cb_bg-color);
  border: 1px solid;
  border-color: #ccc;
  border-color: var(--cb_border-color);
  border-radius: 25px;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.cb-item_ios-style .cb-item_marker {
  display: block;
  width: 26px;
  height: 26px;
  background-color: #fff;
  background-color: var(--cb_bg-color);
  border-radius: 50%;
  -webkit-box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
  -webkit-transform: translateX(1px);
  transform: translateX(1px);
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
}

/* Checkbox Switcher Style #1 :checked State */

.cb-item_ios-style .cb-item_input:checked + .cb-item_label {
  background-color: #05c096;
  background-color: var(--cb_bg-color_checked);
  border-color: transparent;
}

.cb-item_ios-style .cb-item_input:checked + .cb-item_label .cb-item_marker {
  -webkit-box-shadow: -2px 4px 6px rgba(0, 0, 0, 0.15);
  box-shadow: -2px 4px 6px rgba(0, 0, 0, 0.15);
  -webkit-transform: translateX(22px);
  transform: translateX(22px);
}

/* Checkbox Switcher Style #1 :disabled State */

.cb-item_ios-style .cb-item_input:disabled + .cb-item_label {
  opacity: 0.5;
  cursor: default;
  background-color: #ccc;
  background-color: var(--cb_border-color);
}

.cb-item_ios-style .cb-item_input:disabled + .cb-item_label .cb-item_marker {
  -webkit-box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.07);
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.07);
}

/* Checkbox Switcher Style #1 :disabled:checked State */

.cb-item_ios-style .cb-item_input:disabled:checked + .cb-item_label {
  background-color: #05c096;
  background-color: var(--cb_bg-color_checked);
}

.cb-item_ios-style
  .cb-item_input:disabled:checked
  + .cb-item_label
  .cb-item_marker {
  -webkit-box-shadow: -2px 4px 6px rgba(0, 0, 0, 0.07);
  box-shadow: -2px 4px 6px rgba(0, 0, 0, 0.07);
}

/* END Checkbox Switcher Style #1 */

/* Checkbox Switcher Style #2 */

.cb-item_android-style,
.cb-item_android-style *,
.cb-item_android-style *::before,
.cb-item_android-style *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.cb-item_android-style {
  position: relative;
  display: inline-block;
  --cb_bg-color: #ccc;
  --cb_bg-color_checked: #05c096;
  --cb_marker-bg-color: #fff;
}

.cb-item_input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.cb-item_android-style .cb-item_label {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 55px;
  height: 30px;
  cursor: pointer;
  background-color: #ccc;
  background-color: var(--cb_bg-color);
  border-radius: 25px;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.cb-item_android-style .cb-item_marker {
  display: block;
  width: 22px;
  height: 22px;
  background-color: #fff;
  background-color: var(--cb_marker-bg-color);
  border-radius: 50%;
  -webkit-box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.25),
    0 3px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25);
  -webkit-animation: android-style-unswitch 0.25s linear forwards;
  animation: android-style-unswitch 0.25s linear forwards;
}

/* Checkbox Switcher Style #2 :checked State */

.cb-item_android-style .cb-item_input:checked + .cb-item_label {
  background-color: #05c096;
  background-color: var(--cb_bg-color_checked);
}

.cb-item_android-style .cb-item_input:checked + .cb-item_label .cb-item_marker {
  -webkit-animation: android-style-switch 0.25s linear forwards;
  animation: android-style-switch 0.25s linear forwards;
}

/* Checkbox Switcher Style #2 :disabled State */

.cb-item_android-style .cb-item_input:disabled + .cb-item_label {
  opacity: 0.5;
  cursor: default;
}

.cb-item_android-style
  .cb-item_input:disabled
  + .cb-item_label
  .cb-item_marker {
  -webkit-box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.1), 0 3px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.1), 0 3px 2px rgba(0, 0, 0, 0.1);
}

/* Checkbox Switcher Style #2 Animation */

@-webkit-keyframes android-style-switch {
  0% {
    -webkit-transform: scaleX(1) translateX(4px);
    transform: scaleX(1) translateX(4px);
  }

  25% {
    -webkit-transform: scaleX(1.5) translateX(7px);
    transform: scaleX(1.5) translateX(7px);
  }

  50% {
    -webkit-transform: scaleX(1.5) translateX(14px);
    transform: scaleX(1.5) translateX(14px);
  }

  100% {
    -webkit-transform: scaleX(1) translateX(28px);
    transform: scaleX(1) translateX(28px);
  }
}

@keyframes android-style-switch {
  0% {
    -webkit-transform: scaleX(1) translateX(4px);
    transform: scaleX(1) translateX(4px);
  }

  25% {
    -webkit-transform: scaleX(1.5) translateX(7px);
    transform: scaleX(1.5) translateX(7px);
  }

  50% {
    -webkit-transform: scaleX(1.5) translateX(14px);
    transform: scaleX(1.5) translateX(14px);
  }

  100% {
    -webkit-transform: scaleX(1) translateX(28px);
    transform: scaleX(1) translateX(28px);
  }
}

@-webkit-keyframes android-style-unswitch {
  0% {
    -webkit-transform: scaleX(1) translateX(28px);
    transform: scaleX(1) translateX(28px);
  }

  25% {
    -webkit-transform: scaleX(1.5) translateX(14px);
    transform: scaleX(1.5) translateX(14px);
  }

  50% {
    -webkit-transform: scaleX(1.5) translateX(7px);
    transform: scaleX(1.5) translateX(7px);
  }

  100% {
    -webkit-transform: scaleX(1) translateX(4px);
    transform: scaleX(1) translateX(4px);
  }
}

@keyframes android-style-unswitch {
  0% {
    -webkit-transform: scaleX(1) translateX(28px);
    transform: scaleX(1) translateX(28px);
  }

  25% {
    -webkit-transform: scaleX(1.5) translateX(14px);
    transform: scaleX(1.5) translateX(14px);
  }

  50% {
    -webkit-transform: scaleX(1.5) translateX(7px);
    transform: scaleX(1.5) translateX(7px);
  }

  100% {
    -webkit-transform: scaleX(1) translateX(4px);
    transform: scaleX(1) translateX(4px);
  }
}

/* END Checkbox Switcher Style #2 */

/* Checkbox Switcher Style #3 */

.cb-item_bar,
.cb-item_bar *,
.cb-item_bar *::before,
.cb-item_bar *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.cb-item_bar {
  position: relative;
  display: inline-block;
  --cb_bg-color: #ccc;
  --cb_bg-color_checked: #05c096;
  --cb_marker-bg-color: #fff;
}

.cb-item_input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.cb-item_bar .cb-item_label {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 40px;
  height: 10px;
  cursor: pointer;
  background-color: #ccc;
  background-color: var(--cb_bg-color);
  border-radius: 25px;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.cb-item_bar .cb-item_marker {
  display: block;
  width: 22px;
  height: 22px;
  background-color: #fff;
  background-color: var(--cb_marker-bg-color);
  border-radius: 50%;
  -webkit-box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.25),
    0 3px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25);
  -webkit-transform: translateX(-2px);
  transform: translateX(-2px);
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

/* Checkbox Switcher Style #3 :checked State */

.cb-item_bar .cb-item_input:checked + .cb-item_label {
  background-color: #05c096;
  background-color: var(--cb_bg-color_checked);
}

.cb-item_bar .cb-item_input:checked + .cb-item_label .cb-item_marker {
  -webkit-transform: translateX(20px);
  transform: translateX(20px);
}

/* Checkbox Switcher Style #3 :disabled State */

.cb-item_bar .cb-item_input:disabled + .cb-item_label {
  opacity: 0.5;
  cursor: default;
}

.cb-item_bar .cb-item_input:disabled + .cb-item_label .cb-item_marker {
  -webkit-box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.15),
    0 3px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.15), 0 3px 2px rgba(0, 0, 0, 0.15);
}

/* END Checkbox Switcher Style #3 */

/* Checkbox Switcher Style #4 */

.cb-item_wave,
.cb-item_wave *,
.cb-item_wave *::before,
.cb-item_wave *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.cb-item_wave {
  position: relative;
  display: inline-block;
  --cb_bg-color: #ccc;
  --cb_bg-color_checked: #05c096;
  --cb_marker-bg-color: #fff;
}

.cb-item_input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.cb-item_wave .cb-item_label {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 55px;
  height: 30px;
  cursor: pointer;
  background-color: #ccc;
  background-color: var(--cb_bg-color);
  border-radius: 25px;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.cb-item_wave .cb-item_marker {
  position: relative;
  display: block;
  width: 22px;
  height: 22px;
  background-color: #fff;
  background-color: var(--cb_marker-bg-color);
  border-radius: 50%;
  -webkit-transform: translateX(4px);
  transform: translateX(4px);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.cb-item_wave .cb-item_marker::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
  border-radius: 50%;
  -webkit-animation: wave-unswitch 0.4s ease-out;
  animation: wave-unswitch 0.4s ease-out;
}

/* Checkbox Switcher Style #4 :checked State */

.cb-item_wave .cb-item_input:checked + .cb-item_label {
  background-color: #05c096;
  background-color: var(--cb_bg-color_checked);
}

.cb-item_wave .cb-item_input:checked + .cb-item_label .cb-item_marker {
  -webkit-transform: translateX(28px);
  transform: translateX(28px);
}

.cb-item_wave .cb-item_input:checked + .cb-item_label .cb-item_marker::before {
  -webkit-animation: wave-switch 0.4s ease-out;
  animation: wave-switch 0.4s ease-out;
}

/* Checkbox Switcher Style #4 :disabled State */

.cb-item_wave .cb-item_input:disabled + .cb-item_label {
  opacity: 0.5;
  cursor: default;
}

/* Checkbox Switcher Style #4 Animation */

@-webkit-keyframes wave-switch {
  0% {
    opacity: 0; /* Removes flash bug in Safari */
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  1% {
    opacity: 0.1;
    -webkit-box-shadow: 0 0 0 5px #05c096;
    box-shadow: 0 0 0 5px #05c096;
    -webkit-box-shadow: 0 0 0 5px var(--cb_bg-color_checked);
    box-shadow: 0 0 0 5px var(--cb_bg-color_checked);
  }

  99% {
    opacity: 0.1;
    -webkit-box-shadow: 0 0 2px 20px #05c096;
    box-shadow: 0 0 2px 20px #05c096;
    -webkit-box-shadow: 0 0 2px 20px var(--cb_bg-color_checked);
    box-shadow: 0 0 2px 20px var(--cb_bg-color_checked);
  }

  100% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}

@keyframes wave-switch {
  0% {
    opacity: 0; /* Removes flash bug in Safari */
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  1% {
    opacity: 0.1;
    -webkit-box-shadow: 0 0 0 5px #05c096;
    box-shadow: 0 0 0 5px #05c096;
    -webkit-box-shadow: 0 0 0 5px var(--cb_bg-color_checked);
    box-shadow: 0 0 0 5px var(--cb_bg-color_checked);
  }

  99% {
    opacity: 0.1;
    -webkit-box-shadow: 0 0 2px 20px #05c096;
    box-shadow: 0 0 2px 20px #05c096;
    -webkit-box-shadow: 0 0 2px 20px var(--cb_bg-color_checked);
    box-shadow: 0 0 2px 20px var(--cb_bg-color_checked);
  }

  100% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}

@-webkit-keyframes wave-unswitch {
  0% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  1% {
    opacity: 0.15;
    -webkit-box-shadow: 0 0 0 5px #ccc;
    box-shadow: 0 0 0 5px #ccc;
    -webkit-box-shadow: 0 0 0 5px var(--cb_bg-color);
    box-shadow: 0 0 0 5px var(--cb_bg-color);
  }

  99% {
    opacity: 0.15;
    -webkit-box-shadow: 0 0 2px 20px #ccc;
    box-shadow: 0 0 2px 20px #ccc;
    -webkit-box-shadow: 0 0 2px 20px var(--cb_bg-color);
    box-shadow: 0 0 2px 20px var(--cb_bg-color);
  }

  100% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}

@keyframes wave-unswitch {
  0% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  1% {
    opacity: 0.15;
    -webkit-box-shadow: 0 0 0 5px #ccc;
    box-shadow: 0 0 0 5px #ccc;
    -webkit-box-shadow: 0 0 0 5px var(--cb_bg-color);
    box-shadow: 0 0 0 5px var(--cb_bg-color);
  }

  99% {
    opacity: 0.15;
    -webkit-box-shadow: 0 0 2px 20px #ccc;
    box-shadow: 0 0 2px 20px #ccc;
    -webkit-box-shadow: 0 0 2px 20px var(--cb_bg-color);
    box-shadow: 0 0 2px 20px var(--cb_bg-color);
  }

  100% {
    opacity: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
}

/* END Checkbox Switcher Style #4 */

/* Checkbox Classic */

.cb-item_classic,
.cb-item_classic *,
.cb-item_classic *::before,
.cb-item_classic *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.cb-item_classic {
  position: relative;
  display: block;
  --cb_text-color: #333;
  --cb_bg-color: #fff;
  --cb_bg-color_checked: #05c096;
  --cb_bg-color_disabled: #eee;
  --cb_border-color: #aaa;
}

.cb-item_input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.cb-item_classic .cb-item_label {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.cb-item_classic .cb-item_label-content {
  padding-left: 15px;
  color: #333;
  color: var(--cb_text-color);
}

.cb-item_classic .cb-item_marker {
  position: relative;
  display: inline-block; /* Needs for IE10 */
  width: 18px;
  height: 18px;
  background-color: #fff;
  background-color: var(--cb_bg-color);
  border: 1px solid;
  border-color: #aaa;
  border-color: var(--cb_border-color);
  -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.cb-item_classic .cb-item_marker::before {
  content: "";
  position: absolute;
  top: 7px;
  left: 3px;
  opacity: 0;
  display: block;
  width: 11px;
  height: 7px;
  background-color: transparent;
  border-bottom: 2px solid;
  border-left: 2px solid;
  border-color: #fff;
  border-color: var(--cb_bg-color);
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: translateY(-65%) rotate(-45deg);
  transform: translateY(-65%) rotate(-45deg);
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

/* Checkbox Classic :hover State */

.cb-item_classic .cb-item_input:hover + .cb-item_label .cb-item_marker {
  border-color: #333;
  border-color: var(--cb_text-color);
  -webkit-box-shadow: none;
  box-shadow: none;
}

.cb-item_classic .cb-item_input:hover + .cb-item_label .cb-item_marker::before {
  opacity: 0.25;
  border-color: #333;
  border-color: var(--cb_text-color);
}

/* Checkbox Classic :checked State */

.cb-item_classic .cb-item_input:checked + .cb-item_label .cb-item_marker {
  background-color: #05c096;
  background-color: var(--cb_bg-color_checked);
  border-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.cb-item_classic
  .cb-item_input:checked
  + .cb-item_label
  .cb-item_marker::before {
  opacity: 1;
}

.cb-item_classic
  .cb-item_input:checked:hover
  + .cb-item_label
  .cb-item_marker::before {
  border-color: #fff;
  border-color: var(--cb_bg-color);
}

/* Checkbox Classic :disabled State */

.cb-item_classic .cb-item_input:disabled + .cb-item_label {
  cursor: default;
}

.cb-item_classic .cb-item_input:disabled + .cb-item_label .cb-item_marker {
  background-color: #eee;
  background-color: var(--cb_bg-color_disabled);
  border-color: #aaa;
  border-color: var(--cb_border-color);
  -webkit-box-shadow: none;
  box-shadow: none;
}

.cb-item_classic
  .cb-item_input:disabled:hover
  + .cb-item_label
  .cb-item_marker::before {
  opacity: 0;
}

/* Checkbox Classic :disabled:checked State */

.cb-item_classic
  .cb-item_input:disabled:checked
  + .cb-item_label
  .cb-item_marker::before {
  opacity: 1;
  border-color: #333;
  border-color: var(--cb_text-color);
}

/* END Checkbox Classic */

/* Checkbox Classic Rounded */

.cb-item_classic-rnd,
.cb-item_classic-rnd *,
.cb-item_classic-rnd *::before,
.cb-item_classic-rnd *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.cb-item_classic-rnd {
  position: relative;
  display: block;
  --cb_text-color: #333;
  --cb_bg-color: #fff;
  --cb_bg-color_checked: #05c096;
  --cb_bg-color_disabled: #eee;
  --cb_border-color: #aaa;
}

.cb-item_input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.cb-item_classic-rnd .cb-item_label {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.cb-item_classic-rnd .cb-item_label-content {
  padding-left: 15px;
  color: #333;
  color: var(--cb_text-color);
}

.cb-item_classic-rnd .cb-item_marker {
  position: relative;
  display: inline-block; /* Needs for IE10 */
  width: 22px;
  height: 22px;
  background-color: #fff;
  background-color: var(--cb_bg-color);
  border: 1px solid;
  border-color: #aaa;
  border-color: var(--cb_border-color);
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

.cb-item_classic-rnd .cb-item_marker::before {
  content: "";
  position: absolute;
  top: 9px;
  left: 4px;
  opacity: 0;
  display: block;
  width: 12px;
  height: 8px;
  background-color: transparent;
  border-bottom: 2px solid;
  border-left: 2px solid;
  border-color: #fff;
  border-color: var(--cb_bg-color);
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: translateY(-65%) rotate(-45deg);
  transform: translateY(-65%) rotate(-45deg);
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

/* Checkbox Classic Rounded :hover State */

.cb-item_classic-rnd .cb-item_input:hover + .cb-item_label .cb-item_marker {
  border-color: #333;
  border-color: var(--cb_text-color);
  -webkit-box-shadow: none;
  box-shadow: none;
}

.cb-item_classic-rnd
  .cb-item_input:hover
  + .cb-item_label
  .cb-item_marker::before {
  opacity: 0.25;
  border-color: #333;
  border-color: var(--cb_text-color);
}

/* Checkbox Classic Rounded :checked State */

.cb-item_classic-rnd .cb-item_input:checked + .cb-item_label .cb-item_marker {
  background-color: #05c096;
  background-color: var(--cb_bg-color_checked);
  border-color: transparent;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.cb-item_classic-rnd
  .cb-item_input:checked
  + .cb-item_label
  .cb-item_marker::before {
  opacity: 1;
}

.cb-item_classic-rnd
  .cb-item_input:checked:hover
  + .cb-item_label
  .cb-item_marker::before {
  border-color: #fff;
  border-color: var(--cb_bg-color);
}

/* Checkbox Classic Rounded :disabled State */

.cb-item_classic-rnd .cb-item_input:disabled + .cb-item_label {
  cursor: default;
}

.cb-item_classic-rnd .cb-item_input:disabled + .cb-item_label .cb-item_marker {
  background-color: #eee;
  background-color: var(--cb_bg-color_disabled);
  border-color: #aaa;
  border-color: var(--cb_border-color);
  -webkit-box-shadow: none;
  box-shadow: none;
}

.cb-item_classic-rnd
  .cb-item_input:disabled:hover
  + .cb-item_label
  .cb-item_marker::before {
  opacity: 0;
}

/* Checkbox Classic Rounded :disabled:checked State */

.cb-item_classic-rnd
  .cb-item_input:disabled:checked
  + .cb-item_label
  .cb-item_marker::before {
  opacity: 1;
  border-color: #333;
  border-color: var(--cb_text-color);
}

/* END Checkbox Classic Rounded */
</style>