import { defineAsyncComponent } from 'vue';
const DatePicker = defineAsyncComponent(() => import('./DatePicker.vue'));
const UploadList = defineAsyncComponent(() => import('./UploadList.vue'));
const TestComponent = defineAsyncComponent(() => import('./TestComponent.vue'));
export default {
  DatePicker,
  UploadList,
  TestComponent,
};
