<template>
	<!-- 后台审核	 -->
	<div>
		<kdow-table 
		:definition="backStageAudit.definition"
		:objects="backStageAudit.objects"
		:options="backStageAudit.options"
		:config="backStageAudit.config"
		:searchModel="backStageAudit.searchModel"
		@searchFunc="searchBackStageAuditList"
		/>
		<div class="text-center">
			<kdow-filp-pages
			:viewSize="'sm'" 
			:searchModel="backStageAudit.searchModel"
			@searchFunc="searchBackStageAuditList" />
		</div>

	</div>
</template>
<script type="text/javascript">
	export default require('./backStageAuditController.js')
</script>