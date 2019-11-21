<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  import Test from '@/components/test2.vue';
  import hub from './Event/EventBus';
export default {
  name: 'App',
  components:{
    Test,
  },
  methods:{

  },
  data(){
    return{
    }
  },
  created:function () {
    hub.$on('test',(val) =>{
      alert(val);
    })
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
