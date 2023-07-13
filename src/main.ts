import 'normalize.css';
// element-plus 黑夜样式
import 'element-plus/theme-chalk/dark/css-vars.css';
import '@/assets/css/global.css';
// import 'default-passive-events'
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import globalComponent from '@/components/global/index';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(ElementPlus);
// 自动注册全局图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// 自动注册全局的组件
for (const componentItme in globalComponent) {
  app.component(componentItme, globalComponent[componentItme]);
}
app.use(createPinia());
app.use(router);

app.mount('#app');
