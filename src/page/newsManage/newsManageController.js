export default {
	data() {
		return {
			newsManage:{
				searchModel:{
					current: 1,
					pageSize: this.pageSize,
					total: 0
				},
				config:{
					noOptions: false,//控制每条数据的操作按钮显示
					noIndex: false,//控制表格的序号显示
					title: '新闻管理列表',//表格标题
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
					name: "内容",
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
				},{
					id: "file",
					name: "文件",
					type: "file",
					hiddenInTable: true,
					important: true,
					createable: true,
					editable: true
				}],
				objects:[],
				options:{
					create:{
						enable: true,
						action: (data)=>{
							console.log(data);
							let formData = new FormData();

							formData.append('title', data.title);
				            formData.append('file', data.file);
				            data.content? formData.append('content', data.content) : null
				            data.status? formData.append('status', data.status) : null
				            data.position? formData.append('position', data.position): null

							this.$store.commit('process')
							return new Promise((resolve, reject)=>{
								this.$axios.post('news/add', formData, {
									headers: {
										'Content-Type': 'multipart/form-data'
									},
									timeout: 30000
								})
								.then((res)=>{
									this.$store.commit('done')
									resolve(res.data)
								})
								.catch((err)=>{
									this.$store.commit('done')
									reject(err)
								})
							})
						}
					},
					detail:{
						enable: true,
						name: "详情",
					},
					edit: {
						enable: true,
						action:(data)=> {
							//异步请求后台
							console.log(data);
							if(!data.url || !data.id){
				            	this.$toast("数据异常请刷新重新尝试")
				            	return 
				            }
							let formData = new FormData();

							formData.append('title', data.title);
				            formData.append('file', data.file);
				            data.content? formData.append('content', data.content) : null
				            data.status? formData.append('status', data.status) : null
				            data.position? formData.append('position', data.position): null

				            formData.append('url', data.url)
				            formData.append('id', data.id)

							this.$store.commit('process')
							return new Promise((resolve, reject)=>{
								this.$axios.post('news/edit', formData, {
									headers: {
										'Content-Type': 'multipart/form-data'
									},
									timeout: 30000
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
					delete:{
						enable: true,
						action:(data)=> {
							//异步请求后台删除
							this.$store.commit('process')
							return new Promise((resolve, reject)=>{
								this.$axios.delete('news/del', {
									params:{
										id: data.id,
										url: data.url
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
		 * 查询轮播列表
		 */
		searchNewsList(searchModel) {
			this.$store.commit('process')
			this.$axios.get('news/selectAll', {
				params: searchModel
			})
			.then((res)=>{
				this.$store.commit('done')
				if(res.data.code === 0){
					this.newsManage.objects = res.data.data.list;
					this.newsManage.searchModel.total = res.data.data.total
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
		this.searchNewsList(this.newsManage.searchModel)
	}
}