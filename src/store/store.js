import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    // 设置全局可访问的state对象
    state: {
        themeType: 0,  // 主题的type值
    },
    // 实时监听state值的变化（最新状态）
    getters: {
        getThemeTyle(state) {
            return state.themeType
        }
    },
    // 改变state中的值
    mutations: {
        changeThemType(state,type){
            state.themeType = type;
        }
    }
})