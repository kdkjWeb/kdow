<template>
	<!-- <div>
		<h2>登陆页面</h2>
		<kdow-form
		:definition="loginForm.definition"
		:objects="loginForm.model"
		@update:model="(model)=>{loginForm.model = model}"/>
		<a href="#/register">立即注册</a>
		<button @click="login">登陆</button>
	</div> -->
	<div class="login_main" :style="{'height': clientHeight + 'px', 'width': clientWidth + 'px'}">
		<div class="main_contain" :style="{'height': clientWidth * 0.4 / 1.68 + 'px', 'width': clientWidth * 0.4 + 'px', 'left': clientWidth * 0.3 + 'px'}">
		  <div class="contain_left"></div>
			<div class="contain_right">
				<div class="close_btn clear">
					<span class="glyphicon glyphicon-remove"></span>
				</div>
		    <div class="login_text clear" :style="{'line-height':  clientWidth * 0.4 / 1.68 * 0.18 + 'px'}">登录</div>
		    <!-- <kdow-form
		    :definition="loginForm.definition"
		    :objects="loginForm.model"
		    @update:model="(model)=>{loginForm.model = model}"/> -->
				<div class="input_box">
					<div class="input_type_icon">
						<span class="glyphicon glyphicon-user"></span>
					</div>
					<input type="text" class="input_uname" placeholder="请输入手机号或者邮箱" />
				</div>
				<div class="input_box" style="margin-top: 6%;">
					<div class="input_type_icon">
						<span class="glyphicon glyphicon-lock"></span>
					</div>
					<input type="password" class="input_passw" placeholder="请输入密码" />
				</div>
				<div class="other_a">
					<div class="register_a">
		        <a href="#/register">注册</a>
					</div>
					<div class="forget_pw">
		        <a href="##">忘记密码</a>
					</div>
				</div>
				<div class="sub_btn_box clear">
          <button @click="login" class="submit_btn">登录</button>
				</div>
			</div>
	  </div>
	</div>
</template>

<script>
	export default require('./loginController.js')
</script>

<style scoped="">
.clear{
  clear: both;
}
.clear:after{
  content: "";
  clear: both;
  height: 0;
  display: block;
}
.login_main{
	background: url(/static/login/loginbg.jpg) no-repeat center center;
	padding: 0px;
	margin: 0px;
}
.main_contain{
	background: #fff;
	position: fixed;
	top: 30%;
	border-radius: 5px;
}
.contain_left{
	height: 100%;
	width: 54%;
	float: left;
	background: skyblue;
	border-radius: 5px 0px 0px 5px;
}
.contain_right{
	height: 100%;
	width: 46%;
	float: right;
}
.close_btn{
	float: right;
	height: 30px;
	width: 30px;
	line-height: 30px;
	text-align: center;
	/* background: lawngreen; */
}
.login_text{
	height: 18%;
	/* line-height: 18%; */
	width: 100%;
	/* background: salmon; */
	text-align: center;
	font-family: '微软雅黑';
	/* font-weight: bold; */
	font-size: 16px;
}
.input_box{
	height: 30px;
	width: 72%;
	border: 1px solid #cfcfcf;
	border-radius: 20px;
	line-height: 30px;
	margin: 0 auto;
}
.input_type_icon{
	height: 30px;
	line-height: 30px;
	width: 16%;
	margin-left: 2px;
	/* background: salmon; */
	float: left;
	text-align: center;
}
.input_uname,.input_passw{
	width: 78%;
	height: 28px;
	line-height: 28px;
	float: left;
	border: 0px solid #fff;
}
.other_a{
	width: 72%;
	height: 25px;
	line-height: 25px;
	margin: 2px auto 0px;
	/* background: seagreen; */
}
.register_a{
	float: left;
	margin-left: 6%;
	/* width: 50px; */
	height: 25px;
	line-height: 25px;
	/* background: salmon; */
}
.forget_pw{
	float: right;
	/* width: 50px; */
	height: 25px;
	line-height: 25px;
	margin-right: 5%;
	/* background: salmon; */
}
.register_a a,.forget_pw a{
	color: #8a8a8a;
	text-decoration: none;
	font-size: 12px;
}
.sub_btn_box{
  height: 30px;
	width: 72%;
	margin: 5% auto 10%;
}
.submit_btn{
	height: 30px;
	width: 100%;
	background: #58aafd;
	text-align: center;
	cursor: pointer;
	border-radius: 20px;
	border: 0px solid #fff;
	color: #fff;
	font-size: 16px;
	font-weight: 600;
}

</style>