<template>
  <div class="zslb">
  	<div class="lump_Title">展示列表</div>
  	<div class="zz">
		<div v-for="(item,index) in zs" :key="index">
			<img :src="item" alt="" class="one"/>
			<p>展示中心</p>
		</div>
    </div>
		<div class="foot">
    <p>{{this.dx.foot.phone}}</p>
    <p>{{this.dx.foot.di}}</p>
    <p>{{this.dx.foot.ban}}</p>
    <p>{{this.dx.foot.last}}</p>
    <p class="oo">《乐华梅兰使用协议》</p>
    <p>Powered by <span class="oo">nopCommerce</span></p>
  	</div>
  	 <vueToTop type="5"></vueToTop>
  </div>
</template>

<script>
export default {
  name: 'zslb',
  data () {
    return {
      msg: 'zslb',
      zs:[],
      dx:{}
    }
  },
  created(){
  	this.get()
  },
  methods:{
  	get(){
  		this.zs=this.$route.query.zs;
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
.zslb{
	background: #f6f6f6;
	padding: 10px 0;
}
.lump_Title{
	font-size: 26px;
    height: 28px;
    line-height: 28px;
    border-left: #71c122 solid 6px;
    padding-left: 20px;
    margin: 30px 0px;
    color: #33333
}
.zz{
	text-align: center;
	padding: 40px 0;
}
.zz p {
	margin: 10px 0;
}
.one{
	height: 225px;
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
