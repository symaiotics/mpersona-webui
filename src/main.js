import { createApp } from 'vue'
// import i18n from '@/composables/useI18n'; // If Local Lexicon

import App from './App.vue'
import router from './router'

import './css/main.css'
import 'aos/dist/aos.css';

// Create Vue app
const app = createApp(App)
app.use(router);
// app.use(i18n); //If local lexicon
app.mount('#app');

// Default title tag
const defaultDocumentTitle = 'mPersona'

// Set document title from route meta
router.afterEach((to) => {
  document.title = to.meta?.title
    ? `${to.meta.title} — ${defaultDocumentTitle}`
    : defaultDocumentTitle
})
