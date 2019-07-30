<template>
  <div class="zc">
    <div class="kk">
    	<div class="kk-1">
    		<div class="no">
				<input type="number"  v-model="phone" placeholder="请输入手机号" class="vv"  reg="^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$" regextext="手机号码不正确!"/>
				<img src="../../../build/jb_mobile.png" class="img1"/>
				<input type="text" placeholder="输入密码" v-model="pwd" class="vv3" regh="^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$" regextext="密码有误!"/>
				<input type="number"  v-model="yan" placeholder="请输入图形验证码" class="vv1" regex="^[0-9]{6}$" regextext="验证码不正确!"/><SIdentify :identifyCode="identifyCode" class="nn"></SIdentify>
				<input type="text"  v-model="yzm" placeholder="请输入验证码" class="vv2" regex="^[0-9]{6}$" regextext="手机验证码不正确!"/><button class="lk" @click="huoqu">获取验证码</button>
				<img src="../../../build/jb_code.png" class="img2"/>
				<button class="btn" @click="btnn">注册</button><br />
				 <a class="nige" @click="dianji">点击登录</a> 
    		</div>
    		
    	</div>
    </div>
   
    	<div class="center">

            <div>电话：010-87722888</div>
            <div>地址：北京市朝阳区大郊亭中街2号院4号楼18B</div>
            <div class="footer-disclaimer">
                版权所有 © 2019 乐华梅兰 保留所有权利<br/><span style="padding-left:50px;">京ICP备14010027号-1</span>
            </div>
            <div class="footer-powered-by">
                <a href="/conditions-of-use">《乐华梅兰使用协议》</a>
            </div>
                <div class="footer-powered-by">
                    Powered by <a href="https://www.nopcommerce.com/">nopCommerce</a>
                </div>
            
            <div class="footer-store-theme">
                
        </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
	
import SIdentify from '../../components/ii/identify';
import axios from 'axios'
let url="http://127.0.0.1:81/getData"
export default {
  name: 'zc',
  data () {
    return {
      msg: 'zc',
      identifyCode:"",
      identifyCodes:"123456789",
      phone:'',
      yzm:'',
      yan:'',
      sc:[],
      pwd:''
    }
  },
  components:{
  	SIdentify
  },
  mounted(){
  	this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods:{
  	 randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
      makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },
    huoqu(){
    	let reg =/^((13[0-9])|(15[\d^4])|(18[1,0,2,3,5-9])|(17[0-8])|(147))\d{8}$/;
			let regex=/^[0-9]{4}$/;
			if(!reg.test(this.phone)){
					alert('手机号不正确！')
				return
			}
			if(!regex.test(this.yan)){
				alert('图形验证码不正确!')
				return
			}
			if(this.yan!==this.identifyCode){
				alert('图形验证码不正确!')
				return
			}
			
			console.log( Math.floor(Math.random()*(9000-1000)+1000))
		 },
		 dianji(){
    	this.$router.push("/dll")
   },
    btnn(){
    	if(this.phone&&this.pwd){
        axios.post("http://127.0.0.1:81/addPostObj",{phone:this.phone,pwd:this.pwd}).then(data=>{
          if(data.data.success){
            this.$router.push({name:"dll",params:{phone:this.phone,pwd:this.pwd}})
          }else if(data.data.err==2){
            Toast({
              message: '已注册',
              position: 'bottom',
              duration: 2000
            });
          }else{
            Toast({
              message: '注册失败',
              position: 'bottom',
              duration: 2000
            });
          }
        }).catch(err=>{
          console.log('注册err:',err);
        })
      }else{
        Toast({
          message: '手机号/密码不能为空',
          position: 'bottom',
          duration: 2000
        });
      }
    }
			
  },
  created(){
  	 axios.get(url).then(res=>{
			this.sc=res.data.xuanran;
  	})
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
	background-image: url(../../../build/m_bg2.jpg);
	background-size:100% 100% ;
	width: 100%;
	height: 597px;
	box-sizing: border-box;
	margin: 0 0 50px 0;
}
canvas#s-canvas{
	border: solid 1px;
	float: left;
}

.kk-1{
	height: 330px;
	width: 350px;
	border-radius: 20px;
	background: rgba(0,0,0,0.3);
	box-sizing: border-box;
	position: absolute;
	bottom: 50px ;
	left: 15px;
}
.vv{
	position: relative;
	 padding-left: 40px;
		margin: 20px 20px 10px 20px;
    width: 250px;
    height: 50px;
    background-color: #f8f8f8;
    border: #e6e6e6 solid 1px;
    border-radius: 4px;
	
}
.vv3{
	width: 250px;
  height: 50px;
	 background-color: #f8f8f8;
    border: #e6e6e6 solid 1px;
    border-radius: 4px;
		margin: 5px 20px 10px 20px;
		padding: 0 20px;
}
.vv1{
	 padding-left: 0px;
		margin-left: 20px;
    width: 175px;
    height: 35px;
    background-color: #f8f8f8;
    border: #e6e6e6 solid 1px;
		text-align: center;
		float: left;
}
.vv2{
	position: relative;
		margin: 10px 0 10px 20px;
	
    width: 175px;
    height: 50px;
    background-color: #f8f8f8;
    border: #e6e6e6 solid 1px;
		text-align: center;
    border-radius: 4px;
	
}
.nige{
	color: #70C62F;	
	font-size: 15px;
	margin: 10px 20px;
	display: inline-block;
}
.img2{
	position: absolute;
	top: 160px;
	left: 25px;
}
.img1{
	position: absolute;
	top: 30px;
	left: 25px;
}
.lk{
	    min-width: 110px;
    border: none;
    background-color: #78be20;
    padding: 15px 10px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    outline: 1px solid transparent;
    transition: all 0.2s ease;
}
.btn{
	width: 290px;
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    border-radius: 4px;
    color: #fff;
    background-color: #78be20;
    border: none;
    margin-left: 20px;
}
.center{
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
</style>
