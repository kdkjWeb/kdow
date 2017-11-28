
export default{
	data() {
		return {
			tableTest:{
				config: {
					noOptions: false,//控制每条数据的操作按钮显示
					noIndex: false,//控制表格的序号显示
					title: 'KdowTestTable',//表格标题
				},
				definition:[{
					id: "userName",
					name: "用户名",
					type: "string",
					hiddenInTable: false,//控制在表格中的显示与否
				},{
					id: "role",
					name: "角色",
					type: "select",
					config: {
						options:[{
							key: "admin",
							label: "管理员"
						},{
							key: "inCount",
							label: "内部用户"
						},{
							key: "outCount",
							label: "外部用户"
						}]
					},
					render(data){
						if(data == 'admin'){
							return '管理员'
						}else{
							return '傻逼'
						}
					}
				},{
					id: "lastLoginDate",
					name: "最后登录时间",
					type: "string",
					hiddenInTable: true
				},{
					id: "telphone",
					name: "联系电话",
					type: "string",
					editable: true,
					hiddenInTable: false
				},{
					id: "state",
					name: "账户状态",
					type: "string",
					render(data){
						return data === 'disabled'? '禁用':'激活'
					},
				}],
				objects:[],
				options:{
					detail:{
						enable: true,
						name: "详情",
					},
					edit: {
						enable: true,
						edit:(data)=> {
							//异步请求后台
							this.$toast({
								message: "程序员打酱油去了..."
							})
							return true;
						}
					},
					delete:{
						enable: true,
						delete:(data)=> {
							//异步请求后台删除
							this.$alert("程序员买醋去了...")
							return true;
						}
					}
				}
			}
		}
	},
	methods: {
		getUsers() {
			this.$axios.get(this.baseUrl + 'user/getUser', {
				params: {
					userId: '001'
				}
			}).then((res)=>{
				console.log(res);
			})
		}
	},
	mounted() {
		this.getUsers();

		// this.$alert("程序员买醋去了...")
		// this.$toast({message: '测试依稀', position: 'top'})
		this.$axios.get('/static/tableTest.json').then((res)=>{
			if(res.status === 200){
				this.$set(this.tableTest, 'objects', res.data);
			}
		})
	}
}