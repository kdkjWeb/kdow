<template>
    <div class="masked" v-show="show">
        <div class="header"  v-if="showPhoto">
            <div class="header-top">
                <p>上传封面</p>
                <span @click="close"></span>
            </div>
            <div class="upPhoto">
                <div class="up">
                    <input type="file">
                    <div class="upclick">
                        <div></div>
                        <p>点击上传封面</p>
                        <p>支持JPG、PNG、GIF大小不超过5M</p>
                        <p>建议尺寸为800*600</p>
                    </div>
                </div>

                <div class="header-update">
                    <div class="update">
                    重新上传
                        <input type="file" @change="onFileChange1">
                    </div>
                    <div class="header-update-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default{
    props: {
        showPhoto: {
          type: Boolean,
          default: false
        },
        show: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
        }
    },
    methods:{
        close(){
            this.$emit('on-close');
        },
        onFileChange1(){
            this.$emit('getFile1');
        }
    }
}
</script>
<style scoped="">
.masked{
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.1);
}
.header{
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -180px;
    margin-left: -298px;
    width:595px;
    height: 360px;
    background: #fff;
    border-radius: 10px;
    z-index: 999;
}
.header-top{
    position: relative;
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #ccc;
    line-height: 44px;
}
.header-top span{
    position: absolute;
    right: 20px;
    top: 13px;
    display: block;
    width: 18px;
    height: 18px;
    background: url(../../static/images/headerClose.png);
    background-repeat: no-repeat;
}
.header-top p{
    padding-left: 15px;
}
.upPhoto{
    width: 315px;
    height: 245px;
    margin: 28px auto 0;
}
.upPhoto .up{
    position: relative;
    width: 100%;
    height: 215px;
    background: rgba(0,0,0,.1);
    border-radius: 15px;
}
.up input{
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
   /* background: red;*/
    background: url(../../static/images/uoload.png);
}
.upclick p:nth-of-type(1){
    color: #000;
    margin-top: 10px;
}
.upclick p{
    color: #666;
    text-align: center;
}


.header-update{
    width: 315px;
    height:20px;
    margin: 15px 0 20px;
}
.update{
    float: left;
    width:56px;
    font-size: 12px;
    color: #007fff;
}
.update input{
    position: relative;
    width: 100%;
    left: 0px;
    top: -20px;
    opacity: 0;
}
.header-update-btn{
    float: right;
}
.header-update-btn span{
    display: inline-block;
    width: 17px;
    height: 15px;
    margin-top: 3px;
    margin-left: 5px;
}
.header-update-btn span:nth-child(1){
    background: url('../../static/images/headerSmall.png') no-repeat;
}
.header-update-btn span:nth-child(2){
    background: url('../../static/images/headerBig.png') no-repeat;
}
.header-update-btn span:nth-child(3){
    background: url('../../static/images/headerUpdate.png') no-repeat;
}
</style>
