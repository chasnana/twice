<template>
  <div class="gw">
  	<div class="father-p">
		<mt-swipe :auto="4000" class="mm">   		
  	<mt-swipe-item  v-for="(item,i) in tp" :key="i">
  		<img :src="item" alt=""/>
  	</mt-swipe-item>
		</mt-swipe>
  	</div>
  	<div class="hha">
  		
		<div class="kk">
			<div class="left">
				<p>{{dx.z1}}</p>
				<p class="lv">￥{{dx.z2}}</p>
				<p>{{dx.bm}}</p>
			</div>
			<div class="right">
				<span class="pianzi" @click="xinxin" v-show="xs">❤</span>
				<span class="pianz" v-show="uj">❤</span>

				<span class="pianzi" @click="xin" v-show="xs2">⇆</span>
				<span class="pianz" v-show="uj2">⇆</span>
			</div>
		</div>
		<div class="kk1">
			<button class="btn">1</button>
			<button class="btn1"><img :src="dx.gw" alt="" class="img-7"/><a @click="dd()">加入购物车</a></button>
		</div>
  	</div>
		<div class="zhong">
			<h4>商品规格</h4>
			<table>
				<tr><td>规格</td><td>{{dx.y}}</td></tr>
				<tr><td>品牌</td><td>{{dx.e}}</td></tr>
				<tr><td>实惠质量段商品</td><td>{{dx.s}}</td></tr>
				<tr><td>产地</td><td>{{dx.si}}</td></tr>
			</table>
		</div>
		<div class="four">
			<p><h4  class="kp">评价</h4> <img src="../../../build/rating-sprite_02.gif" alt="" class="gg"/></p>
			<p>10 评论 | 添加你的评论</p>
		</div>
		<div class="five">
			<h4>商品详情</h4>
			<p>{{dx.z1}}</p>
		</div>
		<div class="foot">
		<p>{{dx.foot.phone}}</p>
    <p>{{dx.foot.di}}</p>
    <p>{{dx.foot.ban}}</p>
    <p>{{dx.foot.last}}</p>
    <p class="oo">《乐华梅兰使用协议》</p>
    <p>Powered by <span class="oo">nopCommerce</span></p>
		</div>
  	 <vueToTop type="5"></vueToTop>
		
  </div>
</template>

<script>
export default {
  name: 'gw',
  data () {
    return {
      msg: 'gw',
      dx:{},
      tp:[],
      n:1,
      uj:false,
      uj2:false,
      xs:true,
      xs2:true
    }
  },
  created(){
		this.get()	
  },
  methods:{
  	get(){

		this.dx=this.$route.query.obj;
		this.tp=this.dx.tp;

  	},
  	//点击事件
  	dd(){
  		let dx={};
  		dx.tu=this.dx.tu;
  		dx.z1=this.dx.z1;
  		dx.z2=this.dx.z2;
  		dx.num=this.dx.num;
  		this.$store.commit('add',dx);
  		this.$router.push({path:"/shopcar",query:{obj:dx}})
  	},
  	xinxin(){
  		this.uj=true
  		this.xs=false
  		setTimeout(()=>{
  			let dx={};
  			dx.tu=this.dx.tu;
  			dx.z2=this.dx.z2;
  			dx.z1=this.dx.z1;
  			dx.bm=this.dx.bm;
  			dx.num=this.dx.num;
  			this.$store.commit('add',dx);
  			this.$router.push({path:"/heart",query:{obj:dx}})
  			
  		},1000)
  		
  	},
  	xin(){
  		this.uj2=true
  		this.xs2=false
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
.gw{
	box-sizing: border-box;
	background: #F6F6F6;
}
.zhong{
	background: white;
	padding: 5px 5px;
	margin-top: 10px;
}
h4{
	color: #777777;
	margin-left: 10px;
}
.four{
	background: white;
	padding: 10px 0;
}
.pianzi{
	
	display: inline-block;
	width: 35px;
	height: 35px;
	line-height: 35px;
	text-align: center;
	background: #f6f6f6;
}
.pianz{
	
	display: inline-block;
	width: 35px;
	height: 35px;
	line-height: 35px;
	text-align: center;
	background: #f6f6f6;
	color: #70C62F;
}
.build1,.build2{
	color: #70C62F;
	
}
.four p{
	margin: 5px 10px;
	color: #777;
}
.five{
	height: 60px;
	background: white;
}
.five p{
	text-align: center;
	color: #777;
	margin: 10px 0;
}

.gg{
	width: 30px;
	background: #70C62F;
	margin-left: 10px;
}
.kp{
	float: left;
}
.mm{
	height: 373px;

}
.hha{
	background: white;
}
.btn{
	text-align: center;
	width: 45px;
	height: 45px;
	line-height: 45px;
	background: white;
	border: solid 1px #e7e7e7;
	color: #777;
}
.kk{
	width: 100%;
	box-sizing: border-box;
	display: flex;
	font-size: 14px;
	color: #777;
	background: white;
}
.mm img{
	height: 373px;
}
.father-p{
	width: 100%;
	box-sizing: border-box;
}
.left{
	width: 245px;
	margin-left: 20px;
}
.btn1{
	background: #78be20;
	padding: 0 20px 0 5px;
	color: white;
	font-weight: bold;
	border: none;
	height: 45px;
	font-size: 13px;
	text-align: center;
}
.kk1{
	width: 100%;
	box-sizing: border-box;
	text-align: center;
	margin-top: 10px;
	padding: 20px 0;
}
table{
	border-collapse: collapse;
	text-align: center;
	width: 90%;
	margin: 5px 0;
}
td{
	border: 1px solid #ececec;
	padding: 5px 0;
	font-size: 15px;
	color: #777;
}
.kk p{
	margin: 20px 0;
}
.lv{
	color: #70C62F;
	font-size: 18px;
}
.foot{
	width: 100%;
	font-size: 13px;
	color: #777;
	text-align: center;
	background: #eee;
	padding: 10px 0;
	margin-top: 20px;
}
.oo{
	color: #78be20;
	margin: 10px 0;
}
.v-top{
	background-color: #e9e9e9;
	padding: 10px;
	font-size: 12px;
}
</style>
