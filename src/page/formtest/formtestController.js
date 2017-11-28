export default {
	data() {
		return {
			show: false,
			/**
			passwordInput:{
				id: 'userPassword',
				type: 'password',
				name: '密码'
			},
			msg: '测试一下',
			textValue: '999',
			passwordValue: "lbl123",
			numberValue: 555,
			selectInput:{
				value: null,
				options:{
					options:[{
				        label: '第一',
				        key: 1
			        },{
				        label: '第二',
				        key: 2
			        },{
				        label: '第三',
				        key: 3
			        }]
				}
			},
			fileValue: null,
			rangeSelect:{
				from: null,
				to: null,
				options:{options:[{
					label: '第一',
				    key: 1
				},{
					label: '第二',
				    key: 2
				}]}
			},
			checkBox:{
				value: [],
				options: {options: [{
					label: '选择一',
					key: 1,
					checked: true
				},{
					label: '选择二',
					key: 2,
					checked: true
				},{
					label: '选择三',
					key: 3
				}]}
			},
			radioBox: {
				value: null,
				options:{options: [{
					label: '选择一',
					key: 1,
					checked: true
				},{
					label: '选择二',
					key: 2,
				},{
					label: '选择三',
					key: 3
				}],name: 'youChose',}
			},
			ajaxSyncInput: {
				value: null,
				options:{
					url: '/static/test.json',
					key: 'userId',
					label: 'userName'
				}
			},
			ajaxSyncArrInput: {
				value: [],
				options: {
					url: '/static/test.json',
					key: 'userId',
					label: 'userName'
				}
			}
			**/
			form:{
				definition:[{
					id: "stringInput",
					name: "普通输入框",
					type: "string",
					important: true,
					validator(data) {
						console.log(data.length)
						return 'sdasd'
					}
				},{
					id: "passwordInput",
					name: "密码输入框",
					type: "password",
					validator(data) {
						return data.length >6
					}
				},{
					id: "numberInput",
					name: "数字输入框",
					type: "number"
				},{
					id: "selectInput",
					name: "选择输入框",
					type: "select",
					config:{
						options:[{
				            label: '第一',
				            key: 1
			            },{
				            label: '第二',
				            key: 2
			            },{
				            label: '第三',
				            key: 3
			            }]
					}
				},{
					id: "fileInput",
					name: "文件输入框",
					type: "file"
				},{
					id: "rangeSelectInput",
					name: "范围选择框",
					type: "rangeSelect",
					config:{
						options:[{
				            label: '第一',
				            key: 1
			            },{
				            label: '第二',
				            key: 2
			            },{
				            label: '第三',
				            key: 3
			            }]
					}
				},{
					id: "checkBoxInput",
					name: "多选输入框",
					type: "checkBox",
					config:{
						options:[{
				            label: '第一',
				            key: 1,
				            checked: true
			            },{
				            label: '第二',
				            key: 2
			            },{
				            label: '第三',
				            key: 3
			            }]
					}
				},{
					id: "radioBoxInput",
					name: "单选输入框",
					type: "radio",
					config:{
						name: "radioBoxInput",
						options:[{
				            label: '第一',
				            key: 1,
				            checked: true
			            },{
				            label: '第二',
				            key: 2
			            },{
				            label: '第三',
				            key: 3
			            }]
					}
				},{
					id: "ajaxSyncInput",
					name: "ajax异步输入框",
					type: "ajaxSyncInput",
					config:{
						url: '/static/test.json',
					    key: 'userId',
					    label: 'userName'
					}
				},{
					id: "ajaxSyncArrInput",
					name: "ajax异步数组输入框",
					type: "ajaxSyncArrInput",
					config: {
						url: '/static/test.json',
					    key: 'userId',
					    label: 'userName'
					}
				}],
				objects: {},
				// options,
			}
		}
	},
	methods:{
		printSomething() {
			this.show = !this.show;
		},
		submitForm() {
			console.log(this.form.objects);
		},
		beforeEnter(el) {
			el.style.opacity = 0
	        el.style.transformOrigin = 'left'
		},
		enter(el, done){
			 this.$Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
		     this.$Velocity(el, { fontSize: '1em' }, { complete: done })
		},
		leave(el, done){
			 this.$Velocity(el, { opacity: 0}, { duration: 600, complete: done })
		}
	}
}