<template>
  <div class="onpage">
   <div class="on">
   <span class="fly" @click="go">&lt;</span><h4>确认订单</h4>
   </div>
   <div class="on-1">
   <img :src="on.tupian" alt="" class="k-img"/>
  	<h4 class="a-1">尊敬的:AA会员</h4><br />
  	<a class="ap">北京市昌平区马池口镇&nbsp; 吉利大学</a>
   	<span class="span-1">&gt;</span>
   </div>
   <div v-for="(item,i) in getArr" :key="i" class="snake">
   	<img :src="item.tu" alt="" class="img-5"/>
   	<ul class="nav">
   		<li>{{item.z1}}</li>
   		<li><span style="color: red;margin: 0 30px 0 0;">¥{{item.z2}}</span>数量:<span>{{item.num}}</span></li>
   	</ul>
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
   		
   	</div>
   	<a href="https://mclient.alipay.com/cashier/mobilepay.htm?alipay_exterface_invoke_assign_target=invoke_0cb57ea4f51ff6a68bfadaa7f9723f9b&alipay_exterface_invoke_assign_sign=_kn8_a1_eg175u_a_wg_zae_nkzyi8_p_c4_v_b%2F_idgi_f_pswa_ly_b_lhh_c_r_c9m_m_a_n_lg%3D%3D">
    
   		<button class="btn">确认</button>	
    </a>
  </div>
</template>

<script>
import axios from 'axios'
let url="http://127.0.0.1:81/getData"
import { mapGetters } from "vuex"
export default {
  name: 'onpage',
  data () {
    return {
      msg: 'onpage',
      on:{}
    }
  },
  created(){
  axios.get(url).then(res=>{
  	this.on=res.data.onpage;
			
  	})
  },
  methods:{
  	go(){
  		this.$router.go(-1)
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.onpage{
width: 100%;
box-sizing: border-box;
background: #F6F6F6;
}
.fly{
	float: left;
	margin: 0 150px 0 0;
}
.snake{
	width: 100%;
	box-sizing: border-box;
	display: flex;
	background: white;
	width: 90%;
	border-radius: 20px;
	margin: 10px 10px;
	font-size: 14px;
	color: #777;
	padding: 5px 0;
}
ul{
	list-style: none;
	margin: 10px 0;
}
ul li{
	margin: 10px 0;
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
	padding: 5px;
}
.on{
background: #f6f6f6;
width: 96%;
padding: 10px 15px 10px 0;
color: #343434;
}
.on-1{
padding: 10px 5px;
border-bottom: solid 2px #70C62F;
color: #777;
font-size: 14px;
background: white;
}
.k-img{
	height: 40px;
	width: 22px;
	float: left;
	vertical-align: middle;
}
.img-5{
	vertical-align: middle;
	width: 90px;
	height: 90px;
	margin: 10px ;
	border-radius: 20px;
}
.ap{
	display: inline-block;
	margin: 20px 120px 0 -100px;
}
.a-1{
	float: left;
	margin-top: 10px;
}
.span-1{
	color: #70C62F;
	font-weight: bold;
	font-size: 25px;
}
.san{
	color: #70C62F;
	font-weight: bold;
	font-size: 16px;
}
.btn{
		margin:20px 0 ;
		background: #70C62F;
		color: white;
		text-align: center;
		height: 50px;
		line-height: 40px;
		width: 150px;
		border: none;
		margin: 20px 100px;
	}
</style>
