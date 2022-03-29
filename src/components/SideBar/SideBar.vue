<template>
  <ul>
    <logo/>

    <SideBarItem v-for="item in menu" :key="item.title" :item="item"/>
    <SideBarSeparator/>
    <SideBarItem v-for="item in menuSecond" :key="item.title" :item="item"/>
    <SideBarSeparator/>

    <span class="text">
      Войдите, чтобы получить доступ к челленджам, спонсорству и остальным функциям
    </span>

    <div class="sidebar-button">
      <outline-button title="Войти" @e-click="loginBtnClick"/>
    </div>

    <div class="subitem">
      <sidebar-sub-item title="Оставить отзыв" url="#"/>
    </div>
    <div class="subitem">
      <sidebar-sub-item title="Связаться с нами" url="#"/>
    </div>
    <div class="subitem">
      <sidebar-sub-item title="Конфиденциальность" url="#"/>
    </div>
    <div class="subitem">
      <sidebar-sub-item title="Условия пользования" url="#"/>
    </div>

  </ul>
</template>

<script lang="ts">
import {MenuItemI} from '@/components/SideBar/types/menu-item';
import SideBarItem from "@/components/SideBar/SideBarItem.vue";
import Logo from "@/components/SideBar/icons/logo.vue";
import SideBarSeparator from "@/components/SideBar/SideBarSeparator.vue";
import OutlineButton from "@/components/OutlineButton/OutlineButton.vue";
import SidebarSubItem from "@/components/SideBar/SidebarSubItem.vue";

export default {

  name: "SideBar",
  components: {SidebarSubItem, OutlineButton, SideBarSeparator, Logo, SideBarItem},
  setup: () => {
    const menu: MenuItemI[] | null = [
      {
        title: 'Главная',
        url: '/',
        icon: '',
      },
      {
        title: 'Стримы',
        url: '/popular',
        icon: '',
      },
      {
        title: 'Видео',
        url: '/subscribers',
        icon: '',
      },

    ];

    const menuSecond: MenuItemI[] | null = [
      {
        title: 'Информация',
        url: '/library',
        icon: '',
      },
      {
        title: 'Настройки',
        url: '/history',
        icon: '',
      },
      {
        title: 'Помощь',
        url: '/account/videos',
        icon: '',
      },
    ];

    const loginBtnClick = () => {
      alert('jshdfjkh')
    }

    return {menu, menuSecond, loginBtnClick};
  }
}
</script>

<style scoped lang="scss">

@use '../../styles/global' as v;

.text {
  @extend .header5 ;
  display: inline-block;
  margin: 10px 19px;
  opacity: 0.4;
  text-align: center;
}

.sidebar-button {
  padding: 10px 12px 17.5px 12px;
}

.subitem {
  padding: 7.5px 30px;
}

</style>
