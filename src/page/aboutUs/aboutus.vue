<template>

    <div class="abotus">
    	<!--导航-->
    	<div>
    		<div class="header_div">
			<kdow-header/>
			<div style="float:clear;"></div>
			
			</div>
			<div id="nav"></div>
    	</div>
        <!-- banner图开始 -->
        <div class="container-fluid about-top">
            <div class="about-banner">
                <a :href="banner.href">
                    <img class="img-responsive" :src="banner.src" :alt="banner.alt" :title="banner.title">
                </a>
            </div>
        </div>
        <!-- banner图结束 -->

        <!-- 公司简介开始 -->
        <div class="company-profile">
            <div class="container company-profile-con">
                <div class="row">
                <div class="company-left">
                    <div>
                        <h3 class="company-title">{{CompanyLeft.BigTitle}}</h3>
                        <div class="company-title1">{{CompanyLeft.SmallTitle}}</div>
                    </div>
                    <div class="company-introduce">
                        <p class="company-introduce1">{{CompanyLeft.ChineseIntroduce}}</p>
                        <p class="company-introduce1 company-introduce2">{{CompanyLeft.EnglishIntroduce}}</p>
                    </div>
                </div>
                <div class="company-right hidden-sm hidden-xs">
                    <img class="img-responsive company-profile-img" :src="CompanyRight.src" alt="">
                </div>


                </div>
            </div>
        </div>
        <!-- 公司简介结束 -->

        <!-- 公司服务开始 -->
        <div class="service"  ref="service">

           <div id="service">
                <div class="container company-profile-con">
                <div>
                    <h4 class="service-title service-title1">{{service.ServiceTitle}}</h4>
                    <div class="text-center service-title">{{service.ServiceTitle1}}</div>
                </div>
                <div class="row service-con">
                    <div class="col-md-3 col-sm-3 col-xs-6" v-for="(service,index) in service.ServiceCom">

                        <div class="service-introduce-hover">
                            <div class="service-introduce">
                                <img :src="service.src" alt="" :class="'service-img'+index">
                            </div>
                        </div>

                        <p class="text-center">{{service.ChineseTitle}}</p>
                        <p class="text-center">{{service.EnglishTitle}}</p>
                        <p class="text-center">{{service.com}}</p>
                    </div>
                </div>
            </div>
           </div>

        </div>
        <!-- 公司服务结束 -->

        <!-- 我们的团队开始 -->
        <div class="our-team">
            <div class="team-title">
                    <h3 class="text-center team-title1">{{team.ChineseTitle}}</h3>
                    <div class="team-hr service-hr"></div>
                    <p class="text-center team-title1">{{team.EnglishTitle}}</p>
            </div>
            <div class="company-profile-list">
                <ul>
                    <li class="pull-left" v-for="(team,index) in team.OurTeam">
                         <img :class="{active:index==2}" class="img-responsive pull-left" :src="team.src" alt="">
                    </li>
                </ul>
                <div class="pre" @click="pre"></div>
                <div class="next" @click="next"></div>
                <div class="tab">
                    <span :class="{active:index==tabIndex}" @click="show(index)" v-for="(team,index) in team.OurTeam"></span>
                </div>
            </div>

        </div>
        <!-- 我们的团队结束 -->

        <!-- 我们用心在做开始 -->
        <div class="container-fluid heart">
            <p class="text-center">{{vision.ChineseVision}}</p>
            <p class="text-center">{{vision.EnglishVision}}</p>
            <p class="text-center">{{vision.EnglishVision1}}</p>
        </div>
        <!-- 我们用心在做结束 -->

        <!-- 地理坐标开始 -->
        <div class="address-icon">
            <div class="container company-profile-con">
                <h3 class="text-center">{{ContactInformation.ChindeseInformation}}</h3>
                <div class="team-hr service-hr"></div>
                <p class="text-center">{{ContactInformation.EnglishInformation}}</p>
                <div class="row text-center address-icon-con">
                    <div class="col-md-4">
                        <p><span class="icon1"></span>手机：13748211356</p>
                    </div>
                    <div class="col-md-4">
                        <p><span class="icon2"></span>邮箱： 782674922@qq.com</p>
                    </div>
                    <div class="col-md-4">
                        <p><span class="icon3"></span>地址：成都科技节能大厦A座702</p>
                    </div>
                </div>
            </div>
            </div>
        <div class="address">
            <div class="container company-profile-con">
                <h3 class="text-center">{{address.ChindeseAddress}}</h3>
                <div class="team-hr service-hr"></div>
                <p class="text-center">{{address.EnglishAddress}}</p>
                <div class="row">
                    <!-- <div class="col-md-12 address-con col-xs-12" id="address-con"></div> -->
                    <el-amap vid="amapDemo" class="address-con" :center="map.center" :zoom="map.zoom">
                    <!-- <el-amap-marker :position="map.position"></el-amap-marker> -->
                    <el-amap-info-window :position="map.position" :content="map.content"></el-amap-info-window>
                    </el-amap>
                </div>
            </div>
        </div>
        <!-- 地理坐标结束 -->

        <!-- 底部开始-->
         <kdow-footer :is-footer="isFooter"></kdow-footer>
        <!-- 底部结束 -->
    </div>

