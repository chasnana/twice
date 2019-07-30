<template>
  <div class="dh">
	<slot></slot>
  </div>
</template>

<script>
export default {
  name: 'dh',
  data () {
    return {
      msg: 'dh'
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
</style>
