<template>
	<div id="app">
		<router-view></router-view>
		<!-- <div>
			<a-date-picker @change="onChange" />
			<br />
			<a-month-picker placeholder="Select month" @change="onChange" />
			<br />
			<a-range-picker @change="onChange" />
			<br />
			<a-week-picker placeholder="Select week" @change="onChange" />
		</div> -->
		<!-- <a-button type="primary">antd按钮</a-button> -->
		<!-- <a-breadcrumb>
			<a-breadcrumb-item>Home</a-breadcrumb-item>
			<a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
			<a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
			<a-breadcrumb-item>An Application</a-breadcrumb-item>
		</a-breadcrumb>
		<a-dropdown>
			<a class="ant-dropdown-link" @click="(e) => e.preventDefault()"> Hover me <a-icon type="down" /> </a>
			<a-menu slot="overlay">
				<a-menu-item>
					<a href="javascript:;">1st menu item</a>
				</a-menu-item>
				<a-menu-item>
					<a href="javascript:;">2nd menu item</a>
				</a-menu-item>
				<a-menu-item>
					<a href="javascript:;">3rd menu item</a>
				</a-menu-item>
			</a-menu>
		</a-dropdown> -->
		<!-- <div>
			<a-menu v-model="current" mode="horizontal">
				<a-menu-item key="mail"> <a-icon type="mail" />Navigation One </a-menu-item>
				<a-menu-item key="app" disabled> <a-icon type="appstore" />Navigation Two </a-menu-item>
				<a-sub-menu>
					<span slot="title" class="submenu-title-wrapper"><a-icon type="setting" />Navigation Three - Submenu</span>
					<a-menu-item-group title="Item 1">
						<a-menu-item key="setting:1">
							Option 1
						</a-menu-item>
						<a-menu-item key="setting:2">
							Option 2
						</a-menu-item>
					</a-menu-item-group>
					<a-menu-item-group title="Item 2">
						<a-menu-item key="setting:3">
							Option 3
						</a-menu-item>
						<a-menu-item key="setting:4">
							Option 4
						</a-menu-item>
					</a-menu-item-group>
				</a-sub-menu>
				<a-menu-item key="alipay">
					<a href="https://antdv.com" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
				</a-menu-item>
			</a-menu>
		</div> -->
		<!-- <a-pagination v-model="current" :total="50" show-less-items /> -->
		<!-- <img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<!-- <echarts-Test /> -->
		<img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" />
		name:
		<h1>{{ $store.state.name }}</h1>
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
			current: ["mail"],
		};
	},
	created() {
		this.$axios.get("http://127.0.0.1:5500/vue2-study/anhui.json").then((res) => {
			//赋值
			console.log(res);
		});
	},
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
