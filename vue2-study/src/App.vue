<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<echarts-Test />
	</div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import echartsTest from "./views/echarts/index.vue";
export default {
	name: "App",
	components: {
		// HelloWorld,
		echartsTest,
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
