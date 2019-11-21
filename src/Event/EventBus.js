// vue 通过一个空的vue实例，作为事件集中管理，来完成全局事件通知！
import Vue from 'vue';
const hub = new Vue();
export default hub;
