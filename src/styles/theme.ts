export const theme = {
    breakpoints: {
        mobile: "only screen and (max-width: 640px)",
        tablet: "only screen and (max-width: 768rpx)",
        laptop: "only screen and (max-width: 1024px)"
    }
};

export const darkTheme = {
    ...theme,
    background: "var(--background-color)",
    textColor: "var(--text-color)"
};
