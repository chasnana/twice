<template>
  <div id="app">
  	<div class="box1">
  		<myhead></myhead>
  	</div>
  	<div>
  		<myfoot ></myfoot>
  	</div>
  </div>
</template>

<script>

import myhead from '@/components/Component/myhead'
import myfoot from '@/components/Component/myfoot'
export default {
  name: 'App',
  data(){
  	return{
  		show:false
  	}
  },
  components:{
  	myhead,
  	myfoot
  }
  
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
#app {
	width: 100%;
}

</style>
