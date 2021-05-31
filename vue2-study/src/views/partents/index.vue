<template>
<div class='app-container'>
    partests
    <about @showCityName="updateCity"></about>
</div>
</template>

<script>
import About from '@/views/about/index.vue';
export default {
components: {
    About
},
data() {
return {

};
},
methods: {
    updateCity(data){
        console.log(data);
    },
},
created() {

},
mounted() {

},
}
</script>
<style lang='scss' scoped>

</style>