<template>
	<div>
		<kdow-table 
		:definition="examineLog.definition"
		:objects="examineLog.objects"
		:options="examineLog.options"
		:config="examineLog.config"
		:searchModel="examineLog.searchModel"
		@searchFunc="searchExamineLog"
		/>
		<div class="text-center">
			<kdow-filp-pages
			:viewSize="'sm'" 
			:searchModel="examineLog.searchModel"
			@searchFunc="searchExamineLog" />
		</div>
	</div>
</template>
<script type="text/javascript">
	export default require('./examineLogController')
</script>