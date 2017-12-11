<template>
	<div class="text-center container-fluid noPadding">
		<!-- 顶部导航栏 -->
		<div class="header_div">
			<kdow-header @isNeedToLogin="(val)=>{showLoginDialog = val}"/>
		</div>
		<!-- 顶部导航栏 -->

		<!-- 登录弹出框 -->
		<transition
		@before-enter="loginDialogBeforeEnter"
		@enter="loginDialogEnter"
		@leave="loginDialogLeave">
			<div class="loginDialog" v-if="showLoginDialog">
				<div class="loginDialog_shadow"></div>
				<div class="loginDialog_main" ref="loginDialog_main">
					<span class="loginDialog_close_btn" ref="loginDialog_close_btn">
						<img src="/static/login/close_btn.png" @click="showLoginDialog = false">
					</span>
					<div class="loginDialog_main_left" ref="loginDialog_main_left">
						<img src="/static/login/left_img.png">
						<p class="loginDialog_main_leftTxt">You've got more than you can see</p>
					</div>
					<div class="loginDialog_main_right" ref="loginDialog_main_right">
						<img src="/static/login/right_img.png">
						<div class="loginDialog_main_rightMain" ref="loginDialog_main_rightMain">
							<h3>登录</h3>
							<div>
								<kdow-form
								:definition="loginForm.definition"
								:objects="loginForm.model"
								@update:model="(model)=>{loginForm.model = model}"/>
								<p class="text-left login_other">
									<router-link to="/" style="float:left">注册</router-link>
									<router-link to="/" style="float:right">忘记密码</router-link>
									<a style="float:clear"></a>
								</p>
								<div class="logon_btn_div">
									<button type="submit">登录</button>
								</div>
							</div>
							<div class="login_third_party">
								<div class="login_third_party_top">
									<p class="login_third_party_line"></p>
									<p class="login_third_party_title">第三方登录</p>
									<p class="login_third_party_line"></p>
								</div>
								<div class="login_third_party_main" ref="login_third_party_main">
									<ul>
										<li><img src="/static/login/qq_ico.png"></li>
										<li><img src="/static/login/wechat_ico.png"></li>
										<li><img src="/static/login/sinna_ico.png"></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>
		
		<!-- 登录弹出框 -->

		<!-- 上部分图片 -->
		<div class="newsDetail_banner container-fluid noPadding">
			<div class="row">
				<div class="col-md-12 col-sm-12 col-xs-12 noPadding">
					<img src="/static/news_detail/banner.png"
					     width="100%" alt=""/>
				</div>
			</div>
		</div>
		<!-- 上部分图片 -->
		<div class="newsDetail_main container noPadding">
			<!-- 头部位置显示以及发布时间 -->
			<div class="newsDetail_main_top col-md-12 col-sm-12 col-xs-12 noPadding">
				<p class="text-left col-md-6 col-sm-6 col-xs-6 noPadding noMargin">
					<router-link to="/">首页</router-link>
					<span>&gt;</span>
					<router-link to="/news">公司新闻</router-link>
				</p>
				<p class="text-right col-md-6 col-sm-6 col-xs-6 noPadding noMargin">
					<span>
						<img src="/static/news_detail/time_ico.png" alt="">
					</span>
					<span style="padding: 0 5px; line-height:2px">
						2017-11-11
					</span>
				</p>
			</div>
			<!-- 头部位置显示以及发布时间 -->

			<!-- 中间主要内容 -->
			<div ref="newsDetail_main_content" class="newsDetail_main_content col-md-12 col-sm-12 col-xs-12">
				<!-- 按钮 -->
				<div class="newsDetail_main_content_top text-right col-md-12 col-sm-12 col-xs-12">
					<router-link to="/news">
						<span style="padding:0 10px"><img src="/static/news_detail/rectangle_ico.png"></span>
					</router-link>
					<router-link to="/newsDetail">
						<span style="padding:0 1px"><img src="/static/news_detail/topBtn_pre.png"></span>
					</router-link>
					<router-link to="/newsDetail">
						<span style="padding:0 1px"><img src="/static/news_detail/topBtn_next.png"></span>
					</router-link>
				</div>
				<!-- 按钮 -->

				<!-- 内容 -->
				<div class="col-md-12 col-sm-12 col-xs-12">
					<h4>精品网站建设与优化最不能忽视的就是细节架构</h4>
					<p class="text-left">
						目前公司主营业务为移动网络游戏的研发、运营及移动网络游戏领域的投资。公司秉持做精品游戏的理念，专注于手机游戏研发，推出的产品包括...等9款。
					</p>
					<p class="text-left">
						未来，公司将继续坚持面向全球的移动游戏研发和运营，以策略游戏为基础，与其他不同类型的游戏做整合创新，将游戏推向更多更广泛的人群，打造出更多人们热爱的游戏。未来，公司将继续坚持面向全球的移动游戏研发和运营，以策略游戏为基础，与其他不同类型的游戏做整合创新，将游戏推向更多更广泛的人群，打造出更多人们热爱的游戏。
					</p>
				</div>
				<!-- 内容 -->
			</div>
			<!-- 中间主要内容 -->

			<!-- 底部按钮 -->
			<div class="newsDetail_main_bottom col-md-12 col-sm-12 col-xs-12"
			     v-if="showBtmBtn">
				<router-link to="/news">
					<span><img src="/static/news_detail/rectangle_ico.png"></span>
				</router-link>
				<router-link to="/newsDetail">
					<span style="padding:0 1px"><img src="/static/news_detail/btmBtn_pre.png"></span>
				</router-link>
				<router-link to="/newsDetail">
					<span style="padding:0 1px"><img src="/static/news_detail/btmBtn_next.png"></span>
				</router-link>
			</div>
			<!-- 底部按钮 -->
		</div>
	</div>
