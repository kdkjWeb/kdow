//路由文件
// import helloWorld from './components/HelloWorld.vue'
import formTest from './page/formtest/formtest.vue'
import tableTest from './page/tableTest/tableTest.vue'

import index from './page/index/index.vue'
import news from './page/news/news.vue'
import newsDetail from './page/newsDetail/newsDetail.vue'

import register from './page/register/register.vue'

import login from './page/login/login.vue'

import manage from './page/manage/manage.vue'
import users from './page/users/users.vue'

import backStageManage from './page/backStageManage/backStageManage.vue'
import personalInfor from './page/personalInfor/personalInfor.vue'
import modifyPwd from './page/modifyPwd/modifyPwd.vue'
import roleManage from './page/roleManage/roleManage.vue'
import competenceManage from './page/competenceManage/competenceManage.vue'
import uploadSoftware from './page/uploadSoftware/uploadSoftware.vue'
import softwareManage from './page/softwareManage/softwareManage.vue'
import carsoulManage from './page/carsoulManage/carsoulManage.vue'
import newsManage from './page/newsManage/newsManage.vue'
import announcementManage from './page/announcementManage/announcementManage.vue'
import examineLog from './page/examineLog/examineLog.vue'
import backStageAudit from './page/backStageAudit/backStageAudit'
import userList from './page/userList/userList'

export default [{
	path: '/formtest',
	name: 'formtest',
    component: formTest
},{
	path: '/tableTest',
	name: 'tableTest',
	component: tableTest
},{
	path: '/',
	name: 'index',
	component: index,
	// children:[{
	// 	path: 'news',
	// 	name: 'news',
	// 	component: news
	// },{
	// 	path: 'newsDetail',
	// 	name: 'newsDetail',
	// 	component: newsDetail
	// }]
},{
	path: '/manage',
	name: 'manage',
	component: manage,
	children:[{
		path: 'users',
		name: 'users',
		component: users
	}]
},{
	path: '/news',
	name: 'news',
	component: news
},{
	path: '/newsDetail',
	name: 'newsDetail',
	component: newsDetail
},{
	path:'/register',
	name: 'register',
	component: register
},{
	path: '/login',
	name: 'login',
	component: login
},{
	path: '/backStageManage',
	name: 'backStageManage',
	component: backStageManage,
	children: [{
		path: 'personalInfor',
		name: 'personalInfor',
		component: personalInfor
	},{
		path: 'modifyPwd',
		name: 'modifyPwd',
		component: modifyPwd
	},{
		path: 'roleManage',
		name: 'roleManage',
		component: roleManage
	},{
		path: 'competenceManage',
		name: 'competenceManage',
		component: competenceManage
	},{
		path: 'uploadSoftware',
		name: 'uploadSoftware',
		component: uploadSoftware
	},{
		path: 'softwareManage',
		name: 'softwareManage',
		component: softwareManage
	},{
		path: 'carsoulManage',
		name: 'carsoulManage',
		component: carsoulManage
	},{
		path: 'newsManage',
		name: 'newsManage',
		component: newsManage
	},{
		path: 'announcementManage',
		name: 'announcementManage',
		component: announcementManage
	},{
		path: 'examineLog',
		name: 'examineLog',
		component: examineLog
	},{
		path: 'backStageAudit',
		name: 'backStageAudit',
		component: backStageAudit
	},{
		path: 'userList',
		name: 'userList',
		component: userList
	}]
}]