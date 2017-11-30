export default {
	data() {
		return {
			searchModel: {
				current: 1,
				pageSize: 4,
				total: 55
			},
			clientWidth: null,
			clientHeight:null,
			hasShown: {
				title: false,
				firstImg: false,
				firstTxt: false,
				secondImg: false,
				secondTxt: false,
				thirdImg: false,
				thirdTxt: false
			},
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
	        let scroll = document.body.scrollTop
	        if(scroll > 163 && !this.hasShown.title){
	        	this.showMainTitle()
	        }
	        if(scroll > 370 && !this.hasShown.firstImg){
	        	this.showFirstLevelImg()
	        }
	        if(scroll > 578 && !this.hasShown.firstTxt){
	        	this.showFirstLevelTxt()
	        }
	        if(scroll > 913 && !this.hasShown.secondImg){
	        	this.showSecondImg()
	        }
	        if(scroll > 1113 && !this.hasShown.secondTxt){
	        	this.showSecondTxt()
	        }
	        if(scroll > 1253 && !this.hasShown.thirdImg){
	        	this.showThirdImg()
	        }
	        if(scroll > 1453 && !this.hasShown.thirdTxt){
	        	this.showThirdTxt()
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
			// this.$refs.news_main.style.marginTop="500px"
		},
		newsMainAfter(){
			
		},


		/* 动画工具方法 */
		init() {
			let ref = this.$refs
			Object.assign(ref.news_banner.style, {
				marginTop: '-600px',
				overflow: 'hidden'
			})
			
			Object.assign(ref.news_main_title.style, {
				opacity: 0,
				marginTop: '100px'
			})

			/* img init */
			Object.assign(ref.mainImg[0].style, {
				opacity: 0,
				marginLeft: '-100px'
			})

			Object.assign(ref.mainImg[1].style, {
				opacity: 0,
				marginLeft: '100px'
			})

			Object.assign(ref.mainImg[2].style, {
				opacity: 0,
				marginLeft: '-100px'
			})

			Object.assign(ref.mainImg[3].style, {
				opacity: 0,
				marginRight: '-100px'
			})

			/* txt init */
			Object.assign(ref.mainTxt[0].style, {
				opacity: 0,
				marginTop: '50px'
			})

			Object.assign(ref.mainTxt[1].style, {
				opacity: 0,
				marginTop: '50px'
			})

			Object.assign(ref.mainTxt[2].style, {
				opacity: 0,
				marginLeft: '100px'
			})

			Object.assign(ref.mainTxt[3].style, {
				opacity: 0,
				marginLeft: '-100px'
			})

			// Object.assign(ref.mainImg0[0].style, {
			// 	opacity: 0
			// })
			console.log(ref.mainTxt)
		},
		showBanner() {
			this.$Velocity(this.$refs.news_banner, {
				marginTop: '0px'
			},{
				duration: 1000,
				easing: [0.085, 0.650, 0.620, 0.995] 
			})
		},
		showMainTitle() {
			this.$Velocity(this.$refs.news_main_title, {
				marginTop: '0px',
				opacity: 1
			},{
				duration: 1000,
				easing: [0.085, 0.650, 0.620, 0.995] 
			})
			this.hasShown.title = true
		},
		showFirstLevelImg() {
			this.$Velocity(this.$refs.mainImg[0], {
				marginLeft: 0,
				opacity: 1
			},{
				duration: 1000,
				easing: [0.085, 0.650, 0.620, 0.995] 
			})
			this.$Velocity(this.$refs.mainImg[1], {
				marginLeft: 0,
				opacity: 1
			},{
				duration: 1000,
				easing: [0.085, 0.650, 0.620, 0.995]  
			})
			this.hasShown.firstImg = true
		},
		showFirstLevelTxt() {
			this.$Velocity(this.$refs.mainTxt[0], {
				marginTop: 0,
				opacity: 1
			},{
				duration: 1000,
				easing: [0.085, 0.650, 0.620, 0.995]  
			})
			this.$Velocity(this.$refs.mainTxt[1], {
				marginTop: 0,
				opacity: 1
			},{
				duration: 1000,
				easing: [0.085, 0.650, 0.620, 0.995]  
			})

			this.hasShown.firstTxt = true
		},
		showSecondImg() {
			this.$Velocity(this.$refs.mainImg[2], {
				marginLeft: 0,
				opacity: 1
			},{
				duration: 1000,
				easing: [0.085, 0.650, 0.620, 0.995]  
			})

			this.hasShown.secondImg = true
		},
		showSecondTxt() {
			this.$Velocity(this.$refs.mainTxt[2], {
				marginLeft: 0,
				opacity: 1
			},{
				duration: 1000,
				easing: [0.085, 0.650, 0.620, 0.995]  
			})

			this.hasShown.secondTxt = true
		},
		showThirdImg() {
			this.$Velocity(this.$refs.mainImg[3], {
				marginRight: 0,
				opacity: 1
			},{
				duration: 1000,
				easing: [0.085, 0.650, 0.620, 0.995]  
			})

			this.hasShown.thirdImg = true
		},
		showThirdTxt() {
			this.$Velocity(this.$refs.mainTxt[3], {
				marginLeft: 0,
				opacity: 1
			},{
				duration: 1000,
				easing: [0.085, 0.650, 0.620, 0.995]  
			})

			this.hasShown.thirdTxt = true
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

		this.init()
		this.showBanner()
	},
	beforeDestroy(){
		window.onresize = ""
		window.removeEventListener('scroll',this.menu);
	}
}