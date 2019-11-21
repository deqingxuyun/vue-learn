<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{$store.state.count}}</p>
    <p>下面是vuex获取的状态</p>
    <p>{{count2}}</p>
    <Test :test2-msg="msg2" @spd。="setVal"></Test>
    <button @click = handleAdd(10)>增加</button>
    <button @click = handleRed(10)>减少</button>
    <button @click="handleActionsAdd(10)">异步增加</button>
    <button @click="handleActionsReduce(10)">异步减少</button>
  <!--父组件向子组件传值的格式  ‘teQWertkyl、st2-msg’是子组件的props规定好的接受数据的变量名字 'msg2'是传下去的数据，可以写死也可以是个变量 -->


  </div>
</template>

<script>
  import Test from './test2';
  import hub from './../Event/EventBus';
  export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '我是父组件helloworld',
      msg2:'我就是测试父组件向子组件传值'
    }
  },
  components:{
    Test
  },
  created:function(){
    console.log(this.$root);
    hub.$on('change',(val) =>{
      alert(val);
      hub.$emit('test','我草');
    })
  },
    methods:{
      setVal(val){
        // alert();
        console.log(val);
      },
      handleAdd(n){
        this.$store.commit('mutationsAddCount',n);
      },
      handleRed(n){
        this.$store.commit('mutationsReduceCount',n);
      },
      handleActionsAdd(n){
        this.$store.dispatch('actionsAddCount',n);
      },
      handleActionsReduce(n){
        this.$store.dispatch('actionsReduceCount',n)
      }
    },
    computed:{
      count2(){
        return this.$store.getters.getterCount;
      }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div{
    background-color: deeppink;
  }
</style>
