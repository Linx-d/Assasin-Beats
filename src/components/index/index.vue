<template>
	<div class="pageFullScreen">
		<div class="banner">
			
		</div>
		<!--立即了解 <div class="know_info"><a href="javascript:;"><span></span>立即了解</a></div> -->
		<div class="slide_center container">
			<div class="slide_center_gray1"></div>
			<div class="slide_center_gray2"></div>
			<div class="slide_centerL" :class="{ slideL: slideScrollL }">
				<h1>Powerbeats<sup>3</sup></h1>
				<h2>Wireless</h2>
				<p>震撼音浪</p>
				<div class="fade">
					<img src="../../images/pro_2_left.png" alt="">
				</div>
			</div>
			<div class="slide_centerR" :class="{ slideR: slideScrollR }">
				<p>open music</p>
				<h1>Beats Solo<sup>3</sup></h1>
				<h2>Wireless</h2>
				<h3>宛如亲临Taylor Swift现场</h3>
				<div class="know_info"><a href="javascript:;"><span></span>立即了解</a></div>
				<div class="fade">
					<img src="../../images/pro_2_right.png" alt="">
				</div>
			</div>
		</div>
		<div class="dre container">
        	<div class="dre_left" :class="{ dreL: dreScrollL }">
        		<img src="../../images/pro_1_3_left.png" alt="">
        	</div>
        	<div class="dre_center" :class="{ dreC: dreScrollC }">
        		<img src="../../images/pro_1_3_right.png" alt="">
        	</div>
        	<div class="dre_right" :class="{ dreR: dreScrollR }">
        		<h2>Beats Pill+</h2>
        		<div class="star">
        			<img src="../../images/yangshengqi_star.png" alt="">
        		</div>
        		<h3>你耳边的演唱会</h3>
        		<p>便携式无线扬声器</p>
        		<div class="know_info"><a href="javascript:;"><span></span>立即了解</a></div>
        	</div>
        </div>

        <div class="some">
        	<div class="some_content container" :class="{ some_content_ok: some_scroll}">
        		<div class="some_top container">
        			<ul>
        				<li @click="move_click('a')">头戴式</li>
        				<li @click="move_click('b')">入耳式</li>
        				<li @click="move_click('c')">扬声器</li>
        				<!--move_line-->
        				<span class="move_line" :class="{ move_line1: line1, move_line2: line2, move_line3: line3 }"></span>
        			</ul>
        		</div>
        		<div class="some_bottom1 container">
        			<ul :class="{some_choose1: line1}">
        				<li>
        					<img src="../../images/beats-solo3-heise.png" alt="">
        					<h1>Beats Solo<sup>3</sup>Wireless</h1>
        					<h2><span>RMB</span> 2,688</h2>
        				</li>
        				<li>
        					<img src="../../images/beats-solo3-baise.png" alt="">
        					<h1>Beats Solo<sup>3</sup>Wireless</h1>
        					<h2><span>RMB</span> 2,688</h2>
        				</li>
        				<li>
        					<img src="../../images/beats-solo3-hongse.png" alt="">
        					<h1>Beats Solo<sup>3</sup>Wireless</h1>
        					<h2><span>RMB</span> 2,688</h2>
        				</li>
        				<li>
        					<img src="../../images/beats-solo3-lianghei.png" alt="">
        					<h1>Beats Solo<sup>3</sup>Wireless</h1>
        					<h2><span>RMB</span> 2,688</h2>
        				</li>
        			</ul>
        			<ul :class="{some_choose2: line2}">
        				<li>
        					<img src="../../images/ruershi_baise.png" alt="">
        					<h1>Beats Solo<sup>3</sup>Wireless</h1>
        					<h2><span>RMB</span> 2,688</h2>
        				</li>
        				<li>
        					<img src="../../images/ruershi_heihong.png" alt="">
        					<h1>Beats Solo<sup>3</sup>Wireless</h1>
        					<h2><span>RMB</span> 2,688</h2>
        				</li>
        				<li>
        					<img src="../../images/ruershi_heise.png" alt="">
        					<h1>Beats Solo<sup>3</sup>Wireless</h1>
        					<h2><span>RMB</span> 2,688</h2>
        				</li>
        			</ul>
        			<ul :class="{some_choose3: line3}">
        				<li>
        					<img src="../../images/yangshengqi_hong.png" alt="">
        					<h1>Beats Solo<sup>3</sup>Wireless</h1>
        					<h2><span>RMB</span> 2,688</h2>
        				</li>
        				<li>
        					<img src="../../images/yangshengqi_bai.png" alt="">
        					<h1>Beats Solo<sup>3</sup>Wireless</h1>
        					<h2><span>RMB</span> 2,688</h2>
        				</li>
        				<li>
        					<img src="../../images/yangshengqi_hei.png" alt="">
        					<h1>Beats Solo<sup>3</sup>Wireless</h1>
        					<h2><span>RMB</span> 2,688</h2>
        				</li>
        			</ul>
        		</div>
        	</div>
        </div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			slideScrollL: false,
			slideScrollR: false,
			dreScrollL: false,
			dreScrollC: false,
			dreScrollR: false,
			line1: true,
			line2: false,
			line3: false,
			some_scroll: false
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll, true);
	},
	methods: {
		handleScroll() {
			/*slide_center*/
			var scrollTop1 = document.documentElement.scrollTop || document.body.scrollTop;
			var scrollTop2 = document.documentElement.scrollTop || document.body.scrollTop;
			var scrollTop3 = document.documentElement.scrollTop || document.body.scrollTop;
			if(scrollTop1>=100) {
				this.slideScrollL = true;
				this.slideScrollR = true;
			};
			if(scrollTop2>=550) {
				this.dreScrollL = true;
				this.dreScrollC = true;
				this.dreScrollR = true;
			};
			if(scrollTop1>=1200) {
				this.some_scroll = true;
			};
		},
		move_click(mes) {
			
			if(mes=='a'){
				this.line1 = true;
				this.line2 = false;
				this.line3 = false;
			}else if(mes=='b') {
				this.line1 = false;
				this.line2 = true;
				this.line3 = false;
			}else if(mes=='c') {
				this.line1 = false;
				this.line2 = false;
				this.line3 = true;
			};
		}
	}
}	
</script>

