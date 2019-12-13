<template>
  <div class="table-box">
    <div class="table-box-container" ref="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="150"></el-table-column>
        <!-- <el-table-column prop="date" label="日期" width="150"></el-table-column> -->
        <el-table-column label="配送信息">
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="province" label="省份" width="120"></el-table-column>
        </el-table-column>

        <el-table-column label="地址">
          <el-table-column prop="city" label="市区" width="120"></el-table-column>
          <el-table-column prop="address" label="地址" width="300"></el-table-column>
        </el-table-column>

        <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
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
    // 拿到表头的第一个th,并设置斜线类

    let fristTableHearTr =
      tableHeardNodes[tableHeardNodesNeedIndex[0]].childNodes[0];
    console.log("表头第一tr", fristTableHearTr);
    setTimeout(() => {
      let fristTableHearTh = fristTableHearTr.childNodes[0];
      console.log("表头第一Th", fristTableHearTh);
      this.setAttributeID(fristTableHearTh, "class", "diagonal");
      this.setAttributeID(fristTableHearTh, "id", "diagonal");
      let fristTableHearThDom = this.getByIdDom("diagonal");
      console.log("表头第一Th宽", fristTableHearThDom.clientHeight,fristTableHearThDom.clientWidth);
    }, 0);

    //  this.setAttributeID(fristTableHearTh,'id','fristTableHearTh');
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
  border: 1px solid red;
  .table-box-container {
    width: 80%;
    height: 50%;
    margin-top: 100px;
    border: 1px solid rgb(173, 243, 243);
    /deep/ .el-table__header {
      .is-group {
        th {
          background-color: #29506f;
        }
      }
    }
    /deep/ .el-table {
      tr {
        background-color: #1b3649;
      }
    }
  }
  /deep/ .diagonal {
    /* background-color: aquamarine !important; */
    &:before {
      content: "";
      position: absolute;
      width: 1px;
      height: 176.7px; /*这里需要自己调整，根据td的宽度和高度*/
      top: 0;
      left: 0;
      background-color: #ebeef5;
      display: block;
      transform: rotate(-57deg); /*这里需要自己调整，根据线的位置*/
      transform-origin: top;
    }
  }
}
</style>
