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

new Vue({
	render: (h) => h(App),
	router,
	store, //store:store 和router一样，将我们创建的Vuex实例挂载到这个vue实例中
}).$mount("#app");