<style lang="scss" scoped>
	.banner {
		width: 100%;
		height: 801px;
		background:  url('../../images/shouye-banner2.png') 0 0 no-repeat;
	}
	.pageFullScreen {
		overflow: hidden;
	}
/*---------------------立即了解 开始---------------------*/
		.know_info {
			height: 35px;
			width: 132px;
			border: 1px solid #aaa;
			float: right;
			line-height: 35px;
			font-size: 14px;
			transition: 0.5s;
		}
		.know_info a {
			text-decoration: none;
			color: #000;
		}
		.know_info:hover {
			background-color: #df042a;
			border: 1px solid #df042a;
			color: #fff;
		}
		.know_info:hover span{
			background-color: #fff;
		}
		.know_info:hover a{
			color: #fff;
		}
		.know_info span {
			height: 3px;
			width: 14px;
			display: inline-block;
			vertical-align: middle;
			background-color: #df042a;
			margin-left: 17px;
			margin-right: 32px;
			margin-bottom: 1.5px;
			transition: 0.5s;
		}
/*---------------------立即了解 结束---------------------*/

/*---------------------slide_center 开始---------------------*/
	.slide_center {
		height: 460px;
		position: relative;
	}
	.slide_center_gray1, 
	.slide_center_gray2 {
		position: absolute;
		width: 952px;
		height: 230px;
		background-color: #272626;
	}
	.slide_center_gray1 {
		left: -352px;
		top: 0;
	}
	.slide_center_gray2 {
		right: -351px;
		top: 0;
	}
	.slide_centerL {
		width: 340px;
		height: 460px;
		position: absolute;
		left: -340px;
		top: 0;
		padding-left: 40px;
		box-sizing: border-box;
		opacity: 0;
		transition: 1s;
	}
	.slide_centerL h1,
	.slide_centerL h2,
	.slide_centerL p {
		color: #fff;
		font-size: 20px;
	}
	.slide_centerL p {
		font-size: 16px;
	}
	.slide_centerL h1 {
		margin-top: 70px;
	}
	.slide_centerL h2 {
		margin-bottom: 30px;
	}
	.slide_centerL .fade {
		width: 260px;
		height: 276px;
		position: absolute;
		right: 20px;
		bottom: 0;
	}
	.slide_centerR {
		width: 860px;
		height: 460px;
		box-sizing: border-box;
		opacity: 0;
		padding-top: 60px;
		padding-left: 70px;
		position: absolute;
		right: -860px;
		top: 0;
		border-left: 1px solid #aaaaaa;
		border-bottom: 1px solid #aaaaaa;
		transition: 1s;
	}
	.slide_centerR h1,
	.slide_centerR h2,
	.slide_centerR h3,
	.slide_centerR p {
		color: #fff;
	}
	.slide_centerR p {
		margin-bottom: 40px;
	}
	.slide_centerR h2 {
		margin-bottom: 30px;
	}
	.slide_centerR h3 {
		color: #000;
		font-size: 28px;
		font-weight: 400;
	}
	.slide_centerR .fade {
		position: absolute;
		right: 95px;
		bottom: 20px;
		width: 290px;
		height: 339px;
	}
	.slide_centerR .know_info {
		position: absolute;
		left: 70px;
		top: 350px;
	}
	.slide_centerL img,
	.slide_centerR img {
		transition: 0.5s;
	} 
	.slide_centerL img:hover,
	.slide_centerR img:hover {
		transform: scale(1.05, 1.05);
	}

	/*--slide_center滑入动画--*/
	.slideL {
		transform: translateX(340px);
		opacity: 1;
	}
	.slideR {
		transform: translateX(-860px);
		opacity: 1;
	}
