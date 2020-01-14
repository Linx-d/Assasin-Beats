<template>
	<div>
		<div class="banner"></div>
        <div class="aboutUs aboutContainer">
            <div class="product_top">
                <h1>ABOUT US</h1>
                <p><span></span>&nbsp;&nbsp;关于我们</p>
            </div>
            <div class="aboutUs_bottom">
                <div class="aboutUs_bottom1">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;2014年5月29日，苹果宣布以30亿美元收购Beats电子和Beats音乐的计划。26亿美元在收购时支付,其余4亿美元则将逐步支付。苹果在收购Beats电子支付了25亿美元，而收购Beats音乐只花了5亿美元。这次收购成为苹果历史上规模最大的一次收购。</p>
                </div>
                <div class="aboutUs_bottom2">
                    <img src="../../images/about_logo.png" alt="">
                </div>
            </div>
        </div>
        <div class="company aboutContainer">
            <div class="company_top_left">
                <ul>
                    <li>
                        <img class="scale" src="../../images/compan_center_left1.png" alt="">
                        <div><img src="../../images/company_yuan.png" alt="" class="rgb"></div>
                    </li>
                    <li>
                        <img class="scale" src="../../images/compan_center_left2.png" alt="">
                        <div><img src="../../images/sanjiaoxing.png" alt="" class="rgb"></div>
                    </li>
                    <li>
                        <img class="scale" src="../../images/compan_center_left3.png" alt="">
                        <div><img src="../../images/company_yuan.png" alt="" class="rgb"></div>
                    </li>
                </ul>
            </div>
            <div class="company_top_right">
                <div class="badge_red">
                    BEATS <span>公司</span><img src="../../images/company_logo.png" alt="">
                </div>
                <div class="company_top_right1">
                    <h1><span id="line"></span><span class="span">Beats</span> 可以简单分为Beats耳机，Beats扬声器和
                    Beats audio音效三部分
                    </h1>
                    <p>Beats耳机曾经是由Monster Cable Products Inc.公司生产的，并得到了著名音乐人Dr. Dre、Justin Bieber、
                    Bono甚至Lady Gaga的一致好评。但后期由于经济纠纷问题，Beats和Monster于2012年08月14日正式解除
                    合作关系。beats耳机以优异的外观设计和出色的音效取得了广大青年用户的青睐，同时明星效应也使得bea-
                    ts成为耳机中的“潮”牌。异军突起的Beats耳机展开了耳机时代的新纪元，其销量根本不低于AKG，森海塞
                    尔等这些老牌耳机大哥。
                    </p>
                    <div class="know_info"><a href="#"><span></span>立即了解</a></div>
                </div>
            </div>
        </div>
        <div class="company_bottom aboutContainer">
            <div class="company_bottom_left">
                <ul>
                    <li>
                        <img class="scale" src="../../images/compan_bottom_left1.png" alt="">
                        <div>
                            <img src="../../images/company_logo.png" alt="" class="rgb">
                            <h1>价值观</h1>
                        </div>
                        
                    </li>
                    <li>
                        <img class="scale" src="../../images/compan_bottom_left2.png" alt="">
                        <div>
                            <img src="../../images/company_logo.png" alt="" class="rgb">
                            <h1>创新/成就</h1>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="company_bottom_right">
                <div class="company_top_right1">
                    <h1><span id="line"></span><span class="span">Beats</span> 价值观
                    </h1>
                    <p>我们创始人的主要愿景不是快速赚钱。而是发明能够真正惠及大众的新技术，并创造出一
                    种文化，将创新精神和团队合作视作重中之重。立足长远。实现了这一点，美好的事物通常
                    会随之而来。
                    </p>
                    <div class="know_info"><a href="#"><span></span>立即了解</a></div>
                </div>
                <div class="company_top_right1">
                    <h1><span id="line"></span><span class="span">Beats</span> 创新/成就
                    </h1>
                    <p>更好的音质仅仅是开始。我们是热诚的工程师、开发人员、研究人员、零售商、营销人员和梦
                    想家。一个目标把我们汇聚到一起—即创造我们的客户从其他地方无法获得的产品和体验。如
                    果想要了解更多信息，欢迎您前来探索
                    </p>
                    <div class="know_info"><a href="#"><span></span>立即了解</a></div>
                </div>
            </div>
        </div>
        <div class="history">
            <div class="badge_red">
                发展<span>历程</span><img src="../../images/company_logo.png" alt="">
            </div>
            <div class=".history_top">
                <div class="history_top1">
                    <div class="history_top1_line"></div>
                    <div class="history_top1_a" :class="[move_change]">
                        <a href="Javascript:;" @click="active1" :class="{red: color1}"></a>
                        <a href="Javascript:;" @click="active2" :class="{red: color2}"></a>
                        <a href="Javascript:;" @click="active3" :class="{red: color3}"></a>
                        <a href="Javascript:;" @click="active4" :class="{red: color4}"></a>
                        <a href="Javascript:;" @click="active5" :class="{red: color5}"></a>
                        <a href="Javascript:;" @click="active6" :class="{red: color6}"></a>
                        <a href="Javascript:;" @click="active7" :class="{red: color7}"></a>
                        <a href="Javascript:;" @click="active8" :class="{red: color8}"></a>
                    </div>
                </div>
                <div class="history_top2">
                     <ul>
                         <li :class="{history_hidden: color1}">
                             <div>1978</div>
                             <p>1978年魔声公司创建。李美圣于1978年6月26日注册了新公司的名字"MonsterCable"(美国注册商标#73176069)，并在自己加州旧金山的车库内开始生产。
                             </p>
                         </li>
                         <li :class="{history_hidden: color2}">
                             <div>1979</div>
                             <p>1979年研制出第一款魔声线材，参加芝加哥夏季消费电子展
                             </p>
                         </li>
                         <li :class="{history_hidden: color3}">
                             <div>1983</div>
                             <p>1983年Xterminator电源插座获得美国专利授权（专利号4,384,758）。
                             </p>
                         </li>
                         <li :class="{history_hidden: color4}">
                             <div>1984</div>
                             <p>1984年魔声推出世界上第一款专为苹果电脑研发设计的扬声器: MacSpeaker。
                             </p>
                         </li>
                         <li :class="{history_hidden: color5}">
                             <div>1998</div>
                             <p>1998年魔声推出Monster Power专利设计的Monster Clean Power?滤波功能提升家庭影院体验
                             </p>
                         </li>
                         <li :class="{history_hidden: color6}">
                             <div>2008</div>
                             <p>2008年发布Beats by Dr. Dre头戴式耳机，由魔声联手Dr. Dre和Interscope Geffen A&M主席Jimmy Iovine联手共同研发，由魔声公司设计生产。
                             </p>
                         </li>
                         <li :class="{history_hidden: color7}">
                             <div>2012</div>
                             <p>2012年8月14日由于经济纠纷问题同Beats公司终止合作关系，并停止出售所有同Beats合作的耳机
                             </p>
                         </li>
                         <li :class="{history_hidden: color8}">
                             <div>2014</div>
                             <p>2014年5月29日苹果公司宣布收购Beats公司
                             </p>
                         </li>
                     </ul>
                </div>
            </div>
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
            move_change: 'history_move1',
            move1: false,
            move2: false,
            move3: false,
            move4: false,
            move5: false,
            move6: false,
            move7: false,
            move8: false,
            color1: true,
            color2: false,
            color3: false,
            color4: false,
            color5: false,
            color6: false,
            color7: false,
            color8: false
        }
    },
    methods: {
        active1() {
            this.move1 = true;
            this.move_change = 'history_move1';
            this.color1 = true;
            this.color2 = false;
            this.color3 = false;
            this.color4 = false;
            this.color5 = false;
            this.color6 = false;
            this.color7 = false;
            this.color8 = false;
        },
        active2() {
            this.move2 = true;
            this.move_change = 'history_move2';
            this.color1 = false;
            this.color2 = true;
            this.color3 = false;
            this.color4 = false;
            this.color5 = false;
            this.color6 = false;
            this.color7 = false;
            this.color8 = false;
        },
        active3() {
            this.move3 = true;
            this.move_change = 'history_move3';
            this.color1 = false;
            this.color2 = false;
            this.color3 = true;
            this.color4 = false;
            this.color5 = false;
            this.color6 = false;
            this.color7 = false;
            this.color8 = false;
        },
        active4() {
            this.move4 = true;
            this.move_change = 'history_move4';
            this.color1 = false;
            this.color2 = false;
            this.color3 = false;
            this.color4 = true;
            this.color5 = false;
            this.color6 = false;
            this.color7 = false;
            this.color8 = false;
        },
        active5() {
            this.move5 = true;
            this.move_change = 'history_move5';
            this.color1 = false;
            this.color2 = false;
            this.color3 = false;
            this.color4 = false;
            this.color5 = true;
            this.color6 = false;
            this.color7 = false;
            this.color8 = false;
        },
        active6() {
            this.move6 = true;
            this.move_change = 'history_move6';
            this.color1 = false;
            this.color2 = false;
            this.color3 = false;
            this.color4 = false;
            this.color5 = false;
            this.color6 = true;
            this.color7 = false;
            this.color8 = false;
        },
        active7() {
            this.move7 = true;
            this.move_change = 'history_move7';
            this.color1 = false;
            this.color2 = false;
            this.color3 = false;
            this.color4 = false;
            this.color5 = false;
            this.color6 = false;
            this.color7 = true;
            this.color8 = false;
        },
        active8() {
            this.move8 = true;
            this.move_change = 'history_move8';
            this.color1 = false;
            this.color2 = false;
            this.color3 = false;
            this.color4 = false;
            this.color5 = false;
            this.color6 = false;
            this.color7 = false;
            this.color8 = true;
        },
    }
}	
</script>

