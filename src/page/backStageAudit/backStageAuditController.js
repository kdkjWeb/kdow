export default {
	data() {
		return {
			backStageAudit:{
				searchModel:{
					current: 1,
					pageSize: this.pageSize,
					total: 0
				},
				config:{
					noOptions: true,//控制每条数据的操作按钮显示
					noIndex: false,//控制表格的序号显示
					title: '后台审核列表',//表格标题
				},
				definition:[
				// {
				// 	id: "id",
				// 	name: "编号",
				// 	type: "string",
				// },
				{
					id: "cuser",
					name: "创建人",
					type: "string",
				},{
					id: "cdate",
					name: "创建时间",
					type: "string"
				},{
					id: "verifyDate",
					name: "审核时间",
					type: "date",
				},{
					id: "verifyUser",
					name: "审核人",
					type: "string"
				},{
					id: "status",
					name: "状态(结果)",
					type: "string"
				},{
					id: "comment",
					name: "批注",
					type: "string"
				}],
				objects:[],
				options:{
					create: {
						// enable: true,
						action:(data)=>{
							if(!data.title || !data.content){
								this.$toast("请输入完整信息")
							}
							this.$store.commit('process')
							return new Promise((resolve, reject)=>{
								this.$axios.post('notice/add', data)
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
								this.$axios.post('notice/edit', data)
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
								this.$axios.delete('notice/del', {
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
					}
				}
			}
		}
	},
	methods:{
		/**
		 * 查询后台审核列表
		 */
		searchBackStageAuditList(searchModel) {
			this.$store.commit('process')
			this.$axios.get('verify/select', {
				params: searchModel
			})
			.then((res)=>{
				this.$store.commit('done')
				if(res.data.code === 0){
					this.backStageAudit.objects = res.data.data
					this.backStageAudit.searchModel.total = res.data.data.total
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
	},
	mounted() {
		this.searchBackStageAuditList(this.backStageAudit.searchModel)
	}
}