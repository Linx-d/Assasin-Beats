<template>
	<div>
		<div class="banner">
			
		</div>
		<div class="zhici container">
			<div class="zhici_top">
				<h1>CONTACT US</h1>
				<p><span></span>联系与支持</p>
			</div>
			<div class="badge_red">
				BEATS <span>公司</span><img src="../../images/company_logo.png" alt="">
			</div>
			<div class="help">
				<h4>您需要哪方面的帮助?</h4>
				<p>选择您的产品</p>
			</div>
			<div class="choose">
				<div>
					<img src="../../images/zhichi1.png" alt="">
					<dl>
						<dt>头戴式耳机</dt>
						<dd>Studio<sup>3</sup>Wireless<img src="../../images/xiaosanjiao.png" alt=""></dd>
						<dd>Solo<sup>3</sup>Wireless<img src="../../images/xiaosanjiao.png" alt=""></dd>
						<dd>EP<img src="../../images/xiaosanjiao.png" alt=""></dd>
						<dd>PRO<img src="../../images/xiaosanjiao.png" alt=""></dd>
						<dd>Studio Wireless<img src="../../images/xiaosanjiao.png" alt=""></dd>
					</dl>
				</div>
				<div>
					<img src="../../images/zhichi2.png" alt="">
					<dl>
						<dt>入耳式耳机</dt>
						<dd>Powerbeats<sup>3</sup>Wireless<img src="../../images/xiaosanjiao.png" alt=""></dd>
						<dd>Beatsx<img src="../../images/xiaosanjiao.png" alt=""></dd>
						<dd>Urbeats<sup>3</sup><img src="../../images/xiaosanjiao.png" alt=""></dd>
						<dd>Tour<sup>2</sup><img src="../../images/xiaosanjiao.png" alt=""></dd>
						<dd>Urbeats<img src="../../images/xiaosanjiao.png" alt=""></dd>
					</dl>
				</div>
				<div>
					<img src="../../images/zhichi3.png" alt="">
					<dl>
						<dt>扬声器</dt>
						<dd>pill<sup>+</sup><img src="../../images/xiaosanjiao.png" alt=""></dd>
						<dd>pill2.0<img src="../../images/xiaosanjiao.png" alt=""></dd>
						<dd>pill<img src="../../images/xiaosanjiao.png" alt=""></dd>
						<dd>pill xl<img src="../../images/xiaosanjiao.png" alt=""></dd>
					</dl>
				</div>
				<div>
					<img src="../../images/zhichi4.png" alt="">
					<dl>
						<dt>配件</dt>
						<dd>pill CHARACTER<img src="../../images/xiaosanjiao.png" alt=""></dd>
						<dd>pill SLEEVE<img src="../../images/xiaosanjiao.png" alt=""></dd>
					</dl>
				</div>
			</div>
		</div>
		<div class="company">
			<div class="badge_red">
				BEATS <span>公司</span><img src="../../images/company_logo.png" alt="">
			</div>
			<ul>
				<li :class="{company_active: company_acitve1}" @click="show('1')">
					<h3>蓝牙配对<span>+</span></h3>
					<p>将设备与蓝牙连接与MAC配对</p>
				</li>
				<li :class="{company_active2: company_acitve2}" @click="show('2')">
					<h3>声音帮助<span>+</span></h3>
					<p>头戴式耳机和入耳式耳机<br>扬声器</p>
				</li>
				<li :class="{company_active: company_acitve3}" @click="show('3')">
					<h3>固件更新<span>+</span></h3>
					<p>BEATS升级工具</p>
				</li>
			</ul>
		</div>
		<div class="moreResource container">
			<div class="badge_red">
				更多资源<img src="../../images/company_logo.png" alt="">
			</div>
			<ul class="more">
				<li class="more1">
					<h4><a href="#">服务与保修</a></h4>
					<p><a href="#">查找与您所在国家或地区的服务选项、保修和定价有关的所有问题的答案。</a></p>
					<a href="#" class="moreBtn">查看&nbsp;&nbsp;"服务和维修"</a>
				</li>
				<li class="more1">
					<h4><a href="#">注册您的Beats产品</a></h4>
					<p><a href="#">登记您的新 Beats 产品，获取产品更新和特别优惠。</a></p>
					<a href="#" class="moreBtn">注册您的 Beats 产品</a>
				</li>
				<li class="more1">
					<h4><a href="#">更新您的Beats产品</a></h4>
					<p><a href="#">检查有没有软件更新，或重命名您的 Beats，让产品唯你所有。</a></p>
					<a href="#" class="moreBtn">更新您的 Beats 产品</a>
				</li>
				<li class="more1">
					<h4><a href="#">授权零售商</a></h4>
					<p><a href="#">请前往 Apple Store 零售店、Apple Store在线商店或下列任意授权零售商处，购买正品<br/> Beats by Dr. Dre 产品。</a></p>
					<a href="#" class="moreBtn">查看零售商</a>
				</li>
				<li class="more1">
					<h4><a href="#">安全购买</a></h4>
					<p><a href="#">Beats 高品质产品吸引了世界各地的消费者。请确保您购买的是正品。</a></p>
					<a href="#" class="moreBtn">了解安全购买</a>
				</li>
				<li class="more1">
					<h4><a href="#">联系我们</a></h4>
					<p><a href="#">Beats by Dr. Dre 属于 Apple。请联系 Apple获取支持。</a></p>
					<a href="#" class="moreBtn">联系Apple支持</a>
				</li>
			</ul>
		</div>
		<div class="position container">
			<div class="badge_red">
				常见问题<img src="../../images/company_logo.png" alt="">
			</div>
			<h1>您的 Beats by Dre 有什么问题?</h1>
			<p>请选取主题, 我们会为您找到最佳选项。通过电话、聊天、电子邮件及其他联系方式联系我们。</p>
			<ul>
				<li><a href="#"><img src="../../images/qustion1.png" alt=""><span>音频音量</span></a></li>
				<li><a href="#"><img src="../../images/qustion2.png" alt=""><span>电池音量</span></a></li>
				<li><a href="#"><img src="../../images/qustion3.png" alt=""><span>无线连接</span></a></li>
				<li><a href="#"><img src="../../images/qustion4.png" alt=""><span>服务请求</span></a></li>
				<li><a href="#"><img src="../../images/qustion5.png" alt=""><span>配件问题</span></a></li>
				<li><a href="#"><img src="../../images/qustion6.png" alt=""><span>功能疑问</span></a></li>
			</ul>
		</div>
		<div class="join container">
			<div class="join_top">
				<img src="../../images/join_logo.png" alt="">
			</div>
			<div class="join_center">
				<h1>加入 Beats Army</h1>
				<p>时刻关注 Beats 的所有最新动态</p>
			</div>
			<div class="join_bottom">
				<div class="join_bottom1">
					<input type="text" name="" id="" placeholder="输入你的邮件地址">
					<button>注册 <img src="../../images/yousanjiao.png" alt=""></button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			company_acitve1: false,
			company_acitve2: false,
			company_acitve3: false
		};
	},
	methods: {
		show(msg) {
			switch (msg) {
				case '1':
				this.company_acitve1 = !this.company_acitve1;
				break;
				case '2':
				this.company_acitve2 = !this.company_acitve2;
				break;
				case '3':
				this.company_acitve3 = !this.company_acitve3;
				break;
			}
			
		}
	}
}	
</script>

