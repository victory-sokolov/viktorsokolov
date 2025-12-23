export default {
    compilers: {
        mdx: true,
    },
    ignore: [".lighthouserc.js", "**/*.mdx"],
    // Dependencies to ignore (not reported as unused)
    ignoreDependencies: ["sharp"],
};
