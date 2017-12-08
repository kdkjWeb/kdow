export default{
    data() {
        return {
            listIndex: 0,
            footerShow: true,
            showLoginDialog:false,
            iconColor: 0,
            banner: {
                src: '../../../static/images/about-banner.jpg',
                href: 'http://www.baidu.com',
                title: '恺缔科技有限公司',
                alt: '这是一张banner图'
            },
            hotProduct: {
                ChineseTitle: '热门产品',
                EnglishTitle: 'HOT PRODUCTS',
                product: [[{
                    src: '../../../static/images/hot-product1.png',
                    title: '产品名称',
                    date: '2017-11-17',
                    author: '不知道',
                    description: '一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！'
                },{
                    src: '../../../static/images/hot-product2.png',
                    title: '产品名称',
                    date: '2017-11-17',
                    author: '不知道',
                    description: '一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！'
                }],[
                    {
                    src: '../../../static/images/hot-product3.png',
                    title: '产品名称',
                    date: '2017-11-17',
                    author: '不知道',
                    description: '一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！'
                }
                ]]
            },
            allProduct: {
                //iconClass: ['icon-shouji','icon-diannao'],
                ChineseTitle: '全部产品',
                EnglishTitle: 'OUR PRODUCTS',
               // title: ['手机端','PC端'],
               title: [{
                name: '手机端',
                iconClass: 'icon-shouji'},{
                name: 'PC端',
                iconClass: 'icon-diannao'}],
                product: [[{
                src: '../../../static/images/allProduct.png',
                title: '产品名称',
                date: '2017-11-17',
                author: '不知道',
                description: '一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！'
            },{
                src: '../../../static/images/allProduct.png',
                title: '产品名称',
                date: '2017-11-17',
                author: '不知道',
                description: '一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！'
            },{
                src: '../../../static/images/allProduct.png',
                title: '产品名称',
                date: '2017-11-17',
                author: '不知道',
                description: '一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！'
            },{
                src: '../../../static/images/allProduct.png',
                title: '产品名称',
                date: '2017-11-17',
                author: '不知道',
                description: '一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！'
            },{
                src: '../../../static/images/allProduct.png',
                title: '产品名称',
                date: '2017-11-17',
                author: '不知道',
                description: '一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！'
            },{
                src: '../../../static/images/allProduct.png',
                title: '产品名称',
                date: '2017-11-17',
                author: '不知道',
                description: '一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！'
            }],[
                {
                src: '../../../static/images/allProduct.png',
                title: '产品名称',
                date: '2017-11-17',
                author: '手机端',
                description: '一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！'
            },{
                src: '../../../static/images/allProduct.png',
                title: '产品名称',
                date: '2017-11-17',
                author: '手机端',
                description: '一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！'
            },{
                src: '../../../static/images/allProduct.png',
                title: '产品名称',
                date: '2017-11-17',
                author: '不知道',
                description: '一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！'
            },{
                src: '../../../static/images/allProduct.png',
                title: '产品名称',
                date: '2017-11-17',
                author: '不知道',
                description: '一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！'
            },{
                src: '../../../static/images/allProduct.png',
                title: '产品名称',
                date: '2017-11-17',
                author: '不知道',
                description: '一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！'
            },{
                src: '../../../static/images/allProduct.png',
                title: '产品名称',
                date: '2017-11-17',
                author: '不知道',
                description: '一款很好用很好用的软件，不骗你你哦！一款很好用很好用的软件，不骗你你哦！'
            }
            ]]
            }
        }
    },
    methods: {
        productShow(index){
            this.listIndex = index;
            this.iconColor = index
        }
    }
}
