import Vue from "vue";
import App from "./App.vue";
import echarts from "echarts";
import axios from "axios";
Vue.prototype.$axios = axios;
console.log("echarts", echarts);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount("#app");
