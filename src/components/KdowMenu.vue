<template>
  <div class="container-fluid noPadding">
    <div class="accordion main">
        <div class="accordion-group" v-for="(nav, index) in navPlatForm"
        :key="nav.title">
            <div class="text-left parent">
                <p data-toggle="collapse" v-if="nav.children" data-parent="#accordion2" :href="'#collapse' + index" >
                   <span v-text="nav.title"></span>
                   <span class="caret rectangle"></span>
                </p>
                <!-- <router-link v-else :to="nav.link" v-text="nav.title"></router-link> -->
            </div>
            <div :id="'collapse' + index" class="accordion-body collapse" style="height: 0px; ">
                <div class="accordion-inner text-center" v-for="(child, _index) in nav.children">
                    <!-- <router-link :to=" '#/backStageManage' +  child.link" v-text="child.title"></router-link> -->
                    <a :href="'#/backStageManage' + child.link" @click="linkActive(index, _index)" v-text="child.title" :class="{
                        'linkActive': child.active
                    }"></a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
   data() {
      return {
          navPlatForm: [{
              title: "用户管理",
              children: [{
                  title: "个人信息",
                  link: "/personalInfor"
              },{
                  title: "密码修改",
                  link: "/modifyPwd"
              },{
                  title: "角色管理",
                  link: "/roleManage"
              },{
                  title: "权限管理",
                  link: "/competenceManage"
              },{
                  title: "用户列表",
                  link: '/userList'
              }]
          },{
              title: "软件管理",
              children: [{
                  title: "上传软件",
                  link: "/uploadSoftware"
              },{
                  title: "软件管理",
                  link: "/softwareManage"
              }]
          },{
              title: "新闻公告管理",
              children: [{
                  title: "轮播管理",
                  link: "/carsoulManage"
              },{
                  title: "新闻管理",
                  link: "/newsManage"
              },{
                  title: "公告管理",
                  link: "/announcementManage"
              }]
          },{
            title: "系统管理",
            children:[{
                title: "日志查看",
                link: "/examineLog"
            },{
                title: "后台审核",
                link: "/backStageAudit"
            }]
          }]
      }
   },
   methods: {
      linkActive(index, _index) {
          for(let value of this.navPlatForm){
            for(let key of value.children){
              this.$set(key, 'active', false)
            }
          }
          this.$set(this.navPlatForm[index].children[_index], 'active', true)
      }
   }
}
</script>


<style scoped>
  .main{
     border-right:  1px solid #222;
  }
  .main p, .main a, .main span{
     color: #fff;
     cursor: pointer;
     position: relative;
     display: block;
     background-color: #333;
  }
  .main a:hover{
     background-color: #777;
  }
  .rectangle{
    position: absolute !important;
    right: 10px;
    top: 20px;
  }
  .accordion-group{
     border-bottom: 1px solid #222;
  }
  .parent{
     height: 40px;
     line-height: 40px;
     padding-left: 25px;
  }
  .accordion-inner{
    height: 40px;
    line-height: 40px;
  }
  .linkActive{
    background-color: #777 !important;
  }
</style>

