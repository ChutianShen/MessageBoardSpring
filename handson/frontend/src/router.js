import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// ===================== Pages Components ======================
import Navbar from './components/Navbar'
import MainPanel from './components/Main-panel'
import Signup from './components/Signup'
import GoogleSso from './components/Google-sso'

// ==================== Router registration ====================
export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Hello },
    { path: '/signup', component: Signup },
    { path: '/token', component: GoogleSso }
  ]
})
