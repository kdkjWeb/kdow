export default {
	data() {
		return {
			softwareManage:{
				searchModel:{
					current: 1,
					pageSize: this.pageSize,
					total: 0
				},
				config:{
					noOptions: false,//控制每条数据的操作按钮显示
					noIndex: false,//控制表格的序号显示
					title: '软件管理列表',//表格标题
				},
				definition:[{
					id: "title",
					name: "名称",
					type: "string",
					important: true,
					editable: true
				},
				{
					id: "icon",
					name: "图标",
					type: "string",
					hiddenInTable: true
				},{
					id: "content",
					name: "描述",
					type: "string",
					editable: true
				},{
					id: "uploadUser",
					name: "上传人",
					type: "string"
				},{
					id: "uploadDate",
					name: "上传时间",
					type: "string"
				},{
					id: "status",
					name: "是否使用",
					type: "select",
					editable: true,
					config: {
						options:[{
							key: 1,
							label: "使用"
						},{
							key: 0,
							label: "待使用"
						}]
					},
					render(data){
						return data?"使用":"未使用"
					}
				},{
					id: "originType",
					name: "类型",
					type: "string"

				},{
					id: "type",
					name: "子类型",
					type: "select",
					config: {
						options:[{
							key: 1,
							label: "游戏类型"
						},{
							key: 2,
							label: "办公类型"
						},{
							key: 3,
							label: "其他"
						}]
					},
					editable: true
				}],
				objects:[],
				options:{
					detail: {
						enable: true,
						action: (data)=>{

						}
					},
					edit: {
						enable: true,
						action: (data)=>{
							if(!data.title){
								this.$toast("请输入软件名称")
								return
							}
							data.newFile = "";
							// console.log(data.id)
							let formData = new FormData()
							formData.append('title', data.title)

							data.content? formData.append('content', data.content) : null
				            data.status? formData.append('status', data.status) : null
				            data.type? formData.append('type', data.type): null
							
							formData.append('id', data.id)

							this.$store.commit('process')
							return new Promise((resolve, reject)=>{
								this.$axios.post('file/update', formData,{
									headers: {
										'Content-Type': 'multipart/form-data'
									}
								})
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
								this.$axios.delete('file/del', {
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
		 * 查询软件管理列表
		 */
		searchSoftwareList(searchModel) {
			this.$store.commit('process')
			this.$axios.get('file/selectAll', {
				params: searchModel
			})
			.then((res)=>{
				console.log(res)
				this.$store.commit('done')
				if(res.data.code === 0){
					this.softwareManage.objects = res.data.data.list;
					this.softwareManage.searchModel.total = res.data.data.total
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
		this.searchSoftwareList(this.softwareManage.searchModel)
	}
}