<template>
	<div class="main">
		<div
		class="text-center" 
		v-if="!muiltiPages"
		v-for="def in definition"
		:key="def.id">
            <span v-if="!def.hiddenLabel" v-text="def.name + ':'"></span>
			<kdow-input 
			:half="def.half"
		    :input-type="def.type"
		    :input-config="def.config"
		    :input-ico="def.icon"
		    :isRadiusInput="def.isRadiusInput"
		    :disabled="def.disabled"
		    :input-validator="def.validator"
		    :place-holder="def.placeHolder"
		    v-model="model[def.id]"
		    @update:value="(val)=>{$set(model, def.id, val)}"/>
		    <span v-if="def.important" class="red">*</span>
		    <button
		    v-if="def.afterBtn"
		    v-text="def.afterBtn.name"
		    :disabled="def.afterBtn.disabled"
		    @click.stop="def.afterBtn.clickFunc(model)"></button>
		</div>
		<div v-if="options" class="form_btn text-center">
			<button 
			v-if="options.submit && options.submit.enable"
			v-text="options.submit.name || '提交'"
			@click="submit(model)"></button>
		</div>
	</div>
</template>
<script>
    /**
     * @author: lbl
     * @useAge: <kdow-form
     *          definition="Array"
     *          model="Object"
     *          @update:model="(model)=>{parentModel = model}"/>
     *
     * description:   definition: 定义表单的所有输入信息等,
     *                objects: 定义表单所储存的model,
     *                @update:model: 框架原因, 将子组件的值传递给父组件
     *
     *          如果需要设置初始值请在模块的 objects中定义初始值即可
     */
	export default {
		data(){
			return {
				model: this.objects,
				currentPage: 1
			}
		},
		watch: {
			'model':{
				deep: true,
				handler(val){
					this.$emit('update:model', this.model)
				}
			},
		},
		props: {
			definition:{
				type: Array,
				required: true,
				default() {
					return []
				}
			},
			objects: {
				type: Object,
				required: true,
				default() {
					return {}
				}
			},
			options: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		methods:{
			submit() {
				if(this.options.submit.validator){
					const res = this.options.submit.validator();
				}
				this.options.submit.action(this.model)
			}
		}
	}
</script>
<style scoped="">
button{
	padding: 7px 20px;
	color: #fff;
	border-radius: 20px;
	border: none;
	margin: 0 0 0 25px;
	background: url('/static/register/after_btn.png') no-repeat 5px;
}
</style>