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
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import MenuInner, { type menuDataType } from './MenuInner.vue';
interface IProps {
  isChild?: boolean;
  data: menuDataType[];
}
const router = useRouter();
const props = defineProps<IProps>();
const defaultRoute = ref('');
watch(
  () => router.currentRoute.value.fullPath,
  (nv) => {
    if (nv) {
      defaultRoute.value = nv as string;
    } else {
      defaultRoute.value = props.data.find((item) => item.isDefault)?.router || '';
    }
  },
  { immediate: true, deep: true }
);
// router.currentRoute.value.query
// watch
// const defaultRoute = computed(() => props.data.find((item) => item.isDefault)?.router || '');
</script>
<style lang="scss" scoped></style>
