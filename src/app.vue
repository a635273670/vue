<template>
 <div class="wrapper">
        <mt-header fixed title="fixed top"></mt-header>
          <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">1</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
     <!-- <router-link to="#">11221</router-link> -->
	 <!--添加动画  -->
   	<transition>
			<router-view></router-view>
		</transition>
 </div>
</template>
<script >
export default {
    data(){
        return {

        }
    }

}
</script>
<style scoped>
    .wrapper{
		padding-top: 40px;
		  overflow-x: hidden;
		  /* /问题解决横向滚动条 */
	}
	/* 进入式的动画 */
	/* .v-enter {
		opacity: 0;
		transform: translateX(100%);
	} */
	/*离开
	*/
	.v-enter,.v-leave-to {
		opacity: 0;
		transform: translateX(100%);
		position: absolute; 
		/* 解决进入前后卡位置问题 */
	}
	.v-enter-active,
	.v-leave-active {
	transition: all 0.5s ease;
	}
</style>


