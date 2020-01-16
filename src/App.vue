<template>
    <div class="pageFullScreen">
    <!--导航 nav-->
        <div class="nav" v-show="!nav_sousuo">
            <ul>
                <li class="logo"><img src="./images/nav_logo.png" alt=""></li>
                <li class="sosuo link" @click="nav_sousuo=true"><a href="#" :class="{ nav_red: nav_1 }"><img src="./images/sousuo.png" alt=""></a></li>
                <li class="link" @click="navChoose('2')"><router-link to="/index" :class="{ nav_red: nav_2default }">首页</router-link></li>
                <li class="link" @click="navChoose('3')"><router-link to="/product_series" :class="{ nav_red: nav_3 }">系列产品</router-link></li>
                <li class="link" @click="navChoose('4')"><router-link to="/news_product" :class="{ nav_red: nav_4 }">新品上市</router-link></li>
                <li class="link" @click="navChoose('5')"><router-link to="/news" :class="{ nav_red: nav_5 }">新闻资讯</router-link></li>
                <li class="link" @click="navChoose('6')"><router-link to="/about" :class="{ nav_red: nav_6 }">关于我们</router-link></li>
                <li class="link" @click="navChoose('7')"><router-link to="/contactus" :class="{ nav_red: nav_7 }">联系我们</router-link></li>
                <li class="gouwu link" @click="navChoose('8')"><router-link to="/shopping" :class="{ nav_red: nav_8 }"><img src="./images/gouwuche.png" alt=""></router-link></li>
                <li class="denglu link" @click="navChoose('9')"><router-link to="/information" :class="{ nav_red: nav_9 }"><img src="./images/denglu.png" alt=""></router-link></li>
            </ul>
        </div>
        <div class="nav_sousuo" v-show="nav_sousuo">
        	<div class="nav_sousuo_top">
        		<div class="nav_top_center">
        			<img src="./images/xiala_logo.png" alt="">
        			<div class="input"><input type="text" placeholder="搜索Beats"></div>
        			<span @click="nav_sousuo=false">x</span>
        		</div>
        	</div>
        </div>

	<!--渲染组件出口-->
        <router-view>
        	
        </router-view>

    <!--页脚 footer-->
        <div class="footer">
            <!--页脚 footer_pro-->
            <div class="background_image"><img src="./images/background_image.png" alt=""></div>
            <div class="footer_pro"><img src="./images/footer_pro.png" alt=""></div>
            <img src="./images/footer_left.png" class="footer_left" alt="">

            <div class="footer_content">
                <div class="footer_content_top">
                    <div><span>Beats Audio</span><br>推进声音革命</div>
                    <div class="sousuo">
                        <img src="./images/sousuo.png" alt="">
                        <input type="text" placeholder="输入关键字">
                    </div>
                </div>
                <div class="footer_content_bottom">
                    <dl>
                        <dt><a href="">产品中心</a></dt>
                        <dd><a href="">入耳式</a></dd>
                        <dd><a href="">头戴式</a></dd>
                        <dd><a href="">扬声器</a></dd>
                    </dl>
                    <dl>
                        <dt><a href="">关于我们</a></dt>
                        <dd><a href="">品牌故事</a></dd>
                        <dd><a href="">发展历程</a></dd>
                        <dd><a href="">了解Beats</a></dd>
                    </dl>
                    <dl>
                        <dt><a href="">新闻资讯</a></dt>
                        <dd><a href="">Beats动态</a></dd>
                        <dd><a href="">新闻事记</a></dd>
                    </dl>
                    <dl>
                        <dt><a href="">技术支持</a></dt>
                        <dd><a href="">Beats配件</a></dd>
                        <dd><a href="">热门主体</a></dd>
                        <dd><a href="">更多资源</a></dd>
                    </dl>
                    <dl>
                        <dt><a href="">Beats全球</a></dt>
                        <dd><a href="">实体门店</a></dd>
                        <dd><a href="">体验中心</a></dd>
                        <dd><a href="">配送服务</a></dd>
                    </dl>
                </div>
            </div>

            <div class="footer_footer">
                <div><span>Beats</span>全球</div>
                <div><span>Beats</span>中心</div>
                <div><span>Beats</span>专业领域</div>
            </div>
        </div>

    <!--立即了解
    <div class="know_info"><a href="#"><span></span>立即了解</a></div>
    -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            nav_1: false,
            nav_2default: true,
            nav_3: false,
            nav_4: false,
            nav_5: false,
            nav_6: false,
            nav_7: false,
            nav_8: false,
            nav_9: false,
            nav_sousuo: false
        };
    },
    methods: {
        navChoose(id) {
            switch (id) {
                default :
                this.nav_2default = true;
                this.nav_3 = false;
                this.nav_4 = false;
                this.nav_5 = false;
                this.nav_6 = false;
                this.nav_7 = false;
                this.nav_8 = false;
                this.nav_9 = false;
                break;
                case '3':
                this.nav_2default = false;
                this.nav_3 = true;
                this.nav_4 = false;
                this.nav_5 = false;
                this.nav_6 = false;
                this.nav_7 = false;
                this.nav_8 = false;
                this.nav_9 = false;
                break;
                case '4':
                this.nav_2default = false;
                this.nav_3 = false;
                this.nav_4 = true;
                this.nav_5 = false;
                this.nav_6 = false;
                this.nav_7 = false;
                this.nav_8 = false;
                this.nav_9 = false;
                break;
                case '5':
                this.nav_2default = false;
                this.nav_3 = false;
                this.nav_4 = false;
                this.nav_5 = true;
                this.nav_6 = false;
                this.nav_7 = false;
                this.nav_8 = false;
                this.nav_9 = false;
                break;
                case '6':
                this.nav_2default = false;
                this.nav_3 = false;
                this.nav_4 = false;
                this.nav_5 = false;
                this.nav_6 = true;
                this.nav_7 = false;
                this.nav_8 = false;
                this.nav_9 = false;
                break;
                case '7':
                this.nav_2default = false;
                this.nav_3 = false;
                this.nav_4 = false;
                this.nav_5 = false;
                this.nav_6 = false;
                this.nav_7 = true;
                this.nav_8 = false;
                this.nav_9 = false;
                break;
                case '8':
                this.nav_2default = false;
                this.nav_3 = false;
                this.nav_4 = false;
                this.nav_5 = false;
                this.nav_6 = false;
                this.nav_7 = false;
                this.nav_8 = true;
                this.nav_9 = false;
                break;
                case '9':
                this.nav_2default = false;
                this.nav_3 = false;
                this.nav_4 = false;
                this.nav_5 = false;
                this.nav_6 = false;
                this.nav_7 = false;
                this.nav_8 = false;
                this.nav_9 = true;
                break;
            }
        }
    }
}
</script>

