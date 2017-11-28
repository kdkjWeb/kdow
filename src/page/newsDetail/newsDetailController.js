
export default {
	data() {
		return {
			showBtmBtn: false,
			showLoginDialog: false,
			loginForm:{
				definition:[{
					id: "userName",
					name: "用户名",
					type: "string",
					hiddenLabel: true,
					icon: '/static/login/user_ico.png',
					placeHolder: "请输手机号或者邮箱",
					validator(data){
						if(!data){
							this.$toast({
								message: "请输入用户名",
								duration: 1500
							})
							return false;
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
					icon: '/static/login/pwd_ico.png',
					placeHolder: "请输入密码"
				}],
				model:{}
			}
		}
	},
	methods: {
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
				compelete: done
			})
		},
		loginDialogLeave(el, done) {
			
			//1.隐藏左右div, 隐藏第三方和close btn
			//2.隐藏右边主要内容

			//1
			this.$Velocity(el, { opacity: 0}, { duration: 800,delay: 1300, complete: done})
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
				delay: 800
			})
		}
	},
	mounted() {
		if(this.$refs.newsDetail_main_content.offsetHeight > document.body.clientWidth){
			this.showBtmBtn = true;
		}
	}
}