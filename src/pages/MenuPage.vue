<template>
  <div>
    菜单页
    <Imenu class="el-menu-vertical-demo" :data="(menuData as menuDataType[])" />
  </div>
</template>

<script setup lang="ts">
import Imenu from '@/components/Imenu/index.vue';
import { menuDataType } from '@/components/Imenu/menuInner.vue';
import menuData from '@/assets/testMenuData.js';
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
}
</style>
