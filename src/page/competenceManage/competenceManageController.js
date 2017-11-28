export default {
	data() {
		return {
			competenceManage:{
				searchModel:{
					current: 1,
					pageSize: this.pageSize,
					total: 0
				},
				config:{
					noOptions: false,//控制每条数据的操作按钮显示
					noIndex: false,//控制表格的序号显示
					title: '权限管理列表',//表格标题
				},
				definition:[{
					id: "name",
					name: "名称",
					type: "string",
					createable: true,
					editable: true,
					important: true
				},{
					id: "type",
					name: "类型",
					type: "select",
					render(data){
						switch(data) {
							case "0":
							return "不知道"
							case "1":
							return "不知道"
							case "2":
							return "菜单"
						}
					},
					config: {
						options:[{
							key: "0",
							label: "不知道"
						},{
							key: "1",
							label: "不知道"
						},{
							key: "2",
							label: "菜单"
						}]
					},
					createable: true,
					editable: true,
					important: true
				},{
					id: "des",
					name: "描述",
					type: "string",
					createable: true,
					editable: true
				},{
					id: "permission",
					name: "权限标识",
					type: "string",
					createable: true,
					editable: true,
					important: true
				}],
				objects:[],
				options:{
					create: {
						enable: true,
						action:(data)=>{
							if(!data.name || !data.permission || !data.type){
								this.$toast("请输入完整信息")
								return
							}
							this.$store.commit('process')
							return new Promise((resolve, reject)=>{
								this.$axios.post('resource/insertResource', data)
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
							if(!data.name || !data.permission || !data.type){
								this.$toast("请输入完整信息")
								return
							}
							this.$store.commit('process')
							return new Promise((resolve, reject)=>{
								this.$axios.post('resource/updateResource', data)
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
								this.$axios.delete('resource/deleteResource', {
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
				}
			}
		}
	},
	methods:{
		/**
		 * 查询权限管理列表
		 */
		searchMompetenceList(searchModel) {
			this.$store.commit('process')
			this.$axios.get('resource/selectResource',{
				params: searchModel
			})
			.then((res)=>{
				this.$store.commit('done')
				if(res.data.code === 0){
					this.competenceManage.objects = res.data.data.list
					this.competenceManage.searchModel.total = res.data.data.total
				}else{
					this.$toast(res.data.msg)
				}
			})
			.catch((err)=>{
				this.$store.commit('done')
				this.$toast("请求超时了请检查网络")
			})
		}
	},
	mounted() {
		if(!this.$store.state.userId) 
			return
		this.searchMompetenceList(this.competenceManage.searchModel)
	}
}