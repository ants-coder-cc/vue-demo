import { createRouter, createWebHashHistory } from "vue-router";
const home = () => import("../views/home/index");
const login = () => import("../views/login/index");

const routes = [
	{ path: "/", redirect: "/" },
	{
		path: "/home",
		name: "home",
		component: home,
	},
	{
		path: "/login",
		name: "login",
		component: login,
	},
];
export const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
});
