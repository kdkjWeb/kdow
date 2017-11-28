<template>
	<div>
		<kdow-form 
		:definition="modifyPwd.definition"
		:objects="modifyPwd.model"
		:options="modifyPwd.options"/>
	</div>
</template>
<script type="text/javascript">
	export default require('./modifyPwdController')
</script>