export default {
	data() {
		return {
			registerForm:{
				definition: [{
					id: "username",
					name: "手机号/邮箱",
					type: "string",
					displayPage: 1,
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
					id: "verificationCode",
					name: "验证码",
					type: "string",
					displayPage: 1,
					afterBtn: {
						name: "获取验证码",
						clickFunc: (data) =>{
							let timer, awaitTime = 60;

							/*执行后台请求*/
							this.getVerificationCode();
							
							this.$set(this.registerForm.definition[1].afterBtn,
							 'disabled',
							  true);
							this.$set(this.registerForm.definition[1].afterBtn,
							 'name',
							  awaitTime + 's后再试');
							timer = setInterval(()=>{
								awaitTime --;
								if(awaitTime > 0){
									this.$set(this.registerForm.definition[1].afterBtn,
									 'name',
									  awaitTime + 's后再试');
								}else{
									clearInterval(timer);
									this.$set(this.registerForm.definition[1].afterBtn,
										'disabled',
										false);
									this.$set(this.registerForm.definition[1].afterBtn,
										'name',
										'获取验证码')
								}
								
							}, 1000)
						}
					}
				},{
					id: "password",
					name: "密码",
					type: "password",
					displayPage: 2
				},{
					id: "confirmPassword",
					name: "确认密码",
					type: "password",
					displayPage: 2
				}],
				model: {},
				options: {
					submit:{
						enable: true,
						action: (model)=>{
							console.log(model)
							this.$axios.post(this.baseUrl + 'user/insert', model).then((res)=>{
								console.log(res);
							})
						}
					}
				}
			}
		}
	},
	methods: {
		getVerificationCode() {
			console.log("获取验证码");
		}
	}
}