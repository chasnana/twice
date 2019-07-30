<template>
  <div class="jd">
  	<div class="lump_Title">案例列表</div>
  	<div class="zz">
  		<div v-for="(item,i) in al" :key="i">
			<img :src="item" alt="" class="one"/>
			<p>地中海风格</p>
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
  	 <vueToTop type="5"></vueToTop>
		</div>
  </div>
</template>

<script>
export default {
  name: 'jd',
  data () {
    return {
      msg: 'jd',
      al:[],
      dx:{}
    }
  },
  created(){
  this.get()
  },
  methods:{
  get(){
  	this.al=this.$route.query.al;
		this.dx=this.$route.query.dx;
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lump_Title{
	font-size: 26px;
    height: 28px;
    line-height: 28px;
    border-left: #71c122 solid 6px;
    padding-left: 20px;
    margin: 30px 0px;
    color: #33333
}
.one{
	height: 225px;
}
.zz{
	text-align: center;
}
.zz p {
	margin: 10px 0;
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
