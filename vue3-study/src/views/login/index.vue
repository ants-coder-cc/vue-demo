<template>
	<div>
		<p>index</p>
		<button @click="toHome">toHomeqqq</button>
	</div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
	setup() {
        const router = useRouter();
        console.log(router);
		const toHome = () => {
			router.push({
				name: "home",
			});
		};
		return {
			toHome,
		};
	},
};
</script>
<style scoped></style>
