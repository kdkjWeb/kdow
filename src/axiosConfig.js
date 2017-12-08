import axios from 'axios'

//配置axios

axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://192.168.20.122:8088/kdkjgw/' //周庭兆
 // axios.defaults.baseURL = 'http://192.168.20.3:8080/kdkjgw/'//张新川
// axios.defaults.baseURL = 'http://192.168.20.2:8888/kdkjgw/'//田涛银
// axios.defaults.baseURL = 'http://192.168.20.8:8080/kdkjgw/'//林晨旭


// axios.defaults.headers['Content-Type'] ='application/x-www-form-urlencoded;charset=UTF-8'

// `transformResponse` 在传递给 then/catch 前，允许修改响应数据
// axios.defaults.transformResponse = [function (response) {
// 	// 对 data 进行任意转换处理
// 	// let data = response.data
// 	return response.data;
// }]
				
export default axios;