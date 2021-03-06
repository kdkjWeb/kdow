export default {
	data() {
		return {
			examineLog:{
				searchModel:{
					current: 1,
					pageSize: this.pageSize,
					total: 0
				},
				config:{
					noOptions: false,//控制每条数据的操作按钮显示
					noIndex: false,//控制表格的序号显示
					title: '日志查看',//表格标题
				},
				definition:[{
					id: "id",
					name: "编号",
					type: "string"
				},{
					id: "oper",
					name: "操作人",
					type: "string",
					searchable: true
				},{
					id: "cdate",
					name: "操作时间",
					type: "date",
					searchable: true
				},{	
					id: "opName",
					name: "操作名称(方法)",
					type: "string"
				},{
					id: "opDsc",
					name: "操作描述",
					type: "string"
				}],
				objects:[],
				options:{
					detail:{
						enable: true,
						name: "详情"
					},
					search: {
						enable: true
					}
				}
			}
		}
	}, 
	methods:{
		/**
		 * 查询日志信息
		 */
		searchExamineLog(searchModel) {
			this.$store.commit('process')
			this.$axios.get('log/selectAll', {
				params: searchModel
			})
			.then((res)=>{
				console.log(res)
				this.$store.commit('done')
				if(res.data.code === 0){
					this.examineLog.objects = res.data.data.list
					this.examineLog.searchModel.total = res.data.data.total
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
		if(this.$store.state.user.roles != "1") 
			return this.$toast("你没有权限查看")

		this.searchExamineLog(this.examineLog.searchModel)
	}
}