<template>
	<div>
		<table class="table table-hover noMargin">
			<caption>
				<p class="text-left col-md-6">
					<span v-text="config.title"></span>
					<span>
						<button 
						v-if="options.create && options.create.enable"
						v-text="options.create.name?options.create.name:'新建'"
						@click.stop="createBtnClick"></button>
					</span>
				</p>
				<div class="search text-right col-md-6"
				v-if="options.search && options.search.enable">
					<span 
					v-for="def in definition"
					:key="def.id" 
					v-if="def.searchable"
					style="margin: 0 10px">
					    <span v-text="def.name"></span>
						<input type="text"
						v-if="def.type == 'string'"
						style="padding: 1px 10px; width:120px;margin-left:3px"
						v-model="searchModel[def.id]">
						<input type="date"
						v-if="def.type == 'date'"
						style="padding: 1px 10px; width:120px;margin-left:3px"
						v-model="searchModel[def.id]">
					</span>
					<span>
						<button @click="search">搜索</button>
					</span>
				</div>
			</caption>
			<thead>
				<tr>
					<th
					class="text-center"
					v-if="!config.noIndex">序号</th>
					<th
					style="max-width:300px;overflow: hidden;text-overflow:ellipsis;white-space:nowrap"
					class="text-center"
					v-for="def in definition"
					:key="def.id"
					v-if="!def.hiddenInTable"
					v-text="def.name"></th>
					<th
					class="text-center"
					v-if="!config.noOptions">操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(obj, index) in objects">
					<td
					class="text-center"
					v-if="!config.noIndex" 
					v-text="index + 1"></td>
					<td
					style="max-width:300px;overflow: hidden;text-overflow:ellipsis;white-space:nowrap"
					class="text-center"
					v-for="def in definition"
					v-if="!def.hiddenInTable"
					v-text="def.render?def.render(obj[def.id]):obj[def.id]"></td>
					<td
					class="text-center"
					v-if="!config.noOptions">
						<button 
						v-if="options.detail && options.detail.enable"
						v-text="options.detail.name?options.detail.name:'详细'"
						@click.stop="detailBtnClick(obj)"></button>
						<button
						v-if="options.edit && options.edit.enable"
						v-text="options.edit.name?options.edit.name:'修改'"
						@click.stop="editBtnClick(obj)"></button>
						<button
						v-if="options.delete && options.delete.enable"
						@click="showConfirmDelete($event)"
						v-text="options.delete.name?options.delete.name:'删除'"></button>
						<span hidden>
							<button 
						    class="confirmDelete"
						    @click.stop="confirmDelete(obj, $event)">删除</button>
						    <button @click.stop="hiddenConfirmDelete($event)">取消</button>
						</span>
						<span
						v-if="options.extraBtn"> 
							<button
							v-if="(typeof(btn.enable) == 'function'?btn.enable(obj):btn.enable)" 
							v-for="btn in options.extraBtn"
							:key="btn.name"
							v-text="btn.name"
							@click="btn.action(obj)"></button>
						</span>
						
					</td>
				</tr>
			</tbody>
		</table>

		<!-- 新建表单 -->
		<kdow-dialog 
		:showDialog="createForm.show"
		@dialogCancel="createFormCancel"
		@dialogSubmit="createFormSubmit">
			<kdow-form 
			:definition="createForm.definition"
			:objects="createForm.model"
			@update:model="(model)=>{createForm.model = model}"/>
		</kdow-dialog>

        <!-- 修改表单 -->
		<kdow-dialog 
		:showDialog="editForm.show"
		@dialogCancel="editFormCancel"
		@dialogSubmit="editFormSubmit(editForm.model)">
			<kdow-form 
			:definition="editForm.definition"
			:objects="editForm.model"
			@update:model="(model)=>{editForm.model = model}"/>
		</kdow-dialog>

		<!-- 详情表单 -->
		<kdow-dialog 
		:showDialog="detailForm.show"
		@dialogCancel="detailFormCancel"
		@dialogSubmit="detailFormSubmit">
			<kdow-form 
			:definition="detailForm.definition"
			:objects="detailForm.model"
			@update:model="(model)=>{detailForm.model = model}"/>
		</kdow-dialog>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				editForm:{
					show: false,
					model: {},
					definition: []
				},
				detailForm: {
					show: false,
					model: {},
					definition: []
				},
				createForm: {
					show: false,
					model: {},
					definition: []
				}
			}
		},
		mounted() {
			this.definitionEditableListenner();
			this.definitionDetailListenner();
			this.definitionCreateListernner();
		},
		watch: {
			'definition': {
				handler() {
					this.definitionEditableListenner();
					this.definitionCreateListernner();
				},
				deep: true
			}
		},
		props:{
			/**
			 * [definition description] 表格定义
			 * @type {Object}
			 */
			definition:{
				type:Array,
				required: true,
				default() {
					return []
				}
			},
			/**
			 * [objects description] 表格数据
			 * @type {Object}
			 */
			objects: {
				type: Array,
				required: true,
				default() {
					return []
				}
			},
			/**
			 * [options description] 表格按钮的配置
			 * @type {Object}
			 */
			options:{
				type: Object,
				default() {
					return {}
				}
			},
			/**
			 * [config description] 表格整体的配置
			 * @type {Object}
			 */
			config: {
				type: Object,
				default() {
					return {}
				}
			},
			/**
			 * [searchModel description] 控制表格分页以及查询的model
			 * @type {Object}
			 */
			searchModel: {
				type: Object,
				required: true,
				default() {
					return {}
				}
			}
		},
		methods:{
			/*search btn methods */
			async search() {
				if(this.options.search && this.options.search.action){
					console.log(12313)
					const result = await this.options.search.action(this.searchModel)
					if(result.code === 0){

						this.objects = result.data;
					}else{
						console.log(result)
						this.$toast("请求超时了请检查网络")
					}
				}else{
					this.$emit('searchFunc', this.searchModel)
				}
				
			},
			/*create btn methods*/
			createFormCancel() {
				this.createForm.show = false;
			},
			async createFormSubmit() {
				const result = await this.options.create.action(this.createForm.model)
				console.log(result);
				if(result.code === 0){
					//将数据放在数组第一个, total数++
					this.searchModel.total ++
					this.objects.unshift(result.data)
					
					//请求成功隐藏form
					this.createForm.model = {}
					this.createForm.show = false;
				}else{
					console.log(result)
					this.$toast("请求超时了请检查网络")
				}
			},
			createBtnClick() {
				this.createForm.show = true
			},
			/*detail btn methods*/
			detailBtnClick(data) {
				// console.log(data, this.deepClone);
				const model = JSON.parse(JSON.stringify(data))
				this.$set(this.detailForm, 'model', model)
				this.detailForm.show = true;
			},
			detailFormCancel() {
				this.detailForm.show = false;
			},
			detailFormSubmit() {
				this.detailForm.show = false;
			},

			/*edit btn methods*/
			editBtnClick(data) {
				const model = JSON.parse(JSON.stringify(data))
				this.$set(this.editForm, 'model', model);
				this.editForm.show = true;
			},
			editFormCancel() {
				this.editForm.show = false;
			},
			async editFormSubmit(data) {
				const result = await this.options.edit.action(this.editForm.model);
				if(result.code === 0){
					//将返回的数据替换原有数据
					const _index = this.objects.findIndex((obj)=>{
						return data.id === obj.id
					})
					this.$set(this.objects, _index, result.data)
					//请求成功隐藏form
					this.editForm.model = {}
					this.editForm.show = false;
				}else{
					console.log(result)
					this.$toast("请求超时了请检查网络")
				}
			},
			/*delete btn methods*/
			showConfirmDelete(event){
				event.target.hidden = true;
				event.target.nextElementSibling.hidden = false;
			},
			hiddenConfirmDelete(event) {
				event.target.parentElement.previousElementSibling.hidden = false;
				event.target.parentElement.hidden = true;
			},
			async confirmDelete(data, event){
				const result = await this.options.delete.action(data)
				if(result.code === 0){
					//删除成功, 将数据从objects中删除, 将total数--
					const _index = this.objects.findIndex((obj)=>{
						return data === obj
					})
					this.objects.splice(_index, 1)
					this.searchModel.total --
					//隐藏删除确认按钮,
					this.hiddenConfirmDelete(event);
				}else{
					console.log(result)
					this.$toast("请求超时了请检查网络")
				}
				
			},


			/*以下为工具方法,即按钮不会调用的方法*/
			definitionCreateListernner() {
				let defArr = [];
				for(let i = 0 ; i < this.definition.length; i++){
					if(this.definition[i].createable){
						defArr.push(this.definition[i]);
					}
				}
				this.$set(this.createForm, 'definition', defArr);
			},
			definitionEditableListenner() {
				let defArr = [];
				for(let i = 0 ; i < this.definition.length; i++){
					if(this.definition[i].editable){
						defArr.push(this.definition[i]);
					}
				}
				this.$set(this.editForm, 'definition', defArr);
			},
			definitionDetailListenner() {
				let defArr = this.deepClone(this.definition);
				for(let i = 0 ; i < defArr.length; i++){
					defArr[i].disabled = true;
				}
				this.$set(this.detailForm, 'definition', defArr);
			}
		}
	}
</script>
<style scoped="">
    .confirmDelete{
	background-color: red;
	border: none;
	border-radius: 5px;
	padding: 1px 3px;
	outline: none;
	color:  #fff;
}
</style>