import Vue from 'vue'
import VueRouter from 'vue-router'
/*
  路由统一使用懒加载
*/
const Home = () => import('../views/Home');
const Calculator = () => import('../views/Calculator');
const test = () => import('../views/test/test');
const stickySlot = () => import('../views/stickySlot');
const demo = () => import('../views/demo');
const player = () => import('../views/videoPlayer/Player');
const dragAndDrop = () => import('../views/dragAndDrop');


Vue.use(VueRouter)

const routes = [
    {
        path: '/test',
        name: 'test',
        component: test,
        meta: {
            index: 0,
            name: '测试'
        }
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
        meta: {
            index: 1,
            name: '用户注册'
        }
    },
    {
        path: '/calculator',
        name: 'Calculator',
        component: Calculator,
        meta: {
            index: 2,
            name: '我的'
        }
    },
    {
        path:'/stickySlot',
        name:'stickySlot',
        component:stickySlot,
        meta: {
            index: 3,
            name: '吸顶'
        }
    },
    {
        path:'/demo',
        name:'demo',
        component:demo,
        meta: {
            index: 4,
            name: '案例'
        }
    },
    {
        path:'/',
        name:'player',
        component:player,
        meta: {
            index: 4,
            name: '视频'
        }
    },
    {
        path:'/dragAndDrop',
        name:'dragAndDrop',
        component:dragAndDrop,
        meta: {
            index: 4,
            name: '视频'
        }
    }
]

const router = new VueRouter({
    routes
})

export default router
