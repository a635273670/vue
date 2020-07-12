import VueRouter from 'vue-router'
import Vue from 'vue'
import home from '../components/home.vue'
import member from '../components/menber.vue'
import ShopcarContainer from '../components/ShopcarContainer.vue'
import SearchContainer from '../components/SearchContainer.vue'

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [ // 配置路由规则
        { path: '/', redirect: '/home' },//设置根路径 默认跳转
        { path: '/home',component:home},
        { path: '/member',component:member},
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer }
    ],
    linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active；
})
export default router