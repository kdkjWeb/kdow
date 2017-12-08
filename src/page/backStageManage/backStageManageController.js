export default {
	data() {
		return {
			user: null,
			showLoginDialog: false,
			showNav: true,
			loginForm: {
				definition: [{
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
						if(!phoneReg.test(data)){
							return "请输入正确的手机号"
						}
						
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
				model: {}
			}
		}
	},
	methods:{
		login() {
			if(!this.loginForm.model.username || !this.loginForm.model.password){
				this.$toast("请输入用户名以及密码")
				return
			}
			this.$store.commit('process')
			this.$axios.post('login', this.loginForm.model)
			.then((res)=>{
				this.$store.commit('done')
				if(res.data.code == 0){
					//登录成功
					//关闭登录窗口,储存用户信息在sessionStorage
					this.showLoginDialog = false;
					sessionStorage.setItem("user",JSON.stringify(res.data.data))
					this.user = res.data.data
					this.$store.commit('setUser', this.user)
					location.reload()
				}else{
					this.$toast(res.data.msg)
				}
			})
			.catch((err)=>{
				this.$store.commit('done')
				this.$toast("请求超时了请检查网络")
			})
		},
		logout() {
			sessionStorage.removeItem("user")
			this.user = null
			location.href = "#/"
		},
		hideNav(event) {
			
			this.showNav = !this.showNav
			if(!this.showNav){
				this.$Velocity(this.$refs.backStageManage_nav, {
					left: '-13%',
					width: '0px'
				}, {
					duration: 500
				})
				this.$Velocity(this.$refs.backStageManage_main, {
					width: '100%'
				},{
					duration: 500
				})
				this.$Velocity(this.$refs.nav_btn, {
					right: '-203px'
				}, {
					duration: 500
				})
			}else{
				this.$Velocity(this.$refs.backStageManage_nav, {
					left: '0px',
					width: '13%'
				}, {
					duration: 500
				})
				this.$Velocity(this.$refs.backStageManage_main, {
					width: '87%'
				},{
					duration: 500
				})
				this.$Velocity(this.$refs.nav_btn, {
					right: '-17px'
				}, {
					duration: 500
				})
			}
		}
	},
	created() {
		this.user = JSON.parse(sessionStorage.getItem('user'))
		if(!this.user){
			this.showLoginDialog = true
			this.$toast("请先登录")
		}
		this.$store.commit('setUser', this.user)
	}
}