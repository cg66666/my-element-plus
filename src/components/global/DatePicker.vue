<template>
  <el-date-picker v-model="date" type="dates" placeholder="Pick one or more dates" />
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
interface IProps {
  modelValue: any;
  aaa: string;
}
const props = defineProps<IProps>();
const emit = defineEmits<{ 'update:modelValue': [date: string] }>();
const date = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
  },
});
watch(
  props,
  (nv) => {
    console.log(333, nv);
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>

<style lang="scss" scoped></style>
