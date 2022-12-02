const path = require("path");

module.exports = {
  title: "VERT | Design System",
  description: "",
  vite: {
    resolve: {
      alias: {
        "design-system": path.resolve(__dirname, "../../src"),
      },
      dedupe: ["vue", /mdi\/.+/],
    },
  },
};
