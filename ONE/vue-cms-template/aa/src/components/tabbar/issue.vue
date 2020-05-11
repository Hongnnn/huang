<template>
  <div class="sub">
    <mt-header fixed title="发布文章">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>

      <mt-button class="fabuBtn" @click="fubuBtn" slot="right">发布</mt-button>
    </mt-header>
    <div class="fa">
      <div>
        <input class="radio" type="radio" name="radios" value="0" v-model="radio" />文章类
        <input class="radio" type="radio" name="radios" value="1" v-model="radio" /> 视频类
      </div>
       <textarea name id cols="30" rows="1" v-model="articletitle" placeholder="标题"></textarea>
        <textarea name id cols="30" rows="" v-model="articledesc" placeholder="描述"></textarea>
      <textarea name id cols="30" rows="7" v-model="facontent" placeholder="内容"></textarea>
    </div>
    <div class="up">
      <span class="upimg">
        <img src="../../style/img/addfile.png" alt />
      </span>
      <span class="tup">上传图片</span>
      <form enctype="multipart/form-data" method="post" action="http://106.15.136.244:8877/upload/upload">
      <input class="inupload" type="file" @change="add_img" ref="img" />
      <img :src="picSrc" style="left: .2rem; top: .2rem;height: 1.2rem; position: absolute;" >
        </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "0",
      articletitle:'',
      articledesc:'',
      form:'',
      imageurl:'',
      checkbox: [],
      imgs: "",
      facontent:'',
      picSrc:'',
      imgData: {
        accept: "image/jpeg, image/png, image/jpg"
      }
    };
  },
  methods: {
   
    fubuBtn() {
      console.log(this.radio);
    },
    add_img(event) {
      let that = this
                let reader = new FileReader();
                reader .readAsDataURL(this.$refs.img.files[0])
                let img1 = event.target.files[0];
                reader.onload=function(){
                        that.picSrc=reader.result
                    }
               
				let type = img1.type; //文件的类型，判断是否是图片
				let size = img1.size; //文件的大小，判断图片的大小
				if (this.imgData.accept.indexOf(type) == -1) {
					this.$toast("图片格式错误，请重新上传。");
					return false;
				}
				if (size > 3145728) {
					this.$toast("请上传小于10M的打款凭证图");
					return false;
				}
				var uri = ''
				that.form = new FormData();
				that.form.append('file', img1, img1.name);
				
        // this.$axios.post("/uploads/transfer", {
				// 	headers: {
				// 		'Content-Type': 'multipart/form-data'
        //   },
        //   "form":form,
        //   "comments":that.facontent,
        //   "classify":that.radio
				// }).then(res=>{
        //   console.log(res.data)
        // }).catch(err=>{
        //   console.log(err)
        // })

    },
    set(){
        let token = localStorage.getItem("token");
           if (token == null || token == undefined) {
        this.$router.push({ path: "/login" });}
        else{
      this.$axios.post("http://106.15.136.244:8080/article/publish",{
        'articletitle':this.articletitle,
        'articledesc':this.articledesc,
        'imageurl':this.imageurl,
        'articlecontent':this.facontent,
        'articleclassify':this.radio,
        'usertoken':token

      }).then(res=>{
        if(res.data.flag==true)
        {
          this.$toast("发布成功")
          this.$router.push({ path: "/find" });
        }
        else{
           this.$toast("发布石板")
        }
      }).then(err=>{
      console.log(err)
      })
      }
    },
    fubuBtn(){
      this.set()
      // if(this.picSrc==''){
      //     this.set()
  
      // }
      // else{
      //   this.$axios.post("http://106.15.136.244:8877/upload/upload",this.form,{
      //     headers: {
			// 			'Content-Type': 'multipart/form-data'
			// 		}
        
      //   }).then(res=>{
      //     console.log(res.data)
      //   }).catch(err=>{
      //     console.log(err)
      //   })
       
      // }
    }
  }
};
</script>
<style lang="scss" scoped>
.fabuBtn {
  color: yellow;
}
.fa {
  margin-top: 0.8rem;
  padding: 0.2rem;
}
.sub {
  background: white;
}
.up {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: white;
  img {
    margin-top: 0.2rem;
    /* margin-bottom: .2rem; */
    overflow: hidden;
    height: 2.3rem;
  }
  .upimg {
    height: 1.7rem;
  }
  .tup {
    margin-bottom: 0.5rem;
  }
}
.inupload {
  position: absolute;
  top: 43%;
  z-index: 99999;
  /* opacity: 0; */
  /* left: .8rem; */
  width: 100%;
  right: rem;
  left: 40%;
  opacity: 0;
}
</style>