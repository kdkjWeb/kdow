<template>
	<!-- 登录弹出框 -->
	<transition
		@before-enter="loginDialogBeforeEnter"
		@enter="loginDialogEnter"
		@leave="loginDialogLeave">
		<div class="loginDialog text-center" v-if="showLoginDialog">
			<div class="loginDialog_shadow"></div>
			<div  class="loginDialog_main" ref="loginDialog_main">
				<transition name="loginForm_fade">
					<div v-if="isLogin" key="login">
						<span class="loginDialog_close_btn" ref="loginDialog_close_btn">
							<img src="/static/login/close_btn.png" @click="close">
						</span>
						<div class="loginDialog_main_left" ref="loginDialog_main_left">
							<img src="/static/login/left_img.png">
							<p class="loginDialog_main_leftTxt">You've got more than you can see</p>
						</div>
						<div class="loginDialog_main_right" ref="loginDialog_main_right">
							<img src="/static/login/right_img.png">
							<div class="loginDialog_main_rightMain" ref="loginDialog_main_rightMain">
								<h3 class="text-center">登录</h3>
								<div>
									<kdow-form
									:definition="loginForm.definition"
									:objects="loginForm.model"
									@update:model="(model)=>{loginForm.model = model}"/>
									<p class="text-left login_other">
										<span to="" @click="isLogin = false" style="float:left">注册</span>
										<span to="" style="float:right">忘记密码</span>
										<a style="float:clear"></a>
									</p>
									<div class="logon_btn_div">
										<button type="submit" @click="login">登录</button>
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
					<div v-else="isLogin" class="register" key="register">
						<span class="loginDialog_close_btn" ref="loginDialog_close_btn">
							<img src="/static/login/close_btn.png" @click="close">
						</span>
						<img src="/static/register/main_bg.jpg" class="register_bg" ref="register_bg">
						<div class="register_main" ref="register_main">
							<h3>注册</h3>
							<div>
								<kdow-form
								:definition="registerForm.definition"
								:objects="registerForm.model"
								@update:model="(model)=>{registerForm.model = model}"/>
							</div>
							<div class="agreement">
								<input type="checkbox" v-model="registerForm.model.agreement">
								<span>我已同意</span><router-link to="">用户使用协议</router-link>
							</div>
							<div class="register_submit">
								<button type="submit" @click="register">注册</button>
							</div>
							<div class="back_login">
								<p class="text-right"><span @click="isLogin = true">已有账号，直接登陆</span></p>
							</div>
						</div>
					</div>
				</transition>
				
				
			</div>
			
		</div>
	</transition>

	<!-- 登录弹出框 -->
</template>

