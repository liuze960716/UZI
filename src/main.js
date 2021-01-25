import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
// 引入适配
import 'amfe-flexible/index.js'

//引入vant组件
import {Button, Toast} from 'vant';

Vue.use(Button).use(Toast);

Vue.prototype.$http = axios;
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
