<template>
	<div>
    <!--新品上市 banner-->
        <div class="banner">
            <!--left-->
            <div class="banner_left1">· 可折叠设计</div>
            <div class="banner_left2">· Fast Fue <br>
                充电5分钟=播放三小时</div>
            <div class="banner_left3">· 荣膺大奖的音质</div>
            <!--right-->
            <div class="banner_right1">· Apple W1 Chip<span></span></div>
            <div class="banner_right2">Beats</div>
            <div class="banner_right3">Studio <sup>3</sup>  Wireless</div>
            <div class="banner_right4">Beats Studio3 Wireless 现已全新登场，采用完全自适应消噪 (Beats <br> Pure ANC) 技术和 Apple w1芯片。</div>
            <div class="know_info"><a href="#"><span></span>立即了解</a></div>
        </div>

    <!--新品上市 product--> 
        <div class="product container">
            <div class="product_top">
                <h1>NEWS PRODUCT</h1>
                <p><span></span>&nbsp;&nbsp;新品上市</p>
            </div>
            <div class="product_bottom">
                <div class="product_bottom_left">
                    <p>可选颜色</p>
                    <ul>
                        <li @click="news_change('new_pro1')" :class="{ news_border: new_pro1 }"><img src="../../images/color1 (1).jpg" alt="">雾霾蓝</li>
                        <li @click="news_change('new_pro')" :class="{ news_border: new_pro }"><img src="../../images/color1 (2).jpg" alt="">魅影灰</li>
                        <li @click="news_change('new_pro3')" :class="{ news_border: new_pro3 }"><img src="../../images/color1 (3).jpg" alt="">午夜黑</li>
                        <li @click="news_change('new_pro4')" :class="{ news_border: new_pro4 }"><img src="../../images/color1 (4).jpg" alt="">苍漠沙</li>
                    </ul>
                    <div class="know_info"><a href="#"><span></span>立即了解</a></div>
                </div>
                <div class="product_bottom_right">
                	<img src="../../images/new_pro1.png" alt="" v-show="new_pro1">
                	<img src="../../images/new_pro.png" alt="" v-show="new_pro">
                	<img src="../../images/new_pro3.png" alt="" v-show="new_pro3">
                	<img src="../../images/new_pro4.png" alt="" v-show="new_pro4">
                </div>
            </div>
        </div>

    <!--畅享音乐 people_music-->
        <div class="people_music container">
          <h2>畅想音乐 拒绝噪音</h2>
          <p>完全自适应消噪 (Beats Pure ANC) 技术可以阻隔外界干扰，带来至臻聆听体验，让你更贴近音乐。</p>
          <div class="people_music3">
            <div class="people_music_left">
              <img src="../../images/people_left.png" alt="">
              <div class="people_music_left_content">
                <h2>感应式的主动消噪</h2>
                <p>Beats Pure ANC可以持续精准地找到并阻隔外
                              部噪音，同时根据个人的佩戴感受和音乐的变
                              化而自动调节</p>
              </div>
              <span class="line_top"></span>
              <span class="line_right"></span>
              <span class="line_bottom"></span>
              <span class="line_left"></span>
            </div>
            <div class="people_music_left">
            <img src="../../images/people_middle.png" alt="">
            <div class="people_music_left_content">
              <h2>密闭隔音静听天籁</h2>
              <p>配有软垫的耳罩采用先进的通风设计，加上符
                合人体工学的标志性转轴，灵活贴合，让你畅
                享音乐，拒绝噪音。</p>
            </div>
            <span class="line_top"></span>
            <span class="line_right"></span>
            <span class="line_bottom"></span>
            <span class="line_left"></span>
          </div>
          <div class="people_music_left">
            <img src="../../images/people_right.png" alt="">
            <div class="people_music_left_content">
              <h2>实时音频校准</h2>
              <p>Beats Pure ANC (完全自适应消噪) 可以持续优
                化声音输出，确保音质清晰、音域精准且音乐
                情感细腻，打造至臻聆听体验</p>
            </div>
            <span class="line_top"></span>
            <span class="line_right"></span>
            <span class="line_bottom"></span>
            <span class="line_left"></span>
          </div>
          </div>
        </div>

    <!--图片 content-->
        <div class="content container">
            <div class="content_left">
                <div class="content_left_top">
                    <img src="../../images/xijie_left_top.png" alt="">
                </div>
                <div class="content_left_bottom">
                    <img src="../../images/xijie_left_bottom.png" alt="">
                </div>
            </div>

            <div class="content_right">
                <div class="content_right_top">
                    <img src="../../images/xijie_right_top.png" alt="">
                </div>
                <div class="content_right_bottom">
                    <div class="content_right_bottom1">
                        <img src="../../images/xijie_right_bottom_left.png" alt="">
                    </div>
                    <div class="content_right_bottom2">
                        <img src="../../images/xijie_right_bottom_right.png" alt="">
                    </div>
                </div>
            </div>
        </div>

    <!--包装 package-->
        <div class="package container">
            <div class="package_left">
                <h1>包装内容:</h1>
                <ul>
                    <li><span>01 </span>Beats Studio3 Wireless 头戴式耳机</li>
                    <li><span>02 </span>便携盒</li>
                    <li><span>03 </span>3.5 毫米 RemoteTalk 遥控线缆</li>
                    <li><span>04 </span>通用 USB 充电线缆 (USB-A 至 USB Micro-B)</li>
                    <li><span>05 </span>快速入门指南</li>
                </ul>
                <div class="hr distance"></div>
                <div class="hr distance1"></div>
                <div class="stand">产品支持&nbsp;&nbsp;<img src="../../images/xiaosanjiao.png" alt=""></div>
                <div class="guide"><a href="">安全购买指南&nbsp;&nbsp;<img src="../../images/xiaosanjiao.png" alt=""></a></div>
                <div class="know_info"><a href="#"><span></span>立即了解</a></div>
            </div>
            <div class="package_right"><img src="../../images/baozhuang_pro.png" alt=""></div>
        </div>                        
	</div>
