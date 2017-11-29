export default{
    data() {
        return {
            isShowDelet: false,
            listIndex: '',
            listIndex1: null,
            isHeader: false,
            maShow: false,
            headerPhone: {
                src: '../../../static/images/headerPhone.png'
            },
            headerName: {
                id: 1,
                name: '用户昵称',
                title: '希望你在这个平台能够玩的愉快'
            },
            headerTitle: ['我的作品','我的资料','上传'],
            centerProduct1: [{
                src: '../../../static/images/centerProduct5.jpg',
                name: '作品命名',
                notes: '待审核'
            },{
                src: '../../../static/images/centerProduct6.jpg',
                name: '作品命名',
                notes: '待审核'
            }],
            centerProduct: [{
                src: '../../../static/images/centerProduct1.jpg',
                name: '作品命名',
                notes: '待审核',
                staus: 0
            },{
                src: '../../../static/images/centerProduct2.jpg',
                name: '作品命名',
                notes: '已发布',
                staus: 1
            },{
                src: '../../../static/images/centerProduct3.jpg',
                name: '作品命名',
                notes: '待审核',
                staus: 0
            },{
                src: '../../../static/images/centerProduct4.jpg',
                name: '作品命名',
                notes: '已发布',
                staus: 1
            },{
                src: '../../../static/images/centerProduct1.jpg',
                name: '作品命名',
                notes: '待审核',
                staus: 0
            },{
                src: '../../../static/images/centerProduct2.jpg',
                name: '作品命名',
                notes: '已发布',
                staus: 1
            },{
                src: '../../../static/images/centerProduct3.jpg',
                name: '作品命名',
                notes: '待审核',
                staus: 0
            },{
                src: '../../../static/images/centerProduct4.jpg',
                name: '作品命名',
                notes: '已发布',
                staus: 1
            }]
        }
    },
     methods:{
        closeDelet(index,){
            this.isShowDelet = true;
            this.listIndex = index;
            this.listIndex1 = index;
        },
        closeDialog(){
            this.isShowDelet = false;
            this.listIndex1 = null;
        },
        delet(){
            this.isShowDelet = false;
            this.centerProduct.splice(this.listIndex,1);
            this.listIndex1 = null;
        },
        header(){
            this.isHeader = true;
            this.maShow = true
        },
        close(){
            this.isHeader = false;
            this.maShow = false
        }
    }
}
