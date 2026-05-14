module.exports = {
  env: { browser: true, es2024: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "react-hooks"],
  rules: {
    // Exempelregler — ändra efter smak
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
  settings: {
    react: { version: "detect" }
  }
};
