<template>
	<div>
		<kdow-form 
		:definition="personalInfor.definition"
		:objects="personalInfor.model"
		:options="personalInfor.options"/>
	</div>
</template>
<script>
	export default require('./personalInforController.js')
</script>
<style type="text/css" scoped>
	
</style>