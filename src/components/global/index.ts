import type { Component } from 'vue';
import MaxLengthContainer from './MaxLengthContainer.vue';
import UploadList from './UploadList.vue';
import DatePicker from './DatePicker.vue';

const components: {
  [propName: string]: Component;
} = {
  MaxLengthContainer,
  UploadList,
  DatePicker,
};
export default components;
