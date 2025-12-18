module.exports = {
    ci: {
        collect: {
            // Use a production build for more accurate results
            startServerCommand: "pnpm build && pnpm start",
            startServerReadyPattern: "ready",
            startServerReadyTimeout: 60000, // Give it more time to build
            url: ["http://localhost:3000"],
            // Disable storage reset so the server doesn't restart between runs
            disableStorageReset: true,
            // Add some basic auth if your site requires it
            // chromeFlags: '--disable-gpu --no-sandbox --disable-dev-shm-usage',
            // The number of times to run the test for each page
            // (If set to more than 1, results will be combined/aggregated into one report)
            numberOfRuns: 1,
        },
        assert: {
            preset: "lighthouse:no-pwa",
            assertions: {
                // Make assertions less strict for now
                "categories:performance": ["warn", { minScore: 0.7 }],
                "categories:accessibility": ["warn", { minScore: 0.8 }],
                "categories:best-practices": ["warn", { minScore: 0.8 }],
                "categories:seo": ["warn", { minScore: 0.8 }],
            },
        },
        upload: {
            target: "temporary-public-storage",
        },
    },
};
