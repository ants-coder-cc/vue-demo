<template>
	<div id="app">
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" />  -->
		<!-- <echarts-Test /> -->
		<!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<!-- name: -->
		<!-- <h1>{{ $store.state.name }}</h1> -->
		<div>
			<a-menu v-model="current" mode="horizontal">
			<a-menu-item key="mail"> <a-icon type="mail" />路由 One </a-menu-item>
			<a-menu-item key="app"> <a-icon type="appstore" />路由 Two </a-menu-item>
			<a-sub-menu>
				<span slot="title" class="submenu-title-wrapper"
				><a-icon type="setting" />路由 Three</span
				>
				<a-menu-item-group title="Item 1">
				<a-menu-item key="setting:1">
					<router-link to="/index">index</router-link>
				</a-menu-item>
				<a-menu-item key="setting:2">
					<router-link to="/home">home</router-link>
				</a-menu-item>
				</a-menu-item-group>
				<a-menu-item-group title="Item 2">
				<a-menu-item key="setting:3">
					<router-link to="/home">home</router-link>
				</a-menu-item>
				<a-menu-item key="setting:4">
					<router-link to="/home">home</router-link>
				</a-menu-item>
				</a-menu-item-group>
			</a-sub-menu>
			<a-menu-item key="alipay">
				<a href="https://antdv.com" target="_blank" rel="noopener noreferrer"
				>Ant Design of Vue官网</a
				>
			</a-menu-item>
			</a-menu>
		</div>
		<router-view></router-view>
		<!-- 自定义指令 -->
		<!-- <input type="text" v-focus> -->
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// import echartsTest from "./views/echarts/index.vue";
export default {
	name: "App",
	components: {
		HelloWorld,
		// echartsTest,
	},
	data() {
		return {
			inputVal:0,
			current: ["mail"],
		};
	},
	watch:{
		inputVal(newName, oldName) {
			console.log('newName====>',newName);
			console.log('oldName====>',oldName);
		}
	},
	beforeMount(){
		console.log('父组件beforeMount');
	},
	mounted(){
		console.log('父组件mounted');
	},
	beforeCreate () {
		console.log('父组件beforeCreate');
	},
	created() {
		console.log('父组件created');
		// this.$axios.get("http://127.0.0.1:5500/vue2-study/anhui.json").then((res) => {
		// 	//赋值
		// 	console.log(res);
		// });
		// console.log(window);
	},
	methods:{
		handleAdd(){
			this.inputVal++
		}
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
