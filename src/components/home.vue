<template>
  <div class="home">
    <div class="button">
      <button @click="add()">加一</button>
      <button @click="reu()">减一</button>
    </div>
    <div
      class="box"
      v-for="(item,index) in boxs"
      :key="index"
      ref="boxContent"
      v-bind:class="[box1 ? 'box-1' : '',box2 ? 'box-2' : '',box3 ? 'box-3' : '',box4 ? 'box-4' : '']"
    >
      <baseBox :boxName="item"></baseBox>
    </div>
  </div>
</template>

<script>
import hub from "./../Event/EventBus";
import baseBox from "@/page/baseBox";
export default {
  name: "Home",
  data() {
    return {
      msg: "我是父组件helloworld",
      msg2: "我就是测试父组件向子组件传值",
      boxs: [
        {
          id: 1,
          name: "我是盒子1"
        },
        {
          id: 2,
          name: "我是盒子2"
        },
        {
          id: 3,
          name: "我是盒子3"
        },
        {
          id: 4,
          name: "我是盒子4"
        },
        {
          id: 5,
          name: "我是盒子5"
        },
        {
          id: 6,
          name: "我是盒子6"
        },
        {
          id: 7,
          name: "我是盒子7"
        },
        {
          id: 8,
          name: "我是盒子8"
        }
        // {
        // id:9,
        // name:'我是盒子9'
        // },
      ],
      boxContent: [],
      //  第一个代表box1，一次排开
      boxShow: [false, false, false, false],
      box1: false,
      box2: false,
      box3: false,
      box4: false
    };
  },
  components: {
    baseBox
  },
  created: function() {
    this.updataDom();
  },
  methods: {
    //  样式控制
    controlBox(arr, ind) {
      arr.forEach((item, index) => {
        if (index == ind) {
          arr[index] = true;
        } else {
          arr[index] = false;
        }
        console.log(arr);
      });
      this.box1 = arr[0];
      this.box2 = arr[1];
      this.box3 = arr[2];
      this.box4 = arr[3];
    },
    updataDom() {
      this.$nextTick(() => {
        this.boxContent = this.$refs.boxContent;
        if (this.boxContent.length == 1) {
          this.controlBox(this.boxShow, 0);
        } else if (this.boxContent.length == 2) {
          this.controlBox(this.boxShow, 1);
        } else if (this.boxContent.length == 3 || this.boxContent.length == 4) {
          this.controlBox(this.boxShow, 2);
        } else {
          this.controlBox(this.boxShow, 3);
        }
        console.log(this.$refs.boxContent);
      });
    },
    add() {
      this.boxs.push({
        id: 8,
        name: "我是盒子8"
      });
     this.updataDom();
    },
    reu() {
      this.boxs.pop();
     this.updataDom();
    }
  },
  computed: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped >
.button {
  position: absolute;
  top: 0;
  right: 0;
}
.home {
  width: 100%;
  height: 600px;
  background-color: antiquewhite;
  display: flex;
  flex-wrap: wrap;
  .box {
    // flex-grow:1;
    //  min-width:calc(25% - 2px);
    //  height: 100%;
    background-color: aquamarine;
    border: 1px solid red;
  }
  .box-1 {
    width: 100%;
    height: 100%;
  }
  .box-2 {
    width: calc(50% - 2px);
    height: 100%;
    background-color: rgb(245, 164, 227);
  }
  .box-3 {
    width: calc(50% - 2px);
    height: 50%;
    background-color: rgb(242, 245, 84);
  }
  .box-4 {
    width: calc(25% - 2px);
    height: 50%;
    background-color: rgb(212, 244, 245);
  }
}
</style>
