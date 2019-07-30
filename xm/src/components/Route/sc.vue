<template>
  <div class="sc">
  <img src="../../../build/0095585.jpeg" class="one"/>
    <p class="p1">畅销推荐</p>
    <div class="ff-ather">
		<div class="father">
			<mt-swipe :auto="4000" :show-indicators="false">   		
  		<mt-swipe-item v-for="(item,index) in sc" :key="index"  >
	
  			<img :src="item.tu" alt="" />
  			<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>



  	</mt-swipe-item>
  	<mt-swipe-item v-for="(item,index1) in sc">
			<div>
  			<img :src="item.tu" alt="" />
  			<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  		</div>
		</mt-swipe-item>
  	<mt-swipe-item v-for="(item,index2) in sc">
  		<div>
  			<img :src="item.tu" alt=""/>
  			
  			<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>

  		
  	</div></mt-swipe-item>
  	<mt-swipe-item v-for="(item,index3) in sc">
		<div>
  			<img :src="item.tu" alt=""/>
  			
  			<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  		
  	</div>
  	</mt-swipe-item>
  	
		</mt-swipe>
		<mt-swipe :auto="4000" :show-indicators="false">   		
  	<mt-swipe-item  v-for="(item,index4) in sc" >
  		<div>
  		<img :src="item.tu" alt=""/>
  			<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  		</div>
  		
  	</mt-swipe-item>
  	<mt-swipe-item v-for="(item,index5) in sc">
			<div>
  			<img :src="item.tu" alt=""/>
  			<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  		</div>

			
  	</mt-swipe-item>
  	<mt-swipe-item v-for="(item,index6) in sc">
  		<div>
  			<img :src="item.tu" alt=""/>
  			<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>


  		
  	</div></mt-swipe-item>
  	<mt-swipe-item v-for="(item,index7) in sc">
		<div>
  			<img :src="item.tu" alt=""/>
  			<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  		</div>
  	</mt-swipe-item>
  	
		</mt-swipe>
		
		
		</div>
		<div class="two">
			<img src="../../../build/horizontal-prev.png"/>
			<a>本月限时直降</a>
			<img src="../../../build/horizontal-next.png"/>
			</div>
			<div class="father">
			<mt-swipe :auto="4000" :show-indicators="false">   		
  		<mt-swipe-item v-for="(item,i) in tp" :key="i">
  		<div>
  			
  			<img :src="item.tu" alt=""/>
  			
  			<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
				
				
  		</div>
  	</mt-swipe-item>
  	<mt-swipe-item v-for="(item,i) in tp">
			<div>
  			<img :src="item.tu" alt=""/>
  			
  			<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
				
  		</div>
		</mt-swipe-item>
  	<mt-swipe-item v-for="(item,i) in tp">
  		<div>
  			<img :src="item.tu" alt=""/>
  			
  			<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
  	</div>
  	</mt-swipe-item>
  	<mt-swipe-item v-for="(item,i) in tp">
		<div>
  			<img :src="item.tu" alt=""/>
  			
  			<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
  	</div>
  	</mt-swipe-item>
  	
		</mt-swipe>
			<mt-swipe :auto="4000" :show-indicators="false">   		
  	<mt-swipe-item v-for="(item,i) in tp">
  		<div>
  			<img :src="item.tu" alt=""/>
  			
  			<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
				
  		</div>
  		
  	</mt-swipe-item>
  	<mt-swipe-item v-for="(item,i) in tp">

			<div>
  			<img :src="item.tu" alt=""/>
  			
  			<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
  		</div>

			
  	</mt-swipe-item>
  	<mt-swipe-item v-for="(item,i) in tp">
  		<div>
  			<img :src="item.tu" alt=""/>
  			
  			<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
  		
  	</div></mt-swipe-item>
  	<mt-swipe-item v-for="(item,i) in tp">
		<div>
  			<img :src="item.tu" alt=""/>
  			
  			<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
  		</div>
  	</mt-swipe-item>
  	
		</mt-swipe>
		
		</div>
    	
    </div>

    <div class="kl"> 
    	<p>电工电料 > ></p>
    </div>	
		<div class="yier" >
			<div class="yi" v-for="(item,i) in tpp" :key="i">
				<img :src="item.tu" alt="" @click="jj(tpp[i])"/>
				<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
			</div>
		</div>
		
		
		<div class="kl"> 
    	<p>灯具 > ></p>
    </div>	
    <div class="yier" >
			<div class="yi" v-for="(item,i) in tpk" :key="i">
				<img :src="item.tu" alt="" @click="jj(tpk[i])"/>
				<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
			</div>
			
		</div>
   

		<div class="kl"> 
    	<p>瓷砖 > ></p>
    </div>	
    <div class="yier">
			<div class="yi" v-for="(item,i) in tpo" :key="i">
				<img :src="item.tu" alt="" @click="jj(tpo[i])"/>
				<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
			</div>
		
		</div>
    
		<div class="kl"> 
    	<p>储物 > ></p>
    </div>	
    <div class="yier">
			<div class="yi" v-for="(item,i) in to" :key="i">
				<img :src="item.tu" alt="" @click="jj(to[i])"/>
				<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
			</div>
			
		</div>
    
		<div class="kl"> 
    	<p>厨房 > ></p>
    </div>	
    <div class="yier">
			<div class="yi" v-for="(item,i) in too" :key="i">
				<img :src="item.tu" alt="" @click="jj(too[i])"/>
				<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
			</div>
			
		</div>
    
		<div class="kl"> 
    	<p>地板 > ></p>
    </div>	
    <div class="yier">
			<div class="yi" v-for="(item,i) in tk" :key="i">
				<img :src="item.tu" alt="" @click="jj(tk[i])"/>
				<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
			</div>
			
		</div>
    
		<div class="kl"> 
    	<p>五金 > ></p>
    </div>	
    <div class="yier">
			<div class="yi" v-for="(item,i) in kk" :key="i">
			<img :src="item.tu" alt="" @click="jj(kk[i])"/>
				<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
			</div>
			
		</div>
    
		<div class="kl"> 
    	<p>基础建材 > ></p>
    </div>	
    <div class="yier">
			<div class="yi" v-for="(item,i) in kl" :key="i">
				<img :src="item.tu" alt="" @click="jj(kl[i])"/>
				<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
			</div>
			
		</div>
    
		<div class="kl"> 
    	<p>卫浴> ></p>
    </div>	
    <div class="yier">
			<div class="yi"  v-for="(item,i) in lp" :key="i">
				<img :src="item.tu" alt="" @click="jj(lp[i])"/>
				<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
			</div>
			
		</div>
    
		<div class="kl"> 
    	<p>工具> ></p>
    </div>	
    <div class="yier">
			<div class="yi" v-for="(item,i) in pp" :key="i">
				<img :src="item.tu" alt="" @click="jj(pp[i])"/>
				<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
			</div>
			
		</div>
    
		<div class="kl"> 
    	<p>管材管件 > ></p>
    </div>	
    <div class="yier">
			<div class="yi" v-for="(item,i) in pk" :key="i">
				<img :src="item.tu" alt="" @click="jj(pk[i])"/>
				<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
			</div>
			
		</div>
    
		<div class="kl"> 
    	<p>门窗  > ></p>
    </div>	
    <div class="yier">
			<div class="yi" v-for="(item,i) in op" :key="i">
				<img :src="item.tu" alt="" @click="jj(op[i])"/>
				<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
			</div>
			
		</div>
    
		<div class="kl"> 
    	<p>油漆  > ></p>
    </div>	
    <div class="yier">
			<div class="yi" v-for="(item,i) in oo" :key="i">
				<img :src="item.tu" alt="" @click="jj(oo[i])"/>
				<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
			</div>
			
		</div>
    
		<div class="kl"> 
    	<p>装饰  > ></p>
    </div>	
    <div class="yier">
			<div class="yi" v-for="(item,i) in mm" :key="i">
					<img :src="item.tu" alt="" @click="jj(mm[i])"/>
				<p>{{item.z1}}</p>
				<p class="p2">{{item.z2}}</p>
				<span class="lv">{{item.xin}}</span>
  			<p class="hh">{{item.cc}}</p>
			</div>
		</div>
    
  	 <vueToTop type="5"></vueToTop>
		
  </div>
