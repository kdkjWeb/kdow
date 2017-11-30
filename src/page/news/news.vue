<template>
	<div class="text-center container-fluid noPadding">
		<div class="header_div">
			<kdow-header/>
			<div style="float:clear;"></div>
		</div>
		<!-- <transition class="news_banner"> -->
		<div class="container-fluid noPadding" ref="news_banner"> 
			<div class="col-md-12 col-sm-12 col-xs-12 noPadding">
				<img src="../../assets/news_banner.png"
				     width="100%" alt=""/>
			</div>
		</div>
		<!-- </transition> -->
		<div class="news_main">
			<div class="container noPadding">
				<div class="row">
					<div class="col-md-12 col-sm-12 col-xs-12 noPadding">
						<div class="news_main_title" ref="news_main_title">
							<h2>最新资讯</h2>
							<span>THE LATEST INFORMATION</span>
						</div>

						<!-- 内容div -->
						<div v-for="(news, index,) in newsMain"
						     style="position: relative"
						     :style="{
						     	padding: index < 2 && clientWidth >= 992?'0 35px': '',
						     	margin: clientWidth >= 992? (index < 2? '0 0 45px 0':'45px 0'): '',
						     }"
						     class="col-sm-12 col-xs-12"
						     :class="[{
						     	'col-md-6':index < 2,
						     	'col-md-12': index >1
						      },
						     
							 ]"
						     >
						 <!--      'contentList' + index,
						      {'contentList':
							      (index < 2 ?leftRight1:(index==2?leftRight2:leftRight3))
							  } -->

						    <!-- 图片div -->
							<div :style="{
							     	'float': index == 3?'right':'left'
							     }"
							     :ref="'mainImg'"
							     class="col-sm-12 col-xs-12 news_main_img noPadding"
							     :class="{
							     	'col-md-12': index <= 1,
							     	'col-md-6' : index >1
							     }">
								<img :src="news.imgUrl" 
							     width="100%"
							     alt="新闻图片">
							</div>
							<!-- 图片div -->

							<!-- 文字描述div -->
							<div class="news_main_txt col-sm-12 col-xs-12"
							     :ref="'mainTxt'"
							     :style="{
							     	position: index > 1 && clientWidth >= 992?'absolute':'relative',
							     	bottom: 0,
							     	left: index == 2 && clientWidth >= 992? '50%': '0',
							     	padding: index > 1 && clientWidth >= 992?'0 35px': ''
							     }"
							     :class="{
							     	'col-md-12': index < 2,
							     	'col-md-6': index > 1,
							     	'noPadding': index <= 1 && clientWidth >= 992
							     }">
							     <p class="text-left comments">
							     	<span v-text="news.comments"></span>
							     </p>
							     <p class="text-left text-bottom">
							     	<router-link to="/newsDetail">
							     		<strong v-text="news.title"></strong>
							     	</router-link>
							     </p>
							     <p class="text-left description">
							     	<small v-text="news.description"></small>
							     </p>
							</div>
							<!-- 文字描述div -->
							
						</div>
						<!-- 内容div -->

						<!-- 翻页按钮 -->
						<div class="col-sm-12 col-xs-12 col-md-12">
							<kdow-filp-pages :searchModel="searchModel"
							                 @searchFunc="getNewsService"/>
						</div>
						<!-- 翻页按钮 -->

					</div>
				</div>
			</div>
		</div>
		<div class="news_bottom container-fluid news_bottom_bg">
			<div class="container noPadding ">
				<div class="row">
					<div class="col-md-4 col-sm-12 col-xs-12"
					     v-for="infor in newsBottomInfor"
					     :key="infor.title">
					    <div class="news_bottom_img">
					     	<img :src="infor.imgUrl" 
						     width="100%"
						     alt=""/>
					    </div>
						<p class="text-left comments">
						   	<span 
						   	v-text="infor.comments"></span>
						   </p>
						<p class="text-left">
						   	<strong 
						    v-text="infor.title"></strong>
						</p>
						<p class="text-left description">
							<small
							v-text="infor.description"></small>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default require('./newsController.js')
</script>
<style scoped="">
    @font-face{
    	font-family: BaseTitle-webfont;
    	src: url('/static/fzqkb.TTF');
    }

    .header_div{
    	position: fixed;
    	top: 0;
    	left: 0;
    	width:100%;
    	z-index:  5;
    }

    .news_main{
    	width:100%;
    	background-color: #fff;
    	/*margin-top:200px;*/
    	/*opacity: 0;*/
    	/*overflow-x: hidden;*/
    	/*transition: all .5s cubic-bezier(0.000, 0.715, 0.340, 1.000)*/
    }
  /*  .contentList0,.contentList3 {
    	left:-200px;
    	opacity:0;
    	-webkit-transition:all .5s linear .5s;
    	-o-transition:all .5s linear.5s;
    	-ms-transition:all .5s linear .5s;
    	-moz-transition:all .5s linear .5s;
        transition:all .5s linear .5s;
    }
    .contentList1,.contentList2 {
    	left:200px;
    	opacity:0;
    	-webkit-transition:all .5s linear .5s;
    	-o-transition:all .5s linear .5s;
    	-ms-transition:all .5s linear .5s;
    	-moz-transition:all .5s linear .5s;
        transition:all .5s linear .5s;
    }
    .contentList {
    	left:0px;
    	opacity:1;
    }*/
    .news_main_img{
    	overflow: hidden;
    }
    .news_main_img img{
    	transition: transform .5s;
    	-moz-transition: transform .5s; /* Firefox 4 */
		-webkit-transition: transform .5s; /* Safari 和 Chrome */
		-o-transition: transform .5s; /* Opera */
    }
    .news_main_img img:hover{
    	transform: scale(1.1, 1.1)
    }

    .news_main_title{
    	padding: 65px 0;
    }
    .news_main_title h2{
    	color: #333;
    	font-family: BaseTitle-webfont;
    	font-weight: lighter;
    	margin-bottom: 0;
    }
    .news_main_title span{
    	color: #7d7d7d;
    	letter-spacing: 1px;
    	font-size: 18px;
    	font-weight: 100;
    	font-family: "方正兰亭超细黑";
    }
    .news_main_txt strong{
		color: #333;
		letter-spacing: 1px;
		font-size: 16px;
	}
	.news_main_txt small{
		color: #b7b7b7;
		letter-spacing: 1px;
		line-height: 22px;
	}
	.news_main_txt span{
		color: #666;
		font-size: 14px;
	}
	.news_main_txt .comments{
		margin-top: 10px;
	}


    .news_bottom{
    	padding: 60px 0 50px 0;
    }
	.news_bottom_bg{
		background-color: #efefef;
	}
	.news_bottom_img{
		overflow: hidden;
	}
	.news_bottom img{
		transition:  transform .5s;
		-moz-transition: transform .5s; /* Firefox 4 */
		-webkit-transition: transform .5s; /* Safari 和 Chrome */
		-o-transition: transform .5s; /* Opera */
	}
	.news_bottom img:hover{
		transform: scale(1.1, 1.1);
	}
	.news_bottom strong{
		color: #333;
		letter-spacing: 1px;
		font-weight: normal;
		font-size: 14px;
	}
	.news_bottom small{
		color: #b7b7b7;
		letter-spacing: 1px;
		line-height: 22px;
	}
	.news_bottom span{
		color: #7d7d7d;
		font-size: 13px;
	}
	.news_bottom .comments{
		margin-top: 10px;
	}
</style>