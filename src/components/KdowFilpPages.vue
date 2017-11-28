<template>
<nav aria-label="Page navigation">
	<ul class="pagination"
	:class="'pagination-' + viewSize">
		<li @click="previousPage"
			:class="{'disabled': searchModel.current == 1}">
			<a href="javascript:void(0)" aria-label="Previous">
				<span aria-hidden="true">&laquo;</span>
			</a>
		</li>
		<li><a href=""
			@click="jumpPage($event.target.innerText)"
			v-if="searchModel.current >= 3"
		v-text="1"></a></li>
		<li>
			<span v-if="searchModel.current > 3  ">...</span>
		</li>
		<li><a href="javascript:void(0)"
			v-if="searchModel.current >= 2"
			@click="jumpPage($event.target.innerText)"
		v-text="searchModel.current -1"></a></li>
		<li class="active">
			<a href="javascript:void(0)"
			v-text="searchModel.current"></a>
		</li>
		<li><a href="javascript:void(0)"
			v-if="searchModel.current < Math.ceil(searchModel.total/searchModel.pageSize) - 1"
			@click="jumpPage($event.target.innerText)"
		v-text="searchModel.current + 1"></a></li>
		<li>
			<span v-if="searchModel.current + 1 < Math.ceil(searchModel.total/searchModel.pageSize) - 1  ">...</span>
		</li>
		<li><a href="javascript:void(0)"
			v-if="searchModel.current < Math.ceil(searchModel.total/searchModel.pageSize)"
			v-text="Math.ceil(searchModel.total/searchModel.pageSize)"
			@click="jumpPage($event.target.innerText)"
		:value="Math.ceil(searchModel.total/searchModel.pageSize)"></a></li>
		<li :class="{'disabled': searchModel.current == Math.ceil(searchModel.total/searchModel.pageSize)}" >
			<a href="javascript:void(0)" aria-label="Next" @click="nextPage">
				<span aria-hidden="true">&raquo;</span>
			</a>
		</li>
	</ul>
</nav>
</template>
<script>
	export default{
		data() {
			return {

			}
		},
		props:{
			searchModel:{
				type: Object,
				required: true,
				default() {
					return {}
				}
			},
			viewSize: {
				type: String,
				default: "lg"
			}
		},
		methods: {
			jumpPage(page) {
				this.searchModel.current = parseInt(page);
				this.$emit("searchFunc", this.searchModel);
			},
			previousPage() {
				if(this.searchModel.current == 1){
					return;
				}
				this.searchModel.current --;
				this.$emit("searchFunc", this.searchModel);
			},
			nextPage() {
				if(this.searchModel.current == Math.ceil(this.searchModel.total/this.searchModel.pageSize)){
					return;
				}
				this.searchModel.current ++;
				this.$emit("searchFunc", this.searchModel);
			}
		}
	}
</script>
<style scoped="">

</style>