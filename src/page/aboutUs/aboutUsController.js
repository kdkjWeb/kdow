//import AMap from 'AMap'
//var map
//let amapManager = new VueAMap.AMapManager();
export default{
    data() {
        return {
            isFooter: false,
            footerShow: true,
            tabIndex: 2,
            teamIndex:2,
            lastIndex:0,
            scroll: '',
            topH: '',
            banner: {
                src: '../../../static/images/about-banner.png',
                href: 'http://www.baidu.com',
                title: '恺缔科技有限公司',
                alt: '这是一张banner图'
            },
            CompanyLeft: {
                BigTitle: '公司简介',
                SmallTitle: 'COMPANY PROFILE',
                ChineseIntroduce: '恺缔科技，我们不只是一个做软件的公司,更是一家健康、良好、有活力的科技型公司。我们致力于把软件或其余科技型产业做好，并且实现内容的多样化。公司秉承“永续经营，稳步发展，引领科技，以人为本”的理念，通过对资源的充分整合让各成员共享一个互联网+的时代盛宴！',
                EnglishIntroduce:'K.D.Sci.&Tech.    we are not just a software company, but also a healthy, good,dynamicTechnology companies. We are committed to the software or other science and technology industries, and to achieve the diversification of content. public Secretary adhering to the "sustainable development, steady development,leading technology, people-oriented" concept, through the full and adequate resourcesConcession members to share an Internet + feast of the times!'
            },
            CompanyRight: {
                src: '../../../static/images/aboutus-company.png'
            },
            service: {
                ServiceTitle: '全新服务体验',
                ServiceTitle1: '我们拥有丰富的互联网从业经验，为您提供专业级的技术服务',
                ServiceCom: [{
                    src: '../../../static/images/WebDesign.png',
                    ChineseTitle: '网站设计',
                    EnglishTitle: 'Website development',
                    com: '购物、企业网站开发'
                },{
                    src: '../../../static/images/application.png',
                    ChineseTitle: '微信应用',
                    EnglishTitle: 'Wexin application',
                    com: 'H5推广、宣传页、小程序、商城'
                },{
                    src: '../../../static/images/system.png',
                    ChineseTitle: '管理系统开发',
                    EnglishTitle: 'management',
                    com: '库存、销售管理、办公系统'
                },{
                    src: '../../../static/images/app.png',
                    ChineseTitle: 'APP 开发',
                    EnglishTitle: 'App development',
                    com: '游戏、社交应用、购物支付'
                }]
            },
            team: {
                ChineseTitle: '我们的团队',
                EnglishTitle: 'OUR TEAM',
                OurTeam: [{
                    src: '../../../static/images/our-1.png',
                    title: '我们的第一个成员',
                    alt: '我们的第一个成员'
                },{
                    src: '../../../static/images/our-2.png',
                    title: '我们的第二个成员',
                    alt: '我们的第二个成员'
                },{
                    src: '../../../static/images/our-3.png',
                    title: '我们的第三个成员',
                    alt: '我们的第三个成员'
                },{
                    src: '../../../static/images/our-4.png',
                    title: '我们的第四个成员',
                    alt: '我们的第四个成员'
                },{
                    src: '../../../static/images/our-5.png',
                    title: '我们的第五个成员',
                    alt: '我们的第五个成员'
                }]
            },
            vision: {
                ChineseVision: '我们一直在超越：不断在成长，我们更用心：我们将更好：我们更努力成为第一',
                EnglishVision: 'We’ve been transcending: Growing, We are more mindful: We will be better:',
                EnglishVision1: 'We are not the first, So we try harder'
            },
            ContactInformation: {
                ChindeseInformation: '联系方式',
                EnglishInformation: 'CONTACT US'
            },
            address: {
                ChindeseAddress: '地理坐标',
                EnglishAddress: 'COORDINATE'
            },
            map: {
                //amapManager,
                zoom: 15,
                //center: [104.072528,30.550361],
                center: [104.072528,30.549361],
                position: [104.066290,30.549261],
                content: '成都科技节能大厦A座702室'
            }
        }
    },
     methods: {
        show(index) {
           this.lastIndex = this.tabIndex;
           this.tabIndex = index;
           let num = this.tabIndex - this.lastIndex;
           console.log(num);
           if(num<0){
                let num1 = Math.abs(num);
                let team3 = this.team.OurTeam.splice(this.team.OurTeam.length-num1,num1);
                this.team.OurTeam.unshift.apply(this.team.OurTeam,team3);
           }
           else if(num){
                let team2 = this.team.OurTeam.splice(0,num);
                this.team.OurTeam.push.apply(this.team.OurTeam,team2);
            }

        },
        pre(){
            if(this.tabIndex === 0){
                this.tabIndex = this.team.OurTeam.length - 1
              }else{
                this.tabIndex -=1
              }
            let team = this.team.OurTeam.shift();
            this.team.OurTeam.push(team);
        },
        next(){
            //this.tabIndex +=1;
            if(this.tabIndex === this.team.OurTeam.length - 1){
                this.tabIndex = 0
              }else{
                this.tabIndex += 1
              }
            let team1 = this.team.OurTeam.pop();
            this.team.OurTeam.unshift(team1);
        },
        scrollTop(){
            this.scroll = document.body.scrollTop;
            if(this.scroll>this.topH){
                //console.log(this.scroll-this.topH)
                //this.$refs.serviceImg.style.marginTop=this.topH-this.scroll+'px';
            }
           // console.log(this.scroll)
        }
     },
     mounted() {
        window.addEventListener('scroll',this.scrollTop);
        // let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
        this.topH = this.$refs.service.offsetHeight;

     }
}
