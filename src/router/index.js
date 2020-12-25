import Vue from 'vue'
import VueRouter from 'vue-router'
/*
  路由统一使用懒加载
*/
const Home = ()=> import('../views/Home');
const Calculator = ()=> import('../views/Calculator');
const test = ()=> import('../views/test/test')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'test',
    component: test,
    meta:{
      index:0,
      name:'测试'
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta:{
      index:1,
      name:'用户注册'
    }
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator,
    meta:{
      index:2,
      name:'我的'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
