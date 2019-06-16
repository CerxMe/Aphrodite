import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import 'vue-loaders/dist/vue-loaders.css'
import moment from 'moment' // Loads in moment js for date manipulation
import SuiVue from 'semantic-ui-vue'
// Normalize.css
require('normalize.css')
/* To help me with css - https://semantic-ui-vue.github.io/ */
Vue.use(SuiVue)
require('semantic-ui-css/semantic.css')

// Ionicons
require('vue-ionicons/ionicons.css')

Vue.config.productionTip = false

// Momentjs for Date manipulation
Object.defineProperty(Vue.prototype, '$moment', { value: moment })

// Makes components starting with *Base* available globally
const requireComponent = require.context(
  // The relative path of the components folder
  './components/base',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/ // For everything starting with Base<Something>
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Strip the leading `./` and extension from the filename
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})

// Initialize
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
