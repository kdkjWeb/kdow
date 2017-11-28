export default {
	data() {
		return {
			personalInfor: {
				definition:[{
					id: "name",
					name: "昵称",
					type: "string"
				},{
					id: "birthday",
					name: "生日",
					type: "date"
				},
				// {
				// 	id: "email",
				// 	name: "邮箱",
				// 	type: "string",
				// 	validator:(model)=>{
				// 		let emailReg = new RegExp(
				// 			"^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
				// 		);
				// 		return emailReg.test(model) || "请输入正确的邮箱"
				// 	}
				// },
				{
					id: "address",
					name: "地址",
					type: "string"
				},{
					id: "phone",
					name: "手机号",
					type: "string",
					validator:(model)=>{
						let phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
						return phoneReg.test(model) || "请输入正确的手机号"
					}
				},{
					id: "userHeader",
					name: "用户头像",
					type: "file"
				},{
					id: "login_date",
					name: "最后登录时间",
					type: "string",
					disabled: true
				},{
					id: "login_ip",
					name: "最后登录ip",
					type: "string",
					disabled: true
				}],
				model:{},
				options:{
					submit:{
						enable: true,
						action:(model)=>{
							console.log(model)
							
							this.$axios.post('user/update', model)
							.then((res)=>{
								console.log(res)
							})
							.catch((err)=>{
								console.log(err)
							})
						}
					}
				}
			}
		}
	},
	methods:{
		getPersonalInfor() {
			this.$store.commit('process')
			this.$axios.get('user/getUser')
			.then((res)=>{
				this.$store.commit('done')
				console.log(res);
				if(res.data.code === 0){

				}
			})
			.catch((err)=>{
				this.$store.commit('done')
				this.$toast("请求超时了请检查网络")
			})
		}
	},
	mounted() {
		this.getPersonalInfor();
	}
}