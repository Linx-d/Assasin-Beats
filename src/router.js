/*
//导入vue-router
import VueRouter from "vue-router"; 



//创建路由对象
var router = new VueRouter({
	routes: []
});

export default router;
*/

//导入vue-router
import VueRouter from "vue-router";

//导入新品上市组件news_product
import news_product from "./components/news_product/news_product.vue";
//导入联系我们组件contactus
import contactus from "./components/contactus/contactus.vue";

//创建路由对象
var router = new VueRouter({
	routes:[
	{
		path: "/",
		redirect: "/news_product"
	},
	{
		path: "/news_product",
		component: news_product
	},
	{
		path: "/contactus",
		component: contactus
	}
	]
});

//暴露路由对象
export default router;