<template>
  <div class="appContainer">
    <div class="menuContainer">
      <div class="menuHead theme_MenuHeader">
        <el-switch
          class="switch"
          v-model="mode"
          @change="toggleDark()"
          inline-prompt
          active-icon="Sunny"
          inactive-icon="Moon"
        />
        <MaxLengthContainer
          :innerStyle="{
            position: 'absolute',
            top: '25px',
            right: '65px',
            cursor: 'pointer',
          }"
          max-width="100px"
          content="测试账号01"
        />
        <!-- :max-line="2" -->
        <el-avatar
          :size="40"
          class="avatar"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
      <Imenu class="el-menu-vertical-demo" :data="(menuData as menuDataType[])" />
    </div>
    <div class="routeContainer">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
// import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';
import Imenu from '@/components/Imenu/index.vue';
import { menuDataType } from '@/components/Imenu/MenuInner.vue';
import menuData from '@/assets/CurrentMenuData.js';
const mode = ref(true);
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="scss" scoped>
.appContainer {
  height: 100%;
  width: 100%;
  position: relative;
  .routeContainer {
    position: absolute;
    left: 200px;
    top: 71px;
    width: calc(100% - 200px);
    height: calc(100% - 70px);
    overflow: scroll;
  }
  .menuContainer {
    height: 100%;
    position: relative;
    .menuHead {
      width: 100%;
      height: 70px;
      border-bottom: 1px solid;
      .switch {
        right: 230px;
        position: absolute;
        top: 19px;
      }
      .avatar {
        position: absolute;
        top: 12px;
        right: 20px;
      }
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 100%;
    }
  }
}
</style>
