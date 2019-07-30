<template>
  <div class="myfoot">
  <div class="foot-one">
  <router-link to="/home" tag="span" class="ii"><img :src="mys[5]" alt="" class="img4"/><span class="opp">首页</span></router-link>
  <dh class="ii" @click.native="mm()"><img :src="mys[4]" alt="" class="img4"/><span class="opp">导航</span></dh>
  <mf class="ii" @click.native="mk()" ><img :src="mym[0]" alt="" class="img4"/><span class="opp">免费报价</span></mf>
  <router-link to="/kefu" tag="span" class="ii"><img :src="mym[3]" alt="" class="img4"/><span class="opp">在线客服</span></router-link>
  </div>
  <div class="top" v-show="sj">
  	<img src="../../../build/2019-07-24_151404.png" class="leguan" @click="cc"/>
  </div>
  <div class="fg" v-show="mj">
  	<div class="xx" @click="mm1"><img src="../../../build/close.png" class="xx-1"/></div>
  	<ul class="mega-menu-responsive">
  		<li>
  			<a @click="shouye">
  				首页
  			</a>
  		</li>
  		<li>
  			<a @click="zhengwu">
  				整屋装修
  			</a>
  		</li>
  		<li>
  			<a @click="jubu">
  				局部装修
  			</a>
  		</li>
  		<li>
  			<a @click="jifa">
  				激发灵感
  			</a>
  		</li>
  		<li>
  			<a @click="shangcheng(sc)">
  				线上商城
  			</a>
  		</li>
  		<li>
  			<a @click="huiyuan">
  				会员中心
  			</a>
  		</li>
  		<li>
  			<a @click="dingdan">
  				我的订单
  			</a>
  		</li>
  		<li>
  			<a @click="zhuxiao">
  				注销登录
  			</a>
  		</li>
  		<li>
  			<a @click="women">
  				关于我们
  			</a>
  		</li>
  	</ul>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import dh from '@/components/Component/dh'
import mf from '@/components/Component/mf'
let url="http://127.0.0.1:81/getData"
export default {
  name: 'myfoot',
  data () {
    return {
      msg: 'myfoot',
      mys:[],
      mym:[],
      sj:false,
      mj:false,
      sc:[]
    }
  },
  created(){
  	axios.get(url).then(res=>{
  		console.log('res',res)
		this.my=res.data.myhead;
		this.mys=res.data.myhead.header;
		this.mym=res.data.myhead.model;
		this.sc=res.data.xuanran;
		console.log('8888',this.sc)
  	})
  },
  components:{
  	dh,
  	mf
  },
  methods:{
  	mk(){
  		this.sj=true
  	},
  	cc(){
  		this.sj=false
  	},
  	mm(){
  		this.mj=true
  	},
  	shouye(){
  		
  	},
  	zhengwu(){
  		
  	},
  	jubu(){
  		
  	},
  	jifa(){
  		
  	},
  	shangcheng(){
  		this.$router.push({
  			path:"/sc",
  			query:{
  				sc:this.sc
  			}
  		})
  	},
  	huiyuan(){
  		
  	},
  	dingdan(){
  		
  	},
  	zhuxiao(){
  		this.$router.push({
  			path:"/zc"
  		})
  	},
  	women(){
  		
  	},
  	mm1(){
  		this.mj=false
  	}
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	margin: 0;
	padding: 0;
}
#app{
	/*position: relative;*/
}
.fg{
	position: fixed;
	left: 0;
	top: 0;
	height: 610px;
	background: #f6f6f6;
	padding: 0 0 20px 0;

}
.xx{
	width: 200px;
	height: 50px;
	background: #f6f6f6;

}
.xx-1{
	margin-left: 150px;
}
ul a{
	  display: block;
    position: relative;
    z-index: 0;
    padding: 20px;
    line-height: 19px;
    color: #333;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
}
ul li{
	background: white;

}
ul{
		width: 200px;

		list-style: none;
}
.myfoot{
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
}
.img4{
	width: 30px;
	vertical-align: middle;
}
.foot-one{
	width: 100%;
	box-sizing: border-box;
	background: white;
	padding: 5px 0;
}
.ii {
	display: flex;
	box-sizing: border-box;
	font-size: 13px;
	display: inline-block;
	width: 24%;
	text-align: center;
	border-right: solid 1px #e6e6e6;
	color: #777;
}
.opp{
	margin-left: 5px;
}
.top{
	background: rgb(0,0,0,0.5);
	text-align: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.leguan{
	margin-top: 250px;
}
</style>
