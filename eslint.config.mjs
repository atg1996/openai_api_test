import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    files: ["**/*.js"], 
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      "prefer-const": "error",
      "indent": ["warn", 2],
      "space-before-blocks": ["warn", "always"],
      "space-infix-ops": "warn",
      "key-spacing": ["warn", { beforeColon: false, afterColon: true }],
      "object-curly-spacing": ["warn", "always"],
    },
  },
];
