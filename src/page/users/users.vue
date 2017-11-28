<template>
	<div>
		<kdow-table 
		:definition="users.definition"
		:objects="users.objects"
		:options="users.options"/>
	</div>
</template>
<script>
	export default require("./usersController")
</script>
<style></style>