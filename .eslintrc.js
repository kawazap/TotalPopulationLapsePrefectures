module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["@nuxtjs", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    quotes: ["warn", "double"],
  },
}
