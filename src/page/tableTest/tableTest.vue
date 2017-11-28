<template>
	<div>
		<kdow-table
		:definition="tableTest.definition"
		:objects="tableTest.objects"
		:config="tableTest.config"
		:options="tableTest.options"
		:title="tableTest.title"/>
	</div>
</template>

<script>
	export default require('./tableTestController.js')
</script>

<style>
	
</style>