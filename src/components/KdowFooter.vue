<template>
    <div>
	    <div class="footer text-center"  v-if="isFooter" :style="{'height': clientHeight + 'px'}">
		    <!-- <div class="footerImg">
		    	<img src="../../static/images/footer.jpg"/>
		    </div> -->
            <div class="footer-con"  :style="{'height': clientHeight + 'px'}">
                <div class="content">
                    <div>
                        <h1>欢迎与我们联系</h1>
                        <p class="footer-con-title">WELCOME TO CONTACT US</p>
                    </div>
                    <div>
                        <div class="company-profile-con row">
                            <div class="container">
                                    <div class="row">
                                        <ul>
                                             <li class="col-md-4 col-sm-4 col-xs-4 list-style" v-for="list in footer.footerList">
                                             <span class="iconfont" :class="list.iconClass"></span>
                                             <p>{{list.title}}</p>
                                             <p>{{list.title1}}</p>
                                             </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div class="code">
                                        <img :src="footer.code.src"  alt="">
                                        </div>
                                        <p>{{footer.code.title}}</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-record">
                        <div class="footer-record-left pull-left">
                            <p>Copyright © 2017觅元素 浙ICP备16007586号-1</p>
                            <p class="text-left">浙公网安备 33010902001056号</p>
                        </div>
                        <div class="footer-record-right pull-right">
                            <ul>
                                <li class="iconfont pull-left" :class="list" v-for="list in footer.iconClass"></li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>


        <!-- 较小块的底部 -->

        <div v-if="footerShow" id="footer-record">
                <div class="footer-record-left pull-left">
                    <p>Copyright © 2017觅元素 浙ICP备16007586号-1</p>
                    <p class="text-left">浙公网安备 33010902001056号</p>
                </div>
                <div class="footer-record-right pull-right">
                    <ul>
                        <li class="iconfont pull-left" :class="list" v-for="list in footer.iconClass"></li>
                    </ul>
                </div>
        </div>


    </div>
</template>
<script>
	export default{
        props: {
            isFooter: {
              type: Boolean,
              default: false
            },
            footerShow: {
                type: Boolean,
                default: false
            }
          },
		data(){
			return {
                clientHeight: 0,
				footer: {
                footerList:[
                {
                title: '地址',
                title1: 'ADDRESS',
                iconClass: 'icon-icon-yxj-address'},
                {
                title: '电话',
                title1: 'TELEPHONE',
                iconClass: 'icon-icon32206'},
                {
                title: '邮箱',
                title1: '524822222@qq.com',
                iconClass: 'icon-youxiang'
                }
            ],
            code: {
                src: '../../../static/images/code.png',
                title: '扫描二维码关注公众号'
            },
            iconClass: ['icon-qq','icon-weibo','icon-weixin']
        }
			}
		},
        mounted(){
            this.clientHeight = `${document.body.clientHeight}`
        }
	}
</script>
<style scoped="">
/*底部开始*/
.footerImg{
	z-index: 11;
	position: absolute;
}


.company-profile-con{
    margin-left: 0;
    margin-right: 0;
}
.company-profile-con li{
    list-style: none;
}
.footer{
 
    padding-bottom: 40px;
    width: 100%;
    height: 100%;
    background: url('../../static/images/footer.jpg') no-repeat;
    overflow: hidden;
}

.footer-con{
	z-index: 99;
	position: relative;
	padding-top: 5%;
}

.footer h1{
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    /*padding: 10px 0 15px;*/
    padding-top: 1%;
}
.footer p.footer-con-title{
    color: #666;
    /*padding-bottom: 40px;*/
    padding-bottom: 3%;
}
.footer li span{
    display: inline-block;
    width: 50px;
    height: 60px;
    color: #fff;
    font-size: 50px;
}
.footer li p{
    padding-top: 10px;
    color: #fff;
}
.footer li p:last-child{
    padding: 0;
    color: #ccc;
}
.footer .code{
    width: 150px;
    height: 150px;
    padding: 10px;
    background: url('../../static/images/footer-border.png') no-repeat;
    background-size: 100% 100%;
    /*margin: 50px auto 10px;*/
    margin: 4% auto 2%;
}
.code img{
    width: 100%;
    height: 100%;
}
.footer-record{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 50px;
    height: 30px;
   /* margin-top: 10%;*/
}
.footer-record :after{
    display: block;
    content: "";
    overflow: hidden;
    clear: both;
}
.footer-record-left{
    padding-left: 80px;
}
.footer-record-left p{
    font-size: 12px;
    margin-bottom: 0px;
    color: #fff;
}
.footer-record-right{
    padding-right: 80px;
}
.footer-record-right li{
    font-size: 30px;
    list-style: none;
    margin: 0 5px;
    cursor: pointer;
}
.footer-record-right ul li:nth-child(2){
    font-size: 34px;
    margin-top: -5px;
}
.footer-record:after{
    display: block;
    content: "";
    overflow: hidden;
    clear: both;
}
.company-profile-con li:hover{
    background: #215671;
}
#footer-record{
    background: rgba(0,0,0,.1);
    height: 70px;
    margin-top: 0;
    padding-top: 15px;
}
/*底部结束*/
</style>
