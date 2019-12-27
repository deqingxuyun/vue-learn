<template>
  <div class="table-box">
    <div class="table-box-container" ref="table">
      <!-- <el-table :data="tableData" style="width: 100%" >
            <el-table-column prop="date" label="日期" width="150"></el-table-column>
        <el-table-column label="配送信息">
          <el-table-column prop="date" label="姓名" width="120"></el-table-column>
          <el-table-column prop="date" label="省份" width="120"></el-table-column>
        </el-table-column>

        <el-table-column label="地址">
          <el-table-column prop="city" label="市区" width="120"></el-table-column>
          <el-table-column prop="address" label="地址" width="300"></el-table-column>
        </el-table-column>

        <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
      </el-table>-->
      <el-table :data="tableData" style="width: 100%">
        <el-table-column
          v-for="(mock,index) in mocks"
          :key="index"
          :prop="mock.prop"
          :label="mock.label"
          :width="mock.width"
        >
          <el-table-column
            v-for="(childMock ,childIndex) in mock.children"
            :key="childIndex"
            :prop="childMock.prop"
            :label="childMock.label"
            :width="childMock.width"
          ></el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import hub from "./../Event/EventBus";
export default {
  name: "",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      mocks: [
        {
          label: "日期",
          prop: "date",
          width: 150,
          children: []
        },
        {
          label: "配送信息",
          prop: "",
          width: "",
          children: [
            {
              label: "姓名",
              prop: "date",
              width: 120,
              children: []
            },
            {
              label: "省份",
              prop: "date",
              width: 120,
              children: []
            }
          ]
        },
        {
          label: "地址",
          prop: "",
          width: "",
          children: [
            {
              label: "市区",
              prop: "date",
              width: 120,
              children: []
            },
            {
              label: "地址",
              prop: "date",
              width: 300,
              children: []
            }
          ]
        },
        {
          label: "邮编",
          prop: "zip",
          width: 120,
          children: []
        }
      ]
    };
  },
  // props是父组件向子组件传递数据的手段，它定义父组件向子组件传递的数据名及其类型
  props: {},
  methods: {
    /*
     *@description: 设置ID属性
     *@author: yxd
     *@date: 2019-12-13 15:40:01
     */
    setAttributeID(dom, type, value) {
      if (dom !== null && type !== null && value !== null) {
        dom.setAttribute(type, value);
      } else {
        console.log("参数错误");
      }
    },
    /*
     *@description: 获取dom
     *@author: yxd
     *@date: 2019-12-13 15:40:01
     */
    getByIdDom(id) {
      if (id !== null && typeof id == "string") {
        return document.getElementById(id);
      } else {
        console.log("参数错误");
      }
    },
    /*
     *@description:div节点筛选
     *@author: yxd
     *@date: 2019-12-13 16:58:47
     */
    filterNode(fakeArr, callBack) {
      Array.prototype.forEach.call(fakeArr, callBack);
    },
    /*
     *@description:canvas画线
     *@author: yxd
     *@date: 2019-12-16 11:23:39
     */
    canvasLine(parentElement, canvas, Width, Height) {
      //    let canvas = document.createElement("canvas");
      this.setAttributeID(canvas, "width", Width);
      this.setAttributeID(canvas, "height", Height);
      this.setAttributeID(canvas, "class", "line-canv");
      parentElement.appendChild(canvas);
      console.log("canvas对象", canvas);
      let ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Width, Height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#fff";
      ctx.stroke();
    },
    /*
     *@description:额外div显示
     *@author: yxd
     *@date: 2019-12-16 13:32:56
     */
    extraInfo(parentElement, typeNode, content, ...arg) {
      let currentDiv = document.createElement(typeNode);
      currentDiv.innerHTML = content;
      if (arg.length == 2) {
        this.setAttributeID(currentDiv, arg[0], arg[1]);
      }
      parentElement.appendChild(currentDiv);
      // console.log('我要看看',arg);
    },
    /*
     *@description:去掉hover
     *@author: yxd
     *@date: 2019-12-16 14:46:32
     */
    deleteHover() {
      const obj = document.getElementsByClassName(
        "el-table--enable-row-hover"
      )[0];
      //   console.log("element", obj);
      let clz = obj.getAttribute("class");

      clz = clz.replace("el-table--enable-row-hover", "");

      obj.setAttribute("class", clz);
    }
  },
  mounted() {
    // 第一步获取元素  拿到要操作的子节点Index
    console.log(this.$refs);
    let tableDom = this.$refs.table;
    // console.log(tableDom);
    // console.log(tableDom.childNodes[0].childNodes);
    let tableNodes = tableDom.childNodes[0].childNodes; // 所有节点
    let needDom = []; //要操作的子节点Index
    // Array.prototype.forEach.call(tableNodes, (item, index) => {
    //     console.log(item.className,typeof(item.className) == 'string');
    //     // console.log( item.className.search('el-table__body-wrapper'));
    //   if (item.nodeName == "DIV" && (item.className == 'el-table__header-wrapper' ||  (typeof(item.className) == 'string' ? item.className.search('el-table__body-wrapper') !== -1: false))) {
    //     needDom.push(index);
    //   }
    // });
    this.filterNode(tableNodes, (item, index) => {
      console.log(item.className, typeof item.className == "string");
      if (
        item.nodeName == "DIV" &&
        (item.className == "el-table__header-wrapper" ||
          (typeof item.className == "string"
            ? item.className.search("el-table__body-wrapper") !== -1
            : false))
      ) {
        needDom.push(index);
      }
    });
    console.log(needDom);

    //第二步  拿到表头，
    console.log("表头", tableNodes[needDom[0]].childNodes[0]);
    let tableHeadrDom = tableNodes[needDom[0]].childNodes[0]; // 表头
    let tableHeardNodes = tableHeadrDom.childNodes; // 表头所有子节点
    console.log("表头所有子节点", tableHeardNodes);
    let tableHeardNodesNeedIndex = [];
    // Array.prototype.forEach.call(tableHeardNodes,(item,index)=>{
    //     if(item.nodeName == "THEAD"){
    //         tableHeardNodesNeedIndex.push(index);
    //     }
    // })
    this.filterNode(tableHeardNodes, (item, index) => {
      if (item.nodeName == "THEAD") {
        console.log("我靠，我看看", tableHeardNodesNeedIndex);
        tableHeardNodesNeedIndex.push(index);
        console.log("我靠，我看看", tableHeardNodesNeedIndex);
      }
    });
    // 第二步拿到表头的第一个th,

    let fristTableHearTr =
      tableHeardNodes[tableHeardNodesNeedIndex[0]].childNodes[0];
    console.log("表头第一tr", fristTableHearTr);
    setTimeout(() => {
      let fristTableHearTh = fristTableHearTr.childNodes[0];
      console.log("表头第一Th", fristTableHearTh);
      this.setAttributeID(fristTableHearTh, "class", "diagonal");
      this.setAttributeID(fristTableHearTh, "id", "diagonal");
      let fristTableHearThDom = this.getByIdDom("diagonal");
      let fristTableHearThDomHeight = fristTableHearThDom.clientHeight;
      let fristTableHearThDomWidth = fristTableHearThDom.clientWidth;
      console.log(
        "表头第一Th宽",
        fristTableHearThDom.clientHeight,
        fristTableHearThDom.clientWidth
      );
      // 第三步   创建canvas,用于画线
      let canvas = document.createElement("canvas");
      this.setAttributeID(canvas, "width", fristTableHearThDomWidth);
      this.setAttributeID(canvas, "height", fristTableHearThDomHeight);
      this.setAttributeID(canvas, "class", "line-canv");
      fristTableHearThDom.appendChild(canvas);
      console.log("canvas对象", canvas);
      let ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(fristTableHearThDomWidth, fristTableHearThDomHeight);
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(250,250,250)";
      ctx.stroke();
      // 第四步   创建div,用于额外显示
      this.extraInfo(fristTableHearThDom, "div", "避雷器", "class", "sell");

      console.log("表身", tableNodes[needDom[1]].childNodes[0]);
      this.setAttributeID(
        tableNodes[needDom[1]].childNodes[0],
        "id",
        "tableContent"
      );
      let tableContent = this.getByIdDom("tableContent");
      let allNodes = tableContent.querySelectorAll("tr");
      console.log("所有的tr节点", allNodes);
      this.filterNode(allNodes, (item, index) => {
        this.extraInfo(
          item.childNodes[0],
          "div",
          "12:12:12",
          "class",
          "cell cell2"
        );
      });
      this.deleteHover();
    }, 0);
  }
};
</script>

<style scoped lang = "less">
.table-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  .table-box-container {
    width: 80%;
    height: 50%;
    margin-top: 100px;
    /* border: 1px solid rgb(173, 243, 243); */
    /deep/ .el-table__header {
      .is-group {
        th {
          background-color: #29506f;
        }
      }
    }
    /deep/ .el-table {
      tr {
        background-color: RGB(27, 54, 73);
        &:nth-of-type(2n + 1) {
          background-color: RGB(13, 30, 45);
        }
      }
    }
  }
  /deep/ .diagonal {
    position: relative;
    .line-canv {
      position: absolute;
      top: 0;
      left: 0;
      /* border: 1px solid red; */
    }
    .cell {
      position: absolute;
      bottom: 10px;
      right: 40px;
    }
    .sell {
      position: absolute;
      top: 10px;
      right: 15px;
    }
  }
  /deep/ .cell2 {
    /* border: 1px solid red; */
  }
  /deep/ .cell {
    text-align: center;
  }
  /deep/ .el-table__row--striped {
    background-color: RGB(28, 55, 74);
    /* border: 1px solid red; */
  }
}
</style>
