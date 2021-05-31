<template>
<div class='app-container' @click="aboutClick">
    about
</div>
</template>

<script>

export default {
components: {},
props:['sendData'],
data() {
return {

};
},
methods: {
    aboutClick(){
        alert('about组件');
        this.$emit('showCityName','about组件');
    }
},
created() {

},
mounted() {

},
}
</script>
<style lang='scss' scoped>

</style>