</template>

<script>
	export default require('./aboutUsController.js')
    //import AMap from 'AMap'
</script>

<style scoped="">
/*去掉默认样式开始*/
*{
    margin: 0;
    padding: 0;
    font-family: "微软雅黑";
    font-size: 14px;
}
ol,ul{
    list-style: none;
}
a{
    text-decoration: none;
}
img{
    border: none;
}
/*去掉默认样式结束*/
.header_div{
    	position: fixed;
    	top: 0;
    	left: 0;
    	width:100%;
    	z-index:  5;
    }
#nav{
	width: 100%;
	height: 75px;
}

/*公司简介开始*/
.company-profile-con{
    margin: 0 auto;
}
.company-left{
    float: left;
    width: 56%;
    padding-right: 100px;
}
.company-right{
    float: left;
    width: 44%;
}
.company-title{
    width: 60px;
    padding: 10px 0;
    border-bottom: 1px solid #666;
}
.company-title1{
    padding-top: 10px;
    padding-bottom: 20px;
}
.company-introduce{
    padding-right: 5px;
}
.company-introduce p{
    line-height: 20px;
    font-weight: bold;
}
.company-introduce .company-introduce2{
    padding-top: 10px;
    font-weight: 100;
}
.company-profile{
    padding: 50px 0 40px;
}
@media screen and (max-width: 768px) {
    .company-title{
        margin: 0 auto;
    }
    .company-title1{
        text-align: center;
    }
    .company-introduce{
        padding: 0 10px;
    }
    #address-con{
        height: 180px;
    }
    .company-left{
        width: 100%;
        padding-right: 0;
    }
    .company-profile{
        padding: 20px 0;
    }
}
/*公司简介结束*/

/*公司服务开始*/
.service{
/*    position: relative;*/
    height: 352px;
    background: url(/static/images/service-bg.png) fixed;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
}
#service{
    background: rgba(0,0,0,.1);
}

.service-con{
    padding: 50px 0;
}
.service-con p{
    color: #fff;
    margin-top: 5px;
}
.service-title{
    position: relative;
    z-index: 999;
    color: #fff;
    margin-top: 10px;
}
.service-title1{
    /*padding-top: 20px;*/
    margin: 0 auto;
    padding: 20px 0 10px;
    width: 85px;
    border-bottom: 2px solid #fff;
}
.service-hr{
    width:70px;
    height: 2px;
    margin: 10px auto;
    background: #fff;
}
.service-introduce{
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius: 50%;
    background: #323f48;
    padding: 25px;
    /*border: 1px solid red;*/
}

