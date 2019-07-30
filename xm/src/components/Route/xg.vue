<template>
  <div class="xg">
  	<div class="da">
  		<div class="one" v-for="(item,i) in zs" :key="i">
  			<img :src="item[0]" alt="" class="img1"/>
  		</div>
  		<div v-for="(item,i) in zs" class="two">
  		<div class="lump_Title">
  			安装维修服务流程
  			<span>Service step</span>
  		</div>
  			<img :src="item[1]" alt="" class="img1"/>	
  		</div>
  		<div class="three">
  			
  		</div>
  		<div class="four">
  			<div class="father">
  				<div v-for="(item,i) in zs" :key="i" class="vk">
  					<img :src="item[2]" alt="" class="img2"/>
  					<span>灯具安装</span>
						

  				</div>
  				<div v-for="(item,i) in zs" :key="i" class="vk">
  					<img :src="item[3]" alt="" class="img2"/>
  					<span>浴室安装</span>
  				</div>
  			</div>
  			<div class="father">
  				<div v-for="(item,i) in zs" :key="i" class="vk">
  					<img :src="item[4]" alt="" class="img2"/>
  					<span>厨房安装</span>
  				</div>
  				<div v-for="(item,i) in zs" :key="i" class="vk">
  					<img :src="item[5]" alt="" class="img2"/>
  					<span>墙地面焕新</span>
  				</div>
  			</div>
  			<div class="father">
  				<div v-for="(item,i) in zs" :key="i" class="vk">
  					<img :src="item[6]" alt="" class="img2"/>
  					<span>厨房安装</span>
  				</div>
  				<div v-for="(item,i) in zs" :key="i" class="vk">
  					<img :src="item[7]" alt="" class="img2"/>
  					<span>墙地面焕新</span>
  				</div>
  			</div>
  			<div class="father">
  				<div v-for="(item,i) in zs" :key="i" class="vk">
  					<img :src="item[8]" alt="" class="img2"/>
  					<span>厨房安装</span>
  				</div>
  				<div v-for="(item,i) in zs" :key="i" class="vk">
  					<img :src="item[9]" alt="" class="img2"/>
  					<span>墙地面焕新</span>
  				</div>
  			</div>
  			<div class="father">
  				<div v-for="(item,i) in zs" :key="i" class="vk">
  					<img :src="item[10]" alt="" class="img2"/>
  					<span>厨房安装</span>
  				</div>
  				<div v-for="(item,i) in zs" :key="i" class="vk">
  					<img :src="item[11]" alt="" class="img2"/>
  					<span>墙地面焕新</span>
  				</div>
  			</div>
  			
  		</div>
  		<div class="five">
  			<div v-for="(item,i) in zs">
				<img :src="item[12]" class="iii"/>	
  			</div>
  			<div class="six">
  				<div class="father2">
  					<div v-for="(item,i) in zs">
  						<img :src="item[13]" class="lll"/>
  						<img :src="item[14]" class="lll"/>
  						<img :src="item[15]" class="lll"/>
  						<img :src="item[16]" class="iii"/>
  						<img :src="item[17]" class="lll"/>
  						<img :src="item[18]" class="lll"/>
  						<img :src="item[19]" class="lll"/>
  						<img :src="item[21]" class="lll"/>
  						<img :src="item[21]" class="lll"/>
  						<img :src="item[22]" class="lll"/>
  						<img :src="item[23]" class="lll"/>
  						<img :src="item[24]" class="lll1"/>
  						<img :src="item[25]" class="lll1"/>
  						<img :src="item[26]" class="iii"/>
  						<img :src="item[27]" class="lll"/>
  						<img :src="item[28]" class="lll"/>
  						<img :src="item[29]" class="lll"/>
  						<img :src="item[30]" class="iii"/>
  						<img :src="item[31]" class="lll"/>
  						<img :src="item[32]" class="lll"/>
  						<img :src="item[33]" class="lll"/>
  						<img :src="item[34]" class="iii"/>
  						<img :src="item[35]" class="lll"/>
  						<img :src="item[36]" class="lll"/>
  						<img :src="item[37]" class="lll"/>
  						<div class="lump_Title">每一次服务&nbsp;&nbsp;力求您十分满意<span>We try our best to satisfy you of every service</span></div>
  						<div class="lump_Title1">为什么选择乐华梅兰<span>懂您所需，想您所想</span></div>
  						<div class="imp" v-for="(item,i) in zs">
  							<img :src="item[38]" alt="" class="ak2"/>
  							<img :src="item[40]" alt="" class="ak2"/>
  						</div>
  						<div class="imp" v-for="(item,i) in zs">
  							<img :src="item[41]" alt="" class="ak2"/>
  							<img :src="item[42]" alt="" class="ak2"/>
  						</div>
  						<div class="imp">
  							<img :src="item[42]" alt="" class="ak2"/>
  							<img :src="item[43]" alt="" class="ak2"/>
  						</div>
  						<div>
  						<img :src="item[44]" alt="" class="cc"/>
  						</div>
  					</div>
  				</div>
  			</div>
  			<div class="foot">
  				<p>{{this.dx.phone}}</p>
  				<p>{{this.dx.di}}</p>
  				<p>{{this.dx.ban}}</p>
  				<p>{{this.dx.last}}</p>
  				<p class="oo">《乐华梅兰使用协议》</p>
    			<p>Powered by <span class="oo">nopCommerce</span></p>
  			</div>
  		</div>
  	</div>
  	 <vueToTop type="5"></vueToTop>
  	
  </div>
