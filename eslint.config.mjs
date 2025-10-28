import antfu from "@antfu/eslint-config";

export default antfu({
    stylistic: {
        indent: 4,
        semi: true,
        quotes: "double",
        overrides: {
            "antfu/top-level-function": "off",
            "style/arrow-parens": "off",
            "style/comma-dangle": "off",
            "curly": "off",
            "style/brace-style": "off",
            "antfu/if-newline": "off",
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
});
