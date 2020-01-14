import Vue from 'vue'
import App from './App'
import store from '../store'
import {
  MdButton,
  MdCard,
  MdCheckbox,
  MdIcon,
  MdTable,
  MdSnackbar,
  MdContent,
  MdDialog,
  MdToolbar, MdField, MdDivider
} from 'vue-material/dist/components'

Vue.use(MdButton)
Vue.use(MdCard)
Vue.use(MdCheckbox)
Vue.use(MdIcon)
Vue.use(MdToolbar)
Vue.use(MdTable)
Vue.use(MdSnackbar)
Vue.use(MdContent)
Vue.use(MdDialog)
Vue.use(MdField)
Vue.use(MdDivider)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,

  render: h => h(App)
})