<style lang="scss" scoped >
        .pageFullScreen,
        .nav,
        .nav_sousuo {
            min-width: 1903px;
        }
/*---------------------nav开始----------------------*/
        .nav {
        	width: 1903px;
        	height: 132px;
        	/*background-color: #010101;*/
        	position: absolute;
        	top: 0;
        	left: 0;
        	z-index: 999;
        	border: 1px solid #aaaaaa;
        	box-sizing: border-box;
        }
        .nav .logo {
        	width: 362px;
        	background-color: #fff;
        	position: relative;
        }
        .nav .gouwu,
        .nav .sosuo,
        .nav .denglu {
        	position: relative;
        }
        .nav .denglu {
            width: 170px;
        }
        .nav img {
        	position: absolute;
        	left: 50%;
        	top: 50%;
        	transform: translateX(-16px) translateY(-16px);
        }
        .nav .logo img {
        	position: absolute;
        	left: 50%;
        	top: 50%;
        	transform: translateX(-38px) translateY(-38px);
        }
        .nav li {
        	height: 130px;
        	width: 170px;
        	border-right: 1px solid #aaaaaa;
        	float: left;
        	text-align: center;
        	line-height: 130px;
        	
        	overflow: hidden;
        }	
        .nav li:last-child {
        	border: 0;
        }
        .nav li a {
        	color: #fff;
        	text-decoration: none;
        	display: block;
        	height: 130px;
        	width: 170px;
        	transition: 0.5s;
        }
        .nav a:hover {
        	font-size: 18px;
        	background-color: #df042a;
        }
        .nav .nav_red {
            font-size: 18px;
            background-color: #df042a;
        }

/*---------------------nav结束----------------------*/

