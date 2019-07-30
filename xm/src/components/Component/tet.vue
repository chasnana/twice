<template>
  <div class="tet">
  	<div class="tet-one">
  	<p>经典案例</p>
  	<img :src="my[7]" alt="" class="img"/>
  	<p><a class="kk" @click="pp"> 查看更多经典案例</a></p>
  	</div>
		<div class="tet-two">
			<div class="lump_Title">装修流程</div>
			<img :src="my[8]" alt="" class="img1"/>
		</div>
		<div class="tet-three">
			<div class="lump_Title">展示中心</div>
			<div class="big">
				<div>
					<img :src="my[9]" alt="现代风格_储物展间" class="yi"/>
					<span class="one">现代风格_储物展间</span>
				</div>
				<div>
					<img :src="my[10]" alt="古典风格-储物展间" class="yi"/>
					<span class="two">古典风格-储物展间</span>
				</div>
			</div>
			<p @click="ll(dx,al)"><a class="kk">查看更多晨间中心</a></p>
		</div>
		<div class="tet-four">
			<div class="lump_Title">装修攻略</div>
			<div class="big2">
				<div>
					<img :src="my[11]" alt="" class="yi"/>
					<div class="spact ok" >
						<img src="../../../build/m_spana.png"/><a>你知道60平米的装修...</a><br />
						<img src="../../../build/m_spana.png"/><a>打造私人DIY工坊的...</a><br />
						<img src="../../../build/m_spana.png"/><a>合租我是轻改|五...</a><br />
					</div>
				</div>
					
				<div>
					<img :src="my[12]" alt="" class="yi"/>
					<div class="spact">
							<img src="../../../build/m_spana.png"/><a>小户型或者说小空间如...</a><br />
							<img src="../../../build/m_spana.png"/><a>家装风格如何处理「混...</a><br />
							<img src="../../../build/m_spana.png"/><a>小户型如何设计会显得...</a><br />
					</div>
				</div>
		</div>
			<p class="kkk"><a class="kk">查看更多晨间中心</a></p>
  </div>
  <!--<div class="tet-five">-->
  	<!--<p>了解乐华梅兰</p>-->
 <!--<div class="video">
	<video-player class="vjs-custom-skin" :options="playerOptions"></video-player>
 </div>-->
 
  <!--</div>-->
  <div class="tet-six">
		<div class="mog">
  	<img :src="my[13]" class="img3"/>
  	<p>关于乐华梅兰中国</p>
  	<img src="../../../build/m_youjiao.png" class="mg4"/>
		</div>
		<div class="mog pp">
  	<img :src="my[14]" class="img3"/>
  	<p>找到您身边的乐华梅兰</p>
  	<img src="../../../build/m_youjiao.png" class="mg4"/>
		</div>
		<div class="mog pp2">
  	<img :src="my[15]" class="img3"/>
  	<p>加入乐华梅兰</p>
  	<img src="../../../build/m_youjiao.png" class="mg4"/>
		</div>
		<img :src="my[17]" alt="" class="kkk1"/>
  </div>
  <div class="foot">
  	<p>{{my[18]}}</p>
  	<p>{{my[19]}}</p>
  	<p>{{my[20]}}</p>
  	<p>{{my[21]}}</p>
    <p class="oo">《乐华梅兰使用协议》</p>
    <p>Powered by <span class="oo">nopCommerce</span></p>
  </div>
  	 <vueToTop type="5"></vueToTop>
  
  </div>
</template>

<script>
//	import "video.js/dist/video-js.css"       
//	import "vue-video-player/src/custom-theme.css"         
//	import 'videojs-contrib-hls.js/src/videojs.hlsjs'
	import axios from 'axios'
	let url="http://127.0.0.1:81/getData"