<script>
	export default{
		data() {
			return {
				isLogin: true,
				loginForm:{
					definition:[{
						id: "username",
						name: "用户名",
						type: "string",
						hiddenLabel: true,
						isRadiusInput: true,
						icon: '/static/login/user_ico.png',
						placeHolder: "请输手机号或者邮箱",
						validator(data){
							if(!data){
								return "请输入用户名";
							}
							console.log(data);
							//手机/邮箱 reg验证
							
							return true
						}
					},{
						id: "password",
						name: "密码",
						type: "password",
						hiddenLabel: true,
						isRadiusInput: true,
						icon: '/static/login/pwd_ico.png',
						placeHolder: "请输入密码"
					}],
					model:{}
				},
				registerForm: {
					definition: [{
						id: "username",
						name: "用户名",
						type: "string",
						hiddenLabel: true,
						isRadiusInput: true,
						icon: '/static/login/user_ico.png',
						placeHolder: "填写常用手机号或者邮箱",
						validator: (model)=>{
							let phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
							let emailReg = new RegExp(
								"^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
								);
							if(phoneReg.test(model) || emailReg.test(model)){
								return true;
							}else{
								return "请输入正确的手机号或者邮箱";
							}
						}
					},{
						id: "password",
						name: "密码",
						type: "password",
						hiddenLabel: true,
						isRadiusInput: true,
						icon: '/static/login/pwd_ico.png',
						placeHolder: "请输入密码"
					},
					{
						id: "confirmPassword",
						name: "确认密码",
						type: "password",
						hiddenLabel: true,
						isRadiusInput: true,
						icon: '/static/login/pwd_ico.png',
						placeHolder: "请再次确认密码"
					}
					// {   不要删，以后可能会用到
					// 	id: "verificationCode",
					// 	name: "验证码",
					// 	type: "string",
					// 	displayPage: 1,
					// 	hiddenLabel: true,
					// 	half: true,
					// 	placeHolder: "请输入验证码",
					// 	afterBtn: {
					// 		name: "点击获取",
					// 		clickFunc: (data) =>{
					// 			let timer, awaitTime = 60;

					// 			/*执行后台请求*/
								
					// 			this.$set(this.registerForm.definition[2].afterBtn,
					// 			 'disabled',
					// 			  true);
					// 			this.$set(this.registerForm.definition[2].afterBtn,
					// 			 'name',
					// 			  awaitTime + 's后再试');
					// 			timer = setInterval(()=>{
					// 				awaitTime --;
					// 				if(awaitTime > 0){
					// 					this.$set(this.registerForm.definition[2].afterBtn,
					// 					 'name',
					// 					  awaitTime + 's后再试');
					// 				}else{
					// 					clearInterval(timer);
					// 					this.$set(this.registerForm.definition[2].afterBtn,
					// 						'disabled',
					// 						false);
					// 					this.$set(this.registerForm.definition[2].afterBtn,
					// 						'name',
					// 						'获取验证码')
					// 				}
									
					// 			}, 1000)
					// 		}
					// 	}
					// }
					],
					model: {
						agreement: false
					}
				}
			}
		},
		props: {
			showLoginDialog: {
				type: Boolean,
				required: true
			}
		},
		methods: {
			login() {
				this.$store.commit('process');
				this.$axios.post('login', this.loginForm.model)
				.then((res)=>{
					this.$store.commit('done');
					console.log(res);
					if(res.data.code == 0){
						//登录成功
					}else{
						this.$toast(res.data.msg)
					}
					
				})
				.catch((err)=>{
					console.log(err)
				})
			},
			register() {
				if(!this.registerForm.model.password || 
					!this.registerForm.model.username ||
					!this.registerForm.model.confirmPassword){
					this.$toast("请输入完整的信息")
				    return
				}
				if(this.registerForm.model.password != this.registerForm.model.confirmPassword){
					this.$toast("两次密码不同")
					return
				}
				if(!this.registerForm.model.agreement){
					this.$toast("请阅读并同意用户使用协议")
					return
				}
				this.$store.commit('process');
				this.$axios.post('user/insert',this.registerForm.model)
				.then((res)=>{
					this.$store.commit('done');
					if(res.data.code == 0){
						//注册成功
						
					}else{
						this.$alert(res.data.msg);
					}
				})
				.catch((err)=>{
					this.$toast(err);
				})
			},
			close() {
				this.isLogin = true;
				this.loginForm.model = {};
				this.$emit("close", false);
			},
			loginDialogBeforeEnter(el) {
				//初始化：1.总div 透明度隐藏  2.左内容部分在上方 3.右边内容在下方 4.关闭和第三方按钮都先隐藏
				el.style.opacity = 0
				this.$refs.loginDialog_main_left.style.top = '-485px'

				this.$refs.loginDialog_main_right.style.bottom = '-485px'

				this.$refs.loginDialog_main_rightMain.style.opacity = 0
				this.$refs.loginDialog_main_rightMain.style.top =  '30px'

				this.$refs.loginDialog_close_btn.style.opacity = 0
				this.$refs.loginDialog_close_btn.style.top = '-13px'

				this.$refs.login_third_party_main.style.opacity = 0
				this.$refs.login_third_party_main.style.marginTop = '30px'
			},
			loginDialogEnter(el, done) {
				//1.显示shadow 以及盒子的Boxshadow
				//2.显示左右的主要内容
				//3.显示关闭按钮以及第三方登录按钮
				//显示总体
				this.$Velocity(el, {
					opacity: 1
				}, {
					duration: 500
				})
				//显示左边div
				this.$Velocity(this.$refs.loginDialog_main_left, {
					top: 0
				}, {
					duration: 1300,
					easing: [.07,.97,.29,.99],
					delay: 500
				})
				//显示右边div
				this.$Velocity(this.$refs.loginDialog_main_right, {
					bottom: 0
				}, {
					duration: 1300,
					easing: [.07,.97,.29,.99],
					delay: 500
				})
				//显示右边主要内容
				this.$Velocity(this.$refs.loginDialog_main_rightMain, {
					top: 0,
					opacity: 1
				}, {
					duration: 500,
					delay: 800
				})
				//显示close btn
				this.$Velocity(this.$refs.loginDialog_close_btn, {
					opacity: 1,
					top: '7px'
				}, {
					duration: 800,
					delay: 1300
				})
				this.$Velocity(this.$refs.login_third_party_main, {
					opacity: 1,
					marginTop: 0
				}, {
					duration: 800,
					delay: 1300
				},{
					complete: done
				})
			},
			loginDialogLeave(el, done) {
				this.$Velocity(el, { opacity: 0}, { duration: 800,delay: 1300, complete: done})
				if(this.$refs.loginDialog_main_left && this.$refs.loginDialog_main_right){
					//1.隐藏左右div, 隐藏第三方和close btn
					//2.隐藏右边主要内容

					//1
					this.$Velocity(this.$refs.loginDialog_main_left, {
						top: '-485px'
					}, {
						duration: 1300,
						easing: [.89,0,1,.25]
					})
					this.$Velocity(this.$refs.loginDialog_main_right, {
						bottom: '-485px'
					}, {
						duration: 1300,
						easing: [.89,0,1,.25]
					})
					this.$Velocity(this.$refs.loginDialog_close_btn, {
						opacity: 0,
						top: '-13px'
					}, {
						duration: 500,
					})
					this.$Velocity(this.$refs.login_third_party_main, {
						opacity: 0,
						marginTop: '20px'
					}, {
						duration: 500,
					})
					//2
					this.$Velocity(this.$refs.loginDialog_main_rightMain, {
						top: '30px',
						opacity: 0
					}, {
						duration: 500,
						delay: 500
					})
				}else{
					//注册的时候关闭窗口
					this.$Velocity(this.$refs.loginDialog_close_btn, {
						opacity: 0,
						top: '-13px'
					}, {
						duration: 500,
					})
					this.$Velocity(this.$refs.register_main, {
						top: '30px',
						opacity: 0
					}, {
						duaration: 500,
						delay: 300
					})
					this.$Velocity(this.$refs.register_bg, {
						top: '485px'
					}, {
						duration: 1300,
						easing: [.89,0,1,.25]
					})
				}
				
			}
		}
	}
