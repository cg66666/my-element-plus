import { toRaw } from 'vue';
import { defineStore } from 'pinia';

export const useFormData = defineStore('form', () => {
  let initFormVal: Record<string, any>;
  let initFormValList: any[];
  // 每个表格只能执行一次
  const setFormData = (val: Record<string, any>, valList: any[]) => {
    if (Object.keys(initFormVal).length) return;
    initFormVal = val;
    initFormValList = valList;
  };
  // 清除内容
  const clear = () => {
    initFormVal = {};
    initFormValList = [];
  };
  // 获取form表单整体内容
  const getFormVal = () => {
    return toRaw(initFormVal);
  };
  // 根据key获取form表单内容
  const getFormItemVal = (key: string | number) => {
    console.log(111, toRaw(initFormValList));

    return toRaw(initFormValList).find((item) => item.key === key).val.value;
  };
  // 根据key改变form表单中对应内容
  const setFormVal = (key: string | number, val: any) => {
    initFormValList.find((item) => item.key === key).val = val;
  };
  return { setFormData, clear, getFormVal, getFormItemVal, setFormVal };
});