<style lang="scss" scoped>
	.banner {
		width: 100%;
		height: 900px;
		background:  url('../../images/about_banner.png') 0 0 no-repeat;
	}

    .aboutContainer {
        width: 1553px;
        margin-left: 350px;
    }
/*------------------------------加入 开始------------------------------*/
    .join {
    	margin-bottom: 160px;
        margin-top: 100px;
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

/*------------------------------关于我们 开始------------------------------*/
    .aboutUs {
        height: 330px;
        position: relative;
        margin-top: 75px;
        margin-bottom: 130px;
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
    .aboutUs_bottom1 {
        width: 970px;
        height: 233px;
        float: left;
        padding-left: 130px;
        padding-top: 85px;
        box-sizing: border-box;
    }
    .aboutUs_bottom1 p {
        width: 580px;
        color: #666;
        font-size: 16px;
        line-height: 30px;
    }
    .aboutUs_bottom2 {
        float: left;
    }
/*------------------------------关于我们 结束------------------------------*/

/*------------------------------关于我们公司 开始------------------------------*/
    .company {
        height: 875px;
    }
    .company_top_left,
    .company_bottom_left {
        width: 296px;
        background-color: skyblue;
        height: 875px;
        float: left;
    }
    .company_top_left li,
    .company_bottom_left li {
        width: 296px;
        height: 292px;
        overflow: hidden;
    }
    .company_top_left li:nth-child(3) {
        height: 291px;
    }
    .company_top_left li div,
    .company_bottom_left li div  {
        width: 296px;
        height: 292px;
        background: rgba(200, 2, 37, 0.6);
        /*position: relative;*/
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        transition: 0.5s;
    }
    .company_top_left li div .rgb,
    .company_bottom_left li div .rgb {
        /*position: absolute;
        left: 50%;
        top:50%;
        transform: translateX(-50%) translateY(-50%);*/
    }
    .company_top_left li .scale,
    .company_bottom_left li .scale  {
        transition: 0.5s;
    }
    .company_top_left li:hover .scale,
    .company_bottom_left li:hover .scale  {
        transform: scale(1.1, 1.1);
    }
    .company_top_left li:hover div,
    .company_bottom_left li:hover div {
        transform: translateY(-296px);
    }
    .company_top_right {
        width: 1257px;
        height: 875px;
        float: right;
        position: relative;
    }
    .badge_red {
        position: absolute;
        left: 0;
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
    .company_top_right1 {
        height: 790px;
        margin-top: 85px;
        background: green url('../../images/about_top_bg.jpg') 0 0 no-repeat;
        padding-left: 80px;
        padding-top: 160px;
        box-sizing: border-box;
    }
    .company_top_right1 h1,
    .company_top_right1 p {
        color: white;
    }
    .company_top_right1 h1 {
        width: 600px;
        font-size: 28px;
        font-weight: 400;
        margin-bottom: 100px;
        position: relative;
    }
    .company_top_right1 h1 #line {
        background-color: red;
        position: absolute;
        width: 40px;
        height: 8px;
        left: -80px;
        top: 20px;
        background-color: #df042a;
    }
    .company_top_right1 h1 .span {
        color: #df042a;
        font-size: 32px;
    }
    .company_top_right1 p {
        width: 780px;
        line-height: 50px;
    }
    .company_top_right1 .know_info {
        margin-top: 40px;
    }
    /*立即了解*/
    .know_info {
        height: 35px;
        width: 132px;
        border: 1px solid #aaa;
        line-height: 35px;
        font-size: 14px;
        transition: 0.5s;
    }
    .know_info a {
        text-decoration: none;
        color: #fff;
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
/*------------------------------关于我们公司 结束------------------------------*/

/*------------------------------关于我们公司_bottom 开始------------------------------*/
    .company_bottom {
        width: 1553px;
        height: 924px;
    }
    .company_bottom_left {
        width: 462px;
        height: 924px;
        float: left;
    }
    .company_bottom_left li {
        width: 462px;
        height: 462px;
    }
    .company_bottom_left li:hover div{
        transform: translateY(-466px);
    }
    .company_bottom_left li div {
        width: 462px;
        height: 462px;
        background: rgba(0, 0, 0, 0.5);
    }
    .company_bottom_left li div h1 {
        color: #fff;
        letter-spacing: 5px;
    }
    .company_bottom_right {
        height: 924px;
        width: 1091px;
        background-color: blue;
        float: right;
    }

    .company_bottom_right {
        background: #fff url('../../images/bottom_bg.jpg') 0 0 no-repeat;
    }
    .company_bottom_right .company_top_right1 {
        height: 462px;
        margin-top: 0;
        padding-top: 80px;
        background: 0;
    }
    .company_bottom_right .company_top_right1 h1 {
        font-size: 28px;
        margin-bottom: 50px;
    }
    .company_bottom_right .company_top_right1 p {
        line-height: 40px;
        width: 645px;
    }
/*------------------------------关于我们公司_bottom 结束------------------------------*/

/*------------------------------发展历史 开始------------------------------*/
     .history {
        width: 100%;
        height: 804px;
        background: #fff url('../../images/history_bg.png') 0 0 no-repeat;
        position: relative;
     }
     .history .badge_red {
        position: absolute;
        left: 820px;
        top: 200px;
     }
     .history .badge_red img {
        margin-left: 70px;
     }
     .history_top1 {
        height: 100px;
        width: 1000px;
        position: absolute;
        top: 330px;
        left: 453px;
        overflow: hidden;
     }
     .history_top1 .history_top1_line {
        height: 4px;
        width: 100%;
        background-color: #5d5d5d;
        position: absolute;
        top: 47px;
        left: 0;
     }
     .history_top1 .history_top1_a {
        position: absolute;
        left: 500px;
        width: 800px;
        top: 50%;
        transform: translateY(-50%);
        transition: 0.5s;
     }
     .history_top1 .history_top1_a .red {
        background-color: #df042a;
     }
     .history_top1 .history_top1_a .gray {
        background-color: #717171;
     }
     .history_top1 .history_move1 {
        left: 500px;
     }
     .history_top1 .history_move2 {
        left: 399px;
     }
     .history_top1 .history_move3 {
        left: 298px;
     }
     .history_top1 .history_move4 {
        left: 197px;
     }
     .history_top1 .history_move5 {
        left: 96px;
     }
     .history_top1 .history_move6 {
        left: -5px;
     }
     .history_top1 .history_move7 {
        left: -106px;
     }
     .history_top1 .history_move8 {
        left: -217px;
     }
     .history_top1 .history_top1_a a{
        display: inline-block;
        width: 17px;
        height: 17px;
        background-color: #717171;
        border-radius: 50%;
        margin-left: 80px;
     }
     .history_top1 .history_top1_a a:nth-child(1) {
        margin-left: 0;
     }
     .history_top2 {
        width: 612px;
        height: 145px;
        position: absolute;
        left: 655px;
        top: 430px;
     }
     .history_top2 li {
        display: none;
     }
     .history_top2 div {
        margin-left: 250px;
        width: 112px;
        height: 45px;
        background-color: #df042a;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        line-height: 45px;
        font-size: 18px;
     }
     .history_top2 p {
        line-height: 30px;
        text-align: center;
        width: 612px;
        height: 50px;
        margin-top: 30px;
        color: #fff;
     }
     .history_top2 .history_hidden {   /*隐藏历史*/
        display: block;
     }
/*------------------------------发展历史 结束------------------------------*/
</style>