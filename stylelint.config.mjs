/** @type {import('stylelint').Config} */
export default {
    extends: ["stylelint-config-standard", "@dreamsicle.io/stylelint-config-tailwindcss"],
    rules: {
        "no-unknown-custom-properties": true,
        "value-keyword-case": ["lower", { camelCaseSvgKeywords: true }],
    },
};
