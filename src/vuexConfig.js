export default {
	state: {
		showLoading: false,
		user: {},
		userId: null
	},
	mutations:{
		process(state){
			state.showLoading = true;
		},
		done(state){
			state.showLoading = false;
		},
		setUser(state, user){
			state.user = user
			state.userId = user?user.id:null
		}
	}
}