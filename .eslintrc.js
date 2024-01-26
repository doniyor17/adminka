const isProd = process.env.NODE_ENV === "production";

export default {
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  rules: {
    // override/add rules settings here, such as:
    "vue/require-default-prop": 0,
    "vue/no-v-html": 0,
    "vue/prop-name-casing": 0,
    "vue/html-indent": 0,
    "vue/html-self-closing": 0,
    "vue/require-prop-types": 0,
    camelcase: [
      "error",
      {
        allow: ["_request$"],
        ignoreDestructuring: true,
        ignoreImports: true,
        properties: "never",
      },
    ],
    "vue/camelcase": [
      "warn",
      { ignoreDestructuring: true, ignoreImports: true },
    ],
    "no-console": (isProd && "error") || "warn",
    "vue/no-mutating-props": [
      "error",
      {
        shallowOnly: false,
      },
    ],
    "vue/require-v-for-key": 2,
    "vue/valid-v-model": 0,
    "vue/multi-word-component-names": 0,
    "vue/v-on-event-hyphenation": 0,
    "no-debugger": (isProd && "error") || "warn",
    "no-unused-vars": ["error", { varsIgnorePattern: "_" }],
  },

  plugins: ["@typescript-eslint", "prettier"],

  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
    it: true,
    describe: true,
    cy: true,
    beforeEach: true,
    afterEach: true,
    Cypress: true,
  },
};
