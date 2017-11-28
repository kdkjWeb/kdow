import alertVue from './Alert.vue'

let Alert = {};

Alert.install = (Vue, options)=>{

	Vue.prototype.$alert = (message) =>{

		let alertConstructor = Vue.extend(alertVue);
		let alert = new  alertConstructor().$mount();

		alert.show = true;
		alert.message = message;

		Vue.nextTick(()=>{
			document.body.appendChild(alert.$el);
		})
	}
}

export default Alert