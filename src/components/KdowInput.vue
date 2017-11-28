<template>
   <div style="display: inline-block" class="form-group">
      <!-- 字符型输入框 -->
    	<div v-if="inputType == 'string' || inputType == 'text'">
          <img v-if="inputIco" :src="inputIco">
          <input
          class="form-control"
          :class="[inputClass,{'inputError':isError},{'loginInput':isRadiusInput} ]"
          :style="{'padding': inputIco?'6px 40px':'6px 20px', 'width': half?'130px':'260px'}" 
          :disabled="disabled"
          :placeHolder="placeHolder" 
          type="text"  
          :value="value"
          @input="updateValue($event.target.value)"
          @blur="blurFunc"
          @focus="isError?isError=false:null"> 
      </div>

      <!-- 密码型输入框 -->
      <div  v-if="inputType == 'password' " >
          <img v-if="inputIco" :src="inputIco">
          <input
          class="form-control"
          :class="[inputClass,{'inputError':isError},{'loginInput':isRadiusInput}]" 
          :disabled="disabled"
          :style="{'padding': inputIco?'6px 40px':'6px 20px'}" 
          :placeHolder="placeHolder" 
          type="password" 
          :value="value"
          @input="updateValue($event.target.value)"
          @blur="validator(value)"
          @focus="isError?isError=false:null">
      </div>
      

      <!-- 数字型输入框 -->
      <input 
      v-if="inputType == 'number' "
       class="form-control"
      :class="[inputClass,{'inputError':isError}]" 
      type="number"
      :disabled="disabled"
      :placeHolder="placeHolder"  
      :value="value"
      @input="updateValue($event.target.value)"
      @blur="validator(value)"
      @focus="isError?isError=false:null">


      <!-- 时间输入框 -->
      <input 
      v-if="inputType == 'date'"
      type="date"
       class="form-control"
      :class="[inputClass,{'inputError':isError}]" 
      :disabled="disabled"
      :value="value"
      @input="updateValue($event.target.value)"
      @blur="validator(value)"
      @focus="isError?isError=false:null">


      <!-- 选择框 -->
      <select 
      class="form-control"
      v-if="inputType == 'select' "
      :class="inputClass" 
      :value="value"
      :disabled="disabled" 
      @input="updateValue($event.target.value)">
        <!-- 为了兼容ios -->
        <option disabled value="">请选择</option>
        <option v-for="opt in inputConfig.options"
        :key="opt.key"  
        v-text="opt.label" 
        :value="opt.key"></option>
      </select>

      <!-- 上传文件 -->
      <input 
      class="form-control"
      v-if="inputType == 'file' " 
      :class="[inputClass,{'inputError':isError}]" 
      type="file" 
      :disabled="disabled" 
      @change="updateValue($event.target.files[0])"
      @blur="validator(value)"
      @focus="isError?isError=false:null">

      <!-- 范围选择框 -->
      <div v-if="inputType == 'rangeSelect'" >
        	<select 
           class="form-control"
          style="padding:0 15px" 
          :disabled="disabled" 
          v-model="from">
            <!-- 为了兼容ios -->
            <option disabled value="">请选择</option>
        		<option v-for="opt in inputConfig.options" 
            :key="opt.key" 
            v-text="opt.label" 
            :value="opt.key"></option>
        	</select>
        	<span>至</span>
        	<select 
           class="form-control"
          style="padding:0 15px"
          :disabled="disabled"  
          v-model="to">
            <!-- 为了兼容ios -->
            <option disabled value="">请选择</option>
        		<option v-for="opt in inputConfig.options" 
            :key="opt.key" 
            v-text="opt.label" 
            :value="opt.key" ></option>
        	</select>
      </div>

      <!-- 时间范围选择框 -->
      <div v-if="inputType == 'rangeDate'">
        	<input 
           class="form-control"
          style="text-align:center"
          :disabled="disabled"  
          type="time" 
          v-model="from"/>
        	至
        	<input 
           class="form-control"
          style="text-align:center"
          :disabled="disabled"  
          type="time" 
          v-model="to"/>
      </div>

      <!-- 多选框 -->
      <div style="line-height:36px" v-if="inputType == 'checkBox'">
          <div style="display:inline-block; margin-right:20px; cursor:pointer"
          v-for="opt in inputConfig.options" 
          :key="opt.key" 
          @click="updateCheckBoxValue($event)">
            <span v-text="opt.label"></span>
            <input
             class="form-control" 
            type="checkbox"
            :disabled="disabled" 
            style="cursor:pointer"
            :value="opt.key"
            :checked="opt.checked">
          </div>
      </div>

      <!-- 单选框 -->
      <div style="line-height:36px" v-if="inputType == 'radio'">
          <div style="display:inline-block; margin-right:20px; cursor:pointer"
          v-for="opt in inputConfig.options"
          :key="opt.key"
          @click="updateCheckBoxValue($event)">
            <span v-text="opt.label"></span>
            <input 
            type="radio"
            :name="inputConfig.name"
            :disabled="disabled" 
            :value="opt.key"
            :checked="opt.checked">
          </div>
      </div>

      <!-- ajax异步输入框 -->
      <div v-if="inputType == 'ajaxSyncInput'" style="position: relative;text-align: left">
        <input 
        type="text"
        style="display: inline-block"
        :disabled="disabled" 
        :class="[inputClass,{'inputError':isError}]" 
        v-model="ajaxSyncInput.label"
        @input="getAjaxSyncInputService($event.target.value, inputType)"
        @blur="validator(ajaxSyncInput.key)"
        @focus="isError?isError=false:null">
        <ul class="ajaxInput_ul" v-if="ajaxSyncInput.showList">
          <li 
          v-for="opt in ajaxSyncInput.options" 
          :key="opt[inputConfig.key]"
          @click="ajaxSyncInput_li_click(opt[inputConfig.key], opt[inputConfig.label])" 
          v-text="opt[inputConfig.label]"></li>
        </ul>
      </div>

      <!-- ajax异步数组输入框 -->
      <div 
      v-if="inputType == 'ajaxSyncArrInput'"
      class="ajaxSyncArrInput_div" 
      :class="[{'inputError':isError}]">
        <p class="ajaxSyncArrInput_p" 
        v-for="val in ajaxSyncArrInput.keyList" 
        :key="val.key">
          <span v-text="val.label"></span>
          <span class="ajaxSyncArrInput_span_x" 
          @click.stop="removeAjaxSyncArrInputVal(val)">x</span>
        </p>
        <input 
        type="text"
        :disabled="disabled" 
        style="display: inline-block; width:200px;height:30px"
        @input="getAjaxSyncInputService($event.target.value, inputType, inputConfig.params)"
        @blur="validator(ajaxSyncArrInput.keyList)"
        @focus="isError?isError=false:null"
        v-model="ajaxSyncArrInput.inputValue">
        <ul class="ajaxInput_ul text-center" 
        v-if="ajaxSyncArrInput.showList">
          <li 
          v-for="opt in ajaxSyncArrInput.options" 
          :key="opt[inputConfig.key]"
          @click="ajaxSyncArrInput_li_click(opt[inputConfig.key], opt[inputConfig.label])" 
          v-text="opt[inputConfig.label]"></li>
        </ul>
      </div>


   </div>
   
