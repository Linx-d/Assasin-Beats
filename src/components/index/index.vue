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
        <div class="photo">
        	<div class="photo_left">
        		<div class="photo_left_top">
        			<div class="photo_left_top1">
        				<img src="../../images/photo-applejiekou.png" alt="" class="blow">
        				<div class="board">
        					<img src="../../images/sanjiaoxing.png" alt="" class="quan">
        					<div>· 01</div>
        				</div>
        			</div>
        			<div class="photo_left_top2">
        				<img src="../../images/yangshengqi-ban.png" alt="" class="blow">
        				<div class="board">
        					<img src="../../images/yuan.png" alt="" class="quan">
        					<div>· 02</div>
        				</div>
        			</div>
        		</div>
        		<div class="photo_left_bottom">
        			<img src="../../images/willels-ban.png" alt="" class="blow">
        			<div class="board">
        				<img src="../../images/yuan.png" alt="" class="quan">
        				<h1>Powerbeats<sup>3</sup></h1>
        				<h2>Wireless</h2>
        			</div>
        		</div>
        	</div>
        	<div class="photo_right">
        		<div class="photo_right1">
        			<img src="../../images/yangshengqi-zhong.png" alt="" class="blow">
        			<div class="board">
        				<img src="../../images/bofangjian.png" alt="" class="quan">
        			</div>
        		</div>
        	</div>
        </div>
        <div class="pro">
        	<div class="pro_topL">
        		<h2>
        			Small and.<br />wisdom<br /><span>extreordinary?</span>
        		</h2>
        		<p>
        			<span>Beats Pill+ </span><br />
        			品质音效 智享震撼
        		</p>
        	</div>
        	<div class="pro_topR">
        		<h5>
        			Better sounc quailty is only the beginning.<br />
					We are sincere engineers,deveiopers<br /><br /><br />
					resecrchersretalers,marketing<br />
					personnel And dreamers One<br />
					goal converges usour customers can’t<br />
					get anywhere else.
				</h5>
				<div class="know_info"><a href="javascript:;"><span></span>立即了解</a></div>
        	</div>
        	<div class="photo_left_top1">
        		<img src="../../images/pro_5_tu1.png" alt="" class="blow">
        		<div class="board">
        			<img src="../../images/zhengfangxing.png" alt="" class="quan">
        			<div>· 03</div>
        		</div>
        	</div>
        	<div class="photo_left_top1 pro_bottom_r">
        		<img src="../../images/pro_5_tu2.png" alt="" class="blow">
        		<div class="board">
        			<img src="../../images/sanjiaoxing.png" alt="" class="quan">
        			<div>· 04</div>
        		</div>
        	</div>
        </div>
        <div class="power">
        	<div class="photo_left_top1">
        		<img src="../../images/pro_5_bottom_tu1.png" alt="" class="blow">
        		<div class="board">
        			<h1>urBeats<sup>3</sup></h1>
        			<h1>性能 动力 自由</h1>
        			<h1>提升你的音效</h1>
        			<div>· 05</div>
        		</div>
        	</div>
        	<div class="photo_left_top1">
        		<img src="../../images/pro_5_bottom_tu2.png" alt="" class="blow">
        		<div class="board">
        			<img src="../../images/yuan.png" alt="" class="quan">
        			<div>· 06</div>
        		</div>
        	</div>
        </div>
        <div class="hot container" :style="{ marginLeft: hot_scroll+'px' }">
        	<div class="hot_right">
        		<h2>Powerbeats<sup>3</sup><br/>Wireles</h2>
        		<h3>用声音打造令你<br />心驰神往</h3>
        		<p>Defiant Black-<span>Red</span></p> 
        		<div class="know_info"><a href="javascript:;"><span></span>立即了解</a></div>
        	</div>
        	<div class="hot_center">
        		<img src="../../images/hot.png" alt="">
        	</div>
        	<div class="hot_left">
        		<p>beats</p>
        		<h3>Make you with<br />sound Feel<br />excited</h3>
        	</div>
        </div>
        <div class="last">
        	<div class="last_left">
        		<div class="last_left1">
        			<img src="../../images/news_left_top.png" alt="">
        		</div>
        		<div class="last_left2">
        			<img src="../../images/news_left_bottom.png" alt="">
        		</div>
        	</div>
        	<div class="last_center">
        		<h2>
        			Beats dyamic<br />
        			<span>Beats动态</span>
        		</h2>
        		<div class="demo">
        			<div class="demo_l">
        				<img src="../../images/dyasic_top.png" alt="">
        			</div>
        			<div class="demo_r" id="dl_height">
        				<h3>Beats最受年轻人欢迎的品牌之一</h3>
        				<h4>Beats为摇滚暴徒、Hip-pop、流行音乐爱好者等提<br />供了更多的可能</h4>
        				<h5>2019.11.20</h5>
        			</div>
        		</div>
        		<div class="demo">
        			<div class="demo_l">
        				<img src="../../images/dyasic_bottom.png" alt="">
        			</div>
        			<div class="demo_r">
        				<h3>Beats最受年轻人欢迎的品牌之一</h3>
        				<h4>Beats为摇滚暴徒、Hip-pop、流行音乐爱好者等提<br />供了更多的可能</h4>
        				<h5>2019.11.20</h5>
        			</div>
        		</div>
        		<p>· ( 遗失主流 )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主流文化消逝，如何拯救？Beats最新答案。</p>
        		<p>· ( 遗失主流 )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主流文化消逝，如何拯救？Beats最新答案。</p>
        		<p>· ( 遗失主流 )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主流文化消逝，如何拯救？Beats最新答案。</p>
        		<p id="suwei">· ( 遗失主流 )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;主流文化消逝，如何拯救？Beats最新答案。</p>
        		<h2>
        			Contact Us<br />
        			<span>联系我们</span>
        		</h2>
        		<ul class="contact">
        			<li>
        				<img src="../../images/weixin.png" alt="">
        				<p>微信</p>
        			</li>
        			<li>
        				<img src="../../images/weibo.png" alt="">
        				<p>微博</p>
        			</li>
        			<li>
        				<img src="../../images/email.png" alt="">
        				<p>邮件</p>
        			</li>
        		</ul>
        		<h2>
        			More prodect<br />
        			<span>更多产品</span>
        		</h2>
        		<ul class="more">
        			<li><img src="../../images/more_1.png" alt=""></li>
        			<li><img src="../../images/more_2.png" alt=""></li>
        			<li><img src="../../images/more_3.png" alt=""></li>
        			<li><img src="../../images/more_4.png" alt=""></li>
        		</ul>
        	</div>
        	<div class="last_right">
        		<img src="../../images/news_right-2.png" alt="">
        	</div>
        </div>
        <div class="fix_top" :style="{ opacity: fix_scroll}" @click="scroll_top">
        	&uarr;
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
			some_scroll: false,
			hot_scroll: -1200,
			fix_scroll: 0
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll, true);
	},
	methods: {
		handleScroll() {
			/*slide_center*/
			var scrollTop1 = document.documentElement.scrollTop || document.body.scrollTop;
			if(scrollTop1>=100) {
				this.slideScrollL = true;
				this.slideScrollR = true;
			};
			if(scrollTop1>=550) {
				this.dreScrollL = true;
				this.dreScrollC = true;
				this.dreScrollR = true;
			};
			if(scrollTop1>=1200) {
				this.some_scroll = true;
			};
			if(scrollTop1>=4400) {
				this.hot_scroll = 343;
			};
			if(scrollTop1>=1000) {
				this.fix_scroll = 1;
			}else {
				this.fix_scroll = 0;
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
		},
		scroll_top() {
			window.scroll({top: 0, left: 0, behavior: 'smooth' }); /*回到顶部*/
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
/*---------------------fix_top 开始---------------------*/
		.fix_top {
			width: 50px;
			height: 50px;
			background-color: #676767;
			color: #ffffff;
			text-align: center;
			line-height: 50px;
			position: fixed;
			right: 50px;
			bottom: 50px;
			cursor: pointer;
			z-index: 99999;
		}
/*---------------------fix_top 开始---------------------*/

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

/*---------------------photo 开始---------------------*/
		.photo {
			height: 877px;
			width: 1991px;
			background-color: pink;
		}
		.photo_right {
			width: 1049px;
			height: 877px;
			background-color: red;
			float: left;
		}
		.photo_right1 {
			width: 1049px;
			height: 877px;
		}
		.photo_right1 .board {
			width: 1049px;
			height: 877px;
			background: rgba(0, 0, 0, 0.5);
			left: 0;
			top: 0;
			opacity: 0;
			transition: 0.5s;
		}
		.photo_right1:hover .board {
			opacity: 1;
		}
		.photo_right1 .blow {
			transition: 0.5s;
		}
		.photo_right1:hover .blow {
			transform: scale(1.1, 1.1);
		}
		.photo_right1 .board .quan {
			width: 76px;
			height: 76px;
			position: absolute;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);;
			top: 50%;
		}
		.photo_left {
			width: 874px;
			height: 877px;
			background-color: blue;
			float: left;
		}
		.photo_left_top {
			width: 942px;
			height: 501px;
		}
		.photo_left_top1, 
		.photo_left_top2 {
			float: left;
		}
		.photo_left_bottom {
			width: 874px;
			height: 376px;
		}
		.photo_left_bottom .board {
			width: 874px;
			height: 376px;
			background: rgba(113, 12, 13, 0.8);
			left: 0;
			top: 0;
			text-align: center;
			opacity: 0;
			transition: 0.7s;
		}
		.photo_left_bottom:hover .board {
			opacity: 1;
		}
		.photo_left_bottom .blow {
			transition: 0.7s;
		}
		.photo_left_bottom:hover .blow {
			transform: scale(1.1, 1.1);
		}
		.photo_left_bottom .board h1 {
			color: #fff;
			margin-top: 200px;
		}
		.photo_left_bottom .board h2 {
			color: #fff;
		}
		.photo_left_bottom .board .quan {
			width: 47px;
			height: 47px;
			position: absolute;
			top: 50%;
			left: 413px;
			transform: translateY(-100%);
		}
		.photo_left_top1, 
		.photo_left_top2,
		.photo_left_bottom,
		.photo_right1 {
			position: relative;
			overflow: hidden;
		}
		.photo_right1 .board {
			width: 988px;
			height: 834px;
			border: 5px solid red;
			left: 16px;
			top: 16px;
		}
		.photo_left_top1 {
			height: 501px;
			width: 350px;
			position: relative;
		}
		.photo_left_top1 .board {
			height: 501px;
			width: 350px;
			background: rgba(0, 0, 0, 0);
			left: 0;
			top: 0;
			text-align: center;
			transition: 0.5s;
			opacity: 0;
		}
		.photo_left_top1:hover .board {
			background: rgba(0, 0, 0, 0.5);
			opacity: 1;
		}
		.photo_left_top1 .board div,
		.photo_left_top2 .board div {
			position: absolute;
			right: 30px;
			top: 30px;
			color: #fff;
			font-size: 12px;
			font-weight: 700;
		}
		.photo_left_top1 .blow {
			transition: 0.5s;
		}
		.photo_left_top1:hover .blow {
			transform: scale(1.1, 1.1);
		}
		.photo_left_top2 {
			height: 501px;
			width: 524px;
		}
		.photo_left_top2 .board {
			height: 501px;
			width: 524px;
			background: rgba(0, 0, 0, 0);
			left: 0;
			top: 0;
			text-align: center;
			opacity: 0;
			transition: 0.5s;
		}
		.photo_left_top2 .board .quan {
			width: 47px;
			height: 47px;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
		.photo_left_top1 .board .quan {
			width: 47px;
			height: 47px;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
		.photo_left_top2:hover .board {
			background: rgba(0, 0, 0, 0.5);
			opacity: 1;
		}
		.photo_left_top2 .blow {
			transition: 0.5s;
		}
		.photo_left_top2:hover .blow {
			transform: scale(1.1, 1.1);
		}
/*---------------------photo 结束---------------------*/

/*---------------------pro 开始---------------------*/
		.pro {
			width: 1560px;
			height: 1256px;
			background: url('../../images/pro_5_bg.jpg') 0 0 no-repeat;
			margin-left: 343px;
			position: relative;
		}
		.pro .photo_left_top1 {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 518px;
			height: 524px;
		}
		.pro .pro_bottom_r {
			left: 518px;
		}
		.pro .photo_left_top1 .board {
			width: 518px;
			height: 524px;
		}
		.pro_topL {
			width: 720px;
			height: 730px;
			padding-left: 165px;
			padding-top: 215px;
			float: left;
			box-sizing: border-box;
		}
		.pro_topL h2 {
			font-size: 42px;
			color: #fff;
			margin-bottom: 120px;
		}
		.pro_topL h2 span {
			color: #df042a;
		}
		.pro_topL p {
			color: #fff;
			font-size: 30px;
		}
		.pro_topL p span {
			font-size: 20px;
		}
		.pro_topR {
			height: 730px;
			width: 830px;
			padding-top: 215px;
			float: left;
			position: relative;
		}
		.pro_topR h5 {
			font-size: 22px;
			color: #b0b0b0;
			font-weight: 400;
			line-height: 1.5em;
		} 
		.pro_topR .know_info {
			position: absolute;
			left: 0;
			top: 550px;
		}
		.pro_topR .know_info a {
			color: #fff;
		}
/*---------------------pro 结束---------------------*/

/*---------------------power 开始---------------------*/
		.power {
			height: 526px;
			width: 1560px;
			margin-left: 343px;
			position: relative;
		}
		.power .photo_left_top1 {
			width: 518px;
			height: 526px;
		}
		.power .photo_left_top1 .board {
			width: 518px;
			height: 526px;
		}
		.power .photo_left_top1 .board h1 {
			color: #fff;
			font-size: 24px;
			font-weight: 400;
		}
		.power .photo_left_top1 .board h1:nth-child(1) {
			margin-top: 207px;
		}
		.power .photo_left_top1:nth-child(2) {
			width: 349px;
			height: 526px;
			margin-left: 333px;
		}
		.power .photo_left_top1:nth-child(2) .board {
			width: 349px;
			height: 526px;
		}
/*---------------------power 结束---------------------*/

/*---------------------hot 开始---------------------*/
		.hot {
			height: 369px;
		}
		.hot .hot_left {
			width: 240px;
			height: 369px;
			float: left;
			position: relative;
			padding-left: 50px;
			padding-top: 80px;
			box-sizing: border-box;
		}
		.hot_left h3 {
			font-size: 22px;
			color: #a5a5a5;
			height: 45px;
		}
		.hot_left h3:nth-child(3) {
			font-size: 22px;
			color: #df042a;
		}
		.hot_left span {
			position: absolute;
			left: 0;
			height: 64px;
			width: 4px;
			background-color: #df042a;
			top: 107px;
		}
		.hot .hot_center {
			width: 720px;
			height: 369px;
			float: left;
		}
		.hot .hot_center img {
			transition: 0.7s;
		}
		.hot .hot_center:hover img {
			transform: scale(1.1, 1.1);
		}
		.hot .hot_right {
			width: 240px;
			height: 369px;
			float: left;
			position: relative;
		}
		.hot_right h2 {
			font-size: 24px;
		}
		.hot_right .star {
			width: 201px;
			height: 21px;
			margin: 12px 0;
		}
		.hot_right h3 {
			font-size: 18px;
			font-weight: 400;
			margin-bottom: 12px;
		}
		.hot_right p {
			font-size: 12px;
			color: #808080;
		}
		.hot_right .know_info {
			position: absolute;
			left: 0;
			top: 180px;
		}
/*---------------------hot 结束---------------------*/
/*---------------------hot add 开始---------------------*/
		.hot {
			height: 800px;
			padding-top: 175px;
			box-sizing: border-box;
			transition: 0.7s;
		}
		.hot_center {
			padding-left: 90px;
			box-sizing: border-box;
		}
		.hot_right h2 {
			font-size: 40px;
			margin-bottom: 55px;
			font-weight: 400;
			margin-top: 35px;
		}
		.hot_right h3 {
			font-size: 30px;
			font-weight: 400;
		}
		.hot_right p {
			margin-top: 10px;
			color: #bfbfbf;
			font-size: 14px;
		} 
		.hot_right p span {
			color: #df042a;
		}
		.hot_right .know_info {
			top: 400px;
		}

		.hot_left p {
			color: #636363;
			font-size: 14px;
			margin-top: -100px;
			margin-bottom: 25px;
		}
		.hot_left h3 {
			color: #636363;
			font-size: 24px;
			font-weight: 400;
		}
/*---------------------hot add 结束---------------------*/



/*---------------------last 开始---------------------*/
		.last {
			height: 1487px;
			width: 1991px;
			background-color: #bc0121;
			position: relative;
		}
		.last img {
			vertical-align: middle;
		}
		.last_left,
		.last_center,
		.last_right {
			float: left;
			height: 1487px;
		}
		.last_left {
			width: 696px;
		}
		.last_center {
			width: 685px;
			padding-left: 100px;
			padding-top: 75px;
			box-sizing: border-box;
		}
		.last_right {
			width: 400px;
		}
		.last_center {
			color: #fff;
		}
		.last_center h2:nth-child(3) {
			margin-top: 40px;
		}
		.last_center span {
			font-size: 18px;
			font-weight: 400;
		}
		.last_center p {
			font-size: 13px;
			margin-bottom: 24px;
			font-weight: 700;
			cursor: pointer;
		}
		.last_center #suwei {
			margin-bottom: 80px;
		}
		.more {
			margin-top: 35px;
		}
		.more li {
			width: 104px;
			height: 104px;
			background-color: #fff;
			float: left;
			margin-right: 8px;
			overflow: hidden;
			cursor: pointer;
		}
		.more li:hover img {
			transition: 0.5s;
		}
		.more li:hover img {
			transform: scale(1.1, 1.1);
		}
		.contact {
			height: 75px;
			margin-top: 20px;
			margin-bottom: 40px;
		}
		.contact li {
			width: 75px;
			height: 75px;
			box-sizing: border-box;
			float: left;
			margin-right: 100px;
			border: 1px solid rgba(255, 255, 255, 0);
			text-align: center;
			padding-top: 15px;
			transition: 0.5s;
			cursor: pointer;
		}
		.contact li:hover {
			border: 1px solid rgba(255, 255, 255, 1);
			border-radius: 50%;
		}
		.contact li:nth-child(1) {
			margin-left: 35px;
		}
		.contact p {
			font-size: 12px;
		}
		.demo {
			height: 102px;
			width: 460px;
			margin-top: 30px;
			margin-bottom: 30px;
		}
		.demo_l {
			width: 103px;
			height: 104px;
			float: left;
		}
		#dl_height {
			height: 102px;
		}
		.demo_r {
			width: 357px;
			height: 104px;
			padding-left: 36px;
			box-sizing: border-box;
			float: right;
			transition: 0.5s;
		}
		.demo:hover .demo_r{
			background: rgba(255, 255, 255, 0.3);
		}
		.demo_r h3 {
			font-size: 16px;
		}
		.demo_r h4 {
			font-size: 14px;
			font-weight: 400;
			margin-top: 15px;
		}
		.demo_r h5 {
			font-size: 12px;
			padding-left: 250px;
		}
/*---------------------last 结束---------------------*/

/*---------------------黑板 board 开始---------------------*/
		/*<div class="board"></div>*/
		.board {
			position: absolute;
		}
/*---------------------黑板 board 结束---------------------*/
/*
复用photo
<div class="photo_left_top1">
	<img src="../../images/photo-applejiekou.png" alt="" class="blow">
	<div class="board">
		<img src="../../images/sanjiaoxing.png" alt="" class="quan">
		<div>· 01</div>
	</div>
</div>
*/
</style>