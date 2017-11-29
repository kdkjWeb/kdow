<template>
    <div class="productShow">
        <!-- banner图开始 -->
        <div class="container-fluid about-top">
            <div class="about-banner">
                <a :href="banner.href">
                    <img class="img-responsive" :src="banner.src" :alt="banner.alt" :title="banner.title">
                </a>
            </div>
        </div>
        <!-- banner图结束 -->

        <!-- 热门产品开始 -->
        <div class="hotProduct">
            <div class="container container-con">
                <div class="text-center">
                    <h3 class="product-title">{{hotProduct.ChineseTitle}}</h3>
                    <p class="product-title1">{{hotProduct.EnglishTitle}}</p>
                </div>
                <div class="hotProduct-list">
                    <div class="row">
                        <div class="col-md-7 col-sm-7">
                            <div class="hotproduct-list" v-for="list in hotProduct.product[0]">
                                <div><img class="img-responsive" :src="list.src" alt=""></div>

                                <div class="hotproduct-con">
                                    <div class="hotproduct-con-des">
                                        <h4 class="prdoduct-name">{{list.title}}</h4>
                                        <p class="product-date">发布时间：{{list.date}}</p>
                                        <p class="product-author"><router-link to="#">作者：<span>{{list.author}}</span></router-link></p>
                                        <p class="product-description"><ruter-link to="#">作品描述：{{list.description}}</ruter-link></p>
                                    </div>
                                    <a href="" class="link hotproduct-link">立即下载</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 col-sm-5">
                            <div class="hotproduct-list1 hidden-xs" v-for="list in hotProduct.product[1]">
                                <div><img class="img-responsive" :src="list.src" alt=""></div>

                                <div id="hotproduct-con-des" class="hotproduct-con">
                                    <div class="hotproduct-con-des">
                                        <h4 class="prdoduct-name">{{list.title}}</h4>
                                        <p class="product-date">发布时间：{{list.date}}</p>
                                        <p class="product-author"><router-link to="#">作者：<span>{{list.author}}</span></router-link></p>
                                        <p class="product-description"><ruter-link to="#">作品描述：{{list.description}}</ruter-link></p>
                                    </div>
                                    <a href="" class="link hotproduct-link">立即下载</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- 热门产品结束 -->

        <!-- 所有产品开始 -->
        <div class="allProduct">
            <div class="container container-con">
                <div class="text-center">
                    <h3 class="product-title">{{allProduct.ChineseTitle}}</h3>
                    <p class="product-title1">{{allProduct.EnglishTitle}}</p>
                </div>
                <ul class="list-inline product-tab">
                    <!-- <li :class="{active:index==iconColor}" @click="productShow(index)" v-for="(title,index) in allProduct.title"><span
                    class="iconfont" :class="[iconClass[index]]"></span>{{title.name}}</li> -->
                    <li :class="{active:index==iconColor}" @click="productShow(index)" v-for="(title,index) in allProduct.title"><span
                    class="iconfont" :class="[title.iconClass]"></span>{{title.name}}</li>
                </ul>
                <div class="row">
                    <div class="col-md-4 col-sm-4" v-for="list in allProduct.product[listIndex]">
                        <div class="allProduct-list">
                            <div><img class="img-responsive" :src="list.src" alt=""></div>
                            <div class="allProduct-con">
                            <h4 class="prdoduct-name">{{list.title}}</h4>
                            <p class="product-date">发布时间：{{list.date}}</p>
                            <p class="product-author"><router-link to="#">作者：<span>{{list.author}}</span></router-link></p>
                            <p class="product-description"><ruter-link to="#">作品描述：{{list.description}}</ruter-link></p>
                            <a class="link">立即下载</a>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="more-btn">加载更多</div>
            </div>

        </div>
        <!-- 所有产品结束 -->

        <!-- 头部开始 -->
        <kdow-footer></kdow-footer>
        <!-- 头部结束 -->
    </div>
</template>

<script>
	export default require('./productShowController.js')
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
.container-con{
    margin: 0 auto;
}

/*热门产品开始*/
.hotProduct{
    padding-top: 30px;
}
.hotproduct-list{
    position: relative;
    border: 1px solid blue;
    margin-bottom: 16px;
}
.hotproduct-list img{
    width: 100%;
    height: 100%;
}
.hotproduct-list1{
    width: 450px;
    margin-left: 20px;
    border: 1px solid red;

}
#hotproduct-con-des{
    width: 450px;
    margin-left: 20px;
}
.hotproduct-list1 img{
    width: 100%;
    height: 100%;
}
@media screen and (max-width: 768px) {
    .hotproduct-list1 {
        width: 293px;
        margin-left: 15px;
    }
}
@media screen and (min-width:769px) and (max-width:1024px) {
    .hotproduct-list1 {
        width: 375px;
        margin-left: 15px;
    }
}
.hotproduct-con{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.1);
    display: none;
}
.hotproduct-list:hover .hotproduct-con{
    display: block;
}
.hotproduct-list1:hover .hotproduct-con{
    display: block;
}
.hotproduct-con-des{
    position: absolute;
    left: 20px;
    bottom: 30px;
    width: 240px;
    color: #fff;
}
.hotproduct-con-des p{
    color: #fff;
}
.hotproduct-link{
    position: absolute;
    right: 20px;
    bottom: 0;
}
/*热门产品结束*/


/*所有产品开始*/
.allProduct{
    padding: 50px 0;
}
/*.product-list-wrap{
    display: none;
}*/
.allProduct-list{
    padding: 10px;
    margin-right: 10px;
    background: #ccc;
    margin-bottom: 10px;
}
.allProduct-title-hr{
    width: 70px;
    height: 1px;
    background: #000;
    margin: 10px auto;
}
.product-title{
    width: 70px;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
    margin: 0 auto;
}
.product-title1{
    padding:10px 0 20px;
}
.allProduct-con{
    font-size: 12px;
    padding-left: 10px;
}
.prdoduct-name{
    font-size: 16px;
     padding:10px 0 10px 0;
}
.product-date{
    color:#b2b2b2;
    font-size: 12px;
}
.product-author{
    font-size: 12px;
   padding: 10px 0 10px 0;
}
.product-author span{
    font-size: 14px;
    color:#002283;
}
.product-description{
    font-size: 12px;
    color: #b2b2b2;
    padding-right: 20px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
}
.link{
    display: block;
    width:93px;
    height: 26px;
    color: #fff;
    text-align: center;
    line-height: 26px;
    font-size: 12px;
    border-radius: 15px;
    background: linear-gradient(to right,#64b0fd,#007fff);
    margin: 30px auto;
    cursor: pointer;
}
.product-tab{
    padding: 20px 10px;
}
.product-tab li{
    cursor: pointer;
}
.product-tab li:first-child:after{
    display: inline-block;
    content: '';
    width: 2px;
    height: 6px;
    background: #000;
    position: relative;
    left: 10px;
    top: -2px;
    margin-right: 10px;
}
.product-tab li span{
    display: inline-block;
    width: 10px;
    height: 10px;
    font-size: 16px;
    margin-right: 10px;
}
.active{
    color:#007fff;
}
.more-btn{
    width: 130px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    color: #fff;
    border-radius: 15px;
    margin: 0 auto;
    cursor: pointer;
    background: linear-gradient(to right,#64b0fd,#007fff);
}
/*所有产品结束*/
</style>
