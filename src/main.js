import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createPinia } from 'pinia';

import 'element-plus/dist/index.css';
import { usePermissStore } from './store/permiss';
import './assets/css/icon.css';

import {
    ElButton,
    ElContainer,
    ElAside,
    ElMenu,
    ElSubMenu,
    ElMenuItemGroup,
    ElMenuItem,
    ElForm,
    ElFormItem,
    ElInput,
    ElCheckbox,
    ElPopover,
    ElTag,
    ElCard,
    ElTable,
    ElTableColumn,
    ElPopconfirm,
    ElUpload,
    ElDialog,
    ElPagination,
    ElCascader,
    ElRadioGroup,
    ElRadio,
    ElSelect,
    ElOption,
    ElDropdownMenu,
    ElDropdownItem,
    ElIcon,
    ElTooltip,
    ElDropdown,
    ElAvatar,
  } from 'element-plus'

const app = createApp(App) // 生成 Vue 实例 app
app.use(router) // 引用路由实例

app.use(createPinia());

// 注册elementplus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 自定义权限指令
const permiss = usePermissStore();
app.directive('permiss', {
    mounted(el, binding) {
        if (!permiss.key.includes(String(binding.value))) {
            el['hidden'] = true;
        }
    },
});

app.use(ElButton)
  .use(ElContainer)
  .use(ElAside)
  .use(ElMenu)
  .use(ElSubMenu)
  .use(ElMenuItemGroup)
  .use(ElMenuItem)
  .use(ElForm)
  .use(ElFormItem)
  .use(ElCheckbox)
  .use(ElInput)
  .use(ElPopover)
  .use(ElTag)
  .use(ElCard)
  .use(ElTable)
  .use(ElTableColumn)
  .use(ElPopconfirm)
  .use(ElUpload)
  .use(ElDialog)
  .use(ElPagination)
  .use(ElCascader)
  .use(ElRadioGroup)
  .use(ElRadio)
  .use(ElSelect)
  .use(ElOption)
  .use(ElDropdownMenu)
  .use(ElDropdownItem)
  .use(ElIcon)
  .use(ElTooltip)
  .use(ElDropdown)
  .use(ElAvatar)
  
app.mount('#app') // 挂载到 #app
