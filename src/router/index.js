import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/home';
import camera from '@/components/camera.vue';
import Table from '@/components/table.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/he',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'table',
      component: Table
    },
    {
      path: '/table',
      name: 'table',
      component: Table
    }
  ]
})
