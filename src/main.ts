import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueFire } from "vuefire";
import App from "./App.vue";
import router from "./router";
import { firebaseApp } from "./firebase";
import { createYmaps } from "vue-yandex-maps";
const app = createApp(App);

app.use(createPinia());
app
  .use(router)
  .use(VueFire, {
    firebaseApp,
  })
  .use(
    createYmaps({
      apikey: "23323365-4ff9-4242-9f6f-3313554c730e",
    })
  );

app.mount("#app");
