<template>
	<div>
		<div class="banner"></div>
		<div class="active container">
			<div class="news_active_left">
				<div class="center_left1">
					新闻资讯-<span>新闻详情</span>
				</div>
				<div class="center_left2">VR市场降温：Facebook一口气关闭200家线下体验店</div>
				<div class="center_left3">2019-09-19</div>
				<div class="center_left4">最近的数据来看整个VR行业开始出现降温根据外媒消息Facebook本周三一口气关闭了多达200家Oculus Rift线下体验店</div>
				<div class="center_left5"><img src="../../../images/news_img.png" alt=""></div>
				<div class="center_left6">众所周知，如果想要体验虚拟现实的魅力，最好的方式就是前往VR体验店，各大VR体验店也一度非常火爆。不过，从最近的数据来看，整个VR行业开始出现降温。根据外媒消息，Facebook本周三一口气关闭了多达200家Oculus Rift线下体验店，差不多砍掉了在全美开设的500家体验店的40%。对此，官方给出的回应是“季节性调整”。</div>
				<div class="center_left7">对此，一名多百思买(Best Buy)工作人员透露称，所谓的季节性调整，只是一种委婉的说辞而已，因为有很多Oculus Rift体验店甚至连续几天都不会有一个消费者前来体验DEMO，所以关闭没有任何的意外。</div>
				<div class="center_left8">作为三大VR头显之一，Oculus Rift体验店之所以会遇冷，一方面是消费者对体验Oculus Rift并不怎么感兴趣，且百思买在营销推广上力度不够大，没有达到吸引消费者的要求。根据国外顾客透露，每次去百思买的Rift体验店，都不知道怎么使用那些笨重的头显，也没有工作人员加以指导。</div>
				<div class="center_left9">另一方面就是与整个VR行业降温有关系了，毕竟VR体验店对于很多消费者的吸引力已经大不如前。</div>
			</div>
			<div class="news_active_right">
				<div class="center_right1">
					<a href="#">
						<h3>亚马逊新专利:用降落伞实...</h3>
						<b>用无人机送货，这是亚马逊正在如火如荼进行的物流项目。去年亚马逊...</b>
						<span></span>
					</a>
					<a href="#">
						<h3>2018年10大新科技产品...</h3>
						<b>科技发展日新月异科技产品不断涌现身为 Geek还在攒手机吗？...</b>
						<span></span>
					</a>
					<a href="#">
						<h3>继Lightning和USB-C后 ...</h3>
						<b>现在在苹果产品中服役的还是还是Lightning和USB-C两种接...</b>
						<span></span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped>
	.banner {
		width: 100%;
		height: 800px;
		background: url('../../../images/news_banner.png') 0 0 no-repeat;
	}
	a {
		text-decoration: none;
		color: #606060;
		margin-bottom: 25px;
		display: block;
	}
	a:hover {
		color: #df042a;
	}
	.active {
		height: 1200px;
		margin-top: 40px;
	}
	.news_active_left {
		float: left;
		width: 860px;
		height: 1200px;
	}
	.news_active_right {
		float: right;
		width: 260px;
		height: 600px;
		padding-top: 150px;
	}
	.center_right1 h3 {
		margin-bottom: 25px;
	}
	.center_right1 b {
		font-size: 15px;
	}
	.center_right1 h3,
	.center_right1 b {
		font-weight: 400;
	}
	.center_right1 span {
		display: block;
		width: 260px;
		height: 1px;
		background-color: #adadad;
		margin-top: 25px;
	}
	.center_left1 {
		color: #606060;
		margin-bottom: 20px;
	}
	.center_left1 span {
		color: #df042a;
	}
	.center_left2 {
		font-size: 32px;
	}
	.center_left3 {
		color: #4e4e4e;
		font-size: 14px;
		height: 40px;
		line-height: 40px;
	}
	.center_left4 {
		height: 40px;
	}
	.center_left5 {
		width: 860px;
		height: 430px;
		margin-bottom: 30px;
	}
	.center_left6,
	.center_left7,
	.center_left8,
	.center_left9 {
		line-height: 34px;
		margin-bottom: 80px;
	}
	.center_left6 {
	}
	.center_left7 {
	}
</style>