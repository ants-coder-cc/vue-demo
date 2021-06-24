import Vue from 'vue'
import App from './App.vue'
import store from './vuex/index' // 引入index.js

Vue.config.productionTip = false

new Vue({
    store, // 全局挂载store，注册后，子组件中可以使用this.$store访问
    render: h => h(App),
}).$mount('#app')