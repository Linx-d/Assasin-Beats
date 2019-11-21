<template>
	<div>
		<div class="banner">
			<div class="left">
				<h2>Beats<sup>x</sup></h2>
				<p>贴合你的生活节奏，Beats 入耳式耳机是你随身的无线伴侣。长达 8 小时的电池使用时间和 Fast Fuel 闪充技术，让你全天都能聆听到纯正而清澈的音质。</p>
				<div class="dollar">RMB 899</div>
				<div class="know_info"><a href="#"><span></span>立即了解</a></div>
			</div>
			<div class="right">
				<div class="right_top">手机号登录</div>
				<div class="right_middle">
					<form action="">
						<div class="middle_number">
							<label for="number"><img src="http://nsedu.oss-cn-beijing.aliyuncs.com/2019web/huangcheng/images/denglu/phone.png" alt=""></label>
							<input type="text" placeholder="请输入手机号登录" id="number">
						</div>
						<div class="middle_password">
							<label for="password"><img src="http://nsedu.oss-cn-beijing.aliyuncs.com/2019web/huangcheng/images/denglu/jiantou.png" alt="" class="icon_right"></label>
							<input type="text" placeholder="请输入正确答案" id="password">
							<img src="../../images/yanzheng.png" alt="" class="yanzhengma">
						</div>
						<div class="middle_verify">
							<label for="verify"><img src="http://nsedu.oss-cn-beijing.aliyuncs.com/2019web/huangcheng/images/denglu/jiantou.png" alt=""></label>
							<input type="text" placeholder="请输入验证码" id="verify">
							<button>获取验证码</button>
						</div>
						<input type="submit" value="登录/注册" id="login">
					</form>
					
				</div>
				<div class="right_bottom"><p>若您尚未注册会员 , 可先输入手机号 , 获取并再次输入动态验证码登录同时将注册为会员。</p></div>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped>
	.banner {
		height: 800px;
		width: 100%;
		background:  url('../../images/banner.png') 0 0 no-repeat;
		position: relative;
	}
/*-------------left----------------*/
	.left h2 {
		position: absolute;
		left: 357px;
		top: 300px;
		color: #df042a;
		font-size: 60px;
	}
	.left p {
		width: 370px;
		position: absolute;
		left: 355px;
		top: 405px;
		color: #fff;
		line-height: 24px;
	}
	.left .dollar {
		position: absolute;
		left: 355px;
		top: 500px;
		display: block;
		color: #fff;
		font-size: 14px;
	}
	.left .know_info {
		position: absolute;
		left: 355px;
		top: 535px;
	}
	.left .know_info a {
		text-decoration: none;
		color: #fff;
	}

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

/*-------------right----------------*/
        .right {
        	position: absolute;
        	top: 200px;
        	left: 1025px;
        	background-color: #ffffff;
        	height: 525px;
        	width: 525px;
        	position: relative;
        }	
        .right_top {
        	height: 80px;
        	line-height: 80px;
        	background-color: #e7e7e7;
        	font-size: 30px;
        	text-align: center;
        	color: #292929;
        }
        .right_bottom {
        	position: absolute;
        	bottom: 0;
        	right: 0;
        	height: 80px;
        	width: 525px;
        	background-color: #e7e7e7;
        	font-size: 14px;
        	color: #9e9e9e;
        	padding-left: 55px;
        	padding-top: 24px;
        	box-sizing: border-box;
        }
        .right_bottom p {
        	width: 405px;
        }
        .right_middle {
        	height: 370px;
        	padding-top: 50px;
        	padding-left: 80px;
        }
        .middle_number {
        	width: 370px;
        	height: 45px;
        	border: 1px solid #c9c9c9;
        	position: relative;
        }
        .middle_number label {
        	height: 30px;
        	width: 40px;
        	display: block;
        	border-right: 1px solid #a1a1a1;
        	margin-top: 7px;
        	overflow: hidden;
        }
        .middle_number label img {
        	display: block;
        	margin-left: 14px;
        	margin-top: 3px;
        }
        .middle_number input {
        	color: #757575;
        	outline: 0;
        	border: 0;
        	font-size: 14px;
        	position: absolute;
        	top: 16px;
        	left: 58px;
        }

        .middle_password {
        	width: 267px;
        	height: 45px;
        	border: 1px solid #c9c9c9;
        	position: relative;
        	margin-top: 20px;
        }
        .middle_password label {
        	height: 30px;
        	width: 40px;
        	display: block;
        	border-right: 1px solid #a1a1a1;
        	margin-top: 7px;
        	overflow: hidden;
        }
        .middle_password label .icon_right {
        	display: block;
        	margin-left: 14px;
        	margin-top: 11px;
        }
        .middle_password .yanzhengma {
        	position: absolute;
        	right: -104px;
        	top: 7px;
        }
        .middle_password input {
        	color: #757575;
        	outline: 0;
        	border: 0;
        	font-size: 14px;
        	position: absolute;
        	top: 16px;
        	left: 58px;
        }

        .middle_verify {
        	width: 267px;
        	height: 45px;
        	border: 1px solid #c9c9c9;
        	position: relative;
        	margin-top: 20px;
        }
        .middle_verify label {
        	height: 30px;
        	width: 40px;
        	display: block;
        	border-right: 1px solid #a1a1a1;
        	margin-top: 7px;
        	overflow: hidden;
        }
        .middle_verify label img {
        	display: block;
        	margin-left: 14px;
        	margin-top: 11px;
        }
        .middle_verify input {
        	color: #757575;
        	outline: 0;
        	border: 0;
        	font-size: 14px;
        	position: absolute;
        	top: 16px;
        	left: 58px;
        }
        .middle_verify button {
        	border: 0;
        	width: 100px;
        	height: 47px;
        	background-color: #e0e0e0;
        	position: absolute;
        	right: -101px;
        	top: -1px;
        }

        .right_middle #login {
        	border: 0;
        	height: 45px;
        	width: 370px;
        	background-color: #df042a;
        	margin-top: 50px;
        	color: #fff;
        }
</style>