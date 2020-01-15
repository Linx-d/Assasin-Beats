<template>
	<div>
		<div class="banner">
		</div>
		<div class="news container">
			<div class="product_top">
			    <h1>NEWS</h1>
			    <p><span></span>&nbsp;&nbsp;新闻资讯</p>
			</div>
		</div>
		<div class="news_best container">
			<div class="news_best1">
				<span>最新</span><span>全部</span>
			</div>
		</div>
		<router-link class="active container" to="/news/news_active">
			<div class="active_shadow">
				<div class="active_left">
					<img src="../../images/news1.png" alt="">
				</div>
				<div class="active_right">
					<h3>亚马逊专利:用降落伞实现无人机送货 , 包裹偏轨可控制</h3>
					<div>2019-09-19</div>
					<p>用无人机送货 , 这是亚马逊正在如火如荼进行的物流项目。去年亚马逊无人机Prime Air已经...</p>
					<span>公益活动&nbsp;|&nbsp;媒体广告</span>
				</div>
				<div class="active_bottom">
					<img src="../../images/active_logo.jpg" class="active_move" alt="">
				</div>
			</div>
		</router-link>
		<div class="active_line container"></div>
		<router-link class="active container" to="/news/news_active">
			<div class="active_shadow">
				<div class="active_left">
					<img src="../../images/news2.png" alt="">
				</div>
				<div class="active_right">
					<h3>VR市场降温 : Facebook一口气关闭200家线下体验店</h3>
					<div>2019-09-19</div>
					<p>最近的数据来看整个VR行业开始出现降温根据外媒消息Facebook本周三一口气关闭了多达200多家...</p>
					<span>公益活动&nbsp;|&nbsp;媒体广告</span>
				</div>
				<div class="active_bottom">
					<img src="../../images/active_logo.jpg" class="active_move" alt="">
				</div>
			</div>
		</router-link>
		<div class="active_line container"></div>
		<router-link class="active container" to="/news/news_active">
			<div class="active_shadow">
				<div class="active_left">
					<img src="../../images/news3.png" alt="">
				</div>
				<div class="active_right">
					<h3>2019年10大新科技产品盘点 : 10大最新科技潮物</h3>
					<div>2019-09-19</div>
					<p>科技发展日新月异科技产品不断涌现身为 Geek还在攒手机吗 ? 应该学会眼睛上带 Google Glass手腕带...</p>
					<span>公益活动&nbsp;|&nbsp;媒体广告</span>
				</div>
				<div class="active_bottom">
					<img src="../../images/active_logo.jpg" class="active_move" alt="">
				</div>
			</div>
		</router-link>
		<div class="active_line container"></div>
		<router-link class="active container" to="/news/news_active">
			<div class="active_shadow">
				<div class="active_left">
					<img src="../../images/news4.png" alt="">
				</div>
				<div class="active_right">
					<h3>继Lightning和USB-C后 苹果将再推一款接口</h3>
					<div>2019-09-19</div>
					<p>现在苹果产品中服役的还是Lightning和USB-C两种接口。在最新的 , iphone上取消了3.5mm耳机插口以外...</p>
					<span>公益活动&nbsp;|&nbsp;媒体广告</span>
				</div>
				<div class="active_bottom">
					<img src="../../images/active_logo.jpg" class="active_move" alt="">
				</div>
			</div>
		</router-link>
		<div class="news_choose">
			<ul>
				<li><a href="Javascript:;">&lt;</a></li>
				<li><a href="Javascript:;">1</a></li>
				<li><a href="Javascript:;">2</a></li>
				<li><a href="Javascript:;">&gt;</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped>
	.banner {
		height: 800px;
		width: 100%;
		background:  url('../../images/news_banner.png') 0 0 no-repeat;
	}
/*------------------------------新闻资讯 开始------------------------------*/
	.news {
		height: 140px;
		margin-top: 75px;
	}
	.product_top {
        padding-left: 4px;
        
    }
    .product_top h1{
        color: #df042a;
        font-size: 50px;
    }
    .product_top p {
        font-size: 24px;
        color: #949494;
        padding-left: 70px;
    }
    .product_top span {
        display: inline-block;
        height: 3px;
        width: 54px;
        background-color: #df042a;
        vertical-align: middle;
    }

    .news_best {
    	height: 30px;
    	margin-bottom: 100px;
    }
    .news_best .news_best1 {
    	float: right;
    	width: 221px;
    	height: 30px;
    	line-height: 30px;
    }
    .news_best .news_best1 span {
    	float: left;
    	height: 30px;
    	width: 110px;
    	text-align: center;
    	color: #606060;
    	font-size: 22px;
    }
    .news_best .news_best1 span:nth-child(1) {
    	border-right: 1px solid #a6a6a6;
    }
/*------------------------------新闻资讯 结束------------------------------*/

/*------------------------------活动 开始------------------------------*/
    .active {
    	height: 200px;
    	display: block;
    	position: relative;
    }
    .active_left {
    	width: 340px;
    	height: 200px;
    	float: left;
    }
    .active_right {
    	height: 200px;
    	width: 800px;
    	float: left;
    	padding-left: 60px;
    	padding-top: 30px;
    	box-sizing: border-box;
    	color: #606060;
    }
    .active_right h3 {
    	font-weight: 400;
    	font-size:20px;
    	width: 510px;
    }
    .active_right p {
    	width: 505px;
    	font-size: 15px;
    	margin-bottom: 25px;
    }
    .active_right div {
    	margin: 10px 0 10px 0;
    }
    .active_right span {
    	font-size: 14px;
    }
    .active_bottom {
    	position: absolute;
    	bottom: 0;
    	left: 670px;
    }
    .active_bottom .active_move {
    	width: 40px;
    	height: 40px;
    	opacity: 0;
    	
    }
    @keyframes move {
    	0% {
    		transform: translateX(0);
    		opacity: 0;
    	}
    	100% {
    		transform: translateX(430px);
    		opacity: 1;
    	}
    }
    .active:hover .active_move{
    	animation: move 1.3s;
    	animation-fill-mode: forwards;
    }
    .active_shadow {
    	transition: 0.5s;
    	width: 1140px;
    	height: 200px;
    }
    .active:hover .active_shadow{
    	box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.08);
    	transform: translateY(-10px);
    }
    .active_line {   /*线*/
    	height: 1px;
    	background-color: #b3b3b3;
    	margin: 25px auto;
    }
/*------------------------------活动 结束------------------------------*/

/*------------------------------news_choose 开始------------------------------*/
    .news_choose {
    	margin-top: 100px;
    	height: 59px;
    	width: 100%;
    	position: relative;
    }
    .news_choose ul {
    	width: 302px;
    	height: 59px;
    	position: absolute;
    	left: 50%;
    	transform: translateX(-50%);
    }
    .news_choose ul li {
    	width: 57px;
    	height: 57px;
    	border: 1px solid #ababab;
    	float: left;
    	margin-right: 22px;
    	color: #ababab;
    	text-align: center;
    	line-height: 57px;
    	box-sizing: border-box;
    }
    .news_choose ul li:hover {
    	border: 0;
    	color: #fff;
    	background-color: #df042a;
    }
    .news_choose ul li a {
    	color: #ababab;
    	text-decoration: none;
    }
    .news_choose ul li:nth-child(2) {
    	border: 0;
    	color: #fff;
    	background-color: #df042a;
    }
    .news_choose ul li:nth-child(2) a{
    	color: #fff;
    	background-color: #df042a;
    }
    .news_choose ul li:nth-child(4) {
    	margin: 0;
    }
/*------------------------------news_choose 结束------------------------------*/
</style>