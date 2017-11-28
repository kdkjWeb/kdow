<template>
	<transition name="alert_fade">
		<div 
		class="toast"
		v-if="show">
			<div class="dialog_shadow"></div>
			<div class="alert_main">
				<div class="alert_message">
					<i v-text="message?message:'alert的主要信息'"></i>
				</div>
				<div class="alert_btn">
					<button 
					@click="removeDom">我知道了</button>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				message: ""
			}
		},
		methods: {
			removeDom() {
				let flag = true;
				this.show = false;
				this.$el.addEventListener("transitionend", ()=>{
					if(flag){
						document.body.removeChild(this.$el);
						flag = false;
					}
				})
				
			}
		}
	}
</script>

<style scoped="">
	.alert_main{
		width: 30%;
		z-index: 101;
		position: fixed;
		left: 35%;
		top: 30%;
		border: 1px solid #ccc;
		border-radius: 10px;
		background-color: #fff;
	}

	.alert_message{
		padding: 15px 0;
	}

	.alert_btn button{
		width: 100%;
		padding: 10px 0;
		border: 1px solid #ccc;
		border-bottom-left-radius: 10px;
		color: #fff;
		border-bottom-right-radius: 10px;
		transition: all .3s;
	}
	.alert_btn button:hover{
		color: #000;
		background-color: #E0E0E0;
		border-color: #E0E0E0;
	}

	.alert_fade-enter-active, .alert_fade-leave-active{
		transition:  all .3s;
        -webkit-transition:  all .3s;
        -moz-transition: all .3s;
        -o-transition: all .3s;
	}
	.alert_fade-enter, .alert_fade-leave-to {
		opacity: 0;
	}
</style>