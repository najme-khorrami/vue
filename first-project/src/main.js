import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import CompOne from './components/CompOne.vue'
import CompTwo from './components/CompTwo.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/one', component: CompOne },
        { path: '/two', component: CompTwo },
    ]
});

const app = createApp(App)

app.use(router);
app.component('comp-one', CompOne);
app.component('comp-two', CompTwo);

app.mount('#app')