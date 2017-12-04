export default{
	data() {
		return {
			isActive:false,
			isActiveTwo:false,
			isActiveFive:false,
			showLoginDialog: false,
			clientHeight: 0,
			clientWidth: 0,
			currentPage: 0,
			isScrolling: false,
			headerCss: {
				nav_shadow_bg: 'navShadowBg',
				header_bg: 'headerBg',
				nav_ico_bg: 'navIcoBg'
			},
			rightNav: [{
				title: "视频 ———"
			},{
				title: "作品 ———"
			},{
				title: "公告 ———"
			},{
				title: "关于我们 —"
			},{
				title: "联系我们 —"
			},],
			carousel: {
				currentPage: 1,
				definition:[{
					img: '/static/index/2/1.jpg',
					workName: '作品名称',
					description: '作品简介康师傅电话客服看到内UC护理费那两件东西看着你开',
					ad: '广告词什么的'
				},{
					img: '/static/index/2/2.jpg',
					workName: '作品名称',
					description: '作品简介康师傅电话客服看到内UC护理费那两件东西看着你开',
					ad: '广告词什么的'
				},{
					img: '/static/index/2/3.jpg',
					workName: '作品名称',
					description: '作品简介康师傅电话客服看到内UC护理费那两件东西看着你开',
					ad: '广告词什么的'
				},{
					img: '/static/index/2/1.jpg',
					workName: '作品名称',
					description: '作品简介康师傅电话客服看到内UC护理费那两件东西看着你开',
					ad: '广告词什么的'
				},{
					img: '/static/index/2/2.jpg',
					workName: '作品名称',
					description: '作品简介康师傅电话客服看到内UC护理费那两件东西看着你开',
					ad: '广告词什么的'
				},{
					img: '/static/index/2/3.jpg',
					workName: '作品名称',
					description: '作品简介康师傅电话客服看到内UC护理费那两件东西看着你开',
					ad: '广告词什么的'
				}]
			},
		}
	},
	methods:{
		nextPage() {
			if(this.currentPage === 0){
				this.headerCss = {
					nav_shadow_bg: 'navShadowBg_2',
					header_bg: 'headerBg_2',
					nav_ico_bg: 'navIcoBg_2'
				}
			}
			console.log(this.currentPage);
			this.currentPage ++;
			this.$Velocity(this.$refs.main_content, {
				marginTop: parseInt(this.$refs.main_content.style.marginTop) - this.clientHeight + 'px'
			},{
				duration: 1000,
				easing: "ease-in-out",
				complete:()=>{
					this.isScrolling = false
				}
			})
			this.jumpTo(this.currentPage);
		},
		prevPage(){
			if(this.currentPage === 0){
				this.headerCss = {
					nav_shadow_bg: 'navShadowBg_2',
					header_bg: 'headerBg_2',
					nav_ico_bg: 'navIcoBg_2'
				}
			}
			console.log(this.currentPage);
			this.currentPage --;
			this.$Velocity(this.$refs.main_content, {
				marginTop: parseInt(this.$refs.main_content.style.marginTop) + parseInt(this.clientHeight) + 'px'
			},{
				duration: 1000,
				easing: "ease-in-out",
				complete:()=>{
					this.isScrolling = false
				}
			})
			this.jumpTo(this.currentPage);
		},
		nextCarousel() {
			if(this.carousel.currentPage < 4){
				this.$refs.main_carousel.style.marginLeft = 
				parseInt(this.$refs.main_carousel.style.marginLeft) -375 + 'px';
				this.carousel.currentPage++;
			}else{
				this.carousel.currentPage = 1;
				this.$refs.main_carousel.style.marginLeft = 0;
			}
		},
		preCarousel() {
			if(this.carousel.currentPage > 1){
				this.$refs.main_carousel.style.marginLeft = 
				parseInt(this.$refs.main_carousel.style.marginLeft) +375 + 'px';
				this.carousel.currentPage --;
			}else{
				this.carousel.currentPage = 4;
				this.$refs.main_carousel.style.marginLeft = -1125 + 'px';
			}
		},
		enterRightNav(index){
			this.$set(this.rightNav[index], 'showTxt', true)
		},
		leaveRightNav(index){
			this.$set(this.rightNav[index], 'showTxt', false)
		},
		jumpTo(index){
			this.currentPage = index;
			if(this.currentPage > 0){
				this.headerCss = {
					nav_shadow_bg: 'navShadowBg_2',
					header_bg: 'headerBg_2',
					nav_ico_bg: 'navIcoBg_2'
				}
			}else{
				this.headerCss = {
					nav_shadow_bg: 'navShadowBg',
					header_bg: 'headerBg',
					nav_ico_bg: 'navIcoBg'
				}
			}
			this.$refs.main_content.style.marginTop =  - this.clientHeight*index + 'px';
			if(index == 2){
				this.isActive=true
			}else{
				this.isActive=false
			}
			if(index == 3){
				this.isActiveTwo=true
			}else{
				this.isActiveTwo=false
			}
			if(index == 4){
				this.isActiveFive=true
			}else{
				this.isActiveFive=false
			}
		},

		/* 滚动方法 */
		scrollFunc() {
			if(!this.isScrolling) {
				if(this.currentPage < 4 && this.$refs.main.scrollTop >= 1){
					this.$refs.main.scrollTop = 1;
					this.isScrolling = true
					this.nextPage()
				}else if(this.currentPage > 0 && this.$refs.main.scrollTop < 1){
					this.$refs.main.scrollTop = 1;
					this.isScrolling = true
					this.prevPage();
				}
						
			}


		}



	},
	mounted() {
		this.clientHeight = `${document.body.clientHeight}`;
		this.clientWidth = `${document.body.clientWidth}`;

		console.log(this.$refs.main)
		// document.body.style.overflow='hidden';
	}
}