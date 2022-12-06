import DefaultTheme from "vitepress/theme";
import Container from "../components/Container.vue";
import NotificationCenter from "notification-center";

import "./custom.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(NotificationCenter, {
      baseUrl: "ws://localhost:8001/ws/subscribe/",
      appName: "ops",
      token: "",
    });
    app.component("Container", Container);
  },
};
