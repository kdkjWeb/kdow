export default{
   data(){
    return {
        isShowDelet: false,
        isFirst: false,
        isSeconed: false,
        maShow: false,
        focusState: false,
        getPhone: null,
        getPassword: null,
        perList: [{
            title: '用户名',
            con: '123',
            btn: '编辑',
            disabled:true,
            type: 'text',
            isShow1: true
        },{
            title: '手机号',
            con: '1234567890',
            btn: '编辑',
            disabled:true,
            type: 'number',
            isShow1: true,
            code: true
        },{
            title: '邮箱',
            con: '1270201010@qq.com',
            btn: '编辑',
            disabled:true,
            type: 'email',
            isShow1: true
        },{
            title: '密码',
            con: '123',
            btn: '编辑',
            disabled:true,
            type: 'password',
            isShow1: true
        },{
            title: '简介',
            con: '我是一个新用户',
            btn: '编辑',
            disabled:true,
            // type: 'text',
            isShow: true,
            isShow1: false
        }]
    }
   },
   methods: {
    edit(index){
        this.perList[index].disabled = false;
        if(index == 3){
            this.perList[index].disabled = true;
            this.isShowDelet = true;
            this.isFirst = true;
            this.maShow = true,
            this.getPassword = this.perList[index].con;
            console.log(this.getPassword);
        }else if(index == 1){
            this.perList[index].disabled = true;
            this.isShowDelet = true;
            this.isSeconed = true;
            this.maShow = true;
            this.getPhone = this.perList[index].con;
        }else if(index == 0){
            this.perList[index].con = '',
            this.focusState = true
        }else if(index == 2){
            this.perList[index].con = '',
            this.focusState = true
        }
    },
    close(){
        this.isShowDelet = false;
        this.isFirst = false;
        this.isSeconed = false;
        this.maShow = false
    },
    success(newsPhone){
        this.isShowDelet = false;
        this.isFirst = false;
        this.maShow = false;
        this.perList[1].con = newsPhone;
    }

   },
   directives: {
    focus: {
      //根据focusState的状态改变是否聚焦focus
      update: function (el, value) {
        if (value) {
          el.focus()
        }
      }
    }
  }
}
