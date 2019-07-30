<template>
  <div class="mk">
   <div class="home-one-one">
  			<div class="on">
  				<div @click="touch">
  					<a><img :src="mymd[0]" alt="" class="a1"/></a><br />
  					<span class="sp1">{{talk[0]}}</span>
  				</div>
  				<div>
  					<a class="one" @click="tt(pzsz,dx)">
  						<a><img :src="mymd[1]" alt="" class="a1"/></a><br />
  						<span class="sp2">{{talk[1]}}</span>
  					</a>
  				</div>
  				<div>
  					<a @click="tty(zs,dx)">
  						<a><img :src="mymd[2]" alt="" class="a1"/></a><br />
  						<span class="sp2">{{talk[2]}}</span>
  					</a>
  				</div>
  				<div>
  					<a  @click="thy">
  						<a><img :src="mymd[3]" alt="" class="a1"/></a><br />
  						<span class="sp1">{{talk[3]}}</span>
  						
  					</a>
					</div>
  			</div>
  			<div class="down">
  				<div>
  						<a @click="mt(al,dx)">
							<img :src="mymd[4]" alt="" class="a1"/><br />
							<span>{{talk[4]}}</span>
  					</a>
  				</div>
  				<div>
  					<a >
							<img :src="mymd[5]" alt="" class="a1"/><br />
							<span class="sp2">{{talk[5]}}</span>
  					</a>
  				</div>
  				<div>
  					<a >
							<img :src="mymd[6]" alt="" class="a1"/><br />
							<span class="sp2">{{talk[6]}}</span>
  					</a>
  				</div>
  				<div>
  					<a @click="mty(al,dx)">
							<img :src="mymd[7]" alt="" class="a1"/><br />
							<span>{{talk[7]}}</span>
  					</a>
  				</div>
  			</div>
  			<div v-show="mac" class="mac-1">
  				<div class="pi" @click="touch2"><p>×</p></div>
  				<div class="ooo"><img src="../../../build/7.png"/></div>
  			</div>
  		</div>
  </div>
</template>

<script>
	import axios from 'axios'
	let url="http://127.0.0.1:81/getData"
	
export default {
  name: 'mk',
  data () {
    return {
      msg: 'mk',
      mymd:[],
      pzsz:[],
      talk:[],
      dx:{},
      dxx:{},
      zs:[],
      myj:[],
      myd:{},
      xs:[],
      mac:false
    }
  },
  components:{

  },
  created(){
  	axios.get(url).then(res=>{
  		console.log('res',res)
  		this.mymd=res.data.myhead.model;
			this.pzsz=res.data.pinzhi.tupian;
  		this.talk=res.data.myhead.one;
  		this.dx=res.data.pinzhi.foot;
  		this.zs=res.data.zhanshi.tupian;
  		this.dxx=res.data.zhanshi.name;
			this.myj=res.data.jingdian.tupian;
			this.myd=res.data.jingdian.foot;
			this.wx=res.data.weixiu.tupian;
  	})
  },
  methods:{
  	touch(){
  		this.mac=true
  	},
  	touch2(){
  		this.mac=false
  	},
  	tt(){
  		this.$router.push({
  		path:"/pz",
  		query:{
  		pzsz:this.pzsz,
  		dx:this.dx
  		}
  		})
  	},
  	tty(){
  		this.$router.push({
  			path:"/zslb",
  			query:{
  			zs:this.zs,
				dx:this.dxx
  			}
  		})
  	},
  	thy(){
			this.$router.push({
				path:"/kefu"
			})
  	},
  	mt(){
  		this.$router.push({
  			path:"/jd",
  			query:{
  				al:this.myj,
  				dx:this.myd
  			}
  		})
  	},
  	mty(){
  		this.$router.push({
  			path:"/xg",
  			query:{
  				al:this.wx,
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
		padding: 0;
		margin: 0;
	}
	.mk{
		width: 100%;
		box-sizing: border-box;
	}
	.down{
		margin-left: 3px;
	}
	.on,.down,.down div{
		display: flex;
		padding: 10px 10px;
	}
	.on div,.down div{
		width: 25%;
		padding: 5px ;
		text-align: center;
		font-size: 14px;
	}
	.a1{
		width: 43px;
	}
	.sp2{
		margin-top: 5px ;
		display: inline-block;
	}
	.mac-1{
		position: absolute;
		bottom: 20px;
		left: 0;
		background: #f9f9f9;
	}
	.pi{
		margin-left: 90%;
		color: #666666;
		padding: 10px 0;
	}
</style>
