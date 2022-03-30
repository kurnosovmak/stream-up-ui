<template>
  <div class="header-bar">
    <div class="header-bar__left">
      <search-input/>
    </div>
    <div class="header-bar__right">
      <header-bar-right/>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchInput from "@/components/SearchInput/SearchInput.vue";
import HeaderBarRight from "@/components/HeaderBar/HeaderBarRight.vue";



</script>

<style scoped lang="scss">

.header-bar{
  display: flex;
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  .header-bar__left{

    max-width: 424px;
    width: 100%;
  }

  .header-bar__right{
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
}


</style>
