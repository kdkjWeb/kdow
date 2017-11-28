export default {
	data() {
		return {
			clientHeight: 0,
			clientWidth: 0,
			loginForm:{
				definition:[{
					id: "userName",
					name: "用户名",
					type: "string",
					placeHolder: "请输手机号/邮箱",
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
					placeHolder: "请输入密码"
				}],
				model:{}
			}
		}
	},
	mounted () {
		this.clientHeight = `${window.screen.availHeight}`;
		this.clientWidth = `${window.screen.availWidth}`;
	},
	methods:{
		login() {
			console.log(this.loginForm.model)
			//登陆提交页面数据
			// this.$axios.post();
		}
	}
}