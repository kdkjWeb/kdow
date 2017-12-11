export default {
	data() {
		return {
			announcementManage:{
				searchModel:{
					current: 1,
					pageSize: this.pageSize,
					total: 0
				},
				config:{
					noOptions: false,//控制每条数据的操作按钮显示
					noIndex: false,//控制表格的序号显示
					title: '公告管理列表',//表格标题
				},
				definition:[{
					id: "title",
					name: "标题",
					type: "string",
					createable: true,
					editable: true,
					searchable: true,
					important: true
				},{
					id: "content",
					name: "公告内容",
					type: "string",
					createable: true,
					editable: true,
					important: true
				},{
					id: "puser",
					name: "发布人",
					type: "string"
				},{
					id: "pdate",
					name: "发布时间",
					type: "date",
					searchable: true
				},{
					id: "status",
					name: "是否使用",
					searchable: true,
					type: "select",
					render(data){
						return data?"使用":"未使用"
					},
					config: {
						options:[{
							key: 0,
							label: "待使用"
						},{
							key: 1,
							label: "使用"
						}]
					},
					createable: true,
					editable: true
				}],
				objects:[],
				options:{
					search: {
						enable: true
					},
					create: {
						enable: true,
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
		 * 查询公告列表
		 */
		searchAnnouncementList(searchModel) {
			this.$store.commit('process')
			this.$axios.get('notice/selectAll', {
				params: searchModel
			})
			.then((res)=>{
				this.$store.commit('done')
				if(res.data.code === 0){
					this.announcementManage.objects = res.data.data.list
					this.announcementManage.searchModel.total = res.data.data.total
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
		this.searchAnnouncementList(this.announcementManage.searchModel)
	}
}