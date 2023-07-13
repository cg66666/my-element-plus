<template>
  <el-menu v-if="!props.isChild" :default-active="defaultRoute" router>
    <MenuInner :data="props.data" />
  </el-menu>
  <MenuInner v-else :data="props.data" />
</template>
<script lang="ts">
export default { name: 'Imenu' };
</script>
<script setup lang="ts">
import { computed } from 'vue';
import MenuInner, { type menuDataType } from './MenuInner.vue';
interface IProps {
  isChild?: boolean;
  data: menuDataType[];
}
const props = defineProps<IProps>();
const defaultRoute = computed(() => props.data.find((item) => item.isDefault)?.router || '');
</script>
<style lang="scss" scoped></style>
