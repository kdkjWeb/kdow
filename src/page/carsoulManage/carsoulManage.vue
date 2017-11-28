<template>
	<div>
		<kdow-table 
		:definition="carsoulManage.definition"
		:objects="carsoulManage.objects"
		:options="carsoulManage.options"
		:config="carsoulManage.config"
		:searchModel="carsoulManage.searchModel"
		@searchFunc="searchCarsoulManageList"
		/>
		<div class="text-center">
			<kdow-filp-pages
			:viewSize="'sm'" 
			:searchModel="carsoulManage.searchModel"
			@searchFunc="searchCarsoulManageList" />
		</div>
	</div>
</template>
<script type="text/javascript">
	export default require('./carsoulManageController')
</script>