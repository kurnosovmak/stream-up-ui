<template>
  <div>
    <h2>Главная</h2>
    <block  title="Рекомендация стримов" link="/popular">

      <stream-block  v-for="slide in 11" :key="slide" style="width:274px;margin-bottom: 20px"/>
    </block>

    <div style="display: flex;margin-top: 15px;">
      <block  style="flex: 1;" title="Сейчас стримят">


      </block>
      <block  style="flex: 1;" title="Популярные темы" >


      </block>
    </div>


  </div>
</template>


<script setup lang="ts">
import "@/styles/global.scss";

import Block from "@/components/Block/Block.vue";
import StreamBlock from "@/components/StreamBlock/StreamBlock.vue";



</script>


<style lang="scss" >

.flexbox::after {
  content: '';
  flex: auto;
}
</style>
<style lang="scss" scoped>
@use '../styles/global' as v;



h2{
  @extend .header1;
}

</style>
