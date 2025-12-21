import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
   // Thêm TypeScript ESLint config riêng để override
  ...tseslint.configs.recommendedTypeChecked,
  {
    // Chỉ áp dụng cho TypeScript files
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // 🔧 CẤU HÌNH RULE CHO no-explicit-any Ở ĐÂY
      
      // Option 1: Tắt hoàn toàn (không khuyến khích)
       "@typescript-eslint/no-explicit-any": "off",
      
      // Option 2: Chỉ cảnh báo (recommended)
      "@typescript-eslint/no-explicit-any": "warn",
      
      // Option 3: Cấu hình chi tiết
      // "@typescript-eslint/no-explicit-any": [
      //   "warn",
      //   {
      //     fixToUnknown: true,    // Gợi ý dùng unknown thay any
      //     ignoreRestArgs: false, // Không cho phép ...args: any[]
      //   },
      // ],
      
      // Các rule khác bạn có thể muốn điều chỉnh
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],
      "@typescript-eslint/require-await": "warn",
      "@typescript-eslint/no-misused-promises": "warn",
      "@typescript-eslint/no-floating-promises": "warn",
      
      // Tắt rule strict (nếu quá khắt khe)
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
    },
  },
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  
]);

export default eslintConfig;
