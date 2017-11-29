<template>
    <div class="upLoad">
        <div class="information">
            <div class="upLoad-header">作品信息</div>
            <ul>
                <li>
                    <span>*</span>
                    <input type="text" class="con" placeholder="请输入作品名称" v-model="personData.title">
                    <i>50</i>
                </li>
                <li>
                    <span>*</span>
                    <div class="typeof">
                        请选择作品类型
                        <input type="radio" value="pc端" v-model="personData.type"> pc端
                        <input type="radio" value="手机APP" v-model="personData.type"> 手机APP
                    </div>
                </li>
                <li>
                 <input type="text" class="con" placeholder="作品说明" v-model="personData.content">
                 <i>300</i>
                </li>
            </ul>
        </div>
        <div class="upWorks">
            <div class="upLoad-header">上传作品</div>
            <div class="update">
                <span>*</span>
                <div class="up">
                    <input type="file" @change="getFile($event)">
                    <div class="upclick">
                        <div></div>
                        <p>点击上传作品</p>
                        <p>不得超过200M</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="upPhoto">
            <div class="upLoad-header">上传封面</div>
            <div class="update">
                <span>*</span>
                <div class="up" @click="upPhoto">
                    <img class="up-img" :src="imgSrc" alt="" v-if="imgSrc">
                    <input type="file" @change="getFile1($event)">
                    <div class="upclick">
                            <div></div>
                            <p>点击上传封面</p>
                    </div>
                </div>
            </div>
        </div>

        <div id="btn" @click="upLoad">发布</div>
        <p class="protocol">发布作品，即表示您已同意<span>恺缔科技用户协议</span>，请勿恶意上传作品</p>
        <!-- <kdow-upphoto :show="show" :show-photo="showPhoto" @on-close="close"></kdow-upphoto> -->
    </div>
</template>

<script>
	export default require('./upLoad.js')
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
.upLoad{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.1);
    margin-top: -25px;
    padding: 25px 0 50px;
}
/*.upLoad div{
    margin-bottom: 53px;
}*/
.upLoad .information{
    width: 1200px;
    height: 320px;
    margin: 0 auto;
    background: #fff;
    border-radius: 15px;
    margin-bottom: 53px;
}
.upLoad-header{
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #ccc;
    line-height: 60px;
    padding-left: 20px;
}
.information ul{
    padding:45px;
}
.information ul li{
    position: relative;
    width: 725px;
    height: 46px;
    margin-bottom: 20px;
}
.information ul li span{
    position: absolute;
    left: 0;
    top: 12px;
    font-size: 20px;
    color: red;
}
.information ul li i{
    position: absolute;
    right: 20px;
    top: 13px;
    color: #666;
}
.information li .con{
    float: right;
    width: 700px;
    height: 44px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background: #ddd;
    padding-left: 10px;
}
.typeof{
    height: 100%;
    width: 700px;
    float: right;
    line-height: 44px;
}
.typeof input{
    margin-left: 45px;
}

/*作品上传*/
.upWorks,.upPhoto{
    width: 1200px;
    height:366px;
    background: #fff;
    margin: 0 auto;
    border-radius: 15px;
    margin-bottom: 53px;
}


.update{
    width: 312px;
    height: 193px;
    margin: 36px 0 0 45px;
}
.update span{
    color: red;
    font-size: 20px;
}
.update .up{
    position: relative;
    float: right;
    width: 286px;
    height: 193px;
    background: rgba(0,0,0,.1);
    border-radius: 15px;
}
.up .up-img{
    position: absolute;
    left: 0;
    top: 0;
    width: 286px;
    height: 193px;
    z-index: 999;
}
.update .up input{
    position: relative;
    z-index: 999;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
}
.upclick{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.upclick div{
    width: 43px;
    height: 43px;
    margin: 52px auto 0;
    background: url(../../../static/images/uoload.png);
}
.upclick p:nth-of-type(1){
    margin-top: 20px;
}
.upclick p{
    text-align: center;
}

#btn{
    width: 230px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background: linear-gradient(to right,#64b0fd,#007fff);
    color: #fff;
    cursor: pointer;
    border-radius: 25px;
    margin: 0 auto;
}
.protocol{
    text-align: center;
    color: #666;
    margin-top: 20px;
}
.protocol span{
    color: #007fff;
}
</style>
