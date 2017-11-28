<template>
	<!-- 新闻管理 -->
	<div>
		<kdow-table 
		:definition="newsManage.definition"
		:objects="newsManage.objects"
		:options="newsManage.options"
		:config="newsManage.config"
		:searchModel="newsManage.searchModel"
		@searchFunc="searchNewsList"
		/>
		<div class="text-center">
			<kdow-filp-pages
			:viewSize="'sm'" 
			:searchModel="newsManage.searchModel"
			@searchFunc="searchNewsList" />
		</div>
	</div>
</template>
<script type="text/javascript">
	export default require('./newsManageController.js')
</script>