<template>
    <div class="center">
        <div class="center-product container">
           <div class="row">
                <div class="col-md-6" v-for="list in centerProduct1">
                    <div class="center-product-list1">
                        <img :src="list.src" alt="" width="100%" height="100%">
                        <div class="center-product-notes">
                            <p class="pull-left">{{list.name}}</p>
                            <div class="pull-right">
                                <span class="iconfont icon-shanchu pull-right"></span>
                                <span class="iconfont icon-bianji pull-right delet"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-3 col-sm-3 center-product-list" v-for="(list,index) in centerProduct">
                            <div class="center-product-img">
                            <img :src="list.src" alt="" width="100%" height="100%">
                            </div>
                            <div>
                                <p class="center-product-name">{{list.name}}</p>
                                <div class="clearfix">
                                    <span class="pull-left status" :class="{active:list.staus==0}">{{list.notes}}</span>
                                    <span class="iconfont icon-shanchu pull-right" @click="closeDelet(index)" :class="{active:listIndex1==index}"></span>
                                    <span class="iconfont icon-bianji pull-right delet"></span>
                                </div>
                            </div>
                </div>
            </div>
        </div>
        <!-- <kdow-delet :is-show='isShowDelet' :delet-array='centerProduct' @on-close='closeDialog' @on-delet="delet()"></kdow-delet> -->
        <kdow-delet :is-show='isShowDelet' @on-close='closeDialog' @on-delet="delet"></kdow-delet>
    </div>
</template>

<script>
	export default require('./myCreationController.js')
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
    background-image: url(../../../static/images/center-banner.jpg);
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
