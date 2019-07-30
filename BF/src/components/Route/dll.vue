<template>
  <div class="dll">
     <div class="kk">
    	<div class="kk-1">
    		<div class="no">
				<input type="number"  v-model="phone" placeholder="请输入手机号" class="vv"  reg="^(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$" regextext="手机号码不正确!"/>
				<img src="../../../build/jb_mobile.png" class="img1"/>
				<input type="text" placeholder="输入密码" v-model="pwd" class="vv3" regex="^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$" regextext="密码有误!"/>
				<input type="text" placeholder="确认密码" v-model="pwd2" class="vv4" regex="^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$" regextext="密码有误!"/>
				
				<input type="text"  v-model="yzm" placeholder="请输入验证码" class="vv2" regex="^[0-9]{6}$" regextext="手机验证码不正确!"/><button class="lk" @click="huoqu">获取验证码</button>
				<img src="../../../build/jb_code.png" class="img2"/>
				<button class="btn" @click="btnn">登录</button><br />
                <a class="nige" @click="dianji">点击注册</a> 
				
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

            
           
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import SIdentify from '../../components/ii/identify'
import axios from 'axios'
let url="http://127.0.0.1:81/getData"
export default {
  name: 'dll',
  data () {
    return {
      msg: 'dll',
      phone:'',
      yzm:'',
      sc:[],
      pwd:'',
      pwd2:'',
      haha:{}
    }
  },
 
  methods:{
  	 btnn(){
    	if(this.phone&&this.pwd){
        this.info=""
         axios.post('http://127.0.0.1:81/postLogin',{phone:this.phone,pwd:this.pwd}).then(data=>{
          console.log('data:',data)
          if(data.data.token){
            sessionStorage.token=data.data.token;
            sessionStorage.userId=data.data.id;
            sessionStorage.phone=this.phone;
            this.$router.push("/sc")
          }else{
            Toast({
              message: '登录失败',
              position: 'bottom',
              duration: 2000
            });
          }
        }).catch(err=>{
          console.log('err:',err)
        })
      }else{
        Toast({
          message: '手机号/密码不正确',
          position: 'bottom',
          duration: 2000
        });
      }
    },
    huoqu(){
    	let reg =/^((13[0-9])|(15[\d^4])|(18[1,0,2,3,5-9])|(17[0-8])|(147))\d{8}$/;
    	let regex="^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$"
    	if(!reg.test(this.phone)){
					alert('手机号不正确！')
				return
			}
			
    	if(this.pwd!==this.pwd2){
    		alert('请确认密码')
    		return
    	}
    	console.log( Math.floor(Math.random()*(9000-1000)+1000))
    },
    get(){
    	this.haha=this.$route.query.num;
    },
    dianji(){
    	this.$router.push("/zc")
    }
  },
  created(){
  	axios.get(url).then(res=>{
			this.sc=res.data.xuanran;
  	}),
  	this.get()
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
.nige{
	color: #70C62F;	
	font-size: 15px;
	margin: 10px 20px;
	display: inline-block;
}
.vv1{
		margin-left: 20px;
    width: 175px;
    height: 35px;
   	margin: 20px 20px 10px 20px;
    background-color: #f8f8f8;
    border: #e6e6e6 solid 1px;
		text-align: center;
		float: left;
}
.footer-store-theme{
	border: solid 1px red;
	position: fixed;
	bottom: 20px;
	left: 0;
}
.vv3,.vv4{
	 width: 240px;
    height: 35px;
    padding: 0 24px;
		background-color: #f8f8f8;
    border: #e6e6e6 solid 1px;
   	margin: 10px 20px 10px 20px;
		
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
.img2{
	position: absolute;
	top: 225px;
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
