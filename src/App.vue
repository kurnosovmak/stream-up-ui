<template>
    <router-view />
</template>


<script setup lang="ts">
  import "@/styles/global.scss";
  import { useTitle } from '@/hooks/useTitle';


  useTitle();

</script>



<style lang="scss">
#app{
  width: 100%;
  height: 100%;
}
</style>
