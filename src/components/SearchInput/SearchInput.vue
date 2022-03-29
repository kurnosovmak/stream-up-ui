<template>
  <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      placeholder="Поиск"
      :prefix-icon="Search"
      @select="handleSelect"
  />
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue'
import { Search } from '@element-plus/icons-vue'

const state = ref('')

interface LinkItem {
  value: string
  link: string
}

const links = ref<LinkItem[]>([])

const loadAll = () => {
  return [
    {value: 'vue', link: 'https://github.com/vuejs/vue'},
    {value: 'element', link: 'https://github.com/ElemeFE/element'},
    {value: 'cooking', link: 'https://github.com/ElemeFE/cooking'},
    {value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui'},
    {value: 'vuex', link: 'https://github.com/vuejs/vuex'},
    {value: 'vue-router', link: 'https://github.com/vuejs/vue-router'},
    {value: 'babel', link: 'https://github.com/babel/babel'},
  ]
}

let timeout: NodeJS.Timeout
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
      ? links.value.filter(createFilter(queryString))
      : links.value

  setTimeout(()=> {
        cb(results)
      },3000
  )
}
const createFilter = (queryString: string) => {
  return (restaurant: LinkItem) => {
    return (
        restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}

const handleSelect = (item: LinkItem) => {
  console.log(item)
}

onMounted(() => {
  links.value = loadAll()
})
</script>

<style lang="scss" >

@use '../../styles/global' as v;

.el-input__inner:focus {
  outline: 0;
  box-shadow: 0 0 0 1px v.$font-color-black inset !important;
  color: v.$font-color-black !important;
}
.el-input__inner:focus::placeholder{
  color: v.$font-color-black !important;
}


.el-input__inner {
  border-radius: 20px !important;
}
.el-autocomplete{
  width: 100%;
}
</style>
