<template>
	<div class="content row-flex-start" style="min-width:1500px;ovorflow-x:auto">
		<div class="left_map" id="left_map" @click="showChinaMap"></div>
		<div class="right_opetate row-center" id="right_opetate"></div>
	</div>
</template>

<script>
import echarts from "echarts";
import china from "../../utils/echarts/china.json";
import axios from "axios";
echarts.registerMap("china", china);
var provinces = ["shanghai", "hebei", "shanxi", "neimenggu", "liaoning", "jilin", "heilongjiang", "jiangsu", "zhejiang", "anhui", "fujian", "jiangxi", "shandong", "henan", "hubei", "hunan", "guangdong", "guangxi", "hainan", "sichuan", "guizhou", "yunnan", "xizang", "shanxi1", "gansu", "qinghai", "ningxia", "xinjiang", "beijing", "tianjin", "chongqing", "xianggang", "aomen", "taiwan"];
var provincesText = ["上海", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "北京", "天津", "重庆", "香港", "澳门", "台湾"];
export default {
	created() {
		this.cityOpt = provincesText;
	},
	mounted() {
		this.$nextTick(() => {
			this.initMap();
		});
	},
	data() {
		return {
			map: {},
			cityOpt: [],
			mapForm: {},
			mapData: [{ name: "海门", value: 100 }],
			mapOpt: [],
		};
	},
	props: {},
	methods: {
		getMapOpt(place) {
			let option = (option = {
				backgroundColor: "#404a59",
				title: {
					text: "mapDemo",
					subtext: "data from map",
					left: "center",
				},
				geo: {
					map: place ? place : "china",
					label: {
						emphasis: {
							show: false,
						},
					},
					roam: true,
					itemStyle: {
						normal: {
							areaColor: "#323c48",
							borderColor: "#111",
						},
						emphasis: {
							areaColor: "#2a333d",
						},
					},
				},
			});
			return option;
		},
		//显示中国地图
		showChinaMap() {
			let option = this.getMapOpt();
			this.map.setOption(option, true);
		},
		//显示各省地图
		getProvinceMapOpt(provinceAlphabet) {
			axios.get(`http://127.0.0.1:5500/province/${provinceAlphabet}.json`).then((s) => {
				echarts.registerMap(provinceAlphabet, s.data);
				let option = this.getMapOpt(provinceAlphabet);
				this.map.setOption(option, true);
			});
		},
		initMap() {
			var dom = document.getElementById("left_map");
			this.map = echarts.init(dom);
			let option = this.getMapOpt();
			if (option && typeof option === "object") {
				this.map.setOption(option, true);
			}
			this.map.on("click", (param) => {
				event.stopPropagation(); // 阻止冒泡
				// 找到省份名
				let provinceIndex = provincesText.findIndex((x) => {
					return param.name === x;
				});
				if (provinceIndex === -1) return;
				let provinceAlphabet = provinces[provinceIndex];
				// 重新渲染各省份地图
				this.getProvinceMapOpt(provinceAlphabet);
			});
		},
	},
	computed: {},
};
</script>

<style>
.left_map {
	width: 1200px;
	height: 100vh;
}
.right_opetate {
	flex: 1;
	height: 100vh;
	background: #404a59;
}
.map_form {
}
</style>
