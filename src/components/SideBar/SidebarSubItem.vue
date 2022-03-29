<template>
  <div class="sidebar-subitem">
    <router-link :to="props.url" style="text-decoration: none;">
      <span class="text">{{ props.title }}</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  title: {type: String, required: true},
  url: {type: String, required: true},
})


</script>

<style scoped lang="scss">

@use '../../styles/global' as v;

.sidebar-subitem {


  opacity: 0.4;
  background-color: transparent;
  transition: all 0.1s linear;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  text-align: center;
}

.sidebar-subitem:hover {
  opacity: 1;
  background-color: rgba(v.$background-color-black, 0.04);
}
.text{
  @extend .small-text-regular;
  color: v.$font-color-black;
  padding: 4px;
  display: block;
}
</style>
