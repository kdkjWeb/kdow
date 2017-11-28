export default {
	data() {
		return {
			searchModel: {
				current: 1,
				pageSize: 4,
				total: 55
			},
			clientWidth: null,
			newsBottomInfor:[{
				title: "【方式的转变】害怕阅读的人。一跟他们谈话，我就像一个透明人",
				description: '无论什么时代，最大的"风波"还是自己，用阅读和经历，成就知识和智慧',
				comments: '阅读到悦读',
				imgUrl: '/static/news/news_btm1.png'
			},{
				title: "【方式的转变】害怕阅读的人。一跟他们谈话，我就像一个透明人",
				description: '无论什么时代，最大的"风波"还是自己，用阅读和经历，成就知识和智慧',
				comments: '阅读到悦读',
				imgUrl: '/static/news/news_btm2.png'
			},{
				title: "【方式的转变】害怕阅读的人。一跟他们谈话，我就像一个透明人",
				description: '无论什么时代，最大的"风波"还是自己，用阅读和经历，成就知识和智慧',
				comments: '阅读到悦读',
				imgUrl: '/static/news/news_btm3.png'
			}],
			newsMain: [{
				title: "【方式的转变】害怕阅读的人。一跟他们谈话，我就像一个透明人，一跟他们谈话，我就像一个透明人",
				description: '无论什么时代，最大的"风波"还是自己，用阅读和经历，成就知识和智慧，最大的"风波"还是自己，用阅读和经历，成就知识和智慧',
				comments: '阅读到悦读',
				imgUrl: '/static/news/1.png'
			},{
				title: "【方式的转变】害怕阅读的人。一跟他们谈话，我就像一个透明人，一跟他们谈话，我就像一个透明人",
				description: '无论什么时代，最大的"风波"还是自己，用阅读和经历，成就知识和智慧，最大的"风波"还是自己，用阅读和经历，成就知识和智慧',
				comments: '阅读到悦读',
				imgUrl: '/static/news/2.png'
			},{
				title: "【方式的转变】害怕阅读的人。一跟他们谈话，我就像一个透明人，一跟他们谈话，我就像一个透明人",
				description: '无论什么时代，最大的"风波"还是自己，用阅读和经历，成就知识和智慧，最大的"风波"还是自己，用阅读和经历，成就知识和智慧',
				comments: '阅读到悦读',
				imgUrl: '/static/news/3.png'
			},{
				title: "【方式的转变】害怕阅读的人。一跟他们谈话，我就像一个透明人，一跟他们谈话，我就像一个透明人",
				description: '无论什么时代，最大的"风波"还是自己，用阅读和经历，成就知识和智慧，最大的"风波"还是自己，用阅读和经历，成就知识和智慧',
				comments: '阅读到悦读',
				imgUrl: '/static/news/4.png'
			}]
		}
	},
	methods:{
		getNewsService() {
			console.log("分页获取新闻资讯");
		},
		previousPage() {
			if(this.searchModel.currentPage == 1){
				return;
			}
			this.searchModel.currentPage --;
		},
		nextPage() {
			if(this.searchModel.currentPage == Math.ceil(this.searchModel.total/4)){
				return;
			}
			this.searchModel.currentPage ++;
		},
		jumpPage(page) {
			this.searchModel.currentPage = parseInt(page);
		}
	},
	mounted() {
		this.clientWidth = `${document.body.clientWidth}`;
		window.onresize = ()=>{
			this.clientWidth = `${document.body.clientWidth}`;
		}
		this.getNewsService();
	}
}