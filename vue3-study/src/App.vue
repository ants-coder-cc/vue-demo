<template>
    <div>{{ obj.name }} {{ obj.age }}</div>
    <div>{{ count }}</div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <div>{{ reactive.name }}</div> -->
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Login />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Login from "./views/login/index.vue";
import { defineComponent, reactive, ref, toRefs, isRef } from "vue";
export default {
    name: "App",
    components: {
        HelloWorld,
        Login,
    },
    // 新增的 组件新属性  代替了beforeCreate 、 created 两个生命周期函数
    setup(props, context) {
        // setup中无法访问到this   this为undefined
        // props   ==>  用来接收 props 数据
        // context 用来定义上下文, 上下文对象中包含了一些有用的属性，这些属性在 vue 2.x 中需要通过 this 才能访问到, 在 setup() 函数中无法访问到 this，是个 undefined
        console.log("props", props);
        console.log("context", context);
        console.log("ref", ref);
        console.log("isRef", isRef);
        console.log("toRefs", toRefs);
        console.log("defineComponent", defineComponent);
        // reactive() 函数接收一个普通对象，返回一个响应式的数据对象, 想要使用创建的响应式数据也很简单，创建出来之后，在setup中return出去，直接在template中调用即可
        const count = ref(10);
        console.log(count.value);
        const obj = reactive({
            name: "金毛",
            age: 4,
        });
        // 返回值: return {}, 返回响应式数据, 模版中需要使用的函数
        return {
            count,
            obj,
        };
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
