<template>
	<div class="footer text-center">
		    <div class="footerImg">
		    	<img src="../../static/images/footer.jpg"/>
		    </div>
            <div class="footer-con">
                <div class="content" v-if="isFooter">
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
</template>
<script>
	export default{
        props: {
            isFooter: {
              type: Boolean,
              default: false
            }
          },
		data(){
			return {
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
    padding: 30px 0 15px;
}
.footer p.footer-con-title{
    color: #666;
    padding-bottom: 40px;
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
    margin: 50px auto 10px;
}
.code img{
    width: 100%;
    height: 100%;
}
.footer-record{
    height: 30px;
    
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
@media screen and (max-width: 768px){
    .footer{
        padding-bottom: 50px;
    }
    .footer h1{
        font-size: 20px;
    }
    .footer p.footer-con-title{
        font-size: 16px;
        padding-bottom: 20px;
    }
  
    .footer-record-left {
        width: 100%;
        padding: 0;
        /*margin: 0 auto;*/
    }
    .footer-record-left p{
        text-align: center;
        
    }
    .footer-record-right{
        width: 100%;
        padding-right: 0;
    }
    .footer-record-right ul{
        display: table;
        text-align: center;
        /*width: 100%;*/
        margin: 0 auto;
       /* text-align: center;*/
    }
    .footer-record-right ul li{
        display: inline-block;
    }
    .footer .code{
        margin-top: 30px;
    }

}
/*底部结束*/
</style>
