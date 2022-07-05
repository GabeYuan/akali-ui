import DefaultTheme from 'vitepress/theme'
import './demo-block.scss'
import '../../../src/index.scss'

// import './custom.css'
import HelloWorld from '../../../src/components/HelloWorld.vue'
import Test from '../../../src/components/Test'
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import type { App } from 'vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App<never> }) {
    // register global components
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
    app.component('HelloWorld', HelloWorld)
    app.component('Test', Test)
  }
}
