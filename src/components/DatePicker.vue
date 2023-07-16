<template>
  <el-date-picker v-model="date" type="dates" placeholder="Pick one or more dates" />
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useFormData } from '@/stores';
import useEventBus from '@/eventBus';
interface IProps {
  modelValue: any;
  aaa: string;
}
const Bus = useEventBus();
const formStore = useFormData();
const props = defineProps<IProps>();
const emit = defineEmits<{ 'update:modelValue': [date: string] }>();
const date = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val);
  },
});
onMounted(() => {
  console.log('获取form表单的当前属性', formStore.getFormVal());
  console.log('获取6字段的属性', formStore.getFormItemVal(6));
  formStore.setFormVal(6, 1000);
  Bus.$on('test01', () => {
    console.log('eventBus事件触发成功');
  });
});
</script>

<style lang="scss" scoped></style>
