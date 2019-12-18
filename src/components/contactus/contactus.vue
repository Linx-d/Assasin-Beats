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
					<h4><a href="#">服务与保修</a></h4>
					<p><a href="#">查找与您所在国家或地区的服务选项、保修和定价有关的所有问题的答案。</a></p>
					<a href="#" class="moreBtn">查看&nbsp;&nbsp;"服务和维修"</a>
				</li>
				<li class="more1">
					<h4><a href="#">服务与保修</a></h4>
					<p><a href="#">查找与您所在国家或地区的服务选项、保修和定价有关的所有问题的答案。</a></p>
					<a href="#" class="moreBtn">查看&nbsp;&nbsp;"服务和维修"</a>
				</li>
				<li class="more1">
					<h4><a href="#">服务与保修</a></h4>
					<p><a href="#">查找与您所在国家或地区的服务选项、保修和定价有关的所有问题的答案。</a></p>
					<a href="#" class="moreBtn">查看&nbsp;&nbsp;"服务和维修"</a>
				</li>
				<li class="more1">
					<h4><a href="#">服务与保修</a></h4>
					<p><a href="#">查找与您所在国家或地区的服务选项、保修和定价有关的所有问题的答案。</a></p>
					<a href="#" class="moreBtn">查看&nbsp;&nbsp;"服务和维修"</a>
				</li>
				<li class="more1">
					<h4><a href="#">服务与保修</a></h4>
					<p><a href="#">查找与您所在国家或地区的服务选项、保修和定价有关的所有问题的答案。</a></p>
					<a href="#" class="moreBtn">查看&nbsp;&nbsp;"服务和维修"</a>
				</li>
			</ul>
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
    .more .more1 h4,
    .more .more1 p,
    .more .more1 .moreBtn {
    	position: absolute;
    }
    .more .more1 h4{
    	width: 110px;
    	height: 35px;
    	line-height: 35px;
    	left: 135px;
    	top: 110px;
    	color: #000;
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
    	padding-left: 20px;
    	line-height: 37px;
    	box-sizing: border-box;
    }
    .more .more1 .moreBtn{
    	color: #555555;
    	font-size: 15px;
    	transition: 0.5s;
    }
    .more .more1 .moreBtn:hover {
    	background-color: #df042a;
    	color: #fff;
    	border: 1px solid #df042a;
    }
/*------------------------------更多资源 结束------------------------------*/
</style>