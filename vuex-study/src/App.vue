<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
    <div>store中的姓名：{{this.$store.state.name}}</div>
    <!-- 需要修改的 -->
    <div>store中的姓名：{{formatterName}}</div>
    <div>
      <span>不带参数getter得到的数据：</span>
      <b>{{this.$store.getters.formatterName}}</b>
      <br/>
      <span>带参数getter得到的数据：</span>
      <b>{{this.$store.getters.customFormatterName('test')}}</b>
    </div>
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
      <input v-model="asyncName"/><button @click="setNameAsync">带参数设置李四</button>
    </div>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapActions } from 'vuex';
console.log('mapActions===>',mapActions);

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      name:'',
      asyncName:''
    }
  },
  computed: {
    formatterName() {
      let postfix = '';
      if(this.$store.state.name === '张三'){
        postfix = '最棒';
      }
      return this.$store.state.name + postfix
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
        name:this.asyncName
      });
    },
    ...mapActions([
     'changeNameAsync',
     'changeNameWithParamAsync'
   ])
   
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
