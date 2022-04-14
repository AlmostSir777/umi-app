import { defineConfig } from 'umi';
import routes from './routes';
import defaultSettings from './defaultSettings';

export default defineConfig({
  // 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存。
  hash: true,
  history: {
    type: 'browser',
  },
  runtimePublicPath: true,
  // 开启使用antd
  antd: {},
  dva: {
    immer: true,
    hmr: true,
  },
  layout: {
    pure: true,
  },
  favicon: '/public/favicon.ico',
  ignoreMomentLocale: true,
  lessLoader: {
    javascriptEnabled: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/components/page_loading',
  },
  routes,
  fastRefresh: {},
  title: defaultSettings.title,
  theme: {
    '@primary-color': defaultSettings.primaryColor,
  },
  plugins: [],
  // mfsu: {
  //   development: {
  //     output: './.mfsu-dev'
  //   },
  //   production: {
  //     output: './.mfsu-prod'
  //   }
  // },
});