</template>

<script>
export default {
  name: 'sc',
  data () {
    return {
      msg: 'sc',
      sc:[],
      tp:[],
      tpp:[],
      tpk:[],
      tpo:[],
      to:[],
      too:[],
      tk:[],
      kk:[],
      kl:[],
      lp:[],
      pp:[],
      pk:[],
      op:[],
      oo:[],
      mm:[]
    }
  },
created(){
	this.get()
},
methods:{
	get(){
			this.sc=this.$route.query.sc.m1;
			this.tp=this.$route.query.sc.m2;
			this.tpp=this.$route.query.sc.m3;
			this.tpk=this.$route.query.sc.m4;
			this.tpo=this.$route.query.sc.m5;
			this.to=this.$route.query.sc.m6;
			this.too=this.$route.query.sc.m7;
			this.tk=this.$route.query.sc.m8;
			this.kk=this.$route.query.sc.m9;
			this.kl=this.$route.query.sc.m10;
			this.lp=this.$route.query.sc.m11;
			this.pp=this.$route.query.sc.m12;
			this.pk=this.$route.query.sc.m13;
			this.op=this.$route.query.sc.m14;
			this.oo=this.$route.query.sc.m15;
			this.mm=this.$route.query.sc.m16;
	},
	jj(obj){
		this.$router.push({path:"/gw",query:{obj}})
		
	}

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.father{
	width: 100%;
	padding: 0 10px;
	margin: 10px 0;
	display: flex;
	text-align: center;
	box-sizing: border-box;
	background: #f6f6f6;
}

.father div{
	height: 240px;
	box-sizing: border-box;
	background: white;
	position: relative;
}

.mint-swipe-item{
	height: 220px;
}
.hh{
	color: #777;
	margin-top: 5px ;
}
.sc{
	font-size: 13px;
}
.yier{
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	box-sizing: border-box;
	text-align: center;
	background: #F6F6F6;
	padding: 0 2px;
}
.yi{
	width: 47%;
	height: 265px;
	background: white;
	margin: 5px 3px;
	position: relative;
}

.yi img{
	height: 180px;
}
.yi p{
	margin: 5px 0;
}
.kl{
	background: #F6F6F6;
	text-align: center;
	font-weight: bold;
	color: #70C62F;
	padding: 10px 0;
	margin-bottom: 20px ;
}
.kl p{
	background: white;
	padding: 10px 0;
}
.lv{
	color: #78BE20;
	font-size: 13px;
	font-weight: bold;
	position: absolute;
	top: 0;
	right: 0;
	display: inline-block;
	width: 26px;
	height: 17px;
	text-align: center;
	line-height: 17px;
	background: #f6f6f6;
	padding: 10px 12px;
}
.san{
	background: #F6F6F6;
	padding: 40px 0;

}
.three{
	background: white;

	height: 90px;
	vertical-align: middle;
	line-height: 90px;
	text-align: center;
}
.three img{
	width: 94px;
	height: 30px;
}
.p1{
	padding: 10px 0;
	font-weight: bold;
	text-align: center;
	background: #f6f6f6;
}
.one{
	height: 126px;
}
.p2{
	color: #78be20;
	font-weight: bold;
	
}

.father img{
	height: 175px;
}
.two{
	padding: 10px 0px;
	font-weight: bold;
	box-sizing: border-box;
	width: 100%;
	background: #F6F6F6;
}
.two img{
	vertical-align: middle;
	margin: 0 30px;
}

</style>
