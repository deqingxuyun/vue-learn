<template>
  <div>
    <p @click="sendParent()">测试父组件向子组件发送事件</p>
    <p @click="TestEmit()">我是test</p>
    <p v-if="test2Msg">{{test2Msg}}</p>
  </div>
</template>

<script>
  import hub from './../Event/EventBus';
    export default {
        name: "test2",
      // props是父组件向子组件传递数据的手段，它定义父组件向子组件传递的数据名及其类型
      props:{
          test2Msg:String,
      },
      methods:{
        TestEmit:function(){
          // this.$root.hub.$emit('change','试验一下'); //通过$root.$emit也可以，但是官方使用一个空的vue实例集中事件处理更好一点
          hub.$emit('change','试验一下');
        },
        sendParent(){
          // alert(0);
          this.$emit('spd','测试父组件向子组件');
          console.log(0);
        }
      },
      created:function(){
          console.log(hub);
      }
    }
</script>

<style scoped >
</style>
