<template>
    <div id="profile">
        <div class="profile">
            <div class="profile-top">
                <h1>基本信息</h1>
                <span>保存</span>
            </div>
            <div>
                <table>
                    <tr v-for="(list,index) in perList">
                        <td class="first">{{list.title}}:</td>
                        <td class="seconed">
                             <input v-if="list.isShow1" :disabled="list.disabled" :type="list.type" v-model="list.con" v-focus="focusState">
                             <input type="text" placeholder="请输入验证码" v-if="list.code">
                             <div id="con1" v-if="list.isShow">
                                 <div id="con" contenteditable="true" v-text="list.con"></div>
                                 <span>30</span>
                             </div>
                        </td>
                        <td class="three" @click="edit(index)"><span v-if="list.isShow1"><i class="iconfont icon-bianji1"></i>{{list.btn}}</span></td>
                    </tr>
                </table>
            </div>
        </div>
        <kdow-profile :ma-show="maShow" :is-show="isShowDelet" :is-first="isFirst" :is-seconed="isSeconed" :get-phone="getPhone" @on-close="close" @on-success="success" :get-password="getPassword"></kdow-profile>
    </div>
</template>

<script>
	export default require('./myProfileController.js')
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
#profile{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.1);
    margin-top: -25px;
    padding: 25px 0 50px;
}
.profile{
    width: 900px;
    height: 380px;
    background: #fff;
    border-radius: 8px;
    margin: 0 auto;
}
.profile-top{
    position: relative;
    width: 100%;
    height: 70px;
    line-height: 70px;
    border-bottom: 1px dashed #ccc;
    margin: 0 5px;
}
.profile-top h1{
    font-size: 20px;
    font-weight: bold;
    padding-top: 25px;
    padding-left: 36px;
}
.profile-top span{
    position: absolute;
    right: 13px;
    top: 20px;
    display: block;
    width: 88px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    border-radius: 15px;
    background:linear-gradient(to right,#64b0fd,#007fff);
}
.profile table{
    width: 700px;
    height: 230px;
    margin: 15px auto 0;
}
.profile table td.first{
    width: 60px;
}
.profile table td.seconed{
    padding-left: 15px;
    width: 580px;
}
.profile table td.three span{
    width: 100%;
    height: 30px;
    padding: 0 8px;
    border-radius: 10px;
    background:linear-gradient(to right,#64b0fd,#007fff);
    cursor: pointer;
    color: #fff;
}
.profile table td.three span i{
    padding-right:5px;
}
.profile table tr{
    height: 50px;
}
.profile table td input{
    border:1px solid #ccc;
    background: #fff;
    padding-left: 10px;
}
#con1{
    position: relative;
}
#con{
    width: 111%;
    height: 30px;
    line-height: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 12px;
    padding-left: 10px;
    outline: none;
}
#con1 span{
    position: absolute;
    right: -45px;
    top: 5px;
}
</style>
