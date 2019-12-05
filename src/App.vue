<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Test from "@/components/test2.vue";
import hub from "./Event/EventBus";
import { stompScoket } from "@/server/stomp-socket.js";
export default {
  name: "App",
  components: {
    Test
  },
  methods: {
    updateScoketValue(value) {
      this.StompScoketvalue = value;
    }
  },
  data() {
    return {
        StompScoket:Object,
      StompScoketvalue:null,
    };
  },
  watch:{
    StompScoketvalue(newValue ,oldValue){
      if(newValue !== null){
        console.log('新值',newValue,'旧值',oldValue);
        //  this.$bus.emit('avc','newValue');
      }
    }
  },
  created: function() {
    hub.$on("test", val => {
      alert(val);
    });
    // this.StompScoket = new stompScoket();
    // this.StompScoket.stompInit();
    // this.StompScoket.stompConnect("", this.updateScoketValue);
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
