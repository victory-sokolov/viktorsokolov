export default {
    compilers: {
        mdx: true,
    },
    ignore: [".lighthouserc.js"],
    // Dependencies to ignore (not reported as unused)
    ignoreDependencies: ["sharp"],
};
