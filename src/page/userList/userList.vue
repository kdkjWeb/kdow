<template>
	<!-- 用户管理 -->
	<div>
		<kdow-table 
		:definition="userList.definition"
		:objects="userList.objects"
		:options="userList.options"
		:config="userList.config"
		:searchModel="userList.searchModel"
		@searchFunc="searchUserList"
		/>
		<div class="text-center">
			<kdow-filp-pages
			:viewSize="'sm'" 
			:searchModel="userList.searchModel"
			@searchFunc="searchUserList" />
		</div>
		<!-- 分配角色 -->
		<kdow-dialog 
		:showDialog="distributeRoleDialog.show"
		@dialogCancel="distributeRoleDialogCancel"
		@dialogSubmit="distributeRoleDialogSubmit">
			<p>
				<span>当前角色:</span>
				<span v-text="distributeRoleDialog.currentRoles"></span>
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
	export default require('./userListController')
</script>