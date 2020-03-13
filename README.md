# vue-ts-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### demo目的
* 使用vue-cli 3.0
* 在 Vue 项目中使用 TypeScript 来搭建并开发项目
* 基于 Vue 全家桶 + TypeScript + Element-UI 的技术栈
* 撸别人源码

参照项目：https://segmentfault.com/a/1190000018720570

### 3.13 安装element-ui
安装
```
npm i element-ui -S
```
按需引入, 借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。
```
npm install babel-plugin-component -D
```
然后，将 babel.config.js 修改为：
```
module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};
```
接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：
```
import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```