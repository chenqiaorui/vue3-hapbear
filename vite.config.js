import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置完成后，antd组件和项目中src/components目录(可以通过dirs配置项修改目录)下的组件都可以直接使用，无需写import语句了
    AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
    Components({
			resolvers: [ElementPlusResolver()]
		})
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
