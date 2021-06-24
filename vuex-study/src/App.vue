<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
    <div>store中的姓名：{{this.$store.state.name}}</div>
    <div>
      <button @click="setNameDefault">不带参数设置李四</button>
    </div>
    <div>
      <input v-model="name"/><button @click="setName">带参数设置李四</button>
    </div>
    <div>异步</div>
    <div>store中的姓名：{{this.$store.state.name}}</div>
    <div>
      <button @click="setNameDefaultAsync">不带参数设置李四</button>
    </div>
    <div>
      <input v-model="name"/><button @click="setNameAsync">带参数设置李四</button>
    </div>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapActions } from 'vuex';
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      name:''
    }
  },
  mounted() {
    console.log('this.$store=====>',this.$store)
  },
  methods: {
    setNameDefault() {
      this.$store.commit('changeNameToZhangsan');
    },
    setName() {
      this.$store.commit({
        type:'changeNameWithParam',
        name:this.name
      });
    },
    setNameDefaultAsync() {
      this.$store.dispatch('changeNameAsync');
    },
     setNameAsync() {
      this.$store.dispatch({
        type:'changeNameWithParamAsync',
        name:this.name
      });
    },
    ...mapActions({
     changeNameAsync: "app/changeNameAsync",
     changeNameWithParamAsync: "app/changeNameWithParamAsync"
   })
  },
}
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
