<template>
  <div class="myhead">
  	<div class="myhead-top">
  	<div class="my-left" >

  	</div>
		<div class="my-right">
			<p class="top">{{my.top}}</p>
			<div class="imgfather">
				<router-link to="/home" class="iiii ik">
  			<img :src="mysz[0]" alt="乐华梅兰" class="img1"/>
				</router-link>
				<router-link to="/search" class="iiii">
				<img :src="mysz[1]" class="img2"/>
				</router-link>
  			<router-link to="/heart" class="iiii">
				<img :src="mysz[2]" class="img2"/>
  			</router-link>
  			<router-link to="/shopcar" class="iiii">
				<img :src="mysz[3]" class="img2"/>
  			</router-link>
				<fl class="ij">
				<img :src="mysz[4]" class="img2"/>
  			</fl>

			</div>
  	</div>
			<div>
  		<router-view></router-view>
			</div>
		</div>
		
  </div>
</template>

<script>
import axios from 'axios'
let url="http://127.0.0.1:81/getData"
import fl from '@/components/Component/fl'
export default {
  name: 'myhead',
  data () {
    return {
      msg: 'myhead',
      my:{},
      mysz:[]
    }
  },
  created(){
  	axios.get(url).then(res=>{
		console.log('res',res)
  	this.my=res.data.myhead;
		this.mysz=res.data.myhead.header;
  	console.log("000000",this.my)
  	})
  },
  components:{
  	fl
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	.iiii{
		float: left;
	}
	.iiii.ik{
		margin-top: 30px;
	}
	.myhead{
	width: 100%;
	box-sizing: border-box;
	}
	.img2{
		width: 31px;
		margin: 10px 17px;
	}
	
	.top{
		font-size: 14px;
		color: #777;
		font-family: "微软雅黑";
		font-weight: bold;
		margin:10px 0 0 88px;
	}
	.img1{
		width: 71px;
		height: 64px;
		margin-top: -60px;
	}
	
</style>
