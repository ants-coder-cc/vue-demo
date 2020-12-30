import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./route";
import _ from 'loadsh';
const app = createApp(App);
app.config.globalProperties._ = _;
app.use(router);
app.mount("#app");