</template>
<script>
	export default require('./newsDetailController.js')
</script>
<style scoped="">
    @font-face{
    	font-family: login-right-webfont;
    	src: url('/static/ag.TTF');
    }
    /**
     * 登录框页面
     */
    .loginDialog{
    	position: fixed;
    	width: 100%;
    	height: 1000px;
    	top: 0;
    	left: 0;
    	z-index: 99;
    }
    .loginDialog_shadow{
    	width: 100%;
    	height: 1000px;
    	position: absolute;
    	background-color: #000;
    	opacity: .2;
    	z-index:  -1;
    }
    .loginDialog_close_btn{
    	position: absolute;
    	z-index: 1;
    	cursor: pointer;
    	right: 10px;
    	top: 7px;
    }
    .loginDialog_main{
    	position: relative;
    	top: 15%;
    	width: 790px;
    	height: 480px;
    	border-radius: 10px;
    	box-shadow: 0 0 30px #555;
    	overflow: hidden;
    }
    .loginDialog_main_left{
    	width: 428px;
    	position: absolute;
    	left: 0;
    }
    .loginDialog_main_leftTxt{
    	position: absolute;
    	top: 260px;
    	left: 72px;
    	color: #000;
    	font-size: 20px;
    	font-family: login-right-webfont;
    }
    .loginDialog_main_right{
    	width: 363px;
    	height: 480px;
    	position: absolute;
    	right: 0;
    }
    .loginDialog_main_rightMain{
    	width: 363px;
    	position: absolute;
    	right: 0;
    	top: 0;
    }
    .loginDialog_main_rightMain h3{
    	margin: 70px 0 16px 0;
    }
    .login_other{
    	margin: 5px 65px;
    }
    .login_other a{
    	display: inline-block;
    	color: #ccc;
    }
    .login_other a:hover{
    	color: blue;
    }

    .logon_btn_div{
    	margin-top: 30px;
    }
    .logon_btn_div button{
    	width: 260px;
    	height: 40px;
    	border-radius: 20px;
    	border-color: #fff;
    	border-style: solid;
    	color:  #fff;
    	background: url("/static/login/btn_img.png")
    }

    .login_third_party_top{
    	margin: 25px 0;
    }
    .login_third_party_top p{
    	display: inline-block;
    	color: #ccc;
    }
    .login_third_party_title{
    	margin: 0 15px;
    }
    .login_third_party_line{
    	width: 110px;
    	height: 1px;
    	background-color: #ccc;
    	margin-bottom: 5px;
    }

    .login_third_party_main ul{
    	list-style: none;
    }
    .login_third_party_main ul li{
    	display: inline-block;
    	margin:0 23px;
    }



	.header_div{
		position: fixed;
    	top: 0;
    	left: 0;
    	width:100%;
    	z-index:  5;
	}
    .newsDetail_main_top{
    	margin: 25px 0;
    }
    .newsDetail_main_top a, span{
    	color: #8d8d8d;
    }

	.newsDetail_main_content{
		border-top: 1px dashed #c8c8c8;
		border-bottom: 2px solid #c8c8c8;
		margin-bottom: 35px;
	}
	.newsDetail_main_content_top{
		margin: 10px 0;
	}
	.newsDetail_main_content h4{
		font-weight: bold;
		margin: 15px 0 45px 0;
	}
	.newsDetail_main_content p{
		margin: 40px 0;
		line-height: 30px;
	}

	.newsDetail_main_bottom{
		margin: 35px 0 70px 0;
	}
	.newsDetail_main_bottom a{
		padding: 0 13px;
	}
</style>