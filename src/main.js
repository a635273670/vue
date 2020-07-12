console.log('ok');
import router from './router/router.js'//router.js 路由模块
import Vue from 'vue'
import app from './app.vue'


// 2.1 导入 vue-resource
// import VueResource from 'vue-resource'
// // 2.2 安装 vue-resource
// Vue.use(VueResource)

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'
//按需导入
import { Header,Swipe,SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)

new Vue({
    el:"#app",
    router,
    data:{},
    components:{
       app,
    },
    template: '<app></app>'
})