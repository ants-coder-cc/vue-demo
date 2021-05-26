import Vue from "vue";
import App from "./App.vue";
import router from "./router"; //引入
import echarts from "echarts";
import axios from "axios";
import _ from "lodash";
import store from "./store";
Vue.prototype._ = _;
// 使用ant-design
import ant from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
Vue.prototype.$axios = axios;
Vue.use(ant);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function(el) {
        // 聚焦元素
        el.focus()
    }
})
new Vue({
    render: (h) => h(App),
    router,
    store, //store:store 和router一样，将我们创建的Vuex实例挂载到这个vue实例中
}).$mount("#app");