<style lang="scss" scoped>
	.banner {
		width: 100%;
		height: 597px;
		background:  url('../../images/contact_banner.png') 0 0 no-repeat;
	}

/*------------------------------联系与支持 开始------------------------------*/
    .zhici {
    	height: 830px;
    	margin-top: 70px;
    	position: relative;
    }
    .zhici .zhici_top h1 {
    	font-size: 50px;
    	color: #df042a;
    }
    .zhici .zhici_top p  {
    	color: #949494;
    	padding-left: 135px;
    	position: relative;
    }
    .zhici .zhici_top p span {
    	width: 53px;
    	height: 2px;
    	background-color: #df042a;
    	display: block;
    	position: absolute;
    	left: 73px;
    	top: 11px;
    }
    .zhici .badge_red {
    	left: 0;
    	top: 170px;
    }
    .zhici .help {
    	position: absolute;
    	left: 430px;
    	top: 330px;
    }
    .zhici .help h4 {
    	font-size: 36px;
    	font-weight: 400;
    }
    .zhici .help p {
    	margin-top: 10px;
    	font-size: 18px;
    	padding-left: 115px;
    }
/*------------------------------联系与支持 结束------------------------------*/

/*------------------------------choose 开始------------------------------*/
    .choose {
    	width: 1200px;
    	position: absolute;
    	top: 500px;
    }
    .choose div {
    	width: 217px;
    	height: 336px;
    	margin-right: 110px;
    	float: left;
    }
    .choose div:nth-child(4) {
    	margin-right: 0;
    }
    .choose dl img {
    	vertical-align: middle;
    }
    .choose dl dd {
    	color: #414141;
    	padding-left: 20px;
    	font-weight: 700;
    	cursor: pointer;
    }
    .choose dl dd:hover {
    	color: #df042a;
    }
    .choose dl dt {
    	text-align: center;
    	margin-bottom: 20px;
    	font-size: 24px;
    }

