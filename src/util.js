//全局变量、方法文件
export default {
	install(Vue, options){
		/**
		 * 验证多选框的值是否已被选中
		 * @param  {[type]} 多选框的model
		 * @param  {[type]} 点击选中的值
		 */
		Vue.prototype.setCheckBoxValue = (arr, val)=> {
			if(arr.indexOf(val) == -1){
				arr.push(val);
			}else{
				arr.splice(arr.indexOf(val), 1);
			}
			return arr;
		},
		/**
		 *  深浅拷贝
		 * @param  {[type]} 需要拷贝的对象
		 * @return {[type]} 拷贝完成的对象
		 */
		Vue.prototype.deepClone = function(obj){
			let newObj = obj.constructor === Array? [] : {};
			if(typeof obj !== 'object'){
				return;
			}else{
				for(let index in obj){
					newObj[index] = typeof obj[index] === 'object' ?
					this.deepClone(obj[index]) : obj[index]
				}
			}
			return newObj;
		},
		Vue.prototype.pageSize = 10
		Vue.prototype.maxPageSize = 99999

	}
}
