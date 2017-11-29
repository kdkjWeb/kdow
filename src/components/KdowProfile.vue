<template>
<div class="masked" v-show="maShow">
	<div class="profile" v-if='isShow'>
        <div v-if="isFirst">
            <div class="profile-top">
            <div class="profile-header" v-text="news.herderTitle"></div>
            <span @click="close"></span>
            </div>
            <form action="">

                <ul>
                    <li>
                        <input type="password" placeholder="请输入原始密码" v-model="news.pas">
                        <!-- <p>与原密码不符，请确认后再输入</p> -->
                    </li>
                    <li>
                        <input type="password" placeholder="请输入新密码" v-model="news.pas1">
                    </li>
                    <li>
                        <input type="password" placeholder="请再次输入新密码" v-model="news.pas2">
                    </li>
                    <!-- <li v-show="show">
                        <p>两次输入的新密码不一样，请确认后再提交</p>
                    </li> -->
                    <li>
                        <input class="btn" type="button" value="确定" @click="submit(news.pas,news.psa1,news.pas2)">
                    </li>
                </ul>
            </form>
        </div>
        <div v-if="isSeconed">
            <div class="profile-top">
            <div class="profile-header" v-text="news.herderTitle1"></div>
            <span @click="close"></span>
            </div>
            <form action="">
                  <ul>
                    <li>
                        <input type="text" placeholder="原手机号" v-model="news.phone">
                    </li>
                    <li>
                        <input type="text" placeholder="新手机号" v-model="news.phone1">
                    </li>
                    </li> -->
                    <li>
                        <input class="btn" type="button" value="获取验证码" @click="getCode(news.phone1)">
                    </li>
                </ul>
            </form>
        </div>
	</div>
</div>
</template>
<script>
	export default{
		props: {
            isShow: {
              type: Boolean,
              default: false
            },
            isFirst: {
              type: Boolean,
              default: false
            },
            isSeconed: {
                type:Boolean,
                default: false
            },
            maShow: {
                type: Boolean,
                default: false
            },
            getPhone: {
                type: String,
                default: null
            },
            getPassword: {
                type: String,
                default: null
            }
		  },
		data(){
			return {
                news: {
                    herderTitle: '修改密码',
                    herderTitle1: '修改手机号',
                    pas: '',
                    pas1: '',
                    pas2: '',
                    show: false,
                    phoneCode: '',
                    phone: '',
                    phone1: ''
                }
			}
		},
		methods: {
            close(){
                this.$emit('on-close');
                this.news.show = false;
                this.news.pas1 = '',
                this.news.pas2 = '',
                this.news.phoneCode = ''
            },
            submit(pas,pas1,pas2){
                this.$emit("on-success");
                this.axios({
                      method:'post',//方法
                      url:'/user/12345',//地址
                      data:{//参数
                        password:'pas',
                        newpassword:'pas1'
                      }
                  }).then(response=>{
                        console.log(response)
                  }).catch(error=>{
                        console.log(error)
                  })




            },
            getCode(num){
                //this.news.show = false;
                this.$emit("on-success",this.news.phone1);
                if(this.news.phone != this.getPhone){
                    console.log("请确认原手机号")
                }else{
                  this.$axios.get('/user/verification?phonenum='+num)
                         .then(function(response) {
                         console.log(response);
                         })
                         .catch(function(error) {
                         console.log(error);
                         });
                }
            }

		}
	}
</script>
<style scoped="">
*{
    margin: 0;
    padding: 0;
    font-family: "微软雅黑";
    font-size: 14px;
}
.masked{
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.1);
}
.profile{
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -158px;
    margin-left: -247px;
    width: 494px;
    /*height: 316px;*/
    background: #fff;
    border-radius: 15px;
    z-index: 999;
}
.profile-top{
    position: relative;
}
.profile-top span{
    position: absolute;
    right: 20px;
    top: 13px;
    display: block;
    width: 18px;
    height: 18px;
    background-image: url(../../static/images/close.png);
    background-repeat: no-repeat;
}
.profile-header{
    width: 100%;
    height: 44px;
    text-align: center;
    line-height: 44px;
    color: #fff;
    font-size: 14px;
    background: linear-gradient(to right,#64b0fd,#007fff);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
.profile form{
    padding: 52px 0 35px;
}
.profile form li{
    list-style: none;
    width: 295px;
    height: 35px;
    margin: 0 auto 22px;
}
.profile form li input{
    font-size: 14px;
    width: 100%;
    height: 100%;
    line-height: 30px;
    border: 1px solid #ccc;
    border-radius: 25px;
    padding-left: 15px;
}
.profile input.btn{
    background: linear-gradient(to right,#64b0fd,#007fff);
    color: #fff;
    outline: none;
    padding: 0;
}
.profile form p{
    text-align: center;
    color: red;
}
.profile input.phoneCode{
    width: 170px;
    float: left;
}
.profile input.phoneBtn{
    width: 100px;
    float: right;
    background: #1f8efe;
    color: #fff;
    text-align: center;
    padding-left: 0;
}




</style>
