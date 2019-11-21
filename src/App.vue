<template>
    <div>
    <!--导航 nav-->
        <div class="nav">
            <ul>
                <li class="logo"><img src="./images/nav_logo.png" alt=""></li>
                <li class="sosuo link"><a href=""><img src="./images/sousuo.png" alt=""></a></li>
                <li class="link"><a href="#">首页</a></li>
                <li class="link"><a href="#">系列产品</a></li>
                <li class="link"><router-link to="/news_product">新品上市</router-link></li>
                <li class="link"><a href="#">新闻资讯</a></li>
                <li class="link"><a href="#">关于我们</a></li>
                <li class="link"><router-link to="/contactus">联系我们</router-link></li>
                <li class="gouwu link"><a href="#"><img src="./images/gouwuche.png" alt=""></a></li>
                <li class="denglu link"><a href="#"><img src="./images/denglu.png" alt=""></a></li>
            </ul>
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

</script>

<style lang="scss" scoped >
/*---------------------nav开始----------------------*/
        .nav {
        	width: 100%;
        	height: 132px;
        	background-color: #010101;
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
        	background-color: #010101;
        	transition: 0.5s;
        }
        .nav a:hover {
        	font-size: 18px;
        	background-color: #df042a;
        }

/*---------------------nav结束----------------------*/

/*---------------------页脚 footer 开始----------------------*/
        .footer {
        	height: 585px;
        	background-color: #010101;
        	position: relative;
        	width: 1552px;
        	margin: 100px auto;
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