export default {
	data() {
		return {
			scroll:"",
			searchModel: {
				current: 1,
				pageSize: 4,
				total: 55
			},
			clientWidth: null,
			clientHeight:null,
			leftRight1:false,
			leftRight2:false,
			leftRight3:false,
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
		menu() {
	        this.scroll = document.body.scrollTop;
	        if(this.scroll > this.clientHeight-350) {
	        	this.$refs.news_main.style.marginTop="0"
				this.$refs.news_main.style.transition="all .5s linear"
	        }
	        if(this.scroll > this.clientHeight-280) {
	        	this.leftRight1 = true;
	        }
	        if(this.scroll -200 > this.clientHeight) {
	        	this.leftRight2 = true;
	        }
	        if(this.scroll - 800 >this.clientHeight) {
	        	this.leftRight3 = true;
	        }
	        
      	},
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
		},
		newsMainBefore(){
			this.$refs.news_main.style.marginTop="500px"
		},
		newsMainAfter(){
			
		}
	},
	mounted() {
		this.clientWidth = `${document.body.clientWidth}`;
		this.clientHeight = `${document.body.clientHeight}`;

		window.onresize = ()=>{
			this.clientWidth = `${document.body.clientWidth}`;
		}
		this.getNewsService();
		this.newsMainBefore();
		window.addEventListener('scroll', this.menu);
	},
	beforeDestroy(){
		window.removeEventListener('scroll',this.menu);
	}
}