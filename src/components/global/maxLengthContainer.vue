<template>
  <span ref="spanDom" class="hide">
    {{ props.content }}
  </span>
  <el-tooltip :content="props.content" placement="bottom-end" :visible="visible">
    <div
      ref="divDom"
      :class="isMulti ? 'multilLine' : 'outLineContainer'"
      :style="{ width: props.maxWidth, ...props.innerStyle }"
      @mouseenter="hoverEvent"
      @mouseleave="hoverEvent"
    >
      {{ props.content }}
    </div>
  </el-tooltip>
</template>
<script setup lang="ts">
/**
 * 该组件，多行情况下，父组件为弹性盒子会失效，且多行情况下混合英文，可能会出现排版问题
 */
import { ref, watch, type CSSProperties, computed } from 'vue';
interface IProps {
  content: string;
  maxWidth: string;
  innerStyle: CSSProperties;
  maxLine?: number;
  showTips?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  maxLine: 1,
  showTips: true,
});
const visible = ref(false);
const spanDom = ref<HTMLElement>();
const divDom = ref<HTMLElement>();
const isMulti = computed(() => props.maxLine > 1);
const hoverEvent = () => {
  if (!props.showTips) return;
  if (
    spanDom.value &&
    divDom.value &&
    spanDom.value.offsetWidth > divDom.value.offsetWidth * props.maxLine
  ) {
    visible.value = !visible.value;
    return;
  }
  visible.value = false;
};
watch(props, () => {
  visible.value = false;
});
</script>
<style lang="scss" scoped>
.hide {
  position: absolute;
  left: -99999px;
  top: -99999px; /* 不占据空间，无法点击 */
}
.outLineContainer {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.multilLine {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: v-bind('props.maxLine');
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
