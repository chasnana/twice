<template>
  <div class="swiper">
   <div class="red">
   	<mt-swipe :auto="4000">   		
  	<mt-swipe-item><img :src="my[0]" alt=""/></mt-swipe-item>
  	<mt-swipe-item><img :src="my[1]" alt=""/></mt-swipe-item>
  	<mt-swipe-item><img :src="my[2]" alt=""/></mt-swipe-item>
  	<mt-swipe-item><img :src="my[3]" alt=""/></mt-swipe-item>
  	<mt-swipe-item><img :src="my[4]" alt=""/></mt-swipe-item>
  	<mt-swipe-item><img :src="my[5]" alt=""/></mt-swipe-item>
  	<mt-swipe-item><img :src="my[6]" alt=""/></mt-swipe-item>
		</mt-swipe>
   </div>
  </div>
</template>

<script>

export default {
  name: 'swiper',
  data () {
    return {
      msg: 'swiper'
    }
  },
  props:["my"]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.swiper{
		width: 100%;
		margin: 10px 0;
		box-sizing: border-box;
	}
	.red{
		height: 180px;
		width: 100%;
		box-sizing: border-box;
	}
	.red img{	
		height: 180px;
		width: 100%;
	}
	
	
</style>
