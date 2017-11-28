<template>
	<div>
		<kdow-table 
		:definition="softwareManage.definition"
		:objects="softwareManage.objects"
		:options="softwareManage.options"
		:config="softwareManage.config"
		:searchModel="softwareManage.searchModel"
		@searchFunc="searchSoftwareList"
		/>
		<div class="text-center">
			<kdow-filp-pages
			:viewSize="'sm'" 
			:searchModel="softwareManage.searchModel"
			@searchFunc="searchSoftwareList" />
		</div>
	</div>
</template>
<script type="text/javascript">
	export default require('./softwareManageController')
</script>