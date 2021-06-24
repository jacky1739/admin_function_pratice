import { createApp } from 'vue'
// import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// vee-validate
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'

// 匯入 vee-validate 相關規則
import { required, email, min } from '@vee-validate/rules'

// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n'

// 匯入繁體中文語系檔案
import App from './App.vue'
import router from './router'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// createApp(App).use(router).mount('#app')
const app = createApp(App)
// 註冊 vee-validate 三個全域元件
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

app.use(router)
app.use(VueAxios, axios)

app.mount('#app')

// 註冊 vee-validate 三個全域元件
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

// Activate the locale
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true // 調整為輸入字元立即進行驗證
})

// 設定預設語系
setLocale('zh_TW')
