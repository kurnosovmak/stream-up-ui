<template>
  <div class="block" :style="'margin-top:'+props.marginTop+';margin-bottom:'+props.marginBottom+';'">
    <div class="block__title-block">
      <span class="block__title-block__title">{{props.title}}</span>
      <router-link v-if="props.link != null" :to="props.link">
        <span class="block__title-block__link">
          <span>
            Смотреть все
          </span>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_4499_11178)">
            <path d="M2.82338 8.83441C2.82292 8.73769 2.85922 8.64442 2.92495 8.57347L6.2687 4.97972L2.92651 1.42659C2.85689 1.35242 2.81959 1.25362 2.82281 1.15194C2.82603 1.05026 2.86952 0.954026 2.9437 0.884407C3.01787 0.814788 3.11667 0.777487 3.21835 0.78071C3.32003 0.783933 3.41626 0.827417 3.48588 0.901595L7.07963 4.72191C7.1462 4.79311 7.18323 4.88694 7.18323 4.98441C7.18323 5.08188 7.1462 5.17571 7.07963 5.24691L3.48588 9.09691C3.43314 9.15285 3.36483 9.1917 3.28978 9.20842C3.21474 9.22514 3.1364 9.21897 3.06489 9.1907C2.99339 9.16244 2.932 9.11338 2.88867 9.04986C2.84534 8.98635 2.82205 8.91129 2.82182 8.83441L2.82338 8.83441Z" fill="#F79511"/>
            </g>
            <defs>
            <clipPath id="clip0_4499_11178">
            <rect width="10" height="10" fill="white" transform="translate(10) rotate(90)"/>
            </clipPath>
            </defs>
          </svg>
        </span>
      </router-link>
    </div>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">


const props = defineProps({
  title:{
    type: String,
    required:true
  },
  marginTop:{
    type:String,
    default:'25px'
  },
  marginBottom:{
    type:String,
    default:'25px'
  },
  link:{
    type: String,
    default:null
  }

});


</script>

<style scoped lang="scss">

@use '../../styles/global' as v;

.block{
  width: 100%;
  height: 100%;
}

.block__title-block{

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;

  .block__title-block__title{
    @extend .header2;
    color: v.$font-color-black;
    opacity: 0.75;
  }

  .block__title-block__link{
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    span{
      @extend .medium-text-semibold;
      color: v.$font-color-orange;
    }
    :first-child{
      margin-right: 2px;
    }

  }
}


</style>
