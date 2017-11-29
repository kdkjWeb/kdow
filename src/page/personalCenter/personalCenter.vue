<template>
    <div class="center">
        <div class="center-top">
            <div class="personNews">
                <div class="headerPhone">
                    <img :src="headerPhone.src" class="img-responsive" width="100%" height="100%" alt="">
                    <span id="header" @click="header">修改头像</span>
                </div>
                <div class="centerTitle">
                    <div class="name">
                        <!-- <p class="text-center" v-for="name in headerName">{{name.name}}</p> -->
                        <p class="text-center">{{headerName.name}}</p>
                        <p class="text-center">{{headerName.title}}</p>
                    </div>
                </div>
            </div>
            <kdow-userheader :ma-show="maShow" :is-header="isHeader" @on-close1="close"></kdow-userheader>
            <ul class="centerList">
               <li><router-link to="/myCreation">我的作品</router-link></li>
               <li><router-link to="/myProfile">我的资料</router-link></li>
               <li><router-link to="/upLoad">上传</router-link></li>
            </ul>
        </div>
        <router-view></router-view>


        <!-- 头部开始 -->
        <kdow-footer></kdow-footer>
        <!-- 头部结束 -->
    </div>
</template>

<script>
	export default require('./personalCenterController.js')
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
.clearfix{
    display: block;
    content: "";
    overflow:hidden;
    clear: both;
}
/*去掉默认样式结束*/

/*头部开始*/

.center-top{
    padding: 150px 0 0;
    background-image: url(../../../static/images/center-banner.png);
    background-position: center center;
    background-size: cover;
}
.personNews{
    position: relative;
    width: 350px;
    height: 235px;
    margin: 0 auto;
    border: 3px solid #fff;
}
.headerPhone{
    position: absolute;
    left: 50%;
    top: -69px;
    transform: translateX(-50%);
    width: 138px;
    height: 138px;
    border: 3px solid #fff;
    border-radius: 50%;
}
#header{
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0;
    background: rgba(0,0,0,.1);
    color: #fff;
    text-align: center;
    line-height: 138px;
    cursor: pointer;
}
.headerPhone:hover #header{
    opacity: 1;
}
.centerTitle{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height:145px;
    background: #fff;
}

.centerTitle .name{
    width: 100%;
    height: 100%;
    padding-top: 35px;
}
.centerTitle .name p{
    padding: 0 0 20px 0;
    font-size: 20px;
    color: #000;
}
.centerTitle .name p:last-child{
    padding: 0;
    font-size: 14px;
}
.centerList{
    margin: 85px auto 25px;
    width: 350px;
    height: 30px;
    text-align: center;
}
.centerList li{
    display: inline-block;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
}
.centerList li:nth-child(2){
    padding: 0 90px;
}
/*头部结束*/


/*产品列表开始*/
.center-product{
    margin: 0 auto;
}
.center-product-list1{
    position: relative;
    margin-bottom: 20px;
}
.center-product-notes{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    line-height: 70px;
    height: 70px;
    background: #ececec;
    padding: 0 12px;
    opacity: 0;
}
.center-product-notes span{
    font-size: 24px;
    cursor: pointer;
}
.center-product-notes span.delet{
    padding-right: 12px;
    margin-top: -1px;
}
.center-product-list1:hover .center-product-notes{
    opacity: 1;
    transition: opacity .5s;
}




.center-product-list:nth-child(4n+0){
    margin-right: 0;
}
.center-product-list{
    width: 277.5px;
    height: 100%;
    margin-right: 20px;
    margin-bottom: 20px;
}
.center-product-name{
    padding:20px 0 10px 12px;
    font-size: 14px;
}
.center-product-list span.status{
    font-size: 14px;
    padding-left: 12px;
    padding-top: 8px;
    color: #ccc;
}
.center-product-list span{
    padding-right: 12px;
    font-size: 24px;
    cursor: pointer;
}
.center-product-list span.delet{
    margin-top: -1px;
}
.center-product-list:hover{
    box-shadow: 0px 0px 3px 3px #eee;
}
.center-product-list1:hover{
    box-shadow: 0px 0px 3px 3px #ddd;
}
.active{
    color: red !important;
}


/*产品列表结束*/

</style>