/*---------------------nav_sousuo 开始----------------------*/
        .nav_sousuo {
        	position: fixed;
        	top: 0;
        	left: 0;
        	height: 100%;
        	width: 100%;
        	background-color: rgba(0, 0, 0, 0.5);
        	z-index: 9999;
        }
        .nav_sousuo .nav_sousuo_top {
        	width: 100%;
        	height: 80px;
        	background-color: #333333;
        	position: relative;
        }
        .nav_sousuo .nav_sousuo_top .nav_top_center {
        	width: 1200px;
        	height: 80px;
        	position: absolute;
        	top: 0;
        	left: 50%;
        	transform: translateX(-50%);
        	position: relative;
        }
        .nav_sousuo .nav_top_center img {
        	position: absolute;
        	left: 0;
        	top: 21px;
        }
        .nav_sousuo .nav_top_center .input {
        	width: 1000px;
        	height: 50px;
        	border: 3px solid #7a7a7a;
        	border-radius: 25px;
        	position: absolute;
        	left: 80px;
        	top: 12px;  
        }
        .nav_sousuo .nav_top_center .input input {
        	position: absolute;
        	width: 958px;
        	top: 11px;
        	left: 38px;
        	outline: 0;
        	border: 0;
        	background-color: #333333;
        	font-size: 24px;
        	font-weight: 700;
        	color: #fff;
        }
        .nav_sousuo .nav_top_center span {
        	display: block;
        	height: 45px;
        	width: 45px;
        	border: 2px solid #a3a3a3;
        	border-radius: 50%;
        	position: absolute;
        	right: 35px;
        	top: 16px;
        	padding: 9px 17px;
        	box-sizing: border-box;
        	color: #a3a3a3;
        	cursor: pointer;
        }
/*---------------------nav_sousuo 结束----------------------*/

/*---------------------页脚 footer 开始----------------------*/
        .footer {
        	height: 585px;
        	background-color: #010101;
        	position: relative;
        	width: 1552px;
        	margin: -100px auto 0 auto;
        	z-index: 999;
        }
        .footer .background_image {
        	position: absolute;
        	left: 0;
        	top: 0;
        	z-index: 0;
        }
        .footer .footer_pro {
        	position: absolute;
        	right: -175px;
        	top: -50px;
        }
        .footer .footer_left {
        	position: absolute;
        	left: -176px;
        	top: 100px;
        	z-index: -1;
        }
        .footer_footer {
        	position: absolute;
        	right: 0;
        	bottom: -65px;
        }
        .footer_footer div {
        	float: right;
        	font-size: 14px;
        	color: #686868;
        	margin-right: 100px;
        	font-weight: 700;
        }
        .footer_footer div span {
        	font-weight: 700;
        	color: #0f0f0f;
        }
        .footer .footer_content {
        	position: absolute;
        	left: 310px;
        	top: 130px;
        }
        .footer_content .footer_content_top {
        	color: #c7c7c7;
        	font-size: 14px;
        }
        .footer_content .footer_content_top span {
        	color: #fff;
        	font-size: 28px;
        	font-weight: 700;
        }
        .footer_content .footer_content_top div {
        	float: left;
        } 
        .footer_content input {
        	background-color: #010101;
        	border: 0;
        	outline: 0;
        	padding-left: 10px;
        	color: #fff;
        }
        .footer .sousuo {
        	height: 50px;
        	width: 555px;
        	border-bottom: 1px solid #a3a3a3;
        	padding: 6px;
        	box-sizing: border-box;
        	margin-left: 48px;
        	margin-top: -11px;
        }
        .footer .sousuo img {
        	vertical-align: middle;
        	width: 24px;
        	height: 24px;
        }
        .footer .footer_content_bottom {
        	position: absolute;
        	top: 125px;
        	left: 86px;
        	width: 1000px;
        }
        .footer .footer_content_bottom dl {
        	width: 100px;
        	height: 101px;
        	margin-right: 50px;
        	float: left;
        }
        .footer .footer_content_bottom a {
        	text-decoration: none;
        }
        .footer .footer_content_bottom dt {
        	color: #c7c7c7;
        	font-size: 16px;
        	font-weight: 700;
        	text-align: center;
        	margin-bottom: 20px;
        }
        .footer .footer_content_bottom dd {
        	color: #686868;
        	font-size: 14px;
        	text-align: center;
        }
        .footer .footer_content_bottom dt a {
        	color: #c7c7c7;
        	font-size: 18px;
        	text-align: center;
        	margin-bottom: 20px;
        }
        .footer .footer_content_bottom dd a {
        	color: #686868;
        	font-size: 14px;
        	text-align: center;
        }
/*---------------------页脚 footer 结束----------------------*/
</style>