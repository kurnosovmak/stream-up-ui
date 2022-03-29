<template>
  <button class="button" @click="onClick" >{{props.title}}</button>
</template>

<script setup lang="ts">


const props = defineProps({
  title: {type: String, required: true},
})

const emit = defineEmits<{
  (e: 'e-click'): void
}>()

function onClick(){
  emit('e-click')
}


</script>

<style scoped lang="scss">
@use '../../styles/global' as v;
.button{
  @extend .normal-text-regular;
  color: v.$font-color-orange;
  border-radius: 20px;
  padding: 7px 17px;
  border: 1px v.$font-color-orange solid;
  cursor: pointer;
  outline: 0;
  background-color: transparent;
  transition: all 0.1s linear;
  width: 100%;
  height: 100%;

}
.button:hover{
  color: #F79511;
  border-color: v.$font-color-orange;
  background-color: rgba(v.$font-color-orange,0.1);
}
</style>
