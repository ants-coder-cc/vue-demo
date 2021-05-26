import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
//组件
import echarts from "@/views/echarts/index.vue";
import Home from "@/views/home/index.vue";

Vue.use(Router);
//routes 定义路由的数字 路由和组件的映射关系
const routes = [{
        path: "/echarts",
        component: echarts,
    },
    {
        path: "/home",
        component: Home,
    },
];
const router = new Router({
    // mode: "history",
    // linkActiveClass: "active",
    // base: process.env.BASE_URL,
    routes,
});
router.beforeEach((to, from, next) => {
    console.log(to);
    console.log(from);
    console.log(next);
    next();
    console.log("router.beforeEach");
    NProgress.start();
});
// router.afterEach((to, from, next) => {
// 	console.log("router.afterEach");
// 	NProgress.done();
// 	next();
// });
export default router;