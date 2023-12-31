// @ts-nocheck
import {
  defineComponent,
  ref,
  watch,
  toRef,
  resolveComponent,
  h,
  onMounted,
  onUnmounted,
  onBeforeMount,
  onUpdated,
  defineAsyncComponent,
} from 'vue';
import { configProviderContextKey, type FormInstance, type FormRules } from 'element-plus';
import { useRouter } from 'vue-router';
import { useFormData } from '@/stores';
import * as pageConfigMap from '../config';
import s from './index.module.scss';
import components from '@/components/index';

const App = defineComponent({
  setup() {
    const { setFormData, clear } = useFormData();
    const router = useRouter();
    const pageTitle = ref<string>();
    const renderArray = ref<any[]>([]);
    const formValue = ref<Record<string, any>>({});
    const FormInstance = ref<FormInstance>();
    function getRenderArray(object: any): any[] {
      let result: any[] = [];
      if (typeof object !== 'object') return result;
      const keyArry = Object.keys(object);
      if (
        keyArry.some((item) => item === 'key') &&
        keyArry.some((item) => item === 'name') &&
        keyArry.some((item) => item === 'label')
      ) {
        const { name, defaultValue = '', rules = [], config = {}, label, key } = object;
        const temp = {
          componentName: name,
          props: config,
          rules,
          key,
          defaultValue,
          label,
          path: [],
        };
        result.push(temp);
      } else {
        keyArry.forEach((item) => {
          let temp: any[] = [];
          if (typeof object[item] === 'object') {
            const temp2 = getRenderArray(object[item]);
            if (temp2.length) {
              temp2.forEach((item2) => item2.path.unshift(item));
              temp = [...temp2];
            }
          }
          result = result.concat(temp);
        });
      }
      return result;
    }
    const getFormValue = (array: any) => {
      const innerFormValue: any = formValue.value;
      array.forEach((item1: any) => {
        const val = item1.defaultValue || '';
        let midVal1: any = innerFormValue;
        let midVal2: any = innerFormValue;
        const length = item1.path.length;
        for (let i = 0; i < length; i++) {
          const path = item1.path[i];
          const nextPath = item1.path[i + 1];
          if (i === length - 1) {
            let initVal;
            if ((i + 1) % 2 === 0) {
              initVal = midVal2;
            } else {
              initVal = midVal1;
            }
            initVal[path] = val;
            item1.val = toRef(initVal, path);
            return;
          }
          const initVal = isNaN(nextPath * 1) ? {} : [];
          if ((i + 1) % 2 === 0) {
            if (!midVal2[path]) {
              midVal2[path] = initVal;
            }
            midVal1 = midVal2[path];
          } else {
            if (!midVal1[path]) {
              midVal1[path] = initVal;
            }
            midVal2 = midVal1[path];
          }
        }
      });
      return innerFormValue;
    };
    watch(
      () => router.currentRoute.value,
      (nv) => {
        if (!nv.fullPath.includes('form')) return;
        const { id } = nv.query;
        clearForm();
        pageTitle.value = pageConfigMap[id].title;
        renderArray.value = getRenderArray(pageConfigMap[id].components);
        getFormValue(renderArray.value);
        setFormData(formValue.value, renderArray.value);
        console.log('加载完毕==>', formValue.value, renderArray.value);
      },
      { deep: true, immediate: true }
    );
    watch(
      formValue,
      (nv) => {
        console.log('更新数据', nv);
      },
      { immediate: true, deep: true }
    );
    const submitForm = () => {
      if (!FormInstance.value) return;
      FormInstance.value.validate((valid: any) => {
        if (valid) {
          console.log('submit!', formValue.value);
        } else {
          console.log('error submit!');
          return false;
        }
      });
    };
    const resetForm = () => {
      if (!FormInstance.value) return;
      FormInstance.value.resetFields();
    };
    function clearForm() {
      renderArray.value = [];
      formValue.value = {};
      clear();
    }
    onUnmounted(() => {
      console.log(555);

      clear();
    });
    return () => (
      <div>
        <el-form
          ref={FormInstance}
          model={formValue.value}
          status-icon
          label-width="120px"
          label-position="left"
        >
          <div className={s.pagetitle}>{pageTitle.value}</div>
          {renderArray.value.map((item) => (
            <div>
              <el-form-item
                key={item.key}
                label={item.label}
                prop={item.path}
                rules={item.rules}
                style={{ position: 'relative', left: '10px', width: '99%' }}
              >
                {() => {
                  // return h(resolveComponent(item.componentName), {
                  return h(
                    item.componentName.includes('el-')
                      ? resolveComponent(item.componentName)
                      : components[item.componentName],
                    {
                      modelValue: item.val,
                      ['onUpdate:modelValue']: (val: any) => {
                        item.val = val;
                      },
                      ...item.props,
                    }
                  );
                }}
              </el-form-item>
            </div>
          ))}
          <div className={s.buttonContainer}>
            <el-button type="primary" onclick={submitForm}>
              提交
            </el-button>
            <el-button type="primary" onclick={resetForm}>
              重置
            </el-button>
          </div>
        </el-form>
      </div>
    );
  },
});
export default App;
