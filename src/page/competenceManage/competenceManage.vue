<template>
	<div>
		<kdow-table 
		:definition="competenceManage.definition"
		:objects="competenceManage.objects"
		:options="competenceManage.options"
		:config="competenceManage.config"
		:searchModel="competenceManage.searchModel"
		@searchFunc="searchMompetenceList"
		/>
		<div class="text-center">
			<kdow-filp-pages
			:viewSize="'sm'" 
			:searchModel="competenceManage.searchModel"
			@searchFunc="searchMompetenceList" />
		</div>
	</div>
</template>
<script type="text/javascript">
	export default require('./competenceManageController')
</script>