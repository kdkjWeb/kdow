export default {
	data() {
		return {
			clientHeight: 0,
			clientWidth: 0,
			currentPage: 1,
			headerCss: {
				nav_shadow_bg: 'navShadowBg',
				header_bg: 'headerBg',
				nav_ico_bg: 'navIcoBg'
			},
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
			if(this.currentPage === 1){
				this.headerCss = {
					nav_shadow_bg: 'navShadowBg_2',
					header_bg: 'headerBg_2',
					nav_ico_bg: 'navIcoBg_2'
				}
			}
			this.currentPage ++;
			this.$refs.main_content.style.marginTop = parseInt(this.$refs.main_content.style.marginTop) - 
			   this.clientHeight + 'px';
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
	},
	mounted() {
		this.clientHeight = `${window.screen.availHeight}`;
		this.clientWidth = `${window.screen.availWidth}`;
		// document.body.style.overflow='hidden';
	}
}