import Vue from 'vue'
import App from './App.vue'
import {
  createRouter
} from './router/router.js'

export function createApp() {

  const router = createRouter();
  
  // new Vue({
  //   el: '#app',
  //   render: h => h(App)
  // })

  const app = new Vue({
    router,
    render: h => h(App)
  });

  return { app, router };
}
