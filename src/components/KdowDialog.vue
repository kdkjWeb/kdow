<template>
	<transition>
		<div v-if="showDialog" class="dialog_div">
			<div class="dialog_shadow"></div>
			<div
			ref="dialog_main" 
			class="dialog" 
			:style="{width: dialogWidth + 'px'}">
				<header>
					<span 
					class="glyphicon glyphicon-remove text-cnter"
					@click.stop="cancel"></span>
				</header>
				<div 
				class="dialog_content text-center" 
				v-if="!multiplePages"
				:style="{
					'border-radius': noOptions?'0 0 10px 10px':'0'
				}">
					<slot>这是一个Dialog的主要内容</slot>
				</div>
				<div 
				class="dialog_content" 
				v-if="multiplePages">
					<div class="moveDiv" 
					:style="{width:((dialogWidth - 30) * multiplePages + 15 * (multiplePages - 1)) + 'px'}">
						<slot>这是一个多页Dialog的主要内容</slot>
					</div>
				</div>
				<footer v-if="!multiplePages && !noOptions">
					<div>
						<button 
					    @click.stop="submit"
					    v-text="submitText?submitText:'确定'"
					    style="border-bottom-left-radius: 10px;"></button>
					</div><div>
						<button 
					    @click.stop="cancel"
					    style="border-bottom-right-radius: 10px;">取消</button>
					</div>
				</footer>
				<footer class="col-md-12" v-if="multiplePages">
					<div class="col-md-12 noPadding">
					    <button @click="previousPage($event)" v-if="currentPage > 1" v-text="'上一步'"></button>
					    <button @click="nextPage($event)" v-if="currentPage < multiplePages">下一步</button>
						<button 
						@click="submit"  
						v-if="currentPage == multiplePages" 
						v-text="submitText?submitText:'确定'"></button>
					</div>
				</footer>
			</div>
		</div>
	</transition>
</template>
<script>
	export default{
		data() {
			return {
				currentPage: 1
			}
		},
		props:{
			showDialog: {
				type: Boolean,
				required: true
			},
			multiplePages: Number,
			submitText:{
				type:　String
			},
			dialogWidth:{
				type: Number,
				default:600
			},
			noOptions: {
				type: Boolean
			}
		},
		methods:{
			previousPage(event) {
				if(this.currentPage > 1){
					this.$emit('previousPage', this.currentPage);
					this.currentPage --;
					event.path[3].children[1].children[0].style.marginLeft = (this.currentPage - 1) * -1185 + 'px'; 
				}
			},
			nextPage(event) {
				if(this.currentPage < this.multiplePages ){
					this.$emit('nextPage', this.currentPage);
					event.path[3].children[1].children[0].style.marginLeft = this.currentPage * -1185 + 'px';
					this.currentPage ++;
				}
				
			},
			submit() {
				this.currentPage = 1;
				this.$emit('dialogSubmit')
			},
			cancel(){
				this.currentPage = 1;
				this.$emit('dialogCancel')
			},

			dialogBeforeEnter(el) {
				el.style.opacity = 0;
			},
			dialogEnter(el, done) {
				this.$Velocity(el, {
					opacity: 1
				},{
					duration: 500,
					complete: done
				})
				// this.$Velocity(this.$refs.dialog_main, {
				// 	opacity: 1,
				// 	translateX: "2%"
				// },{
				// 	duration: 500,
				// 	complete: done
				// })
			},
			dialogLeave(el, done) {
				this.$Velocity(el, {
					opacity: 0
				},{
					duration: 500,
					complete: done
				})
				// this.$Velocity(this.$refs.dialog_main, {
				// 	opacity: 0
				// },{
				// 	duration: 500,
				// 	complete: done
				// })
			}
		},
		updated(){
			if(this.show){
				this.$el.children[1].style.top = document.body.offsetHeight/2 - this.$el.children[1].offsetHeight/2 - 20 + 'px';
				this.$el.children[1].style.left = document.body.offsetWidth/2 - this.$el.children[1].offsetWidth/2  + 'px';
			}
			
		}
	}
</script>
<style scoped="">
.dialog_div{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.dialog_shadow{
	position:fixed;
	background-color: #000;
	width:100%;
	height:1800px;
	left:0; 
	top:0; 
	opacity: 0.4;
	z-index: 100;
}
.dialog{
	position:relative; 
	left:5%;
	top: 30%;
	border-radius: 10px;
	min-width:600px;
	max-width:1200px;
	box-shadow: 0px 1px 40px #555;
	z-index: 100;
}
.dialog header{
	text-align: right;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	padding:5px 10px;
	background-color: #fff;
	border-bottom: 1px solid #ccc;
}
.dialog header span{
	display: inline-block;
	font-size:15px;
	color:#000;
	cursor:pointer;
	border-radius: 60%;
	font-weight: bold;
	transition: all .3s;
}
.dialog header span:hover{
	color: red;
}

.dialog_content{
	width:100%;
	padding:10px 25px 30px 25px;
	background-color: #fff;
	/*overflow-x:hidden;
	overflow-y:auto;*/
	max-height:569px;
}

.dialog footer{
	padding:10px 0 0 0;
	width:100%;
	text-align: center;
	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
	background-color: #fff;
}
.dialog footer div{
	width: 50%;
	display: inline-block;
}
.dialog footer button{
	width:100%;
	/* background-color: #389b8a; */
	color:#fff;
	border: 1px solid #ccc;
	padding:10px;
	transition: all 0.5s;
	outline:none;
}
.dialog footer button:hover{
	background-color: #E0E0E0;
	color:#000;
	border-color: #E0E0E0;
}

.moveDiv{
	transition:all 0.3s;
	position:relative;
	left:0;
	float:left;
	overflow:hidden;
}


/**
 * fade样式
 */
/*.dialog_fade-enter-active, .dialog_fade-leave-active{
	transition:  all .3s;
    -webkit-transition:  all .3s;
    -moz-transition: all .3s;
    -o-transition: all .3s;
}
.dialog_fade-enter, .dialog_fade-leave-to  {
    opacity: 0;
    transform: scale(0, 0)
}*/
</style>