</template>

<script>
export default {
	data() {
		return {
		/*new_pro*/
		new_pro1: true,
		new_pro: false,
		new_pro3: false,
		new_pro4: false,
	}
	},
	methods: {
		news_change(message) {
			switch (message) {
				case 'new_pro1' :
				this.new_pro1 = true;
				this.new_pro = false;
				this.new_pro3 = false;
				this.new_pro4 = false;
				break;

				case 'new_pro' :
				this.new_pro1 = false;
				this.new_pro = true;
				this.new_pro3 = false;
				this.new_pro4 = false;
				break;

				case 'new_pro3' :
				this.new_pro1 = false;
				this.new_pro = false;
				this.new_pro3 = true;
				this.new_pro4 = false;
				break;

				case 'new_pro4' :
				this.new_pro1 = false;
				this.new_pro = false;
				this.new_pro3 = false;
				this.new_pro4 = true;
				break;
			}
		}
	}
}
</script>

<style lang="scss" scoped>
/*---------------------banner开始----------------------*/
		.banner {
			height: 900px;
			width: 100%;
			background: url(../../images/news_pro_banner.png) no-repeat;
			position: relative;
		}
		.banner div {
			position: relative;
			color: white;
		}
		.banner .banner_left1 {
			position: absolute;
			left: 354px;
			top: 294px;
			font-size: 14px;
		}
		.banner .banner_left2 {
			position: absolute;
			left: 354px;
			top: 474px;
			font-size: 14px;
		}
		.banner .banner_left3 {
			position: absolute;
			left: 354px;
			top: 672px;
			font-size: 14px;
		}
		.banner .banner_right1 {
			position: absolute;
			left: 1048px;
			top: 294px;
			font-size: 14px;
		}
		.banner .banner_right1 span {
			width: 20px;
			height: 3px;
			background-color: #df042a;
			margin-left: 20px;
			display: inline-block;
			vertical-align: middle;
		}
		.banner .banner_right2 {
			position: absolute;
			left: 1048px;
			top: 320px;
			font-size: 55px;
			color: #df042a;
			font-weight: 700;
		}
		.banner .banner_right3 {
			position: absolute;
			left: 1048px;
			top: 390px;
			font-size: 55px;
			color: #fff;
			font-weight: 700;
		}
		.banner .banner_right4 {
			position: absolute;
			left: 1048px;
			top: 510px;
			font-size: 16px;
			color: #fff;
		}
		.banner .know_info {
			position: absolute;
			left: 1048px;
			top: 600px;
		}
		.banner .know_info a {
			color: #fff;
		}
/*---------------------banner结束----------------------*/

/*---------------------新品上市 product开始----------------------*/
		.product {
			height: 700px;
			margin: 30px auto;
			
			padding-top: 45px;
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
		.product_bottom {
			background-color: red;
			
		}
		.product_bottom .product_bottom_left {
			width: 436px;
			float: left;
			margin-top: 164px;
			margin-left: 126px;
		}
		.product_bottom .product_bottom_left p {
			font-size: 30px;
			color: #626262;
		}
		.product_bottom .product_bottom_left ul {
			height: 191px;
			width: 436px;
			padding-left: 137px;
			padding-top: 46px;
			box-sizing: border-box;
		}
		.product_bottom .product_bottom_left ul li {
			color: #626262;
			margin-right: 42px;
			margin-bottom: 32px;
			width: 103px;
			height: 34px;
			float: left;
			box-sizing: border-box;
			border: 	1px solid #fff;
		}
		.product_bottom .product_bottom_left ul .news_border {
			border: 	1px solid #e1e1e1;
		}
		.product_bottom .product_bottom_left ul li img {
			vertical-align: middle;
			margin-right: 21px;
		}
		.product_bottom .product_bottom_left .know_info a {
			color: #000;
		}
		.product_bottom .know_info:hover a {
			color: #fff;
		}
		/*立即了解*/
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
		/*立即了解结束*/


		.product_bottom .product_bottom_right {
			width: 461px;
			height: 501px;
			float: right;
			position: relative;
		}
		.product_bottom .product_bottom_right img {
			position: absolute;
			left: 0;
			top: 0;
		}
/*---------------------新品上市 product结束----------------------*/

/*---------------------畅享音乐 people_music开始----------------------*/
    .people_music {
    	height: 492px;
    	margin-bottom: 50px;
    }
    .people_music h2 {
    	text-align: center;
    	margin-bottom: 10px;
    }
    .people_music p {
    	text-align: center; 
    	color: #898989; 
    	margin-bottom: 30px;
    }
    .people_music .people_music_left {
    	height: 400px;
    	width: 400px;
    	position: relative;
    	overflow: hidden;
    }
    .people_music .people_music_left img {
    	transition: 0.5s;
    }
    .people_music .people_music_left:hover img {
    	transform: scale(1.1, 1.1);
    }
    .people_music .people_music_left .people_music_left_content {
    	position: absolute;
    	height: 130px;
    	width: 290px;
    	top: 50%;
    	left: 50%;
    	transform: translateX(-145px) translateY(-65px);
    		
    }
    .people_music .people_music_left h2 {
    	color: rgba(255, 255, 255, 0);
    	text-align: center;
    	margin-bottom: 12px;
    	transition: 0.5s;  
    }
    .people_music .people_music_left:hover h2 {
    	color: rgba(255, 255, 255, 1);
    }
    .people_music .people_music_left p {
    	color: rgba(255, 255, 255, 0);
    	width: 290px;
    	line-height: 28px; 
    	overflow-wrap: break-word; 
    	font-size: 14px;
    	margin: 0 auto;
    	transition: 0.5s;  
    }
    .people_music .people_music_left:hover p {
    	color: rgba(255, 255, 255, 1);
    }
    .people_music .people_music_left span {
    	display: block;
    	position: absolute;
    	height: 4px;
    	width: 4px;
    	background-color: rgba(255, 255, 255, 0);
    	transition: 0.5s;
    }
    .people_music .people_music_left .line_top {
    	left: 20px;
    	top: 20px;
    }
    .people_music .people_music_left:hover .line_top {
    	background-color: rgba(255, 255, 255, 1);
    	width: 360px;
    }
    .people_music .people_music_left .line_right {
    	right: 20px;
    	top: 20px;
    }
    .people_music .people_music_left:hover .line_right {
    	background-color: rgba(255, 255, 255, 1);
    	height: 360px;
    }
    .people_music .people_music_left .line_bottom {
    	right: 20px;
    	bottom: 20px;
    }
    .people_music .people_music_left:hover .line_bottom {
    	background-color: rgba(255, 255, 255, 1);
    	width: 360px;
    }
    .people_music .people_music_left .line_left {
    	left: 20px;
    	bottom: 20px;
    }
    .people_music .people_music_left:hover .line_left {
    	background-color: rgba(255, 255, 255, 1);
    	height: 360px;
    }
    .people_music .people_music3 .people_music_left{

    	float: left;
    }
/*---------------------畅享音乐 people_music结束----------------------*/

/*---------------------产品内容展示 content开始----------------------*/
		.content {
			height: 1020px;
		}
		.content_left {
			float: left;
			width: 510px;
			height: 1020px;
			background-color: blue;
		}
		/*
		.content_left_top img {
			vertical-align: top;
		}
		.content_left_bottom img {
			vertical-align: top;
		}
		*/
		.content_left_top {
			height: 510px;
			width: 510px;
			overflow: hidden;
		}
		.content_left_top img {
			transition: 0.5s;
		}
		.content_left_top:hover img {
			transform: scale(1.1, 1.1);
		}
		.content_left_bottom {
			height: 510px;
			width: 510px;
			overflow: hidden;
		}
		.content_left_bottom img {
			transition: 0.5s;
		}
		.content_left_bottom:hover img {
			transform: scale(1.1, 1.1);
		}		
		.content_right {
			float: right;
			width: 690px;
			height: 1020px;
			background-color: yellow;
		}
		.content_right_top {
			height: 690px;
			width: 690px;
			overflow: hidden;
		}
		.content_right_top img {
			transition: 0.5s;
		}
		.content_right_top:hover img {
			transform: scale(1.1, 1.1);
		}
		.content_right_bottom {
			width: 690px;
			height: 330px;
		}
		.content_right_bottom .content_right_bottom1 {
			width: 345px;
			height: 330px;
			float: left;
			overflow: hidden;
		}
		.content_right_bottom1 img {
			transition: 0.5s;
		}
		.content_right_bottom1:hover img {
			transform: scale(1.1, 1.1);
		}
		.content_right_bottom .content_right_bottom2 {
			width: 345px;
			height: 330px;
			float: left;
			overflow: hidden;
		}
		.content_right_bottom2 img {
			transition: 0.5s;
		}
		.content_right_bottom2:hover img {
			transform: scale(1.1, 1.1);
		}
/*---------------------产品内容展示 content结束----------------------*/

/*---------------------包装内容展示 package开始----------------------*/
        .package {
        	height: 644px;
        	margin-top: 100px;
        	padding-left: 40px;
        	box-sizing: border-box;
        	position: relative;
        }
        .package .package_right {
        	float: right;
        }
        .package .package_left {
        	float: left;
        }
        .package .package_left h1 {
        	font-size: 40px;
        	margin-left: -40px
        } 
        .package .package_left li {
        	height: 32px;
        }
        .package .package_left li span {
        	color: #999;
        }
        .package .package_left ul {
        	
        	margin-top: 70px;
        	margin-bottom: 50px;
        }
        .package .package_left .hr {
        	height: 1px;
        	width: 356px;
        	background-color: #bfbfbf;
        }
        .package .package_left .distance {
        	margin-bottom: 30px;
        }
        .package .package_left .distance1 {
        	margin-bottom: 10px;
        }
        .package .package_left .guide a {
        	text-decoration: none;
        	color: #878787;
        }
        .package .package_left .guide {
        	color: #878787;
        	float: left;
        	height: 40px;
        	width: 130px;
        	padding-left: 20px;
        }
        .package .package_left .stand {
        	color: #878787;
        	float: left;
        	height: 20px;
        	width: 100px;
        	border-right: 1px solid #878787;
        }
        .package .know_info {
        	position: absolute;
        	left: 280px;
        	top: 410px;
        }        
/*---------------------包装内容展示 package结束----------------------*/
</style>