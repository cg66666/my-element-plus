import MaxLengthContainer from '@/components/global/MaxLengthContainer.vue';
import ISelect from '@/components/global/ISelect.vue';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    MaxLengthContainer: typeof MaxLengthContainer;
    ISelect: typeof ISelect;
  }
}
