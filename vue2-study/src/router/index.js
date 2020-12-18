import Vue from "vue";
import Router from "vue-router";

//组件
import echarts from "@/views/echarts/index.vue";

Vue.use(Router);
export default new Router({
	routes: [
		{
			path: "/echarts",
			component: echarts,
		},
	],
});
