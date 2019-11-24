<template>
  <div id="app">
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
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
