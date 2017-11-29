<template>
	<div class="delet" v-if='isShow'>
		<div class="deletNotes">
			<p>提醒</p>
			<p>确定要删除吗？</p>
		</div>
		<div class="deletBtn">
			<span @click="success()">确定</span>
			<span @click="cancel()">取消</span>
		</div>
	</div>
</template>
<script>
	export default{
		props: {
		    isShow: {
		      type: Boolean,
		      default: false
		    }
		  },
		data(){
			return {


			}
		},
		methods: {
			cancel(){
				this.$emit('on-close')
			},
			success(){
				this.$emit('on-delet')
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
.delet{
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -100px;
    margin-left: -220px;
    width: 440px;
    height: 200px;
    border: 1px solid #ccc;
    background: #fff;
    z-index: 999;
}
.deletNotes{
	width: 100%;
	height: 115px;
	border-bottom: 2px solid #ccc;
}
.deletNotes p{
	padding: 20px 0 0 20px;
}
.deletNotes p:last-child{
	padding-top: 30px;
}
.deletBtn span{
	float: right;
	display: inline-block;
	width:110px;
	height: 65px;
	line-height: 65px;
	text-align: center;
	margin-right: 20px;
	margin-top: 10px;
	cursor: pointer;
}
.deletBtn span:hover{
	transition: all 2s;
	background: red;
	color: #fff;
}
</style>
