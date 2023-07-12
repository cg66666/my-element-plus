import maxLengthContainer from '@/components/global/maxLengthContainer.vue';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    maxLengthContainer: typeof maxLengthContainer;
  }
}