export default {
  name: 'tet',
  data () {
    return {
      msg: 'tet',
      myj:[],
      myd:{}
//    playerOptions:{
//    	plabackRates:[0.5,1.0,1.5,2.0],//播放速度
//    	autoplay:false,//如果true就是浏览器准备好时开始回放
//    	controls:true,//控制条
//    	preload:"auto",//视频于加载
//    	muted:false,//默认情况下将会清除任何音频
//    	loop:false,//导致视频一结束就重新开始
//    	language:"zh-CN",
//    	aspectRatio:"16:9",
//    	fluid:"true",
//    	sources:[
//    	{
//    		type:"application/x-mpegURL",
//    		src:"http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8"
//    	}
//    	],
//    	poster:
//    	"htp://img.mp.souhu.com/upload/20170530/89016143b7c549e8bf95e2e51834cf75.png",
//    	width:document.documentElement.clientWidth,
//    	notSupportedMessage:"此视频无法播放，请稍后再试"
//  }
}
  },
  props:["my"],
  created(){
  		axios.get(url).then(res=>{
  		
			this.myj=res.data.jingdian.tupian;
			this.myd=res.data.jingdian.foot;
  	})
  },
  methods:{
  	pp(){
  		
  	},
  	ll(){
  		this.$router.push({
  			path:"/jd",
  			query:{
  				al:this.myj,
  				dx:this.myd
  			}
  		})
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
.foot{
	width: 100%;
	font-size: 13px;
	color: #777;
	text-align: center;
	background: #eee;
	padding: 30px 0;
}
.oo{
	color: #78be20;
	margin: 10px 0;
}
.v-top{
	background-color: #e9e9e9;
	padding: 10px;
	font-size: 12px;
	right: 0px;
}
.mog{
	display: flex;
	padding: 10px 5px;
	background: white;
	text-align: center;
	font-size: 14px;
	width: 100%;
	box-sizing: border-box;
	margin: 10px 0;
}
.kkk1{
	height: 74px;
}
.mog p{
	margin-left: 25px;
	line-height: 70px;
}
.tet-six{
	padding: 0 0 60px 0;
}
.mog.pp p{
	font-size: 12px;
	margin-left: 17px;
}
.mog.pp2 p{
	margin-left: 35px;
}
.mog.pp2 img:nth-of-type(2){
	margin-left: 65px;
}
.mg4{
	height: 40px;
	margin: 20px 0 0 52px;
	vertical-align: middle;

}
.img{
	height: 256px;
}
.tet-one{
	background: white;
	width: 95%;
	margin: 0 0 0 10px;
	text-align: center;
}
.tet-one p{
	padding: 10px 0;
}
.tet{
	background: #f4f4f4;
	padding: 10px 0;
	text-align: center;
}

.kk{
		width:178px;	
	  background-color: #f8f8f8;
    border: solid 1px #d4d4d4;
    font-size: 12px;
    color: #333333;
    padding: 10px 30px 10px 30px;
    display: block;
    border-radius: 3px;
    box-sizing: border-box;
    transition: background .2s,border .2s;
    margin-left: 90px;
}
.tet-two{
	padding: 10px 0;
}
.lump_Title{
		text-align: center;
    font-size: 16px;
    color: #333333;
		margin: 10px 0;
} 
.big{
	display: flex;
	
	position: relative;
} 
.big div{
	padding: 10px 7px;
}
.big2{
	display: flex;
}
.spact img{
	height: 14px;

}
.spact.ok img{
	margin-left: -43px;
}
.spact.ok img:nth-of-type(3){
	margin-left: -60px;
}
.spact{
	font-size: 14px;
}
.spact a{	
    color: #6f6f6f;
    font-size: 12px;
    text-decoration: none;
}
.one{
	  position: absolute;
	  color: white;
		text-align: center;
    bottom: 15px;
    left: 8px;
    width: 172px;
    background-color: #000;
    opacity: 0.7;
   	display: inline-block;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
}
.two{
		position: absolute;
	  color: white;
		text-align: center;
    bottom: 15px;
    left: 195px;
    width: 172px;
    background-color: #000;
    opacity: 0.7;
   	display: inline-block;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
}

.img1{
	height: 160px;
}
.yi{
	height: 116px;
}
.tet-three{
	background: white;
	padding: 10px 0;
}
.tet-four{
	padding: 10px 0;
}
.kkk{
	margin: 10px 0;
}
.big2 div{
	background: white;
	padding: 5px 0;
	margin: 0 5px ;
}
.tet-five{
	padding: 5px 0;
}
.video{
	width: 200px;
}
.img3{
	height: 63px;
	width: 150px;
}
</style>
