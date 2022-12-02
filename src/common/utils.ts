export const addTrailingSlash = (url: string) => {
    return url.replace(/\/?$/, "/");
};

export const getGitHubUrl = (slug: string): string =>
    `https://github.com/victory-sokolov/victory-sokolov/tree/master/posts/${slug}index.mdx`;

export const slugify = (title: string): string => {
    return title?.toLowerCase()?.replace(" ", "-");
};

export const toLongDate = (date: string): string => {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
};
