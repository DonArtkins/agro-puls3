import { createApp } from "vue";
// import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";

/** style.css */
import "./assets/tailwind.css"; //tailwind

// // setup fake backend
// import { fakeBackend } from "./helpers";
// fakeBackend();

const app = createApp(App);
// const pinia = createPinia();

// app.use(pinia);
app.use(router);
app.mount("#app");

// Add fonts to head
const link = document.createElement('link')
link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&display=swap'
link.rel = 'stylesheet'
document.head.appendChild(link)