/*------------------------------choose 结束------------------------------*/

/*------------------------------公司 开始------------------------------*/
	.company {
		height: 598px;
		width: 100%;
		background: url('../../images/zhuti_banner.png') no-repeat;
		margin-top: 180px;
		margin-bottom: 100px;
		position: relative;
		padding-left: 630px;
		padding-top: 150px;
		box-sizing: border-box;
	}
	.company ul li {
		height: 106px;
		width: 644px;
		transition: 0.5s;
		cursor: pointer;
		overflow: hidden;
	}
	.company ul .company_active {
		height: 137px;
	}
	.company ul .company_active2 {
		height: 159px;
	}
	.company ul li h3 {
		color: #585858;
		font-weight: 400;
		line-height: 106px;
		margin-left: 10px;
		font-size: 18px;
	}
	.company ul li h3 span {
		float: right;
		color: #afafaf;
		margin-right: 50px;
	}
	.company ul li p {
		margin-left: 10px;
		color: #727272;
	} 
	.company ul li:hover {
		background-color: #f5f5f5;
	}
	.company ul li:nth-child(1) {
		border-top: 1px solid #bfbfbf;
		border-bottom: 1px solid #bfbfbf;
	}
	.company ul li:nth-child(2) {
		border-bottom: 1px solid #bfbfbf;
	}
	.company ul li:nth-child(3) {
		border-bottom: 1px solid #bfbfbf;
	}


	.badge_red {
		position: absolute;
		left: 350px;
		top: 0;
		background-color: #df042a;
		width: 290px;
		height: 85px;
		font-size: 30px;
		color: #fff;
		line-height: 85px;
		padding-left: 25px;
		box-sizing: border-box;
	}
	.badge_red img {
		vertical-align: middle;
		margin-left: 30px;
	}
/*------------------------------公司 结束------------------------------*/

/*------------------------------更多资源 开始------------------------------*/
    .moreResource {
    	height: 800px;
    	position: relative;
    	padding-top: 175px;
    	margin-bottom: 100px;
    }
    .moreResource .badge_red {
    	left: 0;
    }
    .more {
    	height: 790px;
    }

    .more1 {
    	width: 380px;
    	height: 380px;
    	background-color: #f8f8f8;
    	float: left;
    	margin-right: 30px;
    	margin-bottom: 30px;
    	position: relative;
    }
    .more .more1:nth-child(3n) {
    	margin-right: 0;
    }
    .more .more1 p,
    .more .more1 .moreBtn {
    	position: absolute;
    }
    .more .more1 h4{
    	margin-top: 110px;
    	width: 100%;
    	height: 35px;
    	line-height: 35px;
    	color: #000;
    	text-align: center;
    }
    .more .more1 h4 a,
    .more .more1 p a,
    .more .more1 .moreBtn{
    	text-decoration: none;
    }
    .more .more1 h4 a {
    	color: #000;
    	font-size: 22px;
    	font-weight: 400;
    }
    .more .more1 p {
    	left: 40px;
    	top: 170px;
    	text-align: center;
    	width: 300px;
    	line-height: 25px;
    }
    .more .more1 p a {
    	color: #8c8c8c;
    }
    .more .more1 .moreBtn {
    	display: block;
    	bottom: 70px;
    	left: 100px;
    	width: 174px;
    	height: 37px;
    	border: 1px solid #cecece;
    	border-radius: 18px;
    	line-height: 37px;
    	box-sizing: border-box;
    }
    .more .more1 .moreBtn{
    	color: #555555;
    	font-size: 15px;
    	transition: 0.5s;
    	text-align: center;
    }
    .more .more1 .moreBtn:hover {
    	background-color: #df042a;
    	color: #fff;
    	border: 1px solid #df042a;
    }
