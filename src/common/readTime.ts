export const calculateReadTime = (text: string) => {
    const WPM = 250;
    const textLength = text.trim().split(/\s+/).length;
    const readTime = Math.ceil(textLength / WPM).toString();
    return `${readTime} min read`;
};
