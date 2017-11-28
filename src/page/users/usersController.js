export default {
	data() {
		return {
			users: {
				definition:[],
				objects: [],
				options:{}
			}
		}
	},
	methods: {
		getUsers() {
			this.$axios.get(this.baseUrl + 'user/getUser',{
				params:{
					userId: "001"
				}
			}).then((res)=>{
				console.log(res);
			})
		}
	},
	mounted() {
		this.getUsers();
	}
}