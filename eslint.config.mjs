import antfu from "@antfu/eslint-config";

export default antfu(
    {
        prettier: true, // Use .prettierrc file
        stylistic: false, // Disable stylistic rules, let Prettier handle everything
        rules: {
            "no-console": ["warn", { allow: ["warn", "error", "info"] }],
        },
        typescript: {
            overrides: {
                "ts/ban-ts-comment": "off",
                "ts/prefer-ts-expect-error": "off",
                "ts/consistent-type-definitions": "off",
                "perfectionist/sort-imports": "off",
                "perfectionist/sort-named-imports": "off",
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
        rules: {
            "no-console": ["warn", { allow: ["warn", "error", "info"] }],
        },
        settings: {
            tailwindcss: {
                config: null, // Tailwind v4 uses CSS-based config
            },
        },
    },
);
