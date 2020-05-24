console.log('ok');
import router from './router/router.js'
import Vue from 'vue'
import app from './app.vue'

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
// import './lib/mui/css/icons-extra.css'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

new Vue({
    el:"#app",
    router,
    data:{},
    components:{
       app,
    },
    template: '<app></app>'
})