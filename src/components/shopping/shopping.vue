<template>
	<div>
		<div class="banner">
			
		</div>
		<div class="gouwuche container">
			<h2>这是你购物车中的商品</h2>
			<p>免费送货 , 还可免费退货</p>
			<div class="goods">
				<div class="left">
					<img src="../../images/gouwuche_pro.png" alt="">
				</div>
				<div class="right">
					<div class="right1">
						<div>
							<h3>Beats X<span> 入耳式耳机-黑色</span></h3>
						</div>
						<div class="count">
							<span>数量</span> 
							<div>
								<h3 class="positive">-</h3> <h3 class="number">1</h3> <h3 class="negative">+</h3>
							</div>
						</div>
						<div>
							<h3>RMB 8,99</h3>
						</div>
					</div>
					<div class="right2">
						
					</div>
					<div class="right3">
						<img src="../../images/lipin.png" alt="">添加礼品赠言或礼品包装<span><a href="#">添加</a></span>
					</div>
					<div class="right4">
						
					</div>
					<div class="right5">
						了解你何时能收到这件商品。<a href="#">选择送货地区</a>
					</div>
					<div class="right6">
						<img src="../../images/kuaidi.png" alt=""><span>送货日期 : 有现货</span>
					</div>
				</div>
			</div>
			<div class="goods" id="goods2">
				<div class="left">
					<img src="../../images/gouwuche_pro2.png" alt="">
				</div>
				<div class="right">
					<div class="right1">
						<div>
							<h3>Beats X<span> 头戴式耳机-黑色</span></h3>
						</div>
						<div class="count">
							<span>数量</span> 
							<div>
								<h3 class="positive">-</h3> <h3 class="number">1</h3> <h3 class="negative">+</h3>
							</div>
						</div>
						<div>
							<h3>RMB 3,061</h3>
						</div>
					</div>
					<div class="right2">
						
					</div>
					<div class="right3">
						<img src="../../images/lipin.png" alt="">添加礼品赠言或礼品包装<span><a href="#">添加</a></span>
					</div>
					<div class="right4">
						
					</div>
					<div class="right5">
						了解你何时能收到这件商品。<a href="#">选择送货地区</a>
					</div>
					<div class="right6">
						<img src="../../images/kuaidi.png" alt=""><span>送货日期 : 有现货</span>
					</div>
				</div>
			</div>

			<div class="settle">
				<div class="settle1">
					运费<span>免费</span>
				</div>
				<div class="settle2">
					有优惠吗？<a href="#">立即输入</a>
				</div>
				<div class="settle3">
					
				</div>
				<div class="settle4">
					总计<span>RMB 3,960</span>
				</div>
				<div class="settle5"><span>此订单可使用分期付款方案。</span></div>
				<div class="settle6"><span><a href="#">查看详情&gt;</a></span></div>
				<div class="settle7"><span>结 算</span></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
	a {
		text-decoration: none;
	}
	.banner {
		width: 100%;
		height: 131px;
		background:  url('../../images/gouwuche_banner.jpg') 0 0 no-repeat;
	}
	.gouwuche {
		overflow: hidden;
	}
	.gouwuche h2 {
		margin-top: 74px;
		margin-bottom: 15px;
		font-weight: 400;
		font-size: 36px;
	}
	.gouwuche p {
		margin-bottom: 60px;
	}
	.goods {
		height: 400px;
		width: 100%;
		border-bottom: 1px solid #c1c1c1;
	}
	.goods .left,
	.goods .right {
		float: left;
	}
	.goods .right {
		position: relative;
	}
	.goods .left {
		margin-right: 50px;
		width: 252px;
		height: 273px;
	}
	.goods .left img {
		vertical-align: middle;
	}
	.goods .right1 div {
		float: left;
	}
	.goods .right1 {
		position: relative;
		width: 895px;
		height: 35px;
	}
	.goods .right1 div:nth-child(1) h3 {
		font-size: 32px;
		font-weight: 700;
	}
	.goods .right1 div:nth-child(1) span {
		font-weight: 400;
		font-size: 29px;
	}
	.goods .right1 .count  {
		width: 120px;
		height: 30px;
		position: absolute;
		left: 536px;
		top: 10px;
	}
	.goods .right1 .count span {
		font-weight: 700;
		display: block;
		position: absolute;
		left: 0;
		top: 4px;
		font-size: 18px;
		color: #333333;
	}
	.goods .right1 .count div {
		float: left;
		width: 65px;
		height: 16px;
		border: 1px solid #d2d2d2;
		border-radius: 4px;
		position: absolute;
		right: 0;
		top: 7px;
	}
	.goods .right1 .count div .positive,
	.goods .right1 .count div .negative {
		width: 17px;
		height: 17px;
		color: #939393;
		box-sizing: border-box;
		line-height: 13px;
		cursor: pointer;
		padding: 0px 0px 0px 4px;
	}
	.goods .right1 .count div .number {
		height: 16px;
		width: 27px;
		color: #939393;
		border-right: 1px solid #d2d2d2;
		border-left: 1px solid #d2d2d2;
		box-sizing: border-box;
		text-align: center;
		line-height: 17px;
		font-size: 14px;
	}
	.goods .right1 .count div h3 {
		float: left;
	}
	.goods .right1 div:nth-child(3) {
		position: absolute;
		right: 0;
		top: 10px;
	}
	.goods .right1 div:nth-child(3) h3 {
		font-size: 24px;
		font-weight: 400;
	}
	.goods .right2 {
		position: absolute;
		width: 900px;
		height: 1px;
		background-color: #c1c1c1;
		top: 115px;
		left: 0;
	}
	.goods .right3 img {
		vertical-align: middle;
		margin-right: 20px;
		margin-bottom: 5px;
	}
	.goods .right3 {
		color: #6b6b6b;
		position: absolute;
		left: 0;
		top: 143px;
		font-size: 18px;
		width: 900px;
		height: 75px;
	}
	.goods .right3 span {
		float: right;
	}
	.goods .right4 {
		position: absolute;
		width: 900px;
		height: 1px;
		background-color: #c1c1c1;
		top: 190px;
	}
	.goods .right5 {
		position: absolute;
		font-size: 18px;
		top: 230px;
		left: 0;
		color: #6b6b6b;
	}
	.goods .right6 {
		position: absolute;
		left: 0;
		top: 280px;
		font-size: 14px;
	}
	.goods .right6 img {
		vertical-align: middle;
		margin-top: 2px;
		margin-right: 15px;
	}
	.goods .right6 span {
		display: inline-block;
		position: absolute;
		width: 65px;
	}
	#goods2 {
		margin-top: 70px;
	}
	.settle {
		padding-top: 20px;
		padding-left: 300px;
		width: 900px;
	}
	.settle1 span {
		float: right;
	}
	.settle2 {
		margin-top: 20px;
		margin-bottom: 30px;
	}
	.settle3 {
		width: 900px;
		height: 1px;
		background-color: #c1c1c1;
		margin-bottom: 20px;
	}
	.settle4 {
		font-size: 24px;
	}
	.settle4 span {
		float: right;
	}
	.settle5 {
		height: 14px;
		width: 900px;
		margin-top: 17px;
		margin-bottom: 17px;
	}
	.settle5 span{
		color: #acacac;
		float: right;
		font-size: 14px;
	}
	.settle6 {
		height: 14px;
		width: 900px;
		margin-bottom: 32px;
	}
	.settle6 span{
		color: #acacac;
		float: right;
	}
	.settle7 {
		width: 330px;
		height: 56px;
		background-color: #df042a;
		line-height: 56px;
		text-align: center;
		color: #fff;
		transform: translateX(570px);
		cursor: pointer;
	}
	.settle7 span{
		color: #fff;
		font-size: 18px;
	}
</style>