<template>
  <div
    class="ISelectContainer"
    :style="{ width: `${props.width || 100}px`, height: `${props.height || 30}px` }"
  >
    <el-select
      :modelValue="props.modelValue"
      @update:modelValue="(val:string)=> emit('update:modelValue',val)"
      class="sel"
      placeholder="Select"
      :style="{ width: `${props.width || 100}px`, height: `${props.height || 30}px` }"
    >
      <el-option
        v-for="item in props.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">
export type data = {
  value: string;
  label: string;
  disabled?: boolean;
};
type IProps = {
  modelValue: string;
  options: data[];
  width?: number;
  height?: number;
};
const props = defineProps<IProps>();
const emit = defineEmits<{ 'update:modelValue': [date: string] }>();
</script>

<style lang="scss" scoped>
.ISelectContainer {
  .sel {
    position: absolute;
    clip: rect(2px 98px 30px 2px);
  }
}
</style>
