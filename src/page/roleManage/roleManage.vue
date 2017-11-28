<template>
	<div>
		<kdow-table 
		:definition="roleManage.definition"
		:objects="roleManage.objects"
		:options="roleManage.options"
		:config="roleManage.config"
		:searchModel="roleManage.searchModel"
		@searchFunc="searchRoleList"
		/>
		<div class="text-center">
			<kdow-filp-pages
			:viewSize="'sm'" 
			:searchModel="roleManage.searchModel"
			@searchFunc="searchRoleList" />
		</div>
		<!-- 分配权限 -->
		<kdow-dialog 
		:showDialog="distributeRoleDialog.show"
		@dialogCancel="distributeRoleDialogCancel"
		@dialogSubmit="distributeRoleDialogSubmit">
			<p>
				<span>当前权限:</span>
				<span v-text="distributeRoleDialog.currentCompetences"></span>
			</p>
			<kdow-form 
			:definition="distributeRoleDialog.distributeRoleForm.definition"
			:objects="distributeRoleDialog.distributeRoleForm.model"
			@update:model="(model)=>{distributeRoleDialog.distributeRoleForm.model = model}"
			/>
		</kdow-dialog>
	</div>
</template>
<script type="text/javascript">
	export default require('./roleManageController')
</script>