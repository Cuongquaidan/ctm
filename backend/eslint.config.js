// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import("eslint").FlatConfig.Config[]} */
export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: tseslint.parser,
      globals: {
        console: "readonly", // tránh lỗi "console is not defined"
      },
    },

    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      // ❌ Tắt các rule style
      semi: "off",
      quotes: "off",
      indent: "off",
      "comma-dangle": "off",
      "space-before-function-paren": "off",
      "@typescript-eslint/indent": "off",

      "@typescript-eslint/explicit-module-boundary-types": "off",

      "@typescript-eslint/no-explicit-any": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "no-unreachable": "error",
      "no-console": "off",
    },
  },
  {
    ignores: [
      "node_modules/",
      "build/",
    ],
  },
];