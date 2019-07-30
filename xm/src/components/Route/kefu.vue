<template>
  <div class="kefu">
	<div class="top">
		<p><span>&lt; <span>留言</span></span></p>
		<p>客服已经离线了, 有问题可以先给我们留言, 我们会在工作日内尽快给予您回复！</p>
		<textarea class="tt" placeholder="请留言"> 
			
		</textarea>
		<p>留下以下信息, 方便与您及时联系</p>
		<label>
		<input type="text" class="ipt"  value="姓名:"/>
			
		</label>
		<input type="text" class="ipt2" value="手机：" placeholder="(必填)"/>
		<button>提交留言</button>
	</div>
  </div>
</template>

<script>
export default {
  name: 'kefu',
  data () {
    return {
      msg: 'kefu'
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

input:placeholder{
	text-align: center;
	color: red;
}

</style>
