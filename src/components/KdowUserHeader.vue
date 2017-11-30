<template>
    <div class="masked" v-show="maShow">
		<div>
            <div class="header"  v-if="isHeader">
                <div class="header-top">
                    <p>上传头像</p>
                    <span @click="close"></span>
                </div>
                <div class="header-con">
                	<div id="header-file">
						<div class="header-file">
							<input type="file" @change="onFileChange">
							<div class="header-file-img"><img :src="imgSrc" alt="" v-if="imgSrc"></div>
						</div>
						<div class="header-img"><img :src="imgSrc" alt="" v-if="imgSrc"></div>
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
                	<div class="header-btn">
                		<span>确认</span>
                		<span  @click="close">取消</span>
                	</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
	props: {
		isHeader: {
              type: Boolean,
              default: false
            },
        maShow: {
                type: Boolean,
                default: false
            }
	},
	data(){
		return{
			imgSrc: ''
		}
	},
	methods: {
		close(){
			this.$emit('on-close1');
		},
		onFileChange(e) {
			var files = e.target.files || e.dataTransfer.files;
			if (!files.length)
			return;
			this.createImage(files[0]);
			},
		onFileChange1(e){
		 	var files = e.target.files || e.dataTransfer.files;
			if (!files.length)
			return;
			this.createImage(files[0]);
		 },
		createImage(file) {
		var image = new Image();
		var reader = new FileReader();
		var vm = this;

		reader.onload = (e) => {
		//vm.image = e.target.result;
		this.imgSrc = e.target.result
		};
		reader.readAsDataURL(file);
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
    z-index: 999;
}
.header{
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -196px;
    margin-left: -179px;
    width:358px;
    height: 393px;
    background: #fff;
    border-radius: 10px;
   
}
.header-top{
    position: relative;
    width: 100%;
    height: 40px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 1px solid #ccc;
}
.header-top p{
    padding-left: 20px;
    line-height: 40px;
}
.header-top span{
    position: absolute;
    right: 10px;
    top: 10px;
    display: inline-block;
    width: 17px;
    height: 15px;
    background: url(../../static/images/headerClose.png) no-repeat;
}
.header-con{
	padding: 20px 16px 22px 22px;
}
#header-file{
	position: relative;
	height: 220px;
}


.header-file{
	width: 215px;
	height: 222px;
	border: 1px solid #ccc;
	position: absolute;
	top: 0;
	left: 0;
}
.header-file-img{
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
	height: 100%;
}
.header-file-img img{
	width: 215px;
	height: 222px;
}
.header-file input{
	position: relative;
	z-index: 999;
	width: 100%;
	height: 100%;
	opacity: 0;
}
.header-img{
	position: absolute;
	left: 230px;
	top: 2px;
	width: 90px;
	height: 90px;
	border-radius: 50%;
    border: 1px solid #ccc;
}
.header-img img{
	width: 100%;
	height: 100%;
	border-radius: 50%;
	border: 0;
}
.header-btn span{
	display: inline-block;
	width: 110px;
	height: 28px;
	text-align: center;
	line-height: 28px;
	border-radius: 15px;
	color: #fff;
	cursor: pointer;
	background: linear-gradient(to right,#64b0fd,#007fff);
	margin-left: 25px;
}
.header-update{
	width: 215px;
	height:20px;
	margin: 15px 0 20px;
}
.update{
	float: left;
	width:56px;
	font-size: 12px;
	color: #666;
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
