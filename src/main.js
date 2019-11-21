//入口文件
//console.log('ok');

//1.导入Vue包
//1.1 传统方法
//import Vue from "../node_modules/vue/dist/vue.js";

//1.2导入vue使用render渲染页面, 需要导入被渲染的App.vue文件
import Vue from "vue";
import App from "./App.vue";

//2.在index.html页面中创建App容器

// 导入vue-router路由包
import VueRouter from "vue-router";
// 在Vue上安装vue-router(注册路由)
Vue.use(VueRouter);
//导入router.js
import router from "./router.js";


//3.创建Vue实例
var vm = new Vue({
	el: "#app",
	data: {
		msg: "no1_infp"
	},
	methods: {},
	render: c => c(App),
	router
});





