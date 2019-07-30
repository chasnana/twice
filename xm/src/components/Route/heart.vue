<template>
  <div class="heart">
    <div>
  		<h2>收藏夹</h2>
  		
  	</div>
  	<div v-show="lal">
  		收藏夹中没有任何商品!
  	</div>
  	<table class="kkkk">
			<tbody>
				<tr>
					<td>#</td>
					<td>图片</td>
					<td class="mk">小计</td>
				</tr>
				<tr v-for="(item,i) in getArr" :key="i">
					<td><span class="sp-2" @click="jr" v-show="add">+</span><span class="sp-2" v-show="jj" @click="kkl">-</span></td>
					<td><img :src="item.tu" alt="" class="ss"/></td>
					<td class="mk">¥{{item.z2}}</td>
				</tr>
			</tbody>
  	</table>
  		<table class="table-1" v-show="ming">
				<tbody>
					<tr>
						<td>删除 <span><input type="checkbox" class="ipt"/></span></td>
					</tr>
					<tr>
						<td>购物车 <span><input type="checkbox" class="ipt1"/></span></td>
					</tr>
					<tr v-for="(item,i) in getArr" :key="i">
						<td>{{item.bm}}</td>
					</tr>
					<tr v-for="(item,index1) in getArr" :key="index1">
						<td>商品：</td>
						<td>{{item.z1}}</td>
					</tr>
					<tr v-for="(item,index2) in getArr" :key="index2">
						<td>价格：</td>
						<td>￥{{item.z2}}</td>
					</tr>
					<tr v-for="(item,index3) in getArr" :key="index3">
						<td>数量：</td>
						<td>
							<span class="lele">
								{{item.num}}
							</span>
						</td>
					</tr>
					
				</tbody>
  		</table>
  	<div class="zy">
  		<div class="kmm"><img src="../../../build/cop.png" class="nm"/><span class="kmm-i" @click="gx">更新</span></div>
			<button class="btn1"><img src="../../../build/cart-button-2.png" class="kmmm"/><a @click="dd()" class="oppp">加入购物车</a></button>
  	
  	</div>
  	<div class="foot">
  	<p>{{mysz[18]}}</p>
  	<p>{{mysz[19]}}</p>
  	<p>{{mysz[20]}}</p>
  	<p>{{mysz[21]}}</p>
    <p class="oo">《乐华梅兰使用协议》</p>
    <p>Powered by <span class="oo">nopCommerce</span></p>
  </div>
  	 <vueToTop type="5"></vueToTop>
  
  </div>
</template>

<script>
import axios from 'axios'
let url="http://127.0.0.1:81/getData"
import { mapGetters } from "vuex"
export default {
  name: 'heart',
  data () {
    return {
      msg: 'heart',
      mysz:[],
      lal:true,
      ming:false,
      jj:false,
      add:true
    }
  },
  created(){
  	axios.get(url).then(res=>{
  		console.log('res',res)

  		this.mysz=res.data.myhead.swiper;
  		console.log('888',this.mysz)
  		if(this.getArr.length==0){
			this.lal=true
			}else{
			this.lal=false
			}
		})
  },
  computed:{
  	...mapGetters(['getArr'])
  	
  },
  methods:{
  	jr(){
  		this.ming=true;
  		this.jj=true;
  		this.add=false
  	},
  	kkl(){
  		this.ming=false
  	},
  	gx(){
  		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heart{
	background: #f6f6f6;
	text-align: center;
}
.heart div:nth-of-type(1){
	border: solid 1px #e6e6e6;
}
.heart div:nth-of-type(2){
	font-size: 13px;
	color: #777;
	padding: 20px 0 130px 0;
	height: 200px;
}
.kmm{
	width: 80%;
	font-size: 14px;
	margin: 15px 30px;
	background: white;
	
}
.lele{
	
	display: inline-block;
	height: 15px;
	border: solid 1px #D9D7D9;
	line-height: 15px;
	width: 25px;
}

.kmm-i{
	margin: 0 117px;
	
}
.nm{
	vertical-align: middle;
	background: #70C62F;
}
.oppp{
	
margin-left: 80px;
}
.table-1{
	width: 100%;
	background: white;
	font-size: 14px;
	color: #777;
	text-align: left;
border: solid 1px red;
}
.sp-2{
	color: red;
	border: solid 1px #D4D4D4;
	width: 25px;
	height: 15px;
	text-align: center;
	line-height: 15px;
}
.kmmm{
	
	margin-left: -110px;
}
.mk{
	color: #70C62F;
	font-weight: bold;
}

.btn1{
	margin-left: -10px;
	width: 80%;
	background: #70C62F;
	color: white;
	border: none;
	padding: 10px 0;
}
.ss{
	width: 50px;
	height: 50px;
	vertical-align: middle;
	
}
.kkkk{
	padding: 5px 0;
	border-collapse: collapse;
	color: #777;
	text-align: center;
	width: 100%;
	background: white;
	font-size: 14px;
}
.kkkk td{
	text-align: center;
	padding: 20px 5px;
}
.table-1 td{
	padding: 10px 20px;
}
tr{
	
	border: solid 1px #D9D7D9;
}
h2{
	padding: 10px 0;
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
</style>
