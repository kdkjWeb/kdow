<template>
	<div style="height:100%">
		<header class="text-right">
			<span v-if="user">
				<span v-text="'欢迎您，' + user.username"></span>
				<a href="javascript:void(0)" @click="logout">[退出]</a>
			</span>
			<a href="javascript:void(0)"
			v-else
			@click="showLoginDialog = true">[登录]</a>
		</header>

		<div class="main">
			<div class="nav pull-left" ref="backStageManage_nav">
				<kdow-menu />
				<span class="navHideBtn"
				ref="nav_btn"
				:class="showNav?'showBg':'hideBg'" @click="hideNav($event)"></span>
			</div>
			<div class="content pull-right" ref="backStageManage_main">
				<nav></nav>
				<article>
					<router-view></router-view>
				</article>
			</div>
			<div class="clearfix"></div>
		</div>

		<footer></footer>

		<!-- 后端管理登录框 -->
		<transition>
			<kdow-dialog :showDialog="showLoginDialog"
			submitText="登录"
			:noOptions="true"
			@dialogCancel="showLoginDialog = false">
			    <h3 class="noMargin">登录</h3>
			    <!-- <form action="http://192.168.20.3:8080/kdkjgw/login" method="post">
					<b>登录</b>
					用户名<input name="username"/>
					密码<input name="password"/>
					<input type="submit"/>
				</form> -->
				<kdow-form 
				:definition="loginForm.definition"
				:objects="loginForm.model"
				@update:model="(model)=>{loginForm.model = model}"/>
				<div class="login_btn">
					<button @click="login">登录</button>
				</div>
			</kdow-dialog>
		</transition>
		<!-- 后端管理登录框 -->
	</div>
</template>
<script>
	export default require('./backStageManageController.js')
</script>
<style scoped>
	header{
		width: 100%;
		height: 5%;
		background-color: #222;
		border-bottom: 1px solid #080808;
		box-shadow: 0 0 4px #333;
		padding: .7% 2% 0 0;
	}
	header span, header a{
		color: #fff;
	}
	.main{
		width: 100%;
		height: 95%;
	}
	.nav{
		width: 13%;
		height: 100%;
		background-color: #333;
		position: relative;
		/*left: -13%;*/
	}
	.navHideBtn{
		display: block;
		position: absolute;
		right: -17px;
		top:  40%;
		width: 17px;
		height: 61px;
		color: #fff;
		cursor: pointer;
		background-image: url('/static/backStageManage/hideBtn.png');
		background-repeat: no-repeat;
	}
	.showBg{
		background-position: 0 0;
	}
	.showBg:hover{
		background-position: -21px 0;
	}
	.hideBg{
		background-position: 0 -61px;
	}
	.hideBg:hover{
		background-position: -21px -61px;
	}
	.content{
		width: 87%;
		padding: 20px;
	}
	.login_btn{
		margin-top: 30px;
	}
	.login_btn button{
		color: #fff;
		background-color: #B2DFEE;
		width: 260px;
		height: 34px;
		border-radius: 20px;
		border: 1px solid #fff;
		transition: background-color .3s;
		-webkit-transition: background-color .3s;
		-moz-transition: background-color .3s;
		-o-transition: background-color .3s;
	}
	.login_btn button:hover{
		background-color: #71c1ff;
	}
</style>