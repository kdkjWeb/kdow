<template>
<header class="header col-md-12 col-sm-12 col-xs-12 noPadding">
	<router-link to="/" class="nav_img">
		<img src="/static/index/1/logo.png" >
	</router-link>
	<div class="navbar-header">
		<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#kdow-index-navbar" aria-expanded="false" aria-controls="kdow-index-navbar">
			<span class="sr-only" >Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
	</div>
	<div id="kdow-index-navbar" class="collapse navbar-collapse text-center">
		<ul class="nav navbar-nav navbar-right">
			<li v-for="(nav, index) in nav_li"
				:key="nav.title"
				@mouseenter="showNavChild(index)"
				@mouseleave="hideNavChild(index)">
				<router-link :to="nav.link">
				<span v-text="nav.title"></span>
				<img class="nav_hover_bg" style="left: 0px" src="/static/index/1/nav_bg.png"/>
				</router-link>
				<transition name="nav_children_fade">
					<ul class="nav_children" v-if="nav.showChild && nav.children && nav.children.length > 0">
						<li v-for="(child, index) in nav.children"
							:key="child.title"
							:style="{
							'border-bottom': index < nav.children.length - 1?'1px solid #ccc':''
							}">
							<router-link :to="child.link">
							<span v-text="child.title"></span>
							</router-link>
							
						</li>
						<li class="nav_children_shadow" 
							:class="
								css.nav_shadow_bg || 'nav_shadow_bg'
							"></li>
						
					</ul>
				</transition>
			</li>
			<li class="nav_search" style="padding:7.5px 0;width:auto;">
				<router-link to="" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
				<img src="/static/index/1/search_btn.png">
				</router-link>
				<div class="dropdown-menu nav_search_div">
					<div class="nav_search_ico" :class="css.nav_ico_bg || 'nav_children_ico_defaultBg'"></div>
					<div class="nav_search_input col-xs-12">	
						<input class="col-xs-10" type="text" placeholder="请输入..." />
						<button class="col-xs-2"></button>
					</div>
					<div class="nav_search_shadow"
					:class="css.nav_shadow_bg || 'nav_shadow_bg'"></div>
				</div>
			</li>
			<li class="nav_user text-center" style="padding:2.5px 0;width:auto; margin-right:80px">
				<router-link to="" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
				<img src="/static/index/1/user_btn.png" @click="isNeedToLogin">
				</router-link>
				<ul class="dropdown-menu" style="border:none" v-if="false">
					<li style="width:0; height:0;" class="nav_user_ico"
					:class="css.nav_ico_bg || 'nav_children_ico_defaultBg'"></li>
					<li class="text-left nav_user_link" style="padding: 0 10px;"><router-link to="/" style="border-bottom:1px solid #ccc;">
						<img src="/static/index/1/1_ico.png">
						<span>我的作品</span>
					</router-link></li>
					<li class="text-left nav_user_link" style="padding: 0 10px"><router-link to="/" style="border-bottom:1px solid #ccc;">
						<img src="/static/index/1/2_ico.png">
						<span>我的资料</span>
					</router-link></li>
					<li class="text-left nav_user_link" style="padding: 0 10px"><router-link to="/">
						<img src="/static/index/1/3_ico.png">
						<span>退出</span>
					</router-link></li>
					<li class="nav_user_shadow"
					:class="css.nav_shadow_bg || 'nav_shadow_bg'"></li>
				</ul>
			</li>
		</ul>
	</div>
	<div class="header_shadow" :class="css.header_bg || 'header_bg'"></div>
</header>
</template>

<script>
export default {
	data() {
		return {
			nav_li:[{
				link: "/",
				title: "首页"
			},{
				link: "/productShow",
				title: "作品",
				children:[{
					title: "PC端",
					link: "/"
				},{
					title: "APP",
					link: "/"
				}]
			},{
				link: "/news",
				title: "活动中心"
			},{
				link: "/aboutUs",
				title: "关于我们"
			}]
		}
	},
	props: {
		css:{
			type: Object,
			default() {
				return {
					nav_shadow_bg: null,
					header_bg: null,
					nav_ico_bg: null
				}
			}
		}
	},
	methods:{
		showNavChild(index) {
			this.$set(this.nav_li[index],'showChild', true)
		},
		hideNavChild(index) {
			this.$set(this.nav_li[index],'showChild', false)
		},
		isNeedToLogin() {
			// 检测用户是否登录, 登录则显示下方ul, 未登录则显示登录弹窗.
			this.$emit('isNeedToLogin', true);//需要登录
		}
	}
}
</script>


<style scoped="">
header{
	height:  75px;
	position: absolute;
	top: 0;
	left:  0;
	line-height: 70px;
	transition: all .5s;
}
.header_shadow{
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	z-index: -5;
}
header .nav_img{
	position: absolute;
	z-index:  2;
	left: 80px;
}
.navbar-header span{
	background-color: #fff;
}
.navbar-nav li{
	padding: 12.5px 10px;
	width:  120px;
}
.navbar-nav li a{
	color: #fff;
	transition: all .3s;
	-moz-transition: all .3s; /* Firefox 4 */
	-webkit-transition: all .3s; /* Safari 和 Chrome */
	-o-transition: all .3s; /* Opera */
}
.nav_hover_bg{
	position: absolute;
	bottom: 7px;
	opacity: 0;
	transition:  all .3s;
	-moz-transition: all .3s; /* Firefox 4 */
	-webkit-transition: all .3s; /* Safari 和 Chrome */
	-o-transition: all .3s; /* Opera */
}
.nav_hover_color{
	color: #fff;
}
.navbar-nav li:hover .nav_hover_bg{
	opacity: 1;
}
.navbar-nav li:hover a{
	color: #71cfff;
}
.navbar-nav li a:focus{
	background: none;
}
.navbar-nav li a:hover{
	background: none;
}

.open a{
	background: none;
}

.nav_children{
	/*background-color: #999;*/
	/*opacity: 1;*/
	position: absolute;
	z-index: 3;
	list-style: none;
}
.nav_children li{
	padding: 0;
	line-height: 30px;
	width:  120px;
	height:  30px;
	margin: 5px;
}
.nav_children li span{
	color: #fff;
	transition: color .3s;
	-moz-transition: color .3s; /* Firefox 4 */
	-webkit-transition: color .3s; /* Safari 和 Chrome */
	-o-transition: color .3s; /* Opera */
}
.nav_children li:hover span{
	color:  #71cfff;
}
.nav_children_shadow{
	position: absolute;
	width: 100% !important;
	top: -5px;
	left: -5px;
	height: 100% !important;
	z-index: -1;
}

.nav_user{

}

.nav_user ul{
	width: 180px;
	z-index:  1;
	line-height: 50px;
	background: none;
	opacity: 1;
	position: absolute;
	right: 14px;
	padding: 0;
	top: 63px;
}
.nav_user li{
	width: 180px;
	color: #fff;
	height: 50px;
	padding: 0;
}
.nav_user li a{
	padding: 15px 0;
}
.nav_user li img{
	margin:0 15px;
}
.nav_user li span{
	color: #fff;
	font-size: 15px;
	transition: color .3s;
	-moz-transition: color .3s; /* Firefox 4 */
	-webkit-transition: color .3s; /* Safari 和 Chrome */
	-o-transition: color .3s; /* Opera */
}
.nav_user li:hover span{
	color: #71cfff;
	text-decoration: underline;
}
.nav_user_link{
	padding: 0 20px;
}
.nav_user_shadow{
	position: absolute;
	z-index: -1;
	width: 100%;
	height: 100% !important;
	top: 0;
	left: 0;
}

/**
 * 动态样式
 */
.header_bg{
	background-color: #000;
}
.nav_shadow_bg{
	background-color: #999;
	opacity: .5;
}
.nav_children_ico_defaultBg{
	color: #999 !important;
	opacity: .5;
}


/**
 * 根据屏幕大小自适应
 */
@media screen and (min-width: 768px){

	.nav_user_ico{
	    border-bottom: 10px solid;
	    border-left: 10px solid transparent;
	    position: absolute;
	    top: -10px;
	    right: 0px;
	}

	.nav_search_div{
		width: 300px;
		height: 60px;
		background: none;
		opacity: 1;
		padding-top: 7px;
		position: absolute;
		border: none;
		right: 14px;
		top: 63px;
    } 
    .nav_search_shadow{
		position: absolute;
		z-index:  -1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	} 
    .nav_search_ico{
		border-bottom: 10px solid;
	    border-left: 10px solid transparent;
	    position: absolute;
	    top: -10px;
	    right: 0;
	}
	.nav_search_input input{
		color: #333;
		width: 220px;
		height: 50px;
		margin-top: -5px;
		position: absolute;
		top: 4px;
		left: 5px;
		line-height: 50px;
		padding: 15px;
	}
	
	.nav_search_input button{
		height: 50px;
		width: 70px;
		margin-left: -3px;
		position: absolute;
		top: -1px;
		right: 5px;
		border: none;
		background-image: url("/static/index/1/search_btn_ipt.png");
	}
}

@media screen and (max-width: 768px){
	.nav_search_input{
		margin-bottom: 15px;
	}
	.nav_search_input input{
		height: 50px;
		line-height: 50px;
		padding: 15px;
	}
	.nav_search_input button{
		height: 50px;
		margin-left: -3px;
		border: none;
		background: url("/static/index/1/search_btn_ipt.png") no-repeat;
		background-size: 100% 100%;
	}
}





/**
 * fade样式
 */
.nav_children_fade-enter-active, .nav_children_fade-leave-active{
	transition: all .5s;
	-moz-transition: all .5s; /* Firefox 4 */
	-webkit-transition: all .5s; /* Safari 和 Chrome */
	-o-transition: all .5s; /* Opera */
}
.nav_children_fade-enter,  .nav_children_fade-leave-to{
	opacity: 0;
}
</style>