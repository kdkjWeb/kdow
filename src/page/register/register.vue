<template>
	<div class="text-center">
		<h2>注册页面</h2>
		<kdow-form 
		:definition="registerForm.definition"
		:objects="registerForm.model"
		:options="registerForm.options"
		@update:model="(model)=>{registerForm.model = model}"/>
		<router-link to="/login">返回登录</router-link>
		<router-link to="/">返回首页</router-link>
	</div>
</template>

<script>
	export default require("./registerController")
</script>

<style></style>