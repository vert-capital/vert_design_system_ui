import { App, Plugin } from "vue";

import VTable from "./VTable.vue";

export default {
  install(Vue: App) {
    Vue.component(VTable.name, VTable);
  },
} as Plugin;

export { VTable };
