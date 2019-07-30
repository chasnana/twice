<template>
  <div class="mf">
	<slot></slot>
  </div>
</template>

<script>
export default {
  name: 'mf',
  data () {
    return {
      msg: 'mf'
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
