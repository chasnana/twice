<template>
  <div class="pz">
    <div class="yi" v-for="(item,index) in sz" :key="index" >
    <img :src="item[0]" alt="" class="one-img"/>
    <p><span class="kk">遇见理想家</span></p>
    <p class="kk2">整屋装修套餐</p>
   	<img  :src="item[1]" alt=""  class="one"/>
   	<img  :src="item[2]" alt=""  class="one"/>
   	<img  :src="item[3]" alt=""  class="one"/>
   	<p><span class="kk3">整装套餐 省心省力</span></p>
   	<img  :src="item[4]" alt=""  class="two"/>
   	<p><span class="kk3">23项顶级施工工艺</span></p>
    <p class="kk2">品质保障 放心居住</p>
   	<img  :src="item[5]" alt=""  class="three"/>
   	<p><span class="kk4">四大风格 诠释法式生活</span></p>
   	<img  :src="item[6]" alt=""  class="four"/>
   	<img  :src="item[7]" alt=""  class="four"/>
   	<img  :src="item[8]" alt=""  class="four"/>
   	<img  :src="item[9]" alt=""  class="four"/>
   	<p><span class="kk4">品质保障 为家保驾护航</span></p>
   	<img  :src="item[10]" alt=""  class="four"/>
   	<p><span class="kk4">专业售后 无忧保障</span></p>
   	<img  :src="item[11]" alt=""  class="three"/>
		<div class="kl">
		</div>
    </div>
    <div class="foot">
    
    <p>{{this.foot.phone}}</p>
    <p>{{this.foot.di}}</p>
    <p>{{this.foot.ban}}</p>
    <p>{{this.foot.last}}</p>
    <p class="oo">《乐华梅兰使用协议》</p>
    <p>Powered by <span class="oo">nopCommerce</span></p>
    </div>
   <vueToTop type="5"></vueToTop>
  </div>
</template>

<script>
export default {
  name: 'pz',
  data () {
    return {
      msg: 'pz',
      sz:[],
      foot:{}
    }
  },
  created(){
  this.get()
  },
  methods:{
  get(){
  	this.sz.push(this.$route.query.pzsz);
  	this.foot=this.$route.query.dx;
  	console.log('888',this.foot)
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
.kk{
	 display: inline-block;
	 border: solid 2px #7b666b;
	 color: #7b666b;
	 text-align: center;
	 width: 300px;
	 height: 30px;
	 line-height: 30px;
	 margin: 0 30px;
}
.pz{
	padding: 30px 0;
}
.yi{
width: 100%;
box-sizing: border-box;
}

.one-img{
height: 245px;
}
.one{
height: 460px;
}
.two{
height: 200px;
margin: 20px;
}
.kk2{
text-align: center;
padding: 5px 0;
}
.kk3{
display: inline-block;
border: solid 2px #79666a;
color: #79666a;
text-align: center;
height: 30px;
width: 80%;
line-height: 30px;
margin-left: 30px;
}
.kk4{
display: inline-block;
border: solid 2px #79666a;
color: #79666a;
text-align: center;
height: 30px;
width: 80%;
line-height: 30px;
margin: 10px 30px;
}
.three{
width: 90%;
margin: 15px;
}
.four{
width: 100%;
}
.kl{
padding: 40px;
background: #f6f6f6;
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
