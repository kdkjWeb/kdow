<template>
	<!-- 公告管理 -->
	<div>
		<kdow-table 
		:definition="announcementManage.definition"
		:objects="announcementManage.objects"
		:options="announcementManage.options"
		:config="announcementManage.config"
		:searchModel="announcementManage.searchModel"
		@searchFunc="searchAnnouncementList"
		/>
		<div class="text-center">
			<kdow-filp-pages
			:viewSize="'sm'" 
			:searchModel="announcementManage.searchModel"
			@searchFunc="searchAnnouncementList" />
		</div>
	</div>
</template>
<script type="text/javascript">
	export default require('./announcementManageController.js')
</script>