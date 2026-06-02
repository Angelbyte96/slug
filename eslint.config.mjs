import nextConfig from "eslint-config-next";

const [nextBase, nextTS, ...rest] = nextConfig;

export default [
  nextBase,
  {
    ...nextTS,
    languageOptions: {
      ...nextTS.languageOptions,
      parserOptions: {
        ...nextTS.languageOptions?.parserOptions,
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...nextTS.rules,
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksVoidReturn: { attributes: false },
        },
      ],
    },
  },
  ...rest,
];