/*------------------------------更多资源 结束------------------------------*/


/*------------------------------问题 开始------------------------------*/
	.position {
		position: relative;
		overflow: hidden;
		margin-bottom: 185px;
	}
	.position .badge_red {
		left: 0;
	}
	.position h1 {
		margin-top: 210px;
		color: #7c7c7c;
		text-align: center;
		font-weight: 400;
	}
	.position p {
		color: #a3a3a3;
		text-align: center;
		margin-top: 15px;
		margin-bottom: 60px;
		font-size: 18px;
	}
	.position ul {
		padding-left: 20px;
		padding-right: 15px;
		box-sizing: border-box;
	}
	.position ul li {
		float: left;
		width: 170px;
		height: 160px;
		border: 1px solid #c7c7c7;
		border-radius: 20px;
		margin-right: 25px;
		transition: 0.5s;
	}
	.position ul li:last-child {
		margin-right: 0;
	}
	.position ul li a {
		display: block;
		width: 72px;
		height: 69px;
		margin-left: 48px;
		margin-right: 48px;
		color: #a3a3a3;
		text-decoration: none;
		margin-top: 20px;
		position: relative;
	}
	.position ul li:hover {
		border: 1px solid #df042a;
	}
	.position ul li span {
		transition: 0.5s;
	}
	.position ul li:hover span {
		font-size: 18px;
		color: #df042a;
	}
	.position ul li img {
		transition: 0.5s;
	}
	.position ul li:hover img {
		transform: scale(1.1, 1.1);
	}
	.position ul li:nth-child(2) a {
		padding-top: 20px;
		box-sizing: border-box;
	}
	.position ul li:nth-child(2) img {
		margin-left: 6px;
	}
	.position ul li:nth-child(5) img {
		margin-left: 4px;
	}
	.position ul li:last-child a {
		padding-left: 18px;
		box-sizing: border-box;

	}
	.position ul li:nth-child(2) a span {
		margin-top: 41px;
	}
	.position ul li:nth-child(3) a span {
		margin-top: 34px;
	}
	.position ul li:nth-child(4) a span {
		margin-top: 16px;
	}
	.position ul li:nth-child(5) a span {
		margin-top: 16px;
	}
	.position ul li:nth-child(6) a span {
		margin-top: 16px;
		margin-left: -65px;
	}
	.position ul li a span {
		display: block;
		width: 170px;
		height: 30px;
		margin-top: 20px;
		margin-left: -48px;
		text-align: center;
	}
/*------------------------------问题 结束------------------------------*/

/*------------------------------加入 开始------------------------------*/
    .join {
    	margin-bottom: 260px;
    }
    .join_top {
    	width: 1200px;
    	height: 57px;
    	/*display: table-cell;*/
    	text-align: center;
    	vertical-align: middle;
    	margin-bottom: 9px;
    }
    .join_top img {
    	
    }
    .join_center {
    	width: 1200px;
    	height: 135px;
    	text-align: center;
    }
    .join_center h1 {
    	font-size: 36px;
    }
    .join_center p {
    	margin-top: 8px;
    	color: #8e8e8e;
    }
    .join_bottom {
    	width: 1200px;
    	height: 63px;
    }
    .join_bottom .join_bottom1{
    	height: 61px;
    	width: 562px;
    	background-color: #fafafa;
    	border: 1px solid #d6d6d6;
    	border-radius: 30px;
    	margin: 0 auto;
    	position: relative;
    }
    .join_bottom1 input {
    	width: 340px;
    	border: 0;
    	background-color: #fafafa;
    	color: #757575;
    	font-size: 18px;
    	outline-style: none;
    	position: absolute;
    	left: 43px;
    	top: 21px;
    }
    .join_bottom1 button {
    	height: 61px;
    	position: absolute;
    	font-size: 24px;
    	box-sizing: border-box;
    	right: 66px;
    	padding-left: 40px;
    	border: 0;
    	background-color: #fafafa;
    	border-left: 1px solid #d6d6d6;
    	cursor: pointer;
    }
/*------------------------------加入 结束------------------------------*/
</style>