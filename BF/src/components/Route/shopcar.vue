<template>
  <div class="shopcar">
	<div>
  		<h2>购物车</h2>
  		
  	</div>
  	<div class="kj" v-show="lal">
  		您的购物车是空的! <a>继续购物</a>
  	</div>
  		
  	<div class="father" v-for="(item,i) in getArr" :key="i">

    <div class="left" >
		<img :src="item.tu" alt=""/>
    </div>
			<ul class="nav" >
				<li >{{item.z1}}</li>
				<li><a class="aa" @click="scc(i)">删除</a></li>
				<li class="lii"><span class="heihei">￥{{item.z2}}</span>
					<div class="ee">
                <button type="button" @click="minuts(i)">-</button>
                <input type="text" v-model="item.num" style="width:30px;text-align:center" />
                <button type="button" @click="add(i)">+</button>
              </div>

				</li>
			</ul>
    </div>
		<div class="ddd">
			<a class="aa" @click="djj()">继续购物</a>
	
	</div>
	<div class="vk">
		<table>
			<tbody>
				<tr>
					<td>总计：</td>
					<td>¥{{zz}}.00</td>
				</tr>
				<tr>
					<td>配送：</td>
					<td>￥7.00</td>
				</tr>
				<tr>
					<td>税收：</td>
					<td>￥0.00</td>
				</tr>
				<tr class="san">
					<td>实付款：</td>
					<td>￥{{aa}}.00</td>
				</tr>
				
			</tbody>
		</table>
		
		<button class="btn" @click="js">订单结算</button>
	</div>
  	<div class="js">
  		
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
  name: 'shopcar',
  data () {
    return {
      msg: 'shopcar',
      mysz:[],
      num:1,
      sc:[],
      lal:true
      
    }
  },
  created(){
  	axios.get(url).then(res=>{
			this.mysz=res.data.myhead.swiper;
			this.sc=res.data.xuanran;
})
  	console.log("getArr",this.getArr)
		if(this.getArr.length==0){
			this.lal=true
		}else{
			this.lal=false
		}
  },
  computed:{
  	...mapGetters(['getArr']),
  	aa:function(){
  		var aa=0;
  		for(var i=0;i<this.getArr.length;i++){
  			aa +=parseInt(this.getArr[i].num)*parseInt(this.getArr[i].z2)+7;
  		}
  		return aa;
  	},
  	zz:function(){
  	var zz=0;
  	for(var i=0;i<this.getArr.length;i++){
  		zz +=parseInt(this.getArr[i].num)*parseInt(this.getArr[i].z2)
  	}
  	return zz
  	}
  },
  methods:{
  	minuts(i) {
      if ( this.getArr[i].num == 0) {
        return 
      }
      this.getArr[i].num--;
      this.$store.commit('delid',this.getArr[i])
    },
    add(i) {
       this.getArr[i].num++;
       console.log('7777',this.getArr[i].num);
				this.$store.commit('addid',this.getArr[i])
    },
    djj(dx){
    	this.$router.push({path:"/sc",query:{sc:this.sc}})
    },
    scc(i){
    	this.getArr.splice(i,1);
    	this.$store.commit('del',this.getArr[i])
    },
    js(){
    	this.$router.push('/onpage');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
.shopcar{
	background: #f6f6f6;
	text-align: center;
	color: #777;
}
h2{
	padding: 10px 0;
}
button{
	background: #F6F6F6;
	border: solid 1px #ECECEC;
	color: #777777;
	padding: 5px;
}
.ddd{
	padding: 20px 0;
}
.san{
	color: #70C62F;
	font-weight: bold;
	font-size: 16px;
}
.nav{
	margin: 10px;
}
.ee{
	margin-left: 100px;
}
.nav li{
	padding: 5px;
	font-size: 14px;
	width: 100%;
	text-align: left;
	
}
.btn{
		margin:20px 0 ;
		background: #70C62F;
		color: white;
		text-align: center;
		height: 50px;
		line-height: 40px;
		width: 150px;
	}
table{
	border-collapse: collapse;
	text-align: center;
	width: 95%;
	margin: 5px 10px;
	color: #777;
	background: white;
	font-size: 14px;
}
td{
	padding: 5px ;
}
input[text]{
	border: solid 1px #ECECEC;
}
.shopcar div:nth-of-type(2){
	font-size: 13px;
	color: #777;
	padding: 20px 0 130px 0;
}
.foot{
	width: 100%;
	font-size: 13px;
	color: #777;
	text-align: center;
	background: #eee;
	
}
.oo{
	color: #78be20;
	margin: 10px 0;
}
.aa{
    text-decoration: underline;
    color: #78be20;
}
.father{
	display: flex;
	width: 95%;
	height: 106px;
	border-radius: 20px;
	background: white;
	margin: 10px 10px;
	box-sizing: border-box;
}
.heihei{
	color: red;
}
.nav{
	list-style: none;

}
.lii{
	display: flex;
}
.left{
	width: 100px;
}
.left img{
	height: 90px;
	margin: 10px;
	width: 90px;
	border-radius: 20px;

}
</style>
