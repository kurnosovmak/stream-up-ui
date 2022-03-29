<template>
  <li>
    <router-link active-class="active" :to="props.item?.url" class="item">
      <div class="icon-div">
        <svg class="icon" width="16" height="16" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.115 13.7499H9.77505C9.36323 13.7566 8.96553 13.5999 8.66896 13.3141C8.37239 13.0283 8.20109 12.6367 8.19255 12.2249V9.6249C8.18415 9.47588 8.11713 9.33623 8.00611 9.23646C7.8951 9.13669 7.74912 9.0849 7.60005 9.0924H6.40005C6.25098 9.0849 6.105 9.13669 5.99398 9.23646C5.88297 9.33623 5.81595 9.47588 5.80755 9.6249V12.2249C5.79901 12.6371 5.62737 13.0291 5.33025 13.315C5.03314 13.6009 4.63479 13.7573 4.22255 13.7499H1.88505C1.47281 13.7573 1.07446 13.6009 0.777344 13.315C0.480228 13.0291 0.308587 12.6371 0.300049 12.2249V5.7674C0.300512 5.53769 0.353726 5.31116 0.455587 5.10527C0.557447 4.89938 0.705234 4.71964 0.887549 4.5799L6.03005 0.5799C6.31675 0.359336 6.66832 0.239746 7.03005 0.239746C7.39177 0.239746 7.74335 0.359336 8.03005 0.5799L13.12 4.5799C13.3008 4.71963 13.4472 4.8988 13.5482 5.10373C13.6491 5.30867 13.7019 5.53395 13.7025 5.7624V12.2249C13.694 12.6376 13.522 13.03 13.2244 13.3159C12.9267 13.6018 12.5277 13.7579 12.115 13.7499ZM6.40005 8.0999H7.60005C8.01229 8.09253 8.41064 8.24893 8.70775 8.53479C9.00487 8.82066 9.17651 9.21268 9.18505 9.6249V12.2249C9.19534 12.3721 9.26283 12.5095 9.37309 12.6076C9.48335 12.7057 9.62762 12.7568 9.77505 12.7499H12.115C12.2641 12.7574 12.4101 12.7056 12.5211 12.6058C12.6321 12.5061 12.6992 12.3664 12.7075 12.2174V5.7649C12.7071 5.68621 12.688 5.60875 12.652 5.53881C12.6159 5.46887 12.5639 5.40843 12.5 5.3624L7.41005 1.3624C7.29831 1.27843 7.16232 1.23302 7.02255 1.23302C6.88278 1.23302 6.74679 1.27843 6.63505 1.3624L1.50005 5.3649C1.43669 5.4112 1.38512 5.47176 1.34951 5.54168C1.31389 5.61161 1.29524 5.68893 1.29505 5.7674V12.2249C1.30534 12.3721 1.37283 12.5095 1.48309 12.6076C1.59335 12.7057 1.73762 12.7568 1.88505 12.7499H4.22255C4.37162 12.7574 4.5176 12.7056 4.62861 12.6058C4.73963 12.5061 4.80665 12.3664 4.81505 12.2174V9.6249C4.82359 9.21268 4.99523 8.82066 5.29234 8.53479C5.58946 8.24893 5.98781 8.09253 6.40005 8.0999Z" />
      </svg>
      </div>
      <span class="title">{{ props.item?.title }}</span>
    </router-link>
  </li>
</template>

<script setup lang="ts">
import {MenuItemI} from '@/components/SideBar/types/menu-item';

const props = defineProps({
  item: { type: Object as ()=>MenuItemI, required: true },
})
</script>

<style scoped lang="scss">
@use '../../styles/global' as v;
.item{
  display: flex;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px 10px 20px;
  opacity: 0.4;
  text-decoration: none;
  transition: opacity 0.25s linear;

}
.item:hover{
  @extend .active;

}
.icon-div{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 5px;
}
.icon{
  fill: v.$font-color-black;
}

.title{
  @extend .medium-text-regular;
  color: v.$font-color-black;
  flex: 1;
  text-align: center;
  transition: font-weight 0.1s linear;
}


.active {
  opacity:1;
  .title{
    color: v.$font-color-orange;
  }

  .icon-div{
    background-color: v.$font-color-orange;
    .icon{
      fill: v.$white;
    }
  }

}


</style>
