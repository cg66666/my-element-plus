import type { Component } from 'vue';
import maxLengthContainer from './maxLengthContainer.vue';

// ✨如果使用的是 JS 可以删除类型校验
const components: {
  [propName: string]: Component;
} = {
  maxLengthContainer,
};
export default components;