</script>

<style scoped="">
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
    	height: 100%;
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
    .login_other span{
    	display: inline-block;
    	color: #ccc;
    	cursor: pointer;
    }
    .login_other span:hover{
    	color: blue;
    	text-decoration: underline;
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

    /**
     * 注册的样式
     */
    .register{

    }
    .register_bg{
    	position:absolute;
    	left:0;
    	top:0;
    }
    .register_main{
    	position: absolute;
    	top: 0;
    	left: 0;
    	width: 790px;
    	height: 480px;
    }
    .register_main h3{
    	margin-top:  68px;
    }
    .agreement{
    	margin: 10px 0;
    }
    .agreement span{
    	color: #ccc;
    	margin-left: 10px;
    }
    .agreement a{
    	color: #0984ff;
    }
    .register_submit button{
    	color: #fff;
    	border-color: #fff;
    	border-style: solid;
    	border-radius: 20px;
    	background: url('/static/register/register_btn.jpg') no-repeat 0px -5px;
    	width: 260px;
    	height: 34px;
    }
    .back_login{
    	margin-top: 25px;
    }
    .back_login p{
    	width: 260px;
    	margin-left: 260px;
    }
    .back_login p span{
    	color: #0984ff;
    	cursor: pointer;
    }
    .back_login p span:hover{
    	text-decoration: underline;
    }




    /**
     * fade样式
     */
    .loginForm_fade-enter-active,  .loginForm_fade-leave-active{
    	transition:  all .5s;
    	-webkit-transition: all .5s;
    	-moz-transition: all .5s;
    	-o-transition:  all .5s;
    }
    .loginForm_fade-enter{
    	opacity: 0;
    	transform: translateX(5%);
    }
    .loginForm_fade-leave-to{
    	opacity: 0;
    	transform: translateX(-5%);
    }
</style>