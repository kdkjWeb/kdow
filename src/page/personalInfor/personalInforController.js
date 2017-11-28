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
					id: "file",
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
				model:{

				},
				options:{
					submit:{
						enable: true,
						action:(model)=>{
							console.log(model)
							this.$store.commit('process')
							
							this.$axios.post('user/update', model)
							.then((res)=>{
								this.$store.commit('done')
								if(res.data.code === 0){
									this.$alert("修改成功")
								}else{
									this.$toast("网络错误请刷新后重试")
								}
							})
							.catch((err)=>{
								this.$store.commit('done')
								this.$toast("网络错误请刷新后重试")
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
			return new Promise((resolve, reject)=>{
				this.$axios.get('user/getUser')
				.then(res=>{
					this.$store.commit('done')
					resolve(res.data.data)
				})
				.catch((err)=>{
					this.$store.commit('done')
					this.$toast("请求超时了请检查网络")
					reject(err)
				})
			})
		}
	},
	async created() {
		const response = await this.getPersonalInfor()
		if(typeof(response.birthday) == 'number'){
			response.birthday = (new Date(response.birthday)).format('yyyy-MM-dd')
		}
		this.$set(this.personalInfor, 'model', response)
	}
}