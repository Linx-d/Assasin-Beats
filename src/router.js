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

//导入 新品上市 组件 news_product
import news_product from "./components/news_product/news_product.vue";
//导入 联系我们 组件 contactus
import contactus from "./components/contactus/contactus.vue";
//导入 首页 组件 index
import index from "./components/index/index.vue";
//导入 系列产品 组件 product_series
import product_series from "./components/product_series/product_series.vue";
//导入 新闻资讯 组件 news
import news from "./components/news/news.vue";
//导入 关于我们 组件 about
import about from "./components/about/about.vue";
//导入 购物车 组件 shopping
import shopping from "./components/shopping/shopping.vue";
//导入 个人中心 组件 information
import information from "./components/information/information.vue";
//导入 新闻资讯子界面 
import news_active from "./components/news/news_active/news_active.vue";


//创建路由对象
var router = new VueRouter({
	routes:[
	{
		path: "/",
		redirect: "/index"
	},
	{
		path: "/news_product",
		component: news_product
	},
	{
		path: "/contactus",
		component: contactus
	},
	{
		path: "/index",
		component: index
	},
	{
		path: "/product_series",
		component: product_series
	},
	{
		path: "/news",
		component: news
	},
	{
		path: "/about",
		component: about
	},
	{
		path: "/shopping",
		component: shopping
	},
	{
		path: "/information",
		component: information
	},
	{
		path: "/news/news_active",
		component: news_active
	}
	]
});

//暴露路由对象
export default router;