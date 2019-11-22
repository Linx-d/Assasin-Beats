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
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped>
/*---------------------banner开始----------------------*/
		.banner {
			height: 900px;
			width: 100%;
			background: url('../../images/pro_banner.png') no-repeat;
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
</style>