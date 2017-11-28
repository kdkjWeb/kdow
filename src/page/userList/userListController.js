export default {
	data() {
		return {
			userList:{
				searchModel:{
					current: 1,
					pageSize: this.pageSize,
					total: 0
				},
				config:{
					noOptions: false,//控制每条数据的操作按钮显示
					noIndex: false,//控制表格的序号显示
					title: '用户列表',//表格标题
				},
				definition:[{
					id: "username",
					name: "用户名",
					type: "string",
					createable: true,
					editable: true,
					searchable: true,
					important: true
				},{
					id: "name",
					name: "昵称",
					type: "string",
					editable: true,
					important: true
				},{
					id: "birthday",
					name: "生日",
					type: "string"
				},{
					id: "email",
					name: "邮箱",
					type: "string",
				},{
					id: "address",
					name: "地址",
					type: "string"
				},{
					id: "status",
					name: "状态",
					type: "string",
					render(data) {
						return data? '已删除':'正常'
					}
				},{
					id: "phone",
					name: "手机号",
					type: "string"
				},{
					id: "ispart",
					name: "内部与外部",
					type: "string",
					render(data) {
						return data? '外部':'内部'
					}
				}],
				objects:[],
				options:{
					search: {
						enable: true
					},
					create: {
						enable: true,
						action:(data)=>{
							if(!data.username){
								this.$toast("请输入用户名")
							}
							this.$store.commit('process')
							return new Promise((resolve, reject)=>{
								this.$axios.post('user/ininsert', data)
								.then(res =>{
									this.$store.commit('done')
									resolve(res.data)
								}, err =>{
									this.$store.commit('done')
									reject(err)
								})
								.catch(err =>{
									this.$store.commit('done')
									reject(err)
								})
							})
						}
					},
					detail: {
						enable: true,
						action: (data)=>{

						}
					},
					edit: {
						enable: true,
						action: (data)=>{
							if(!data.title || !data.content){
								this.$toast("请输入完整信息")
								return
							}
							this.$store.commit('process')
							return new Promise((resolve, reject)=>{
								this.$axios.post('user/edit', data)
								.then(res=>{
									this.$store.commit('done')
									resolve(res.data)
								}, err =>{
									this.$store.commit('done')
									reject(err)
								})
								.catch(err=>{
									this.$store.commit('done')
									reject(err)
								})
							})
						}
					},
					delete: {
						enable: true,
						action: (data)=>{
							this.$store.commit('process')
							return new Promise((resolve, reject)=>{
								this.$axios.delete('user/del', {
									params:{
										id: data.id
									}
								})
								.then(res=>{
									this.$store.commit('done')
									resolve(res.data)
								}, err=>{
									this.$store.commit('done')
									reject(err)
								})
								.catch((err)=>{
									this.$store.commit('done')
									reject(err)
								})
							}) 
						}
					},
					extraBtn:[{
						name: "分配角色",
						enable(data){
							return data.username === 'admin'?false:true
						},
						action: (data)=>{
							console.log(data)
							this.$store.commit("process")
					    		this.$axios.get('role/selectRoleByUserId', {
									params: {
										userId: data.id
									}
								})
								.then(res=>{
									console.log(res)
									this.$store.commit("done")
									if(res.data.code === 0){
										let currentRoles = ""
										if(res.data.data.length > 0){
											for(let i = 0; i <res.data.data.length ;i++){
												if(!i){
													currentRoles += res.data.data[i].name
												}else{
													currentRoles += "," + res.data.data[i].name
												}
											}
										}else{
											currentRoles = "当前用户暂无角色"
										}
										this.distributeRoleDialog.currentRoles = currentRoles
									}else{
										this.$toast("网络异常请重新尝试")
									}
								})
								.catch(err=>{
									this.$store.commit("done")
									this.$toast("网络异常请重新尝试")
								})

							this.distributeRoleDialog.distributeRoleForm.model = data
							this.distributeRoleDialog.show = true
						}
					}]
				}
			},
			/*分配角色弹出框*/
			distributeRoleDialog:{
				show: false,
				currentRoles: "",
				distributeRoleForm: {
					definition:[{
						id: "muser",
						name: "角色分配",
						type: "ajaxSyncArrInput",
						config: {
							url: 'role/list',
						    key: 'id',
						    label: 'name',
						    params: {
						    	pageSize: this.maxPageSize,
						    	current: 1
						    }
						}
					}],
					model:{}
				}
			}
		}
	}, 
	methods:{
		/**
		 * 查询用户列表
		 */
		searchUserList(searchModel) {
			console.log(searchModel)
			this.$store.commit('process')
			this.$axios.post('user/getUserList',searchModel)
			.then((res)=>{
				this.$store.commit('done')
				if(res.data.code === 0){
					this.userList.objects = res.data.data.list
					this.userList.searchModel.total = res.data.data.total
				}else{
					this.$toast(res.data.msg)
				}
			})
			.catch((err)=>{
				console.log(err)
				this.$store.commit('done')
				this.$toast("请求超时了请检查网络")
			})
		},
		/*分配角色方法*/
		distributeRoleDialogSubmit() {
			let roleStr = ""
			for(let i = 0 ; i < this.distributeRoleDialog.distributeRoleForm.model.muser.length ; i ++){
				if(i){
					roleStr +=  ',' + this.distributeRoleDialog.distributeRoleForm.model.muser[i]
				}else{
					roleStr +=  this.distributeRoleDialog.distributeRoleForm.model.muser[i]
				}
			}
			this.distributeRoleDialog.distributeRoleForm.model.muser = roleStr
			console.log(roleStr)
			//请求后台
			this.$store.commit("process")
			this.$axios.post('user/update', this.distributeRoleDialog.distributeRoleForm.model)
			.then(res =>{
				this.$store.commit("done")
				if(res.data.code === 0){
					this.distributeRoleDialog.show = false
				}else{
					this.$toast("网络异常请重新尝试")
				}
			})
			.catch(err=>{
				this.$store.commit("done")
				this.$toast("网络异常请重新尝试")
			})
		},
		distributeRoleDialogCancel() {
			this.distributeRoleDialog.show = false
		}

	},
	mounted() {
		this.searchUserList(this.userList.searchModel)
	}
}