<template>
	<div>
		<div class="manage_header">
			<router-link to="/">返回主页</router-link>
		</div>
		<div class="manage_navList">
			<ul>
				<li
				v-for="nav in navList"
				:key="nav.title">
					<router-link 
					:to="'manage/' + nav.link" 
					v-text="nav.title"></router-link>
				</li>
			</ul>
		</div>
		<div class="manage_main">
			<transition name="manage_fade">
				<router-view></router-view>
			</transition>
		</div>
		<div class="manage_footer"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				navList: []
			}
		},
		mounted() {
			this.$axios.get("/static/navList.json").then((res)=>{
				if(res.status === 200){
					this.navList = res.data;
				}
			})
		}
	}
</script>

<style scoped="">
	.manage_navList{
		display: inline-block;
		padding: 10px;
	}
	.manage_navList ul{
		list-style: none;
	}

	.manage_main{
		display: inline-block;
	}
</style>