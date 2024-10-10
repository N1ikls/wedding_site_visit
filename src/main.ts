import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueFire } from "vuefire";
import App from "./App.vue";
import router from "./router";
import { firebaseApp } from "./firebase";

const app = createApp(App);

app.use(createPinia());
app.use(router).use(VueFire, {
  firebaseApp,
});

app.mount("#app");