</template>

<script>
export default {
  name: 'xg',
  data () {
    return {
      msg: 'xg',
      zs:[],
      dx:{}
    }
  },
created(){
	this.get()
},
methods:{
	get(){
		this.zs.push(this.$route.query.al);
		this.dx=this.$route.query.dx;

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
.cc{
	height: 73px;
	padding: 20px 0 60px 0;
}
.lump_Title{
	font-size: 28px;
    height: 28px;
    line-height: 28px;
    border-left: #71c122 solid 6px;
    padding-left: 20px;
    margin: 30px 0px;
    color: #333333;
	}
	.imp{
		display: flex;
	}
.ak2{
		height: 90px;
		width: 184px;
	}
.lump_Title1{
		background: white;
	  font-size: 18px;
    height: 40px;
    line-height: 40px;
    border-left: #71c122 solid 6px;
    padding-left: 20px;
    margin: 30px 0px;
    color: #333333;
}
.foot{
	width: 100%;
	font-size: 13px;
	color: #777;
	text-align: center;
	background: #eee;
	padding: 10px 0;
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
.lump_Title1 span {
    color: #a1a1a1;
    font-size: 16px;
    padding-left: 10px;
   }
.five{
	background: white;
	padding: 10px 0;
}
.father2{
	padding: 0 5px;
	background: #f6f6f6;
}
.lll{
	height: 215px;
}
.lll1 {
	height: 215px;
	margin-left: -3px;
}
.iii{
	height: 77px;
}
.ak{
	margin: 20px 20px;
	display: inline-block;
	color: #777777;
}
.da{
	background: #d9d7d9;
	padding: 40px 0 25px 0;
}
.one{
background: #d9d7d9;
padding: 0px 0 25px 0;
}
.two{
	background: white;
	padding: 10px 0;
	margin-bottom: 20px;
}
.three{
	background: white;
	padding: 20px 0 0 0;
}
.four{
	background: #f7f7f7;
	padding: 10px 0 20px 0;
	
}
.father{
	display: flex;
	padding: 0 10px;
	margin: 20px 0 40px 0;
}
.father div{
	margin: 0 6px;
}
.img1{
	width: 100%;
	
}
.img2{
	width: 167px;
	height: 188px;
}
.vk{
	position: relative;
}
.vk span{
	  display: block;
    position: absolute;
		bottom: -5px;
    left: 25px;
    padding: 8px;
    background-color: #70c62f;
    color: #fff;
    font-size: 20px;
}
.lump_Title{
	font-size: 20px;
	   height: 28px;
    line-height: 28px;
    border-left: #71c122 solid 6px;
    padding-left: 20px;
    margin: 30px 0px;
    color: #333333;
}
.lump_Title span{
		color: #a1a1a1;
    font-size: 16px;
    padding-left: 10px;
}
.foot{
	width: 100%;
	font-size: 13px;
	color: #777;
	text-align: center;
	background: #eee;
	padding: 10px 0;
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