</template>

<script>
	export default{
    /**
     * @author: lbl
     * @useAge: <kdow-input 
     * input-type="String" 
     * input-config="Object" 
     * input-validator="Function" 
     * v-model="model"
     * @update:value="(val)=>{model=val}"/>
     *
     * desciprtion:   input-type:定义输入框的类型
     *                input-config:定义输入框的配置项, 包括异步输入框的:请求地址,key,label;
     *                              单选框的name,以及复选框,选择框的options;
     *                              所有的placeholder,以及important等
     *                input-validator:定义输入框值的验证方法
     *                v-model: 绑定值
     *                @update:value: 由于框架所必须的东西
     */
    name: 'KdowInput',
		data() {
      return {
        isError: false,
        file: null,//传入的file对象
        from: null,//range输入框的起始值
        to: null,//range输入框的结束值
        checkBoxValue: [],//多选框值
        radioBoxValue: null,//单选框值
        ajaxSyncInput: {//ajax异步输入框
          showList: false,
          label: null,
          key: null,
          options: []
        },
        ajaxSyncArrInput: {//ajax异步数组输入框
          showList: false,
          inputValue: null,//输入框的值
          keyList: [],
          options: []
        }
      }
    },
    props: {
      value: {},
      /**
       * 控制输入框的种类
       * @type String
       */
      inputType:{
        type: String,
        required: true,
        default: 'string'
      },
      inputError:{},
      /**
       * [inputClass description] 控制输入框的class样式
       * @type String
       */
      inputClass: {
        type: String
      },
      /**
       * [inputConfig description] 控制 输入框的配置项
       */
      inputConfig: {},


      placeHolder: {
        type: String
      },
      /**
       * [disabled description] 控制输入框的显示与否
       * @type Boolean
       */
      disabled: {
        type: Boolean
      },
      inputValidator: {
        type: Function,
        default() {
          return ()=>{}
        }
      },
      /**
       * 输入框的图标
       * @type {Object}
       */
      inputIco: {
        type: String
      },
      half: {
        type: Boolean
      },
      isRadiusInput:{
        type: Boolean
      }
      /**
       * 输入框的后排按钮
       */
      // inputAfterBtn: {
      //   type: Object,
      //   default() {
      //     return {}
      //   }
      // }
    },
    watch:{
      from(val) {
        this.$emit('update:value', {from: val, to: this.to});
      },
      to(val) {
        this.$emit('update:value', {from: this.from, to: val});
      },
    },
    methods: {
      blurFunc() {
        if(this.inputValidator instanceof Function){
          this.validator(this.value)
        }
      },
      validator(val){
        const result = this.inputValidator(val);
        if(typeof result === 'string'){
          this.isError = true;
          this.$toast(result);
        }
      },
      /**
       * @param  {[val]} 避免输入为空时候还显示选择list
       * @param  {[type]} 动态控制异步输入框与异步数组输入框
       */
      getAjaxSyncInputService(val, type, params) {
        if(val){
          this.$axios.get(this.inputConfig.url, {
            params: params
          })
          .then((res)=>{
            console.log(res)
            if(res.data.code === 0){
               this.$set(this[type], 'options', res.data.data.list);
               if(!this[type].showList){
                 this[type].showList = true;
               }
            }else{
              this.$toast("网络异常请稍后再试")
            }
          })
          .catch(err=>{
              console.log(err)
              this.$toast("网络异常请稍后再试")
          })
        }else{
          this[type].showList = false;
        } 
      },
      updateValue(val) {
        this.$emit('input', val)
      },
      updateCheckBoxValue(event) {
        if(event.target.nodeName == 'SPAN'){
          event.target.parentElement.children[1].checked = !event.target.parentElement.children[1].checked;
        }
        if(event.target.parentElement.children[1].type == 'checkbox'){
          this.setCheckBoxValue(this.checkBoxValue, event.target.parentElement.children[1].value);
          this.$emit('update:value', this.checkBoxValue)
        }else{
          //type为radio
          this.$emit('update:value', event.target.parentElement.children[1].value)
        }
      },
      // previewFile(e) {  
      //   // console.log(e)
      //   this.$emit('input',e.target.files[0])
      //   let file = e.target.files[0];
      //   let supportTypes = ['image/jpg','image/jpeg','image/png'];
      //   this.file = file;
      //   console.log(e)
      //   if(file && supportTypes.indexOf(file.type) >= 0){
      //    this.file = file;
      //   }else {
      //    this.errorCode = "文件格式不正确";
      //    this.clearFile();
      //   }
      // },
      ajaxSyncInput_li_click(key, label){
        const showList = false;
        this.ajaxSyncInput = {key, label, showList};
        this.$emit('update:value', this.ajaxSyncInput.key)
      },
      ajaxSyncArrInput_li_click(key, label){
        let _index = false,//检查点击的对象是否已经存入的了keyList中
        emitArr = [];//用于将keyList值传给父组件
        for(let i = 0; i < this.ajaxSyncArrInput.keyList.length; i++){
          if(this.ajaxSyncArrInput.keyList[i].key == key){
            //存在
            _index = true;
          }
        }
        if(!_index){
          this.ajaxSyncArrInput.keyList.push({key, label})
        }
        this.ajaxSyncArrInput.showList = false;
        this.ajaxSyncArrInput.inputValue = null;
        for(let i = 0 ; i < this.ajaxSyncArrInput.keyList.length; i++){
          emitArr.push(this.ajaxSyncArrInput.keyList[i].key);
        }
        this.$emit('update:value', emitArr);
      },
      removeAjaxSyncArrInputVal(val) {
        for(let i = 0; i < this.ajaxSyncArrInput.keyList.length; i++){
          if(this.ajaxSyncArrInput.keyList[i] == val){
            this.ajaxSyncArrInput.keyList.splice(i, 1);
            break;
          }
        }
      }
    },
    mounted() {
      if(this.inputType == 'checkBox' || this.inputType == 'radio'){
        for(let i = 0 ; i < this.inputConfig.options.length ; i++){
          if(this.inputConfig.options[i].checked === true){
            this.inputType == 'checkBox'?
            this.checkBoxValue.push((this.inputConfig.options[i].key).toString()):
            this.radioBoxValue = this.inputConfig.options[i].key;
          }
        }
      }
    }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
.loginInput{
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-top: 24px;
  width: 260px;
}
div{
  position: relative;
}
img{
  position: absolute;
  left: 15px;
  bottom: 10px;
}
.inputError{
  border:1px solid red;
  box-shadow: 0 0 10px red;
}
.ajaxInput_ul{
  position: absolute;
  list-style: none;
  border: 1px solid #ccc;
  background-color: #fff;
  z-index: 1;
  width: 200px;
  max-height: 100px;
  overflow-y: scroll;
}
.ajaxInput_ul::-webkit-scrollbar{
  display: block;
  width: 5px;
}
.ajaxInput_ul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 10px;
     -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #ccc;
}
.ajaxInput_ul::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 10px;
    background: #fff;
}
.ajaxInput_ul li{
  cursor:  pointer;
  transition:  all .2s;
}
.ajaxInput_ul li:hover{
  color: #fff;
  background-color: blue
}
/* ajaxSyncArrInput */
.ajaxSyncArrInput_div{
  width: 300px;
  position: relative;
  text-align: left;
  border: 1px solid #ccc;
  display: inline-block;
}
.ajaxSyncArrInput_div input{
  border:  none;
  outline:  none;
}
.ajaxSyncArrInput_p{
  margin: 3px;
  display: inline-block;
  border: 1px solid #ccc;
  padding: 2px;
  background-color: #f0f0f0
}
.ajaxSyncArrInput_span_x{
  color: red;
  cursor: pointer;
  padding-right: 3px;
}
</style>