<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="choice-content-box">
      <div class="choice-content flex-box">
        <div class="menu-item">
          <div class="menu-text">
            <a>Products</a>
          </div>
          <div class="sub-menu">
            <div class="icon-box">
              <div class="text">
                <div class="title">Turbo Editor</div>
                <div class="sub-text">
                  Edit your code while slowing down time.
                </div>
              </div>
            </div>
            <div class="icon-box">
              <div class="text">
                <div class="title">Idea Creator</div>
                <div class="sub-text">
                  Think of an idea, and have an AI create it.
                </div>
              </div>
            </div>
            <div class="icon-box">
              <div class="text">
                <div class="title">Super Collider</div>
                <div class="sub-text">Remove mass from any object.</div>
              </div>
            </div>
            <div class="sub-menu-holder"></div>
          </div>
        </div>
        <div class="menu-item highlight">
          <div class="menu-text">
            <a>Services</a>
          </div>
          <div class="sub-menu double">
            <div class="icon-box gb a">
              <div class="text">
                <div class="title">Consult</div>
                <div class="sub-text">From Professionals</div>
              </div>
            </div>
            <div class="icon-box gb b">
              <div class="text">
                <div class="title">Teach</div>
                <div class="sub-text">In Classroom</div>
              </div>
            </div>
            <div class="icon-box gb c">
              <div class="text">
                <div class="title">Learn</div>
                <div class="sub-text">By Video</div>
              </div>
            </div>
            <div class="icon-box gb d">
              <div class="text">
                <div class="title">Keep</div>
                <div class="sub-text">The Castle</div>
              </div>
            </div>
            <div class="icon-box gb e">
              <div class="text">
                <div class="title">Become</div>
                <div class="sub-text">A Creator</div>
              </div>
            </div>
            <div class="icon-box gb f">
              <div class="text">
                <div class="title">Understand</div>
                <div class="sub-text">Our Journey</div>
              </div>
            </div>
            <div class="bottom-container">
              Ready to dive in?
              <a>Get Started</a>
            </div>
            <div class="sub-menu-holder"></div>
          </div>
        </div>
        <div class="menu-item highlight">
          <div class="menu-text">
            <a>Support</a>
          </div>
          <div class="sub-menu triple">
            <div class="top-container gb c icon-box">
              <div class="text">
                <div class="title">Where to start</div>
                <div class="sub-text">Find out where to begin below</div>
              </div>
            </div>
            <div class="box">
              <h3>Your Journey</h3>
              <a>Get Started</a>
              <a>Learn the Basics</a>
              <a>Get Advanced</a>
              <a>Start Teaching</a>
            </div>
            <div class="box">
              <h3>Your Tools</h3>
              <a>Turbo Editor</a>
              <a>Time Stopper</a>
              <a>Brain Enhancer</a>
              <a>Network Maker</a>
            </div>
            <div class="icon-box flat">
              <div class="text">
                <div class="title">API Guide</div>
              </div>
            </div>
            <div class="icon-box flat">
              <div class="text">
                <div class="title">Support Line</div>
              </div>
            </div>
            <div class="icon-box flat">
              <div class="text">
                <div class="title">Live Chat</div>
              </div>
            </div>
            <div class="icon-box flat">
              <div class="text">
                <div class="title">Documentation</div>
              </div>
            </div>
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-text">
            <a>Community</a>
          </div>
          <div class="sub-menu">
            <div class="icon-box">
              <div class="text">
                <div class="title">Forum</div>
                <div class="sub-text">Join our passionate community.</div>
              </div>
            </div>
            <div class="icon-box">
              <div class="text">
                <div class="title">Twitter</div>
                <div class="sub-text">Follow us on twitter.</div>
              </div>
            </div>
            <div class="icon-box">
              <div class="text">
                <div class="title">Live Stream</div>
                <div class="sub-text">We stream content every day.</div>
              </div>
            </div>
            <div class="sub-menu-holder"></div>
          </div>
        </div>
        <div id="sub-menu-container">
          <div id="sub-menu-holder">
            <div id="sub-menu-bottom"></div>
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
      default: "进度条动画",
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
.choice-content-box {
  width: 100%;
  height: 550px;
  background: linear-gradient(45deg, #102eff, #d2379b);
  .choice-content {
    width: max-content;
    transform-style: preserve-3d;
    justify-content: space-evenly;
    position: relative;
    z-index: 2;
    margin: 0px auto;
    flex-wrap: wrap;
    .menu-item {
      width: 150px;
      color: white;
      font-weight: 600;
      transform-style: preserve-3d;
      flex-grow: 1;
      display: flex;
      padding: 1em 1.5em;
      justify-content: center;
      perspective: 200px;
      letter-spacing: 0.5px;
      min-height: 7.5em;
      box-sizing: border-box;
      .menu-text {
        a {
          font-size: 1em;
          color: white;
          text-decoration: none;
          text-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
          transition: color 0.1s ease-out;
          text-align: center;
          cursor: pointer;
          &:hover {
            color: rgba(255, 255, 255, 0.5);
          }
        }
        &:after {
          transition: bottom 0.25s ease-out, opacity 0.01s ease-out 0.01s;
          opacity: 0;
          content: "";
          position: absolute;
          pointer-events: none;
          bottom: -5em;
          left: calc(50% - 10px);
          border-color: transparent transparent white transparent;
          border-width: 10px;
          border-style: solid;
        }
      }
      .sub-menu {
        position: absolute;
        top: 7em;
        color: rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        min-width: 27.5em;
        pointer-events: none;
        box-sizing: border-box;
        z-index: 999;
        margin-left: -5em;
        clip-path: inset(0 10em 10em 15em);
        opacity: 0;
        font-weight: initial;
        padding: 1.5em;
        transition: all 0.25s ease-out, opacity 0.25s ease-in,
          margin-left 0.25s ease-out, clip-path 0.15s ease-out;
        h3 {
          font-size: 1em;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: rgb(44, 70, 86);
          margin: 0.75em 0;
        }
        .box {
          margin: 0 0 3em 0;
          a {
            width: 100%;
            float: left;
            font-size: 1em;
            line-height: 1.75em;
            color: #7a8a94;
            text-decoration: none;
            &:hover {
              color: rgb(44, 70, 86);
            }
          }
        }
        .icon-box {
          cursor: pointer;
          float: left;
          width: 100%;
          margin: 0;
          height: 4em;
          row-gap: 0;
          line-height: 1em;
          * {
            transition: all 0.1s ease-out;
            position: relative;
          }
          .text {
            float: left;
            color: #9ea9af;
            .title {
              font-weight: 500;
              color: rgb(44, 70, 86);
              margin: 0 0 0.25em 0;
            }
          }
          &:hover {
            .title,
            .sub-text {
              color: rgb(89, 110, 123);
            }
          }
        }
        .space {
          margin-bottom: 1.25em;
        }
        .flat {
          height: 1.5em;
          margin-bottom: 0.5em;
        }
        .top-container {
          grid-area: 1 / -3 / 1 / 3;
          margin: 0 0 2em 0;
        }
        .bottom-container {
          grid-area: 4 / -3 / 4 / 3;
          padding-top: 1.5em;
          color: #3a5260;
          font-weight: 500;
          a {
            float: right;
            background: linear-gradient(90deg, #8ea4b166, #a3b5bf6b);
            padding: 0.5em 1em;
            border-radius: 100px;
            position: absolute;
            color: #2c4655bf;
            font-weight: bold;
            text-decoration: none;
            right: 1.5em;
            &:hover {
              background: linear-gradient(90deg, #8ea4b136, #a3b5bf33);
            }
          }
        }
      }
      .double {
        min-width: 41.25em;
        height: 18.75em;
        display: grid;
        grid-template-columns: 54% 50%;
      }
      .triple {
        min-width: 41.25em;
        height: 25em;
        display: grid;
        padding: 1.5em 2.5em;
        grid-template-columns: 55% 45%;
      }
      &:hover {
        .menu-text {
          &:after {
            bottom: 0.5em;
            opacity: 1;
            transition: bottom 0.25s ease-out, opacity 0.01s ease-out 0.15s;
          }
        }
        .sub-menu {
          pointer-events: all;
          clip-path: inset(0 0 0 0);
          opacity: 1;
          margin-left: 0;
        }
        & ~ #sub-menu-container {
          #sub-menu-holder {
            animation: clipPath 0.25s ease-out 1 forwards;
            transition: clip-path 0.25s ease-out, left 0.15s ease-out,
              height 0.15s ease-out;
            opacity: 1;
            right: auto;
            transition: transform 0.25s ease-out, opacity 0.25s ease-out,
              clip-path 0.25s ease-out;
          }
        }
      }
      &:nth-of-type(1) {
        &:hover {
          & ~ #sub-menu-container {
            #sub-menu-holder {
              clip-path: inset(0 28.75em 0 0 round 10px);
              height: 14em;
              left: calc(-9em + -1px);
              #sub-menu-bottom {
                opacity: 0;
              }
            }
          }
        }
      }
      &:nth-of-type(2) {
        &:hover {
          & ~ #sub-menu-container {
            #sub-menu-holder {
              left: calc(-6.5em + -1px);
              height: 18.75em;
              clip-path: inset(0 15em 0 0 round 10px);
            }
          }
        }
      }
      &:nth-of-type(3) {
        .highlight {
          &:hover {
            & ~ #sub-menu-container {
              #sub-menu-holder {
                #sub-menu-bottom {
                  height: 7.5em;
                }
              }
            }
          }
        }
        &:hover {
          & ~ #sub-menu-container {
            #sub-menu-holder {
              left: calc(2.75em + 1px);
              height: 24.5em;
              clip-path: inset(0 15em 0 0 round 10px);
            }
          }
        }
      }
      &:nth-of-type(4) {
        &:hover {
          & ~ #sub-menu-container {
            #sub-menu-holder {
              left: calc(19em + 1px);
              clip-path: inset(0 28.75em 0 0 round 10px);
              height: 14em;
              #sub-menu-bottom {
                opacity: 0;
              }
            }
          }
        }
      }
      & ~ #sub-menu-container {
        #sub-menu-holder {
          #sub-menu-bottom {
            opacity: 1;
          }
        }
      }
    }
    #sub-menu-container {
      position: absolute;
      min-width: 100%;
      top: 2.5em;
      width: 100%;
      z-index: -1;
      #sub-menu-holder {
        pointer-events: none;
        color: rgba(0, 0, 0, 0.5);
        font-weight: normal;
        padding: 1em;
        position: absolute;
        transition: opacity 2 ease-out;
        transform: rotateX(-25deg) scale(1);
        transform-origin: 50% 7em 0em;
        opacity: 0;
        box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1), 0 2px 20px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        top: 3rem;
        border-radius: 10px;
        background: white;
        display: block;
        height: 300px;
        width: calc(37.5em * 1.5);
        #sub-menu-bottom {
          background: #d4e3ea70;
          position: absolute;
          bottom: 0;
          opacity: 0;
          transition: all 0.25s ease-out, height 0.1s ease-out;
          left: 0;
          width: 100%;
          height: 5em;
        }
      }
    }
  }
}

@keyframes clipPath {
  0% {
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg) scale(1);
    top: 4.5em;
    opacity: 1;
  }
}
</style>
