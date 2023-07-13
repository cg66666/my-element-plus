import MaxLengthContainer from '@/components/global/MaxLengthContainer.vue';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    MaxLengthContainer: typeof MaxLengthContainer;
  }
}
