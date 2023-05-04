module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "jest"],
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "linebreak-style": "off",
    "react/react-in-jsx-scope": 0,
    "react/jsx-no-useless-fragment": 0,
    "react/require-default-props": 0,
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "@typescript-eslint/naming-convention": 0,
    "react/jsx-props-no-spreading": 0,
    "import/no-cycle": 0,
    "no-unused-vars": "warn",
    "@typescript-eslint/no-non-null-assertion": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },

  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};
