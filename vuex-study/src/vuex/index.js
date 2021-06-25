import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
    name: '张三'
}
const mutations = {
    // 不带参数的方式
    changeNameToZhangsan(state) {
        state.name = '李四'
    },
    // 带参数的方式
    changeNameWithParam(state, payload) {
        state.name = payload.name
    }
}
const actions = {
    // 无参
    changeNameAsync(context) {
        // 示例说明我们可以通过context.state来获取store中的变量
        let _name = context.state.name;
        console.log(_name)
            // 异步更新
        setTimeout(() => {
            context.commit('changeNameToZhangsan');
        }, 1000)
    },
    // 有参
    changeNameWithParamAsync(context, payload) {
        // 异步更新
        setTimeout(() => {
            context.commit('changeNameWithParam', payload);
        }, 1000)
    }
}
const getters = {
    //  不带参数getters
    formatterName: state => {
        let postfix = '';
        if (state.name === '张三') {
            postfix = '最棒';
        }
        return state.name + postfix
    },
    //  带参数getters
    customFormatterName: (state) => (val) => {
        let postfix = '';
        if (state.name === '张三') {
            postfix = val;
        }
        return state.name + postfix
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})