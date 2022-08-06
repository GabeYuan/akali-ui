import { createApp } from 'vue'
import App from './App.vue'

import './index.scss'
// import Button from './button'

// createApp(App).use(Button).mount('#app')

import JuiceUI from '../build/juice-ui.es.js'

createApp(App).use(JuiceUI).mount('#app')
