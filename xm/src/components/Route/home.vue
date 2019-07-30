<template>
  <div class="home">
  	<div class="home-one">
  		<swiper :my="mysz"></swiper>
  		<mk></mk>
  		<tet :my="mysz"></tet>
  	</div>
  </div>
</template>

<script>
import axios from 'axios'
import swiper from '@/components/Component/swiper'
import mk from '@/components/mk/mk'
import tet from '@/components/Component/tet'
let url="http://127.0.0.1:81/getData"
export default {
  name: 'home',
  data () {
    return {
      msg: 'home',
      myy:{},
      mysz:[]
    }
  },
  components:{
  	swiper,
  	mk,
  	tet
  },
  props:["my"],
  created(){
  	axios.get(url).then(res=>{
  		console.log('res',res)
  		this.myy=res.data.myhead;
  		this.mysz=res.data.myhead.swiper;
//		console.log('888',this.mysz)
  		this.mymd=res.data.myhead.model;
  		this.talk=res.data.myhead.one;

  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	.home{
		width: 100%;
	}
	
	
</style>
