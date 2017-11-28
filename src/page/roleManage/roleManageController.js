export default {
	data() {
		return {
			roleManage:{
				searchModel:{
					current: 1,
					pageSize: this.pageSize,
					total: 0
				},
				config:{
					noOptions: false,//控制每条数据的操作按钮显示
					noIndex: false,//控制表格的序号显示
					title: '角色管理列表',//表格标题
				},
				definition:[{
					id: "name",
					name: "名称",
					type: "string",
					important: true,
					createable: true,
					editable: true
				},{
					id: "description",
					name: "描述",
					type: "string",
					createable: true,
					editable: true
				},{
					id: "state",
					name: "状态",
					type: "string",
					render(data){
						return data?"禁用":"启用"
					}
				}],
				objects:[],
				options:{
					create: {
						enable: true,
						action:(data)=>{
							if(!data.name){
								this.$toast("请输入角色名")
								return
							}
							this.$store.commit('process')
							return new Promise((resolve, reject)=>{
								this.$axios.post('role/add', data)
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
					edit: {
						enable: true,
						action: (data)=>{
							if(!data.name){
								this.$toast("请输入角色名")
								return 
							}
							this.$store.commit('process')
							return new Promise((resolve, reject)=>{
								this.$axios.post('role/edit', data)
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
								this.$axios.delete('role/delete', {
									params:{
										roleId: data.id
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
						name: "分配权限",
						enable(data) {
							return data.name === 'admin'?false:true
						},
						action: (data)=>{
							console.log(data.sn)
							let snArr = data.sn.split(','),
							    competences = ""
							for(let i = 0 ; i <  snArr.length ; i++){
							    this.$store.commit("process")
					    		this.$axios.get('resource/selectByPrimaryKey', {
									params: {
										id: snArr[i]
									}
								})
								.then(res=>{
									if(res.data.code === 0){
										if(!i){
											competences += res.data.data.name
										}else{
											competences += "," + res.data.data.name
										}
										if(i == snArr.length - 1){
											this.$store.commit("done")
											console.log(competences)
											this.distributeRoleDialog.currentCompetences = competences
										}
									}else{
										this.$toast("网络异常请重新尝试")
									}
								})
								.catch(err=>{
									this.$store.commit("done")
									this.$toast("网络异常请重新尝试")
								})
							}
							
							this.distributeRoleDialog.show = true
							this.distributeRoleDialog.distributeRoleForm.model = data
						}
					}]
				}
			},
			/*分配权限弹出框*/
			distributeRoleDialog:{
				show: false,
				currentCompetences: "",
				distributeRoleForm: {
					definition:[{
						id: "sn",
						name: "权限分配",
						type: "ajaxSyncArrInput",
						config: {
							url: 'resource/selectResource',
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
		 * 查询角色列表
		 */
		searchRoleList(searchModel) {
			this.$store.commit('process')
			this.$axios.get('role/list',{
				params:searchModel
			})
			.then((res)=>{
				this.$store.commit('done')
				if(res.data.code === 0){
					this.roleManage.objects = res.data.data.list
					this.roleManage.searchModel.total = res.data.data.total
				}else{
					this.$toast(res.data.msg)
				}
			})
			.catch((err)=>{
				this.$store.commit('done')
				this.$toast("请求超时了请检查网络")
			})
		},
		/*角色分配弹出框方法*/
		distributeRoleDialogSubmit() {
			let str = ""
			for(let i = 0 ; i < this.distributeRoleDialog.distributeRoleForm.model.sn.length ; i ++){
				if(i){
					str +=  ',' + this.distributeRoleDialog.distributeRoleForm.model.sn[i]
				}else{
					str +=  this.distributeRoleDialog.distributeRoleForm.model.sn[i]
				}
			}
			this.distributeRoleDialog.distributeRoleForm.model.sn = str
			//请求后台
			this.$store.commit("process")
			this.$axios.post('role/edit', this.distributeRoleDialog.distributeRoleForm.model)
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
		},

		/*工具方法*/
		searchCompetences(arr) {
			let snArr = arr.split(",")
			for(let value of snArr){
			    this.$store.commit("process")
	    		this.$axios.get('resource/selectByPrimaryKey', {
					params: {
						id: value
					}
				})
				.then(res=>{
					console.log(res)
					this.$store.commit("done")
					// resolve(res.data)
				})
				.catch(err=>{
					this.$store.commit("done")
					this.$toast("网络异常请重新尝试")
					// reject(err)
				})
			}
		}

	},
	mounted() {
		this.searchRoleList(this.roleManage.searchModel)
	}
}