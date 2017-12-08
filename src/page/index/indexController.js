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
			// 执行当前页的离开动画,
			this.pageLeaveAnimating(this.currentPage)

			//页码+1
			this.currentPage ++;

			//初始化下一页的动画效果
			this.pageAnimationInit(this.currentPage)
			
			this.$Velocity(this.$refs.main_content, {
				marginTop: parseInt(this.$refs.main_content.style.marginTop) - this.clientHeight + 'px'
			},{
				duration: 1000,
				easing: "ease-in-out",
				complete:()=>{
					//执行当前页的进入动画
					this.pageEnterAnimating(this.currentPage)
				}
			})
		},
		prePage() {
			if(this.currentPage === 1){
				this.headerCss = {
					nav_shadow_bg: 'navShadowBg',
					header_bg: 'headerBg',
					nav_ico_bg: 'navIcoBg'
				}
			}

			// 执行当前页的离开动画,
			this.pageLeaveAnimating(this.currentPage)

			//页码-1
			this.currentPage --;

			//初始化上一页的动画效果
			this.pageAnimationInit(this.currentPage)

			this.$Velocity(this.$refs.main_content, {
				marginTop: parseInt(this.$refs.main_content.style.marginTop) +
				 parseInt(this.clientHeight) + 'px'
			},{
				duration: 1000,
				easing: "ease-in-out",
				complete:()=>{
					//执行当前页的进入动画
					this.pageEnterAnimating(this.currentPage)
				}
			})
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

			//执行当前页的离开动画
			this.pageLeaveAnimating(this.currentPage)

			//页码赋值
			this.currentPage = index

			//初始化下一页的动画效果
			this.pageAnimationInit(this.currentPage)

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
			this.isScrolling = true
			this.$Velocity(this.$refs.main_content, {
				marginTop: - this.clientHeight*index + 'px'
			},{
				duration: 1000,
				easing: "ease-in-out",
				complete:()=>{
					//执行页面的进入动画
					this.pageEnterAnimating(index)
				}
			})
		},

		/* 滚动方法 */
		scrollFunc() {
			if(this.$refs.main.scrollTop > 10){
				this.$refs.main.scrollTop = 10;
				if(!this.isScrolling && this.currentPage < 4){
					this.isScrolling = true
					this.nextPage()
				}
			}else if(this.$refs.main.scrollTop < 10){
				this.$refs.main.scrollTop = 10;
				if(!this.isScrolling && this.currentPage > 0){
					this.isScrolling = true
					this.prePage()
				}
			}
		},


		/*页面动画*/
		
		//进入动画
		pageEnterAnimating(index) {
			if(index == 2){
				this.pageThreeEnter()
			}else if(index == 3){
				this.pageFourEnter()
			}else{
				this.isScrolling = false
			}
		},
		//离开动画
		pageLeaveAnimating(index){

			if(index == 2){
				this.pageThreeLeave()
			}else if(index == 3){
				this.pageFourLeave()
			}
		},
		//初始化动画
		pageAnimationInit(index){

			if(index == 2){

				this.pageThreeInit()
			}else if(index == 3){
				this.pageFourInit()
			}
		},


		pageThreeInit() {
			const refs = this.$refs

			Object.assign(refs.page3_left.style, {
				opacity: 1
			})
			Object.assign(refs.page3_right.style, {
				opacity: 1
			})

			Object.assign(refs.page3_human.style, {
				right: '35%',
				opacity: 0
			})
			Object.assign(refs.page3_left_title.style, {
				right: '35%',
				opacity: 0
			})
			
			
			Object.assign(refs.page3_rectangle.style, {
				bottom: '-30%',
				opacity: 0
			})
			Object.assign(refs.page3_left_content.style, {
				right: '35%',
				opacity: 0
			})


			Object.assign(refs.page3_right_img.style, {
				position: 'relative',
				left: '35%',
				opacity: 0
			})
			Object.assign(refs.page3_right_content.style, {
				left: '35%',
				opacity: 0
			})
			
			Object.assign(refs.page3_right_txt.style, {
				left: '35%',
				opacity: 0
			})

			Object.assign(refs.page3_right_topBtn.style, {
				left: '90%',
				opacity: 0
			})
			Object.assign(refs.page3_right_bottomBtn.style, {
				left: '85%',
				opacity: 0
			})
			Object.assign(refs.page3_left_btn.style, {
				right: '5%',
				opacity: 0
			})

		},
		pageThreeEnter() {
			const _velocity = this.$Velocity,
				  _refs = this.$refs

		    _velocity(_refs.page3_human, {
		    	right: '0px',
				opacity: 1
		    },{
		    	duration: 1000,
		    	easing: [0.105, 0.535, 0.445, 0.995]
		    })
		    _velocity(_refs.page3_right_img, {
		    	left: '0px',
				opacity: 1
		    },{
		    	duration: 1000,
		    	easing: [0.105, 0.535, 0.445, 0.995]
		    })

		    _velocity(_refs.page3_right_content, {
		    	left: '0px',
				opacity: 1
		    },{
		    	duration: 1000,
		    	delay: 300,
		    	easing: [0.105, 0.535, 0.445, 0.995]
		    })
		    _velocity(_refs.page3_rectangle, {
		    	bottom: '-15%',
				opacity: '0.6'
		    },{
		    	duration: 1000,
		    	delay: 300,
		    	easing: [0.105, 0.535, 0.445, 0.995]
		    })

		    _velocity(_refs.page3_left_title, {
		    	right: '0px',
				opacity: 1
		    },{
		    	duration: 1000,
		    	delay: 1100,
		    	easing: [0.105, 0.535, 0.445, 0.995]
		    })
		    _velocity(_refs.page3_right_txt, {
		    	left: '0px',
				opacity: 1
		    },{
		    	duration: 1000,
		    	delay: 1100,
		    	easing: [0.105, 0.535, 0.445, 0.995]
		    })
		    _velocity(_refs.page3_left_content, {
		    	right: '0px',
				opacity: 1
		    },{
		    	duration: 1000,
		    	delay: 1600,
		    	easing: [0.105, 0.535, 0.445, 0.995]
		    })

		    _velocity(_refs.page3_right_topBtn, {
		    	left: '80%',
				opacity: 1
		    },{
		    	duration: 400,
		    	delay: 2300,
		    	easing: [0.105, 0.535, 0.445, 0.995]
		    })
		    _velocity(_refs.page3_right_bottomBtn, {
		    	left: '80%',
				opacity: 1
		    },{
		    	duration: 400,
		    	delay: 2300,
		    	easing: [0.105, 0.535, 0.445, 0.995]
		    })
		    _velocity(_refs.page3_left_btn, {
		    	right: '0px',
				opacity: 1
		    },{
		    	duration: 400,
		    	easing: [0.105, 0.535, 0.445, 0.995],
		    	delay: 2300,
		    	complete: ()=>{
		    		this.isScrolling = false
		    	}
		    })   
		},

		pageThreeLeave() {
			const _velocity = this.$Velocity,
				  _refs = this.$refs

			_velocity(_refs.page3_left, {
				opacity: 0
			},{
				duration:500
			})

			_velocity(_refs.page3_right, {
				opacity: 0
			},{
				duration:500
			})
		},

		pageFourInit() {
			const _refs = this.$refs,
			     _velocity = this.$Velocity

			_velocity(_refs.page4_main, {
				opacity: 1
			})

			_velocity(_refs.page4_logo, {
				opacity: 0,
				rotateZ: '0deg'
			})

			_velocity(_refs.page4_topDescription, {
				top: '15%',
				opacity: 0
			})

			_velocity(_refs.page4_topHg, {
				top: '15%',
				opacity: 0
			})


			Object.assign(_refs.page4_title.style, {
				top: '15%',
				opacity: 0
			})

			Object.assign(_refs.page4_about.style, {
				top: '15%',
				opacity: 0
			})

			Object.assign(_refs.page4_desciption.style, {
				top: '15%',
				opacity: 0
			})

			Object.assign(_refs.page4_moreBtn.style, {
				top: '15%',
				opacity: 0
			})
		},

		pageFourEnter() {
			const _velocity = this.$Velocity,
				  _refs = this.$refs

		    _velocity(_refs.page4_logo, {
		    	rotateZ: '360deg',
		    	opacity: 1
		    },{
		    	duration: 800,
		    	easing: [0.105, 0.535, 0.445, 0.995]
		    })

		    _velocity(_refs.page4_topDescription, {
				top: '0px',
				opacity: 1
			},{
				duration: 800,
				delay: 300,
		    	easing: [0.105, 0.535, 0.445, 0.995]
			})

			_velocity(_refs.page4_topHg, {
				top: '0px',
				opacity: 1
			},{
				duration: 800,
				delay: 500,
		    	easing: [0.105, 0.535, 0.445, 0.995]
			})

		    _velocity(_refs.page4_title, {
		    	top: '0px',
		    	opacity: 1
		    },{
		    	duration: 800,
		    	delay: 700,
		    	easing: [0.105, 0.535, 0.445, 0.995]
		    })

		    _velocity(_refs.page4_about, {
		    	top: '0px',
		    	opacity: 1
		    },{
		    	duration: 800,
		    	delay: 900,
		    	easing: [0.105, 0.535, 0.445, 0.995]
		    })

		    _velocity(_refs.page4_desciption, {
		    	top: '0px',
		    	opacity: 1
		    },{
		    	duration: 800,
		    	delay: 1100,
		    	easing: [0.105, 0.535, 0.445, 0.995]
		    })

		    _velocity(_refs.page4_moreBtn, {
		    	top: '0px',
		    	opacity: 1
		    },{
		    	duration: 800,
		    	delay: 1200,
		    	easing: [0.105, 0.535, 0.445, 0.995],
		    	complete: ()=>{
		    		this.isScrolling = false
		    	}
		    })
		},

		pageFourLeave() {
			this.$Velocity(this.$refs.page4_main, {
				opacity: 0
			},{
				duration: 500
			})
		}



	},
	mounted() {
		this.clientHeight = `${document.body.clientHeight}`;
		this.clientWidth = `${document.body.clientWidth}`;

		this.$refs.main.scrollTop = 10;
		this.$refs.main.style.marginTop = '10px'

		// document.body.style.overflow='hidden';
	}
}