export default{
    data() {
        return {
            isShowDelet: false,
            listIndex: '',
            listIndex1: null,
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
        }

    },
   mounted(){
         this.$axios.post('file/add')
        .then(response=>{
           // console.log(response)
           this.centerProduct1 = response.data.message.slice(0,1);
           this.centerProduct = response.data.message.splice(0,2)
        })
        .catch(error=>{
            console.log(error)
        })
    }
}
