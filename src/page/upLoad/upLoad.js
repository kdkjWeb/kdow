export default{
   data(){
    return {
        showPhoto: false,
        show: false,
        personData:{
            title: '',
            content: '',
            type: '',
            file: '',
            icon: ''
        },
        imgSrc: ''
    }
   },
   methods: {

    upPhoto(){
        this.showPhoto = true;
        this.show = true
    },
    close(){
        this.showPhoto = false;
        this.show = false
    },
    getFile(event){
        this.personData.file = event.target.files[0];
        //console.log(this.personData.file);
    },
    getFile1(event){
        this.personData.icon = event.target.files[0];
        //console.log(this.personData.icon);
        var files = event.target.files || event.dataTransfer.files;
            if (!files.length)
            return;
            this.createImage(files[0]);
    },
    createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        reader.onload = (e) => {
        this.imgSrc = e.target.result;
        // console.log(this.imgSrc);

        };
        reader.readAsDataURL(file);
        },
    upLoad(event){
        event.preventDefault();
        let formData = new FormData();
        formData.append('title',this.personData.title);
        formData.append('content',this.personData.content);
        formData.append('type',this.personData.type);
        formData.append('newfile',this.personData.file);
        formData.append('newicon',this.personData.icon);
        let config = {
            headers: {
                'Content-Type':'mulitpart/form-data'
            }
        }
        this.$axios.post('file/add',formData,config)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
      console.log(this.personData)
      /*this.$axios.get('slider/add',{params:this.personData})
         .then(function(response) {
         console.log(response);
         })
         .catch(function(error) {
         console.log(error);
         });*/
    }
   }
}
