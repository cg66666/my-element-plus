<template>
  <template v-for="item in props.data" :key="item.key">
    <el-sub-menu v-if="item.children" :index="item.router || ''">
      <template #title>
        <el-icon v-if="item.icon"><component :is="item.icon" /></el-icon>{{ item.name }}</template
      >
      <Imenu :is-child="true" :data="item.children" />
    </el-sub-menu>
    <el-menu-item v-else :index="item.router || ''">
      <el-icon v-if="item.icon"><component :is="item.icon" /></el-icon>
      <template #title>{{ item.name }}</template>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
import Imenu from './index.vue';
export interface menuDataType {
  name: string;
  router?: string;
  key: string;
  icon?: string;
  isDefault?: boolean;
  children?: menuDataType[];
}
interface IProps {
  data: menuDataType[];
}
const props = defineProps<IProps>();

// const defaultRoute = computed(() => props.data.find((item) => item.isDefault)?.router || '');
// watch(
//   props,
//   (nv) => {
//     console.log(nv);
//   },
//   { immediate: true }
// );
</script>

<style></style>