.service-introduce .service-img0{
    width: 35px;
    height: 35px;
    margin: 7px;
}
.service-introduce .service-img1{
    width: 32px;
    height: 45px;
    margin: 1px 9px;
}
.service-introduce .service-img2{
    width: 35px;
    height: 35px;
    margin: 9px 7px;
}
.service-introduce .service-img3{
    width: 40px;
    height: 40px;
    margin: 5px 11px;
}
.service-introduce:hover{
    background: #007fff;
}
.service-introduce:hover img{
    transform: scale(1.2);
}
.service-introduce:hover::after{
    position: absolute;
    left: -5px;
    top: -5px;
    content: '';
    display: block;
    width: 110px;
    height: 110px;
    border: 2px solid #007fff;
    border-radius: 50%;
}

/*公司服务结束*/

/*我们的团队开始*/
.our-team{
    padding: 40px 0 40px;
}
.team-title1{
    font-size: 16px;
}
.team-hr{
    background: #000;
    height: 1px;
}
.company-profile-list{
    position: relative;
    width: 100%;
    height: 230px;
    /*background: red;*/
    margin: 30px 0 30px;
}
.company-profile-list ul{
    width: 86%;
    /*background: blue;*/
    margin: 0 auto;
    height: 230px;
}
.company-profile-list ul li{
    width: 100%;
    height: 150px;
    float: left;
    margin: 0 2%;
    /*transition: all 5s;*/
}
.company-profile-list ul img{
    border-radius: 10px;
    width: 100%;
    height: 100%;
}
.company-profile-list ul li:nth-child(1),.company-profile-list ul li:nth-child(5){
    width:13%;
    height: 130px;
    margin-top: 50px;
}
.company-profile-list ul li:nth-child(2),.company-profile-list ul li:nth-child(4){
    width:17%;
    height: 160px;
    margin-top: 35px;
}
.company-profile-list ul li:nth-child(3){
    width: 20%;
    height: 210px;
    margin-top: 10px;
}
.company-profile-list .tab{
    /*display: table;*/
    text-align: center;
    margin: 15px auto 0;
}
.company-profile-list span{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ccc;
    margin: 0 3px;
}
.pre,.next{
    position: absolute;
    width: 7%;
    height:140px;
/*    border: 1px solid blue;*/
}
.pre{
    left: 0;
    top: 45px;
    background: url(../../assets/pre.png) no-repeat;
    background-position: center center;
}
.next{
    right: 0;
    top: 45px;
    background: url(../../assets/next.png) no-repeat;
    background-position: center center;
}
.active{
    background: #666 !important;
}

/*我们的团队结束*/

/*用心做开始*/
.heart{
    color: #fff;
    font-size: 16px;
    /*background: url(../../assets/heart.png);*/
    background: url(../../assets/heart1.gif);
    background-position: center center;
    background-size: cover;
}
.heart p:first-child{
    padding: 50px 0 20px;
    font-weight: 100;
}
.heart p{
    font-weight: bold;
}
.heart p:last-child{
    padding:20px 0 70px;
}
/*用心做结束*/


/*地理位置开始*/
.address-icon{
    margin-top: 40px;
}
.address-icon-con{
    border-bottom: 2px dashed #ccc;
    padding-bottom: 30px;
}
.address{
    padding: 40px 0 30px;
}
.address-con{
    margin-top: 30px;
    height: 381px;
    border: 1px solid #ccc;
}
.address-icon span{
    position: relative;
    top:14px;
    display: inline-block;
    width: 38px;
    height: 38px;
    margin-right: 10px;
}
.address-icon span.icon1{
    background: url("/static/images/icon1.png") no-repeat 100% 100%;
}
.address-icon span.icon2{
    background: url("/static/images/icon2.png") no-repeat 100% 100%;
}
.address-icon span.icon3{
    background: url("/static/images/icon3.png") no-repeat 100% 100%;
}
/*地理位置结束*/



/*底部开始*/

/*底部结束*/
</style>
