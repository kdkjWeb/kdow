export default {
	data() {
		return {
			modifyPwd:{
				definition:[{
					id: "password",
					name: "旧密码",
					type: "password"
				},{
					id: "newPassword",
					name: "新密码",
					type: "password"
				},{
					id: "confirmNewPassword",
					name: "确认新密码",
					type: "password"
				}],
				model:{},
				options: {
					submit:{
						enable: true,
						action:(model)=>{
							if(!model.password || !model.newPassword || !model.confirmNewPassword){
								this.$toast("请输入完整的信息")
								return 
							}
							if(model.newPassword != model.confirmNewPassword){
								this.$toast("您输入的两次密码不同，请重新输入")
								return 
							}
							let data = {
								password: model.password,
								address: model.newPassword
							}
							
							this.$store.commit('process')
							this.$axios.post('user/updatePassword', data)
							.then((res)=>{
								console.log(res)
								this.$store.commit('done')
								if(res.data.code === 0){
									this.$alert("修改成功")
									this.modifyPwd.model = {}
								}else{
									this.$toast(res.data.msg)
								}
							})
							.catch((err)=>{
								console.log(err)
								this.$store.commit('done')
								this.$toast("请求超时了请检查网络")
							})
						}
					}
				}
			}
		}
	},
	methods:{

	}
}