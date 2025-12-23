import antfu from "@antfu/eslint-config";
import tailwind from "eslint-plugin-tailwindcss";

export default antfu(
    {
        stylistic: {
            indent: 4,
            semi: true,
            quotes: "double",
            overrides: {
                "antfu/top-level-function": "off",
                "style/arrow-parens": "off",
                "style/comma-dangle": "off",
                curly: "off",
                "style/brace-style": "off",
                "antfu/if-newline": "off",
                "no-console": ["warn", { allow: ["warn", "error", "info", "debug"] }],
            },
        },
        typescript: {
            overrides: {
                "ts/ban-ts-comment": "off",
                "ts/prefer-ts-expect-error": "off",
                "ts/consistent-type-definitions": "off",
            },
        },
        yaml: {
            overrides: {
                "yaml/indent": "off",
            },
        },
        extends: [
            "next/core-web-vitals",
            "next",
            "plugin:@typescript-eslint/recommended",
            "plugin:jsx-a11y/recommended",
            "plugin:react-hooks/recommended",
        ],
    },
    {
        files: ["**/*.{js,ts,jsx,tsx}"],
        plugins: {
            tailwindcss: tailwind,
        },
        rules: {
            "tailwindcss/classnames-order": "warn",
            "tailwindcss/enforces-negative-arbitrary-values": "warn",
            "tailwindcss/enforces-shorthand": "warn",
            "tailwindcss/migration-from-tailwind-2": "error",
            "tailwindcss/no-arbitrary-value": "off",
            "tailwindcss/no-contradicting-classname": "error",
            "tailwindcss/no-custom-classname": "off",
            "tailwindcss/no-unnecessary-arbitrary-value": "off",
        },
        settings: {
            tailwindcss: {
                config: null, // Tailwind v4 uses CSS-based config
            },
        },
    },
);
