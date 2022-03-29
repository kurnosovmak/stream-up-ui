<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="menu" width="200px">
        <SideBar/>
      </el-aside>
      <el-container>
        <el-header class="menu" height="55px">
          <header-bar/>
        </el-header>
        <el-main class="content">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>


<script setup lang="ts">
import {useUserStore} from '@/stores/modules/user';
import SideBar from "@/components/SideBar/SideBar.vue";
import HeaderBar from "@/components/HeaderBar/HeaderBar.vue";

const userStore = useUserStore();
const isAuth = userStore.isAuth;
</script>


<style lang="scss" scoped>
@use "../styles/variables" as v;

.st2 {
  fill: #282828
}

.common-layout {
  width: 100%;
  min-height: 100%;
}

.el-container {
  width: 100%;
  height: 100vh;
}

.side-bar {
  height: 100%;
}

.menu {
  background-color: v.$white;
}

.content {
  background-color: v.$background-color-white-grey;
  -moz-border-radius-topleft: 16px;
  border-top-left-radius: 16px;

}
</style>
