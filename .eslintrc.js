module.exports = {
  parser: "vue-eslint-parser",
  root: true,

  env: {
    es2020: true,
  },

  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "vue/no-multiple-template-root": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-v-for-template-key": "off",
    "vue/no-unused-component": "off",
    "vue/no-v-model-argument": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],
  },
};