/*---------------------slide_center 结束---------------------*/

/*---------------------dre 结束---------------------*/
		.dre {
			height: 459px;
		}
		.dre .dre_left {
			width: 340px;
			height: 459px;
			float: left;
			position: relative;
			box-sizing: border-box;
		}
		.dre_left h3 {
			font-size: 22px;
			color: #a5a5a5;
			height: 45px;
		}
		.dre_left h3:nth-child(3) {
			font-size: 22px;
			color: #df042a;
		}
		.dre_left span {
			position: absolute;
			left: 0;
			height: 64px;
			width: 4px;
			background-color: #df042a;
			top: 107px;
		}
		.dre .dre_center {
			width: 575px;
			height: 459px;
			float: left;
			padding-top: 150px;
			padding-left: 80px;
			box-sizing: border-box;
		}
		.dre .dre_center img {
			transition: 0.7s;
		}
		.dre .dre_center:hover img {
			transform: scale(1.1, 1.1);
		}
		.dre .dre_right {
			width: 240px;
			height: 369px;
			float: left;
			position: relative;
			margin-top: 90px;
		}
		.dre_right h2 {
			font-size: 24px;
		}
		.dre_right .star {
			width: 201px;
			height: 21px;
			margin: 12px 0;
		}
		.dre_right h3 {
			font-size: 18px;
			font-weight: 400;
			margin-bottom: 12px;
		}
		.dre_right p {
			font-size: 12px;
			color: #808080;
		}
		.dre_right .know_info {
			position: absolute;
			left: 0;
			top: 180px;
		}

		/*dre 动画*/
		.dre_left,
		.dre_center,
		.dre_right {
			opacity: 0;
			transition: 1s;
		}
		.dreL,
		.dreC,
		.dreR {
			opacity: 1;
		}
/*---------------------dre 结束---------------------*/

/*---------------------some 开始---------------------*/
		.some {
			height: 595px; /*1800px*/
			width: 1991px;
			background-color: #f6f6f8;
			overflow: hidden;
			position: relative;
			margin-left: -43px;
		}
		.some_content {
			width: 1200px;
			height: 535px;
			position: absolute;
			top: 531px;
			left: 395px;
			transition: 0.5s;
		}
		.some_content_ok {
			position: absolute;
			top: 0;
			left: 395px;
		}
		.some_top {
			margin-top: 60px;
			height: 26px;
			font-size: 20px;
		}
		.some_top li {
			float: left;
			margin-right: 40px;
		}
		.some_top li:nth-child(1):hover ~ span {
			left: 0px;
		}
		.some_top li:nth-child(2):hover ~ span {
			left: 100px;
		}
		.some_top li:nth-child(3):hover ~ span {
			left: 200px;
		}
		.red {
			background-color: red;
		}
		.move_line {
			position: absolute;
			 /*496 596*/
			left: 396px;
			top: 100px;
			width: 20px;
			height: 3px;
			background-color: #df042a;
			transition: 0.5s;
		}
		.move_line1 {
			position: absolute;
			left: 0px;
			top: 100px;
		}
		.move_line2 {
			position: absolute;
			left: 100px;
			top: 100px;
		}
		.move_line3 {
			position: absolute;
			left: 200px;
			top: 100px;
		}

		.some_bottom1 {
			height: 400px;
			margin-top: 40px;
		}
		.some_bottom1 ul {
			width: 1200px;
			height: 400px;
			display: none;
		}
		.some_bottom1 li img {
			transition: 0.5s;
		}
		.some_bottom1 li img:hover {
			transform: scale(1.1, 1.1);
		}
		.some_bottom1 li {
			width: 280px;
			height: 390px;
			float: left;
			margin-right: 10px;
			transition: 0.5s;
			text-align: center;
			padding-top: 20px;
			box-sizing: border-box;
		}
		.some_bottom1 li:hover {
			box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.08);
			background-color: #fff;
		}
		.some_bottom1 li h1,
		.some_bottom1 li h2 {
			font-weight: 400;
			font-size: 20px;
		}
		.some_bottom1 li h2 {
			font-size: 14px;
			margin-top: 5px;
			padding-left: 110px;
		}
		.some_bottom1 li h2 span {
			font-weight: 700;
			font-size: 16px;
		}
		.some_bottom1 li h1 {
			margin-top: 50px;
		}
		/*控制 some 显示模式*/
		.some_bottom1 .some_choose1,
		.some_bottom1 .some_choose2,
		.some_bottom1 .some_choose3 {
			display: block;
		}
/*---------------------some 结束---------------------*/
</style>