const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    require.resolve("@vercel/style-guide/eslint/next"),
    "eslint:recommended",
    "prettier",
    "eslint-config-turbo",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ["only-warn", "import"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [".*.js", "node_modules/"],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
      rules: {
        "import/no-duplicates": "error",
        "import/no-unused-modules": "error",
        "import/order": [
          "error",
          {
            alphabetize: {
              order: "asc",
              caseInsensitive: false,
            },
            "newlines-between": "always",
            groups: ["external", "builtin", "internal"],
            pathGroups: [
              {
                pattern: "{next,react,react-dom}",
                group: "external",
                position: "before",
              },
            ],
            pathGroupsExcludedImportTypes: [],
          },
        ],
      },
    },
  ],
};
