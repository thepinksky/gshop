<template>
  <div>
   <h1>search params :{{$route.params.keyword}}</h1>
  </div>
</template>

<script>
export default {
name:'Search',
mounted(){
  console.log(this.$route);
}
}
</script>

<style>

</style>