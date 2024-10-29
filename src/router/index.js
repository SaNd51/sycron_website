import { createMemoryHistory, createRouter } from 'vue-router'

import home from '../views/Home.vue'

const routes = [
  { path: '/', component: home },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;