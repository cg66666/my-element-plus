<template>
  <div>
    <el-upload
      v-model:file-list="fileList"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <el-icon><Plus /></el-icon>
    </el-upload>
    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
    <el-button @click="Bus.$emit('test01')">触发下eventBus事件</el-button>
    <el-button @click="formStore.setFormVal(6, 10)">触发下formStore事件</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { Plus } from '@element-plus/icons-vue';
import type { UploadProps, UploadUserFile } from 'element-plus';
import useEventBus from '@/eventBus';
import { useFormData } from '@/stores';
interface IProps {
  modelValue: UploadUserFile[];
}
const formStore = useFormData();
const Bus = useEventBus();
const props = defineProps<IProps>();
const emits = defineEmits<{ 'update:modelValue': [fileList: UploadUserFile[]] }>();
const fileList = computed({
  get: () => props.modelValue,
  set: (val) => {
    emits('update:modelValue', val);
  },
});
const dialogImageUrl = ref('');
const dialogVisible = ref(false);

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!;
  dialogVisible.value = true;
};
</script>

<style></style>
@/utils/EventBus
