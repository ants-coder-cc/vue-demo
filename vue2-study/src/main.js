import Vue from "vue";
import App from "./App.vue";
import echarts from "echarts";
import axios from "axios";
import _ from "lodash";
Vue.prototype._ = _;
// 使用ant-design
import ant from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
Vue.prototype.$axios = axios;
Vue.use(ant);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount("#